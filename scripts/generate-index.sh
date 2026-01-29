#!/bin/bash
set -e

OUTPUT="index.html"

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

for dir in reports/*/; do
  name=$(basename "$dir")
  echo "    <li><a href=\"reports/$name/\">$name</a></li>" >> $OUTPUT
done

cat <<EOF >> $OUTPUT
  </ul>
</body>
</html>
EOF

echo "index.html generated"
