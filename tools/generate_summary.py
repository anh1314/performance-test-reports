import csv
import json
import os
from datetime import datetime
from statistics import mean

JTL_DIR = "jtl"
REPORT_DIR = "reports"
SUMMARY_FILE = os.path.join(REPORT_DIR, "summary.json")
COMPARE_FILE = os.path.join(REPORT_DIR, "compare.html")


def parse_jtl(jtl_path):
    elapsed = []
    errors = 0
    timestamps = []

    with open(jtl_path, newline='', encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            elapsed.append(int(row["elapsed"]))
            timestamps.append(int(row["timeStamp"]))
            if row["success"].lower() != "true":
                errors += 1

    elapsed.sort()
    total = len(elapsed)

    def percentile(p):
        k = int(total * p)
        return elapsed[min(k, total - 1)]

    return {
        "samples": total,
        "avg": round(mean(elapsed), 2),
        "p90": percentile(0.90),
        "p95": percentile(0.95),
        "errorRate": round(errors * 100 / total, 2),
        "startTime": min(timestamps),
        "endTime": max(timestamps),
    }


def load_summary():
    if os.path.exists(SUMMARY_FILE):
        with open(SUMMARY_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


def save_summary(data):
    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)


def generate_compare_html(a, b):
    def row(label, v1, v2):
        delta = round((v2 - v1) * 100 / v1, 2) if v1 != 0 else 0
        arrow = "⬆️" if delta > 0 else "⬇️"
        return f"<tr><td>{label}</td><td>{v1}</td><td>{v2}</td><td>{arrow} {delta}%</td></tr>"

    html = f"""
<html>
<head>
  <title>Compare Report</title>
  <style>
    body {{ font-family: Arial; }}
    table {{ border-collapse: collapse; }}
    td, th {{ border: 1px solid #ccc; padding: 8px; }}
  </style>
</head>
<body>
<h2>Compare: {a['run']} vs {b['run']}</h2>
<table>
<tr><th>Metric</th><th>Previous</th><th>Latest</th><th>Δ</th></tr>
{row("Avg (ms)", a["avg"], b["avg"])}
{row("P90 (ms)", a["p90"], b["p90"])}
{row("P95 (ms)", a["p95"], b["p95"])}
{row("Error (%)", a["errorRate"], b["errorRate"])}
</table>
</body>
</html>
"""
    with open(COMPARE_FILE, "w", encoding="utf-8") as f:
        f.write(html)


def main():
    summary = load_summary()

    for file in os.listdir(JTL_DIR):
        if not file.endswith(".jtl"):
            continue

        run_name = file.replace(".jtl", "")
        if any(r["run"] == run_name for r in summary):
            continue  # đã xử lý rồi

        metrics = parse_jtl(os.path.join(JTL_DIR, file))
        date_str = run_name.split("_")[-1]

        summary.append({
            "run": run_name,
            "date": date_str,
            **metrics
        })

    summary.sort(key=lambda x: x["date"])
    save_summary(summary)

    if len(summary) >= 2:
        generate_compare_html(summary[-2], summary[-1])


if __name__ == "__main__":
    main()
