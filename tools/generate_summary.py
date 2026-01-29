import csv
import json
import os
from statistics import mean
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
JTL_DIR = os.path.join(BASE_DIR, "jtl")
REPORT_DIR = os.path.join(BASE_DIR, "reports")

SUMMARY_FILE = os.path.join(REPORT_DIR, "summary.json")
COMPARE_FILE = os.path.join(REPORT_DIR, "compare.html")


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

    def pct(p):
        return elapsed[int(total * p)]

    return {
        "samples": total,
        "avg": round(mean(elapsed), 2),
        "p90": pct(0.9),
        "p95": pct(0.95),
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
<tr><th>Metric</th><th>Previous</th><th>Latest</th><th>Δ</th></tr>
{row("Avg (ms)", prev["avg"], curr["avg"])}
{row("P90 (ms)", prev["p90"], curr["p90"])}
{row("P95 (ms)", prev["p95"], curr["p95"])}
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
