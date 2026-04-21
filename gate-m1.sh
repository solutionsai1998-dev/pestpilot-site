#!/bin/bash
# Truth Gate: Phase M1 — Project scaffold + design system
# Exit 0 = PASS, Exit 1 = FAIL

set -e
SITE_DIR="/Users/bigbrain/.openclaw/workspace/projects/pestpilot-site"
ERRORS=""

echo "=== M1 Truth Gate ==="

# 1. Directory exists
if [ ! -d "$SITE_DIR" ]; then
  ERRORS+="FAIL: Site directory does not exist\n"
else
  echo "PASS: Site directory exists"
fi

# 2. package.json exists and has next.js
if [ ! -f "$SITE_DIR/package.json" ]; then
  ERRORS+="FAIL: package.json missing\n"
else
  if grep -q '"next"' "$SITE_DIR/package.json"; then
    echo "PASS: Next.js dependency found"
  else
    ERRORS+="FAIL: Next.js not in dependencies\n"
  fi
fi

# 3. next.config has static export
if [ -f "$SITE_DIR/next.config.js" ] || [ -f "$SITE_DIR/next.config.mjs" ] || [ -f "$SITE_DIR/next.config.ts" ]; then
  CFG=$(cat "$SITE_DIR"/next.config.* 2>/dev/null)
  if echo "$CFG" | grep -qi "static\|output.*export"; then
    echo "PASS: Static export configured"
  else
    ERRORS+="FAIL: Static export not configured in next.config\n"
  fi
else
  ERRORS+="FAIL: next.config file missing\n"
fi

# 4. Tailwind config exists with design tokens
if [ -f "$SITE_DIR/tailwind.config.ts" ] || [ -f "$SITE_DIR/tailwind.config.js" ]; then
  TW=$(cat "$SITE_DIR"/tailwind.config.* 2>/dev/null)
  if echo "$TW" | grep -q "1B4332"; then
    echo "PASS: Primary color (forest green) in Tailwind config"
  else
    ERRORS+="FAIL: Primary color #1B4332 not found in Tailwind config\n"
  fi
  if echo "$TW" | grep -q "F77F00"; then
    echo "PASS: Accent color (amber) in Tailwind config"
  else
    ERRORS+="FAIL: Accent color #F77F00 not found in Tailwind config\n"
  fi
else
  ERRORS+="FAIL: Tailwind config file missing\n"
fi

# 5. Shared components exist
for comp in Button Badge Card TestimonialCard VideoModal; do
  FOUND=$(find "$SITE_DIR/components/shared" -name "${comp}*" 2>/dev/null | head -1)
  if [ -n "$FOUND" ]; then
    echo "PASS: Shared component $comp exists"
  else
    ERRORS+="FAIL: Shared component $comp missing\n"
  fi
done

# 6. Layout components exist
for comp in Header Footer Nav MobileMenu; do
  FOUND=$(find "$SITE_DIR/components/layout" -name "${comp}*" 2>/dev/null | head -1)
  if [ -n "$FOUND" ]; then
    echo "PASS: Layout component $comp exists"
  else
    ERRORS+="FAIL: Layout component $comp missing\n"
  fi
done

# 7. globals.css exists with CSS custom properties
if [ -f "$SITE_DIR/styles/globals.css" ] || [ -f "$SITE_DIR/app/globals.css" ] || [ -f "$SITE_DIR/src/app/globals.css" ]; then
  echo "PASS: globals.css exists"
else
  ERRORS+="FAIL: globals.css missing\n"
fi

# 8. Build succeeds
echo "--- Running build ---"
cd "$SITE_DIR"
if npm run build > /tmp/m1-build.log 2>&1; then
  echo "PASS: npm run build succeeds"
else
  ERRORS+="FAIL: npm run build failed. Log:\n$(tail -20 /tmp/m1-build.log)\n"
fi

# Result
echo ""
echo "=== M1 Truth Gate Result ==="
if [ -z "$ERRORS" ]; then
  echo "✅ ALL CHECKS PASSED"
  exit 0
else
  echo "❌ FAILURES:"
  echo -e "$ERRORS"
  exit 1
fi
