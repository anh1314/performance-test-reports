import json
import os
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
REPORT_DIR = os.path.join(BASE_DIR, "reports")

SUMMARY_FILE = os.path.join(REPORT_DIR, "summary.json")
COMPARE_FILE = os.path.join(REPORT_DIR, "compare.html")


def load_statistics(run_dir):
    stats_file = os.path.join(run_dir, "statistics.json")
    if not os.path.exists(stats_file):
        return None

    with open(stats_file, encoding="utf-8") as f:
        data = json.load(f)

    total = data.get("Total")
    if not total:
        return None

    return {
        "samples": total["sampleCount"],
        "avg": round(total["meanResTime"], 2),
        "p90": round(total["pct1ResTime"], 2),
        "p95": round(total["pct2ResTime"], 2),
        "p99": round(total["pct3ResTime"], 2),
        "errorRate": round(total["errorPct"], 2),
    }


def delta_cell(prev, curr):
    if prev == 0:
        return '<span class="neutral">–</span>'

    delta = (curr - prev) * 100 / prev
    delta = round(delta, 2)

    if delta > 0:
        return f'<span class="up">▲ {delta}%</span>'
    elif delta < 0:
        return f'<span class="down">▼ {abs(delta)}%</span>'
    else:
        return '<span class="neutral">0%</span>'


def generate_compare_html(prev, curr):
    html = f"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>Performance Comparison</title>
<style>
body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial;
    background: #f7f8fa;
    padding: 24px;
}}

h2 {{
    margin-bottom: 16px;
}}

table {{
    border-collapse: collapse;
    background: white;
    min-width: 600px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}}

th, td {{
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
    text-align: right;
}}

th {{
    background: #f0f3f7;
    text-align: center;
}}

td:first-child {{
    text-align: left;
    font-weight: 500;
}}

.up {{
    color: #d92d20;
    font-weight: 600;
}}

.down {{
    color: #12a150;
    font-weight: 600;
}}

.neutral {{
    color: #6b7280;
}}

tr:hover {{
    background: #fafafa;
}}
</style>
</head>
<body>

<h2>{prev['run']} → {curr['run']}</h2>

<table>
<tr>
  <th>Metric</th>
  <th>Previous</th>
  <th>Latest</th>
  <th>Δ</th>
</tr>
<tr>
  <td>Avg (ms)</td>
  <td>{prev['avg']}</td>
  <td>{curr['avg']}</td>
  <td>{delta_cell(prev['avg'], curr['avg'])}</td>
</tr>
<tr>
  <td>P90 (ms)</td>
  <td>{prev['p90']}</td>
  <td>{curr['p90']}</td>
  <td>{delta_cell(prev['p90'], curr['p90'])}</td>
</tr>
<tr>
  <td>P95 (ms)</td>
  <td>{prev['p95']}</td>
  <td>{curr['p95']}</td>
  <td>{delta_cell(prev['p95'], curr['p95'])}</td>
</tr>
<tr>
  <td>P99 (ms)</td>
  <td>{prev['p99']}</td>
  <td>{curr['p99']}</td>
  <td>{delta_cell(prev['p99'], curr['p99'])}</td>
</tr>
<tr>
  <td>Error (%)</td>
  <td>{prev['errorRate']}</td>
  <td>{curr['errorRate']}</td>
  <td>{delta_cell(prev['errorRate'], curr['errorRate'])}</td>
</tr>
</table>

</body>
</html>
"""

    with open(COMPARE_FILE, "w", encoding="utf-8") as f:
        f.write(html)


def main():
    summary = []

    for name in sorted(os.listdir(REPORT_DIR)):
        run_dir = os.path.join(REPORT_DIR, name)
        if not os.path.isdir(run_dir):
            continue

        stats = load_statistics(run_dir)
        if not stats:
            continue

        summary.append({
            "run": name,
            "date": name.split("_")[-1],
            **stats
        })

    summary.sort(key=lambda x: x["date"])

    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)

    if len(summary) >= 2:
        generate_compare_html(summary[-2], summary[-1])


if __name__ == "__main__":
    main()
