import csv
import json
import os
from statistics import mean

JTL_DIR = "jtl"
REPORT_DIR = "reports"
SUMMARY_FILE = os.path.join(REPORT_DIR, "summary.json")
COMPARE_FILE = os.path.join(REPORT_DIR, "compare.html")


def parse_jtl(jtl_path):
    elapsed = []
    errors = 0

    with open(jtl_path, newline="", encoding="utf-8") as f:
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


def generate_compare_html(prev, latest):
    def row(label, a, b, better_low=True):
        delta = round((b - a) * 100 / a, 2)
        good = delta <= 0 if better_low else delta >= 0
        color = "#2ecc71" if good else "#e74c3c"
        sign = "▲" if delta > 0 else "▼"
        return f"""
        <tr>
          <td>{label}</td>
          <td>{a}</td>
          <td>{b}</td>
          <td style="color:{color}">{sign} {delta}%</td>
        </tr>
        """

    html = f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Compare latest 2 reports</title>
  <style>
    body {{ font-family: Arial; padding: 20px; }}
    table {{ border-collapse: collapse; min-width: 600px; }}
    th, td {{ border: 1px solid #ccc; padding: 8px; text-align: center; }}
    th {{ background: #f4f4f4; }}
  </style>
</head>
<body>

<h2>Compare latest 2 reports</h2>
<p><b>Previous:</b> {prev["run"]}</p>
<p><b>Latest:</b> {latest["run"]}</p>

<table>
<tr>
  <th>Metric</th>
  <th>Previous</th>
  <th>Latest</th>
  <th>Δ</th>
</tr>
{row("Avg (ms)", prev["avg"], latest["avg"])}
{row("P90 (ms)", prev["p90"], latest["p90"])}
{row("P95 (ms)", prev["p95"], latest["p95"])}
{row("Error (%)", prev["errorRate"], latest["errorRate"])}
</table>

</body>
</html>
"""

    with open(COMPARE_FILE, "w", encoding="utf-8") as f:
        f.write(html)


def main():
    os.makedirs(REPORT_DIR, exist_ok=True)

    summary = []

    for file in sorted(os.listdir(JTL_DIR)):
        if not file.endswith(".jtl"):
            continue

        run = file.replace(".jtl", "")
        metrics = parse_jtl(os.path.join(JTL_DIR, file))

        summary.append({
            "run": run,
            **metrics
        })

    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)

    if len(summary) >= 2:
        generate_compare_html(summary[-2], summary[-1])


if __name__ == "__main__":
    main()
