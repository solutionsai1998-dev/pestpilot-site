# M6 QA & Accessibility Audit Report

## Build
- TypeScript: pass after code audit, no type fixes required.
- ESLint: pass after adding project ESLint config and dependencies, escaping one unescaped apostrophe in `app/about/page.tsx`. One `@next/next/no-img-element` warning remains in `components/shared/TestimonialCard.tsx` because optional headshots are non-critical mock content and not part of this audit scope.
- Next build: pass.

## Accessibility Findings

### Critical (WCAG A)
- Pricing billing toggle lacked tab semantics. Added `tablist`, `tab`, `tabpanel`, `aria-selected`, `aria-controls`, and keyboard-focus support in `components/pricing/PricingToggle.tsx`.
- Feature showcase tabs were missing a `tablist` wrapper and roving keyboard behavior. Added proper tab semantics, arrow key navigation, Home/End support, and focusable tab panel in `components/home/FeatureShowcase.tsx`.
- Demo page "What to expect" bullets were plain text list items without a list marker style. Converted them to a semantic bulleted list in `app/demo/page.tsx`.
- Video modal dialog did not expose an accessible label. Added `aria-labelledby` wiring and stable title id in `components/shared/VideoModal.tsx`.

### Serious (WCAG AA)
- Global muted body text and accent orange were too low-contrast in multiple places. Darkened `--color-text-light` and `--color-accent` in `styles/globals.css` while preserving design intent.
- Several header, footer, menu, and modal controls lacked strong visible focus styling. Added focus-visible ring states to brand links, footer links, social links, mobile navigation controls, feature tabs, pricing tabs, and modal close controls.
- Mobile navigation drawer could risk clipped content on short viewports. Added `overflow-y-auto` and navigation labeling in `components/layout/MobileMenu.tsx`.

### Minor (WCAG AAA / best practice)
- Removed `cursor-default` from fullscreen overlay close buttons in mobile nav and video modal so interaction affordance is clearer.
- Added focusable tabpanel containers to improve keyboard review of dynamic content sections.
- Added project ESLint configuration via `.eslintrc.json` so linting can run consistently in CI and local QA.

## Performance Notes
- `components/shared/TestimonialCard.tsx` still uses a native `<img>` for optional headshots, which triggers a Next.js lint warning. Converting to `next/image` would improve image optimization, but it is not blocking build or accessibility.

## Remaining Items
- Placeholder social links in the footer still point to `#`. They are accessible, but should be replaced with real destinations before launch.
- If testimonial headshots become real production assets, consider migrating them to `next/image` for optimization.
