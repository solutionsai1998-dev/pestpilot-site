#!/bin/bash
# Truth Gate: Phase M2 — Homepage sections 1-6
# Exit 0 = PASS, Exit 1 = FAIL

set -e
SITE_DIR="/Users/bigbrain/.openclaw/workspace/projects/pestpilot-site"
ERRORS=""

echo "=== M2 Truth Gate ==="

# 1. Homepage page file exists
PAGE_FILE=$(find "$SITE_DIR/app" -name "page.tsx" -path "*/app/page.tsx" 2>/dev/null | head -1)
if [ -n "$PAGE_FILE" ]; then
  echo "PASS: Homepage page.tsx exists"
else
  ERRORS+="FAIL: Homepage page.tsx not found at app/page.tsx\n"
fi

# 2. All 6 homepage section components exist in components/home/
SECTIONS=("Hero" "SocialProofBar" "PainPoints" "FeatureShowcase" "Differentiator" "ChemicalTracking")
for section in "${SECTIONS[@]}"; do
  FOUND=$(find "$SITE_DIR/components/home" -name "${section}*" 2>/dev/null | head -1)
  if [ -n "$FOUND" ]; then
    echo "PASS: Section component $section exists"
  else
    ERRORS+="FAIL: Section component $section missing\n"
  fi
done

# 3. Homepage imports and renders all sections
if [ -n "$PAGE_FILE" ]; then
  for section in "${SECTIONS[@]}"; do
    if grep -q "$section" "$PAGE_FILE"; then
      echo "PASS: $section imported/used in homepage"
    else
      ERRORS+="FAIL: $section not referenced in homepage page.tsx\n"
    fi
  done
fi

# 4. Feature showcase has tab structure (3 tabs: Office, Field Tech, Customer)
FEATURE_FILE=$(find "$SITE_DIR/components/home" -name "FeatureShowcase*" 2>/dev/null | head -1)
if [ -n "$FEATURE_FILE" ]; then
  CONTENT=$(cat "$FEATURE_FILE")
  for tab in "Office" "Field" "Customer"; do
    if echo "$CONTENT" | grep -qi "$tab"; then
      echo "PASS: Feature tab '$tab' found in FeatureShowcase"
    else
      ERRORS+="FAIL: Feature tab '$tab' not found in FeatureShowcase\n"
    fi
  done
else
  ERRORS+="FAIL: FeatureShowcase component not found\n"
fi

# 5. Pain points has 3 cards
PAIN_FILE=$(find "$SITE_DIR/components/home" -name "PainPoints*" 2>/dev/null | head -1)
if [ -n "$PAIN_FILE" ]; then
  if grep -c "Still on paper\|Recurring cycles\|Compliance\|sticky note\|retreatment\|audit\|EPA" "$PAIN_FILE" | head -1 | grep -q "[2-9]"; then
    echo "PASS: PainPoints has multiple pain point cards"
  else
    ERRORS+="FAIL: PainPoints may not have all 3 pain cards\n"
  fi
else
  ERRORS+="FAIL: PainPoints component not found\n"
fi

# 6. Build succeeds
echo "--- Running build ---"
cd "$SITE_DIR"
if npm run build > /tmp/m2-build.log 2>&1; then
  echo "PASS: npm run build succeeds"
else
  ERRORS+="FAIL: npm run build failed. Log:\n$(tail -20 /tmp/m2-build.log)\n"
fi

# Result
echo ""
echo "=== M2 Truth Gate Result ==="
if [ -z "$ERRORS" ]; then
  echo "✅ ALL CHECKS PASSED"
  exit 0
else
  echo "❌ FAILURES:"
  echo -e "$ERRORS"
  exit 1
fi
