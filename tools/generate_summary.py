import json
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
REPORT_DIR = os.path.join(BASE_DIR, "reports")

SUMMARY_FILE = os.path.join(REPORT_DIR, "summary.json")
COMPARE_FILE = os.path.join(REPORT_DIR, "compare.html")


def load_statistics(run_dir):
    stats_path = os.path.join(run_dir, "statistics.json")
    if not os.path.exists(stats_path):
        return None

    with open(stats_path, encoding="utf-8") as f:
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


def generate_compare_html(prev, curr):
    def row(label, a, b):
        if a == 0:
            delta = 0
        else:
            delta = round((b - a) * 100 / a, 2)
        sign = "⬆️" if delta > 0 else "⬇️"
        return f"<tr><td>{label}</td><td>{a}</td><td>{b}</td><td>{sign} {delta}%</td></tr>"

    html = f"""
<html>
<head>
<title>Compare Performance Reports</title>
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

    for name in sorted(os.listdir(REPORT_DIR)):
        run_dir = os.path.join(REPORT_DIR, name)
        if not os.path.isdir(run_dir):
            continue
        if name == "reports":
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

    os.makedirs(REPORT_DIR, exist_ok=True)
    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)

    if len(summary) >= 2:
        generate_compare_html(summary[-2], summary[-1])


if __name__ == "__main__":
    main()
