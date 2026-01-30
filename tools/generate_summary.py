import csv
import json
import os
from statistics import mean
from math import ceil

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
JTL_DIR = os.path.join(BASE_DIR, "jtl")
REPORT_DIR = os.path.join(BASE_DIR, "reports")

SUMMARY_FILE = os.path.join(REPORT_DIR, "summary.json")
COMPARE_FILE = os.path.join(REPORT_DIR, "compare.html")


def jmeter_percentile(sorted_values, p):
    if not sorted_values:
        return 0

    n = len(sorted_values)
    rank = p * (n + 1)
    index = int(ceil(rank)) - 1

    if index < 0:
        return sorted_values[0]
    if index >= n:
        return sorted_values[-1]

    return sorted_values[index]


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
        "p90": jmeter_percentile(elapsed, 0.90),
        "p95": jmeter_percentile(elapsed, 0.95),
        "p99": jmeter_percentile(elapsed, 0.99),
        "errorRate": round(errors * 100 / total, 2),
    }


def generate_compare_html(prev, curr):
    def row(label, a, b):
        delta = round((b - a) * 100 / a, 2) if a else 0
        sign = "⬆️" if delta > 0 else "⬇️"
        return f"<tr><td>{label}</td><td>{a}</td><td>{b}</td><td>{sign} {delta}%</td></tr>"

    html = f"""
<html>
<head>
<title>Compare reports</title>
<style>
body {{ font-family: Arial }}
table {{ border-collapse: collapse }}
td, th {{ border: 1px solid #ccc; padding: 8px }}
</style>
</head>
<body>
<h2>{prev['run']} → {curr['run']}</h2>
<table>
<tr><th>Metric</th><th>Previous</th><th>Latest</th><th>Δ</th></tr>
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
    summary = []

    for file in sorted(os.listdir(JTL_DIR)):
        if not file.endswith(".jtl"):
            continue

        run = file.replace(".jtl", "")
        metrics = parse_jtl(os.path.join(JTL_DIR, file))

        summary.append({
            "run": run,
            "date": run.split("_")[-1],
            **metrics
        })

    summary.sort(key=lambda x: x["date"])

    os.makedirs(REPORT_DIR, exist_ok=True)
    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)

    if len(summary) >= 2:
        generate_compare_html(summary[-2], summary[-1])


if __name__ == "__main__":
    main()
