import json
import os
from datetime import datetime

REPORT_DIR = "reports"
COMPARE_FILE = os.path.join(REPORT_DIR, "compare.html")


def load_statistics(report_path):
    stat_file = os.path.join(report_path, "statistics.json")
    with open(stat_file, encoding="utf-8") as f:
        data = json.load(f)
    return data["Total"]


def find_latest_reports():
    reports = []

    for name in os.listdir(REPORT_DIR):
        path = os.path.join(REPORT_DIR, name)
        if not os.path.isdir(path):
            continue
        if not os.path.exists(os.path.join(path, "statistics.json")):
            continue

        reports.append(name)

    # sort theo date cuối tên folder
    reports.sort(key=lambda x: x.split("_")[-1])
    return reports[-2:]


def row(label, old, new):
    delta = round((new - old) * 100 / old, 2) if old != 0 else 0
    arrow = "⬆️" if delta > 0 else "⬇️"
    color = "red" if delta > 0 else "green"
    return f"""
    <tr>
      <td>{label}</td>
      <td>{old}</td>
      <td>{new}</td>
      <td style="color:{color}">{arrow} {delta}%</td>
    </tr>
    """


def generate_compare_html(prev_name, last_name, prev, last):
    html = f"""
<html>
<head>
  <title>Performance Comparison</title>
  <style>
    body {{ font-family: Arial; }}
    table {{ border-collapse: collapse; width: 70%; }}
    th, td {{ border: 1px solid #ccc; padding: 8px; text-align: center; }}
    th {{ background: #f4f4f4; }}
  </style>
</head>
<body>

<h2>Compare Performance</h2>
<p><b>Previous:</b> {prev_name}<br>
<b>Latest:</b> {last_name}</p>

<table>
<tr>
  <th>Metric</th>
  <th>Previous</th>
  <th>Latest</th>
  <th>Δ</th>
</tr>

{row("Samples", prev["sampleCount"], last["sampleCount"])}
{row("Avg (ms)", prev["meanResTime"], last["meanResTime"])}
{row("P90 (ms)", prev["pct2ResTime"], last["pct2ResTime"])}
{row("P95 (ms)", prev["pct3ResTime"], last["pct3ResTime"])}
{row("Error (%)", prev["errorPct"], last["errorPct"])}
{row("Throughput", prev["throughput"], last["throughput"])}

</table>
</body>
</html>
"""

    with open(COMPARE_FILE, "w", encoding="utf-8") as f:
        f.write(html)


def main():
    latest = find_latest_reports()
    if len(latest) < 2:
        print("Not enough reports to compare")
        return

    prev_name, last_name = latest
    prev = load_statistics(os.path.join(REPORT_DIR, prev_name))
    last = load_statistics(os.path.join(REPORT_DIR, last_name))

    generate_compare_html(prev_name, last_name, prev, last)
    print("compare.html generated successfully")


if __name__ == "__main__":
    main()
