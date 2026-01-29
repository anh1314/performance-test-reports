import csv
import json
import os
from statistics import mean

JTL_DIR = "jtl"
REPORT_DIR = "reports"
SUMMARY_FILE = os.path.join(REPORT_DIR, "summary.json")

os.makedirs(REPORT_DIR, exist_ok=True)

def parse_jtl(jtl_path):
    elapsed = []
    errors = 0
    timestamps = []

    with open(jtl_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            elapsed.append(int(row["elapsed"]))
            timestamps.append(int(row["timeStamp"]))
            if row["success"].lower() != "true":
                errors += 1

    elapsed.sort()
    total = len(elapsed)

    def pct(p):
        return elapsed[int(total * p)]

    return {
        "samples": total,
        "avg": round(mean(elapsed), 2),
        "p90": pct(0.90),
        "p95": pct(0.95),
        "errorRate": round(errors * 100 / total, 2),
        "startTime": min(timestamps),
        "endTime": max(timestamps),
    }

def main():
    summary = []

    for file in os.listdir(JTL_DIR):
        if not file.endswith(".jtl"):
            continue

        run_name = file.replace(".jtl", "")
        metrics = parse_jtl(os.path.join(JTL_DIR, file))

        summary.append({
            "run": run_name,
            **metrics
        })

    # sort theo startTime → đúng nghĩa "2 ngày gần nhất"
    summary.sort(key=lambda x: x["startTime"])

    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)

    print(f"Generated {SUMMARY_FILE} with {len(summary)} runs")

if __name__ == "__main__":
    main()
