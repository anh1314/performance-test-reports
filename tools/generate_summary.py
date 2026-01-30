import csv
import json
import os
from statistics import mean
from math import floor
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
JTL_DIR = os.path.join(BASE_DIR, "jtl")
REPORT_DIR = os.path.join(BASE_DIR, "reports")

SUMMARY_FILE = os.path.join(REPORT_DIR, "summary.json")
COMPARE_FILE = os.path.join(REPORT_DIR, "compare.html")


def percentile(sorted_values, p):
    """
    Nearest-rank percentile with linear interpolation
    p: float between 0 and 1 (e.g. 0.95)
    """
    n = len(sorted_values)
    if n == 0:
        return 0

    rank = p * (n + 1)

    if rank <= 1:
        return sorted_values[0]
    if rank >= n:
        return sorted_values[-1]

    lower_index = floor(rank) - 1
    upper_index = lower_index + 1
    fraction = rank - floor(rank)

    lower_value = sorted_values[lower_index]
    upper_value = sorted_values[upper_index]

    return round(lower_value + (upper_value - lower_value) * fraction, 2)


def parse_jtl(path):
    elapsed = []
    errors = 0

    with open(path, encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            elapsed.append(int(row["elapsed"]))
            if row["success"].lower() != "true":
                errors += 1

    elapsed.sort()
    total = len(elapsed)

    return {
        "samples": total,
        "avg": round(mean(elapsed), 2),
        "p90": percentile(elapsed, 0.90),
        "p95": percentile(elapsed, 0.95),
        "p99": percentile(elapsed, 0.99),
        "errorRate": round(errors * 100 / total, 2),
    }


def load_summary():
    if not os.path.exists(SUMMARY_FILE):
        return []
    with open(SUMMARY_FILE, encoding="utf-8") as f:
        return json.load(f)


def save_summary(data):
    os.makedirs(REPORT_DIR, exist_ok=True)
    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)


def generate_compare_html(prev, curr):
    def row(label, a, b):
        delta = round((b - a) * 100 / a, 2) if a else 0
        sign = "⬆️" if delta > 0 else "⬇️"
        return f"<tr><td>{label}</td><td>{a}</td><td>{b}</td><td>{sign} {delta}%</td></tr>"

    html = f"""
<html>
<head>
<title>Compare latest 2 reports</title>
<style>
body {{ font-family: Arial }}
table {{ border-collapse: collapse }}
td, th {{ border: 1px solid #ccc; padding: 8px }}
</style>
</head>
<body>
<h2>{prev['run']} → {curr['run']}</h2>
<table>
<tr><th>Metric</th><th>Baseline</th><th>Current</th><th>Δ</th></tr>
{row("Avg (ms)", prev["avg"], curr["avg"])}
{row("P90 (ms)", prev["p90"], curr["p90"])}
{row("P95 (ms)", prev["p95"], curr["p95"])}
{row("P99 (ms)", prev["p99"], curr["p99"])}
{row("Error (%)", prev["errorRate"], curr["errorRate"])}
</table>
</body>
</html>
"""
    with open(COMPARE_FILE, "w", encoding="utf-8") as f:
        f.write(html)


def main():
    summary = load_summary()
    existed = {s["run"] for s in summary}

    for file in sorted(os.listdir(JTL_DIR)):
        if not file.endswith(".jtl"):
            continue

        run = file.replace(".jtl", "")
        if run in existed:
            continue

        metrics = parse_jtl(os.path.join(JTL_DIR, file))

        summary.append({
            "run": run,
            "date": run.split("_")[-1],
            **metrics
        })

    summary.sort(key=lambda x: x["date"])
    save_summary(summary)

    if len(summary) >= 2:
        generate_compare_html(summary[-2], summary[-1])


if __name__ == "__main__":
    main()
