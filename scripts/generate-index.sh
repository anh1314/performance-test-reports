#!/bin/bash
set -e

OUTPUT="index.html"
REPORTS_DIR="reports"

echo "Generating root index.html..."

cat <<EOF > $OUTPUT
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Performance Test Reports</title>
</head>
<body>
  <h1>Performance Test Reports</h1>
  <ul>
EOF

if [ -d "$REPORTS_DIR" ]; then
  for dir in $REPORTS_DIR/*; do
    if [ -d "$dir" ]; then
      name=$(basename "$dir")
      echo "    <li><a href=\"$REPORTS_DIR/$name/\">$name</a></li>" >> $OUTPUT
    fi
  done
fi

cat <<EOF >> $OUTPUT
  </ul>
</body>
</html>
EOF

echo "index.html generated successfully"