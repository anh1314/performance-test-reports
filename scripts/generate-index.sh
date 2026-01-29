#!/bin/bash
set -e

REPORTS_DIR="reports"
OUTPUT_FILE="$REPORTS_DIR/index.html"

echo "Generating reports index..."

cat <<EOF > $OUTPUT_FILE
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Performance Test Reports</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; }
    h1 { color: #333; }
    table { border-collapse: collapse; width: 100%; }
    th, td { padding: 10px; border-bottom: 1px solid #ddd; }
    th { background: #f4f4f4; text-align: left; }
    a { text-decoration: none; color: #0366d6; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
<h1>Performance Test Reports</h1>
<table>
  <tr>
    <th>Report Name</th>
    <th>Link</th>
  </tr>
EOF

for dir in $REPORTS_DIR/*/; do
  if [ -f "${dir}index.html" ]; then
    REPORT_NAME=$(basename "$dir")
    echo "  <tr><td>${REPORT_NAME}</td><td><a href=\"./${REPORT_NAME}/index.html\" target=\"_blank\">View report</a></td></tr>" >> $OUTPUT_FILE
  fi
done

cat <<EOF >> $OUTPUT_FILE
</table>
</body>
</html>
EOF

echo "Done."