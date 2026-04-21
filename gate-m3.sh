#!/bin/bash
# Truth Gate: Phase M3 — Homepage sections 7-12 + full homepage complete
# Exit 0 = PASS, Exit 1 = FAIL

set -e
SITE_DIR="/Users/bigbrain/.openclaw/workspace/projects/pestpilot-site"
ERRORS=""

echo "=== M3 Truth Gate ==="

# 1. All bottom-half section components exist
SECTIONS=("RecurringCycles" "PaperTransition" "Testimonials" "PricingPreview" "FinalCTA")
for section in "${SECTIONS[@]}"; do
  FOUND=$(find "$SITE_DIR/components/home" -name "${section}*" 2>/dev/null | head -1)
  if [ -n "$FOUND" ]; then
    echo "PASS: Section component $section exists"
  else
    ERRORS+="FAIL: Section component $section missing\n"
  fi
done

# 2. Homepage imports ALL 11 section components (Hero through FinalCTA)
PAGE_FILE=$(find "$SITE_DIR/app" -name "page.tsx" -path "*/app/page.tsx" 2>/dev/null | head -1)
ALL_SECTIONS=("Hero" "SocialProofBar" "PainPoints" "FeatureShowcase" "Differentiator" "ChemicalTracking" "RecurringCycles" "PaperTransition" "Testimonials" "PricingPreview" "FinalCTA")
if [ -n "$PAGE_FILE" ]; then
  for section in "${ALL_SECTIONS[@]}"; do
    if grep -q "$section" "$PAGE_FILE"; then
      echo "PASS: $section in homepage"
    else
      ERRORS+="FAIL: $section not in homepage page.tsx\n"
    fi
  done
fi

# 3. RecurringCycles mentions 30/60/90 or cycle templates
REC_FILE=$(find "$SITE_DIR/components/home" -name "RecurringCycles*" 2>/dev/null | head -1)
if [ -n "$REC_FILE" ]; then
  if grep -qi "30\|60\|90\|recurring\|cycle" "$REC_FILE"; then
    echo "PASS: RecurringCycles has cycle references"
  else
    ERRORS+="FAIL: RecurringCycles missing cycle content\n"
  fi
fi

# 4. PricingPreview has 3 tiers
PP_FILE=$(find "$SITE_DIR/components/home" -name "PricingPreview*" 2>/dev/null | head -1)
if [ -n "$PP_FILE" ]; then
  CONTENT=$(cat "$PP_FILE")
  for tier in "99" "199" "299\|Starter\|Professional\|Enterprise"; do
    if echo "$CONTENT" | grep -q "$tier"; then
      echo "PASS: PricingPreview has tier $tier"
    else
      ERRORS+="FAIL: PricingPreview may be missing tier $tier\n"
    fi
  done
fi

# 5. CTA buttons present (Start Free Trial or similar)
if grep -rq "Start Free Trial\|Start.*Free\|free.*trial\|Get Started" "$SITE_DIR/components/home/" 2>/dev/null; then
  echo "PASS: CTA text found in homepage components"
else
  ERRORS+="FAIL: No CTA text found in homepage components\n"
fi

# 6. Build succeeds
echo "--- Running build ---"
cd "$SITE_DIR"
if npm run build > /tmp/m3-build.log 2>&1; then
  echo "PASS: npm run build succeeds"
else
  ERRORS+="FAIL: npm run build failed. Log:\n$(tail -20 /tmp/m3-build.log)\n"
fi

# 7. No TypeScript errors (lint)
if npm run lint > /tmp/m3-lint.log 2>&1; then
  echo "PASS: lint passes"
else
  LINT_ERR=$(cat /tmp/m3-lint.log)
  if echo "$LINT_ERR" | grep -qi "error"; then
    ERRORS+="FAIL: lint errors found. Log:\n$(tail -10 /tmp/m3-lint.log)\n"
  else
    echo "PASS: lint passes (warnings only)"
  fi
fi

# Result
echo ""
echo "=== M3 Truth Gate Result ==="
if [ -z "$ERRORS" ]; then
  echo "✅ ALL CHECKS PASSED"
  exit 0
else
  echo "❌ FAILURES:"
  echo -e "$ERRORS"
  exit 1
fi
