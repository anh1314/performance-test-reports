import json
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
REPORT_DIR = os.path.join(BASE_DIR, "reports")

SUMMARY_FILE = os.path.join(REPORT_DIR, "summary.json")
COMPARE_FILE = os.path.join(REPORT_DIR, "compare.html")


def load_statistics(run_dir):
    stat_file = os.path.join(run_dir, "statistics.json")
    if not os.path.exists(stat_file):
        return None

    with open(stat_file, encoding="utf-8") as f:
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


def diff_cell(prev, curr, higher_is_worse=True):
    if prev == 0:
        return "–"

    delta = round((curr - prev) * 100 / prev, 2)

    # Higher = worse (latency, error)
    if higher_is_worse:
        if delta > 0:
            return f"<span style='color:red'>⬆ {delta}%</span>"
        else:
            return f"<span style='color:green'>⬇ {abs(delta)}%</span>"
    else:
        if delta > 0:
            return f"<span style='color:green'>⬆ {delta}%</span>"
        else:
            return f"<span style='color:red'>⬇ {abs(delta)}%</span>"


def generate_compare_html(prev, curr):
    html = f"""
<html>
<head>
<title>Compare reports</title>
<style>
body {{ font-family: Arial }}
table {{ border-collapse: collapse }}
td, th {{ border: 1px solid #ccc; padding: 8px; text-align:center }}
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
  <td>{diff_cell(prev['avg'], curr['avg'])}</td>
</tr>

<tr>
  <td>P90 (ms)</td>
  <td>{prev['p90']}</td>
  <td>{curr['p90']}</td>
  <td>{diff_cell(prev['p90'], curr['p90'])}</td>
</tr>

<tr>
  <td>P95 (ms)</td>
  <td>{prev['p95']}</td>
  <td>{curr['p95']}</td>
  <td>{diff_cell(prev['p95'], curr['p95'])}</td>
</tr>

<tr>
  <td>P99 (ms)</td>
  <td>{prev['p99']}</td>
  <td>{curr['p99']}</td>
  <td>{diff_cell(prev['p99'], curr['p99'])}</td>
</tr>

<tr>
  <td>Error (%)</td>
  <td>{prev['errorRate']}</td>
  <td>{curr['errorRate']}</td>
  <td>{diff_cell(prev['errorRate'], curr['errorRate'])}</td>
</tr>

</table>
</body>
</html>
"""
    with open(COMPARE_FILE, "w", encoding="utf-8") as f:
        f.write(html)


def main():
    summary = []

    for run in sorted(os.listdir(REPORT_DIR)):
        run_dir = os.path.join(REPORT_DIR, run)
        if not os.path.isdir(run_dir):
            continue

        stats = load_statistics(run_dir)
        if not stats:
            continue

        summary.append({
            "run": run,
            "date": run.split("_")[-1],
            **stats
        })

    summary.sort(key=lambda x: x["date"])

    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)

    if len(summary) >= 2:
        generate_compare_html(summary[-2], summary[-1])


if __name__ == "__main__":
    main()
