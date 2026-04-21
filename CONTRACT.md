# PestPilot Marketing Site — Design & Development Contract

> **Version:** 1.0 · **Date:** 2025-04-21 · **Status:** Draft

---

## Table of Contents

1. [Site Structure](#1-site-structure)
2. [Homepage Wireframe](#2-homepage-wireframe)
3. [Design System](#3-design-system)
4. [Copy Guidelines](#4-copy-guidelines)
5. [Feature Messaging](#5-feature-messaging)
6. [Pricing Page Structure](#6-pricing-page-structure)
7. [SEO Strategy](#7-seo-strategy)
8. [Conversion Strategy](#8-conversion-strategy)
9. [Technical Requirements](#9-technical-requirements)
10. [Performance Targets](#10-performance-targets)

---

## 1. Site Structure

### Primary Pages

| Page | Path | Purpose |
|------|------|---------|
| Homepage | `/` | Hero pitch, social proof, feature overview, CTAs |
| Pricing | `/pricing` | Tier comparison, FAQ, CTA |
| Features | `/features` | Deep feature breakdown by persona (office, tech, customer) |
| Features — Scheduling | `/features/scheduling` | Recurring cycle management, drag-and-drop calendar |
| Features — Dispatch | `/features/dispatch` | Route optimization, real-time GPS tracking |
| Features — Invoicing | `/features/invoicing` | On-site payment, QuickBooks sync, recurring billing |
| Features — Chemical Tracking | `/features/chemical-tracking` | EPA compliance, application logs, inventory |
| Features — Reporting | `/features/reporting` | Dashboards, export, business metrics |
| Pest Control Software (industry) | `/pest-control-software` | Industry landing page — SEO play for head term |
| About | `/about` | Origin story, team, mission |
| Blog | `/blog` | SEO content engine |
| Blog Post (template) | `/blog/[slug]` | Individual articles |
| Contact / Demo | `/demo` | Book-a-demo form (Calendly embed or custom) |
| Terms | `/terms` | Legal |
| Privacy | `/privacy` | Legal |

### Navigation

**Primary nav:** Features · Pricing · About · Blog · **[Start Free Trial]** (CTA button, accent color)

**Footer:** Features (dropdown) · Pricing · About · Blog · Demo · Terms · Privacy · Social icons

---

## 2. Homepage Wireframe

Sections top-to-bottom. Each section includes purpose, content, and CTA.

### §1 — Hero

**Purpose:** Instant clarity. Visitor knows this is pest-control-only software in 3 seconds.

- **Badge:** "Built exclusively for pest control operators"
- **Headline:** "Pest control software that runs your entire business."
- **Subhead:** "Scheduling, dispatch, invoicing, chemical tracking, and EPA compliance — built for the jobs you actually do."
- **CTA:** **Start Free Trial** (primary) · **Watch Demo** (secondary, links to modal with embedded video)
- **Sub-CTA text:** "No credit card required · Setup in 15 minutes"
- **Visual:** Screenshot/mockup of PestPilot dashboard on laptop + phone, showing a pest control specific view (treatment calendar, chemical log, customer list)
- **Background:** Subtle topographic/line-pattern (not generic gradient)

### §2 — Social Proof Bar

**Purpose:** Immediate trust.

- Logo strip: "Trusted by [N]+ pest control companies" + 4-6 customer logos (or placeholder)
- Stats strip: "500,000+ treatments tracked" · "99.9% uptime" · "4.9★ on G2/Capterra"

### §3 — Pain Point → Solution ("The Problem")

**Purpose:** Mirror the visitor's pain. Show we understand.

- **Headline:** "Running a pest control company shouldn't feel like herding bugs."
- 3 pain cards (icon + headline + 2-line body):
  1. 📋 "Still on paper?" — Jobs on sticky notes, schedules in your head, invoices you forget to send.
  2. 🔄 "Recurring cycles are a mess" — 30/60/90 day retreatments falling through the cracks. Customers slipping away.
  3. ⚠️ "Compliance keeps you up at night" — EPA logs, chemical inventory, application records. One audit away from trouble.
- **Transition CTA:** "PestPilot handles all of it. →"

### §4 — Feature Showcase (3 tabs)

**Purpose:** Organized by WHO benefits — the pattern that works for competitors.

Three tabs, each with illustration + 3-4 bullet features:

**Tab 1: For the Office** (icon: 🏢)
- Drag-and-drop scheduling with recurring cycle templates (30/60/90 day)
- Customer CRM with treatment history and property details
- Automated invoices and payment collection
- Chemical inventory tracking and EPA compliance reports

**Tab 2: For the Field Tech** (icon: 🐜)
- Mobile app with daily route, job details, and GPS directions
- One-tap chemical application logging
- Capture signatures and photos on-site
- Offline mode — works in crawl spaces and attics

**Tab 3: For the Customer** (icon: 👨‍👩‍👧)
- Online booking and self-service portal
- Automated text/email reminders for upcoming treatments
- Digital service reports with treatment details
- One-click payment

### §5 — "Pest Control Only" Differentiator

**Purpose:** Sharpen the positioning vs. Housecall Pro and GorillaDesk.

- **Headline:** "Not another generic field service app. Not a lawn-and-cleaning afterthought."
- **Body:** "Housecall Pro serves 20+ industries. GorillaDesk splits focus across pest, lawn, and cleaning. PestPilot does one thing: **pest control**. Every feature, every workflow, every report is designed for how your business actually runs."
- **Visual:** Side-by-side comparison (3 columns, subtle): Housecall Pro (20+ industries) · GorillaDesk (pest+lawn+cleaning) · **PestPilot (pest control only)** — with checkmarks showing depth of pest-specific features
- **CTA:** **See the difference →**

### §6 — Chemical Tracking Hero Feature

**Purpose:** Unique differentiator — no competitor leads with this.

- **Badge:** "Exclusive to PestPilot"
- **Headline:** "EPA compliance, built in. Not bolted on."
- **Feature bullets with mini-illustrations:**
  - Automatic application logs from field entries
  - Chemical inventory with lot tracking and expiration alerts
  - One-click EPA compliance reports (ready for audit)
  - Restricted-use pesticide tracking with applicator license verification
- **Testimonial quote** (rotating): "We passed our first EPA audit without scrambling for records." — [Name], [Company]
- **CTA:** **See chemical tracking →**

### §7 — Recurring Cycle Management

**Purpose:** Another pest-specific differentiator.

- **Headline:** "Never lose a recurring customer again."
- **Visual:** Timeline/animation showing a customer's recurring schedule (initial → 30-day → 60-day → quarterly) with automated reminders and auto-scheduling
- **Feature bullets:**
  - Flexible cycle templates: 30/60/90 day, monthly, quarterly, custom
  - Auto-generate upcoming jobs when cycle completes
  - Automated customer reminders before each treatment
  - Dashboard showing at-risk customers (missed cycles)

### §8 — "From Paper to PestPilot" Transition

**Purpose:** Explicitly target pen-and-paper operators — an underserved segment.

- **Headline:** "Still running your business on paper and prayers?"
- **3-step process illustration:**
  1. **Sign up** — 15 minutes. No tech degree required.
  2. **Import your customers** — We'll help. Send us your spreadsheet, napkin list, or just type them in.
  3. **Start scheduling** — Your first week of jobs, automated.
- **Callout:** "Free data migration for every customer. We'll move your customers, schedules, and history so you can start where you left off — just without the paper cuts."
- **CTA:** **Start free — we'll help you move →**

### §9 — Testimonials / Wall of Love

**Purpose:** Social proof, credibility.

- **Layout:** Masonry grid, 6-9 testimonial cards
- **Each card:** Headshot · Name · Company name + location · Star rating · Quote
- **Categories/rotating filters:** "1-2 techs" · "3-5 techs" · "6-10 techs" (match visitor's scale)
- **CTA below:** "Join [N]+ pest control companies using PestPilot · **Start free trial →**"

### §10 — Pricing Preview

**Purpose:** Get them to the pricing page. No surprises.

- **Headline:** "Simple pricing. No per-technician fees."
- 3 tier cards (condensed): Starter · Professional · Enterprise
- Starting price on each: $99/mo · $199/mo · Custom
- **Link:** "Compare all features →"
- **Subtext:** "No credit card required · Cancel anytime · Free data migration"

### §11 — Final CTA

**Purpose:** Last impression = action.

- **Headline:** "Ready to ditch the paperwork and grow your pest control business?"
- **CTA:** **Start Your Free Trial** (large, accent color)
- **Subtext:** "No credit card required · 14-day free trial · Setup in 15 minutes"
- **Secondary:** "Book a demo" · "Call us: (555) 000-0000"

### §12 — Footer

Standard footer with nav, legal, social, copyright.

---

## 3. Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1B4332` (deep forest green) | Headers, nav, primary backgrounds |
| `--color-primary-light` | `#2D6A4F` | Hover states, secondary headers |
| `--color-accent` | `#F77F00` (warm amber) | CTAs, highlights, badges |
| `--color-accent-hover` | `#E07000` | Button hover |
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-alt` | `#F8F9FA` | Alternating section backgrounds |
| `--color-bg-dark` | `#1B4332` | Dark sections (hero, final CTA) |
| `--color-text` | `#1A1A2E` | Body text |
| `--color-text-light` | `#6B7280` | Secondary text |
| `--color-text-on-dark` | `#FFFFFF` | Text on dark backgrounds |
| `--color-success` | `#10B981` | Checkmarks, positive indicators |
| `--color-warning` | `#F59E0B` | Alerts |
| `--color-error` | `#EF4444` | Errors |
| `--color-border` | `#E5E7EB` | Borders, dividers |

**Rationale:** Green = pest control industry association, growth, outdoors. Amber = urgency, CTAs, warmth. Avoids the generic blue/purple SaaS look.

### Typography

| Role | Font | Weight | Size (desktop) | Size (mobile) |
|------|------|--------|----------------|---------------|
| H1 | Inter | 800 | 48px / 3rem | 32px / 2rem |
| H2 | Inter | 700 | 36px / 2.25rem | 28px / 1.75rem |
| H3 | Inter | 600 | 24px / 1.5rem | 20px / 1.25rem |
| Body | Inter | 400 | 18px / 1.125rem | 16px / 1rem |
| Body small | Inter | 400 | 14px / 0.875rem | 14px |
| CTA button | Inter | 600 | 16px | 16px |
| Code/mono | JetBrains Mono | 400 | 14px | 14px |

### Spacing

- Base unit: `8px`
- Section padding: `96px` (desktop) / `64px` (mobile)
- Container max-width: `1200px`
- Grid: 12-column, `24px` gutter
- Card padding: `32px`
- Card border-radius: `12px`
- Button border-radius: `8px`
- Button padding: `14px 32px` (primary), `12px 24px` (secondary)

### Shadows

| Level | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Cards at rest |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Cards on hover |
| `shadow-lg` | `0 10px 25px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `shadow-xl` | `0 20px 50px rgba(0,0,0,0.15)` | Hero product mockup |

### Iconography

- **Set:** Lucide icons (open source, consistent stroke width)
- **Size:** 24px default, 48px feature icons, 64px hero icons
- **Color:** Inherit from parent or use `--color-primary`

### Illustrations & Imagery

- **Style:** Clean, flat/minimal — no cheesy stock photos of people pointing at laptops
- **Product screenshots:** Actual PestPilot UI (or high-fidelity mockups) — not generic SaaS dashboards
- **Icons:** Pest-specific where possible (bug, spray bottle, house perimeter, calendar cycle)
- **Photos:** Real pest control operators (staged is fine but authentic-looking), actual trucks, actual job sites

---

## 4. Copy Guidelines

### Tone

**Professional but approachable.** We're talking to business owners who work with their hands, not SaaS buyers who live on Twitter. Think: smart neighbor who happens to know software, not a Silicon Valley sales pitch.

- ✅ "Your techs will love it."
- ❌ "Empower your workforce with next-gen field operations."

**Confident, not arrogant.** We know pest control. We don't need to shout.

- ✅ "Built exclusively for pest control."
- ❌ "The #1 pest control platform in the universe!!!"

**Direct.** Say the thing. Don't bury it.

- ✅ "Schedule recurring 30-day treatments in one click."
- ❌ "Leverage our advanced scheduling algorithms to optimize your recurring service workflows."

### Terminology

| Use | Avoid |
|-----|-------|
| Pest control operator / PCO | Service provider |
| Technician / tech | Field worker, agent |
| Treatment | Service (when pest-specific) |
| Customer / account | Client, user |
| Chemical / product | Chemical agent, substance |
| Route | Job queue |
| Recurring cycle | Subscription service |
| Service ticket | Work order |
| Property | Site, location |

### Do's

- Use specific numbers and timeframes ("setup in 15 minutes", "200+ EPA compliance reports generated")
- Lead with outcomes, not features ("Never miss a recurring treatment" vs "Automated recurring scheduling")
- Reference real pest control workflows (initial inspections, perimeter treatments, follow-ups, callbacks)
- Use the customer's language — talk about "callbacks" and "routes" not "tickets" and "queues"
- Include location/industry specificity in testimonials ("Family-owned in Dallas, TX since 2008")

### Don'ts

- No jargon from other industries (no "HVAC", "plumbing", "lawn care" anywhere)
- No "AI-powered" as a crutch — mention specific features, not buzzwords
- No stock photos of diverse teams high-fiving in sterile offices
- No "revolutionize", "disrupt", "leverage", "synergy"
- No comparison pages naming competitors directly (we position, don't attack)
- No wall-of-text paragraphs — max 3 sentences per block

---

## 5. Feature Messaging

### Positioning Matrix

| Feature | Our Angle | vs. Housecall Pro | vs. GorillaDesk |
|---------|-----------|-------------------|-----------------|
| **Scheduling** | "Built for recurring pest cycles — 30/60/90 day, quarterly, annual" | Generic scheduling, no cycle awareness | Has recurring but shared focus with lawn/cleaning |
| **Dispatch & Routing** | "Routes optimized for pest control density — multiple stops per property" | General field service routing | Decent routing, but not pest-specific |
| **Invoicing** | "Invoice on-site, get paid instantly. Syncs with QuickBooks." | Strong invoicing (their bread and butter) | Comparable invoicing |
| **Chemical Tracking** | "EPA compliance built in. Application logs, inventory tracking, audit-ready reports." ⭐ HERO | No chemical tracking | Basic product tracking, not EPA-focused |
| **Reporting** | "Dashboards that show what matters: callback rates, chemical usage, recurring revenue" | Generic business reports | Comparable |
| **Customer Portal** | "Customers book, pay, and see treatment history — fewer phone calls for you" | Strong customer experience | Comparable |
| **Mobile App** | "Works offline in crawl spaces and attics. One-tap chemical logging." | Good mobile app | Good mobile app |
| **Data Migration** | "Free migration from spreadsheets, paper, or any competitor." | Limited migration help | Emphasizes migration |

### Hero Features (lead with these in all marketing)

1. **Chemical Tracking & EPA Compliance** — nobody else owns this
2. **Recurring Cycle Management** — pest-specific, high pain point
3. **Pest-Control-Only Focus** — positioning against multi-industry tools

### Supporting Features (mention in features page, tabs, comparisons)

4. Scheduling & Calendar
5. Dispatch & Routing
6. Invoicing & Payments
7. Customer Portal
8. Reporting & Analytics
9. Mobile App
10. QuickBooks Integration
11. Data Migration

---

## 6. Pricing Page Structure

### Tiers

| | Starter | Professional | Enterprise |
|---|---------|-------------|------------|
| **Price** | $99/mo | $199/mo | $299/mo |
| **Tagline** | "For the solo operator ready to go digital" | "For growing teams that need it all" | "For established companies with compliance needs" |
| **Target** | 1-2 techs | 3-7 techs | 8-10+ techs |
| **Users** | Up to 3 users | Up to 10 users | Unlimited users |
| **Highlight** | — | Most popular | — |

### Feature Matrix

| Feature | Starter | Professional | Enterprise |
|---------|---------|-------------|------------|
| Scheduling & Calendar | ✅ | ✅ | ✅ |
| Customer CRM | ✅ | ✅ | ✅ |
| Mobile App (iOS & Android) | ✅ | ✅ | ✅ |
| Invoicing & Payments | ✅ | ✅ | ✅ |
| Recurring Cycle Management | ✅ | ✅ | ✅ |
| Customer Portal | ✅ | ✅ | ✅ |
| Dispatch & Routing | — | ✅ | ✅ |
| GPS Tracking | — | ✅ | ✅ |
| Chemical Tracking | — | ✅ | ✅ |
| EPA Compliance Reports | — | ✅ | ✅ |
| Chemical Inventory | — | ✅ | ✅ |
| QuickBooks Integration | — | ✅ | ✅ |
| Custom Reporting | — | — | ✅ |
| API Access | — | — | ✅ |
| Priority Support | — | — | ✅ |
| Dedicated Onboarding | — | — | ✅ |
| Multi-Location Support | — | — | ✅ |

### Add-Ons

| Add-on | Price |
|--------|-------|
| Additional users (per user) | $15/mo |
| Advanced route optimization | $29/mo |
| Marketing suite (email campaigns, review requests) | $49/mo |

### Page Layout

1. **Header:** "Simple pricing. No hidden fees. No per-technician surprise charges."
2. **Toggle:** Monthly / Annual (annual = 2 months free, show savings)
3. **3-tier cards** (centered, Professional visually elevated — "Most Popular" badge)
4. **"Not sure? Take the quiz"** — 3-question quiz: How many techs? → Paper or software today? → EPA compliance concern? → Recommends a tier
5. **Feature comparison table** (expandable)
6. **FAQ section** (8-10 questions, accordion)
7. **Bottom CTA:** "Still have questions? Talk to our team." → Demo booking

### Pricing FAQ (minimum)

1. Is there a free trial? → Yes, 14 days. No credit card.
2. Can I switch plans? → Anytime. Up or down.
3. Is there a contract? → Month-to-month. Cancel anytime.
4. What about data migration? → Free for all plans. We do the work.
5. Are there per-technician fees? → No. Flat pricing per plan.
6. Do you offer annual billing? → Yes, save 2 months.
7. What payment methods? → All major cards, ACH.
8. Is my data secure? → SOC 2 compliant, encrypted, daily backups.

---

## 7. SEO Strategy

### Target Keywords

**Primary (page-level targets):**

| Keyword | Search Volume Est. | Target Page |
|---------|-------------------|-------------|
| pest control software | High | `/pest-control-software` |
| pest control scheduling software | Medium | `/features/scheduling` |
| pest control invoicing software | Medium | `/features/invoicing` |
| pest control dispatch software | Medium | `/features/dispatch` |
| pest control chemical tracking | Low-Medium | `/features/chemical-tracking` |
| pest control CRM | Medium | `/features` |
| field service software for pest control | Medium | `/pest-control-software` |

**Secondary / Long-tail (blog targets):**

| Keyword | Content Angle |
|---------|---------------|
| how to start a pest control business | Guide → lead to product |
| pest control business software | Comparison roundup |
| EPA compliance for pest control | Educational → chemical tracking feature |
| pest control recurring service management | How-to → scheduling feature |
| pest control route optimization | Guide → dispatch feature |
| Housecall Pro vs GorillaDesk vs PestPilot | Comparison page |
| best pest control software 2025 | Listicle/roundup |
| pest control invoice template | Free template → product CTA |
| pest control service agreement template | Free template → product CTA |

### Page Titles & Meta Descriptions

| Page | Title | Meta Description |
|------|-------|-----------------|
| Homepage | PestPilot — Pest Control Software Built for Your Business | Scheduling, dispatch, invoicing, and EPA compliance — all in one. Built exclusively for pest control operators. Start your free trial. |
| Pricing | Pest Control Software Pricing — Simple Plans from $99/mo | No per-technician fees, no surprises. Plans start at $99/mo with free data migration. 14-day free trial, no credit card required. |
| Features | Pest Control Software Features — Scheduling, Dispatch, Invoicing & More | See how PestPilot handles every part of your pest control business: scheduling, dispatch, invoicing, chemical tracking, and EPA compliance. |
| `/pest-control-software` | Pest Control Software — The Only One Built Exclusively for PCOs | PestPilot is pest-control-only software with EPA compliance, recurring cycle management, and chemical tracking. See why operators switch. |
| `/features/chemical-tracking` | Chemical Tracking & EPA Compliance for Pest Control | Track every chemical application, manage inventory, and generate audit-ready EPA compliance reports. Built exclusively for pest control. |
| `/features/scheduling` | Pest Control Scheduling Software — Recurring Cycles & More | Manage 30/60/90 day recurring treatments, drag-and-drop scheduling, and automated customer reminders. |
| `/features/dispatch` | Pest Control Dispatch & Route Optimization | Send techs to the right jobs with optimized routes, GPS tracking, and real-time updates. |
| `/features/invoicing` | Pest Control Invoicing Software — Get Paid On-Site | Invoice on-site, accept payments instantly, and sync with QuickBooks. Built for pest control operators. |
| `/features/reporting` | Pest Control Business Reporting & Analytics | Track callback rates, chemical usage, recurring revenue, and technician performance. |

### Blog Content Calendar (first 3 months)

| Month | Posts | Topics |
|-------|-------|--------|
| 1 | 4 | How to start a pest control business · Pest control software comparison · EPA compliance guide · Invoice template |
| 2 | 4 | Recurring service management guide · Route optimization tips · Service agreement template · Customer retention strategies |
| 3 | 4 | Chemical tracking best practices · Hiring your first tech · Growing from paper to software · Seasonal pest control marketing |

### Technical SEO

- Semantic HTML5 (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`)
- Structured data: `SoftwareApplication`, `Organization`, `FAQPage`, `BreadcrumbList`
- XML sitemap at `/sitemap.xml`
- Robots.txt allowing all crawlers
- Canonical URLs on every page
- Open Graph + Twitter Card meta tags on every page
- Hreflang not needed (English only for v1)

---

## 8. Conversion Strategy

### Primary CTA

**"Start Free Trial"** — appears on every page, in nav, and at least 2x per scroll on homepage.

- Button style: `--color-accent` background, white text, `8px` radius, `14px 32px` padding
- Hover: slight scale (1.02), `--color-accent-hover`
- Always accompanied by: "No credit card required"

### Secondary CTAs

- **"Watch Demo"** — opens video modal (60-90 second product walkthrough)
- **"Book a Demo"** — links to `/demo` (Calendly embed)
- **"See Pricing"** — links to `/pricing`
- **"Call Us"** — click-to-call phone number (visible in nav on mobile)

### CTA Placement (Homepage)

1. Nav bar (sticky)
2. Hero section
3. After §3 (pain points) — "PestPilot handles all of it →"
4. After §5 (differentiator) — "See the difference →"
5. After §8 (paper transition) — "Start free — we'll help you move →"
6. After §9 (testimonials) — "Join [N]+ pest control companies →"
7. §10 (pricing preview)
8. §11 (final CTA — full-width)

**Rule:** Never more than ~600px of scroll without a CTA.

### Social Proof Placement

| Location | Type |
|----------|------|
| Hero section (sub-CTA area) | Trust badges: "No credit card" · "14-day trial" · "Free migration" |
| §2 — Social proof bar | Customer count + logos |
| §6 — Chemical tracking | Specific testimonial about EPA/compliance |
| §9 — Testimonials wall | Masonry grid of 6-9 testimonials |
| Pricing page — tier cards | Small testimonial under each tier |
| Footer | G2/Capterra badge, BBB rating if applicable |

### Trust Signals (always visible or easily found)

- "No credit card required"
- "14-day free trial"
- "Cancel anytime"
- "Free data migration"
- "SOC 2 Compliant" (when achieved)
- "99.9% uptime"
- "24/7 support" (or actual support hours)
- Customer count ("Trusted by [N]+ pest control companies")
- Star rating on review sites

### Exit Intent / Engagement

- **Exit intent popup** (desktop only, appears once per session): "Before you go — get a free pest control business checklist" → email capture
- **Chat widget** (bottom right): Intercom/Crisp-style, "Questions? Chat with us."
- **Sticky mobile CTA bar** (bottom of screen on mobile): "Start Free Trial" button, always visible

---

## 9. Technical Requirements

### Stack

- **Framework:** Next.js 14+ (App Router) with static export
- **Styling:** Tailwind CSS v3+ (utility-first, matches design tokens)
- **Deployment:** Vercel (automatic deploys from `main` branch)
- **Analytics:** Vercel Analytics + Plausible (privacy-friendly) or Google Analytics
- **Forms:** Formspree, Netlify Forms, or custom API route → email/CRM
- **Video:** Embedded from YouTube/Vimeo (not self-hosted)
- **Blog:** MDX files in `/content/blog/` with static generation
- **CMS:** None for v1 — markdown files in repo

### Hosting & Domain

- Domain: `pestpilot.com` (or `getpestpilot.com` as fallback)
- DNS: Managed via Vercel
- SSL: Automatic via Vercel
- CDN: Vercel Edge Network (automatic)

### Responsive Design

- **Breakpoints:**
  - Mobile: `320px - 767px`
  - Tablet: `768px - 1023px`
  - Desktop: `1024px+`
  - Large desktop: `1280px+`
- **Mobile-first** CSS approach
- **Touch targets:** Minimum 44x44px
- **Navigation:** Hamburger menu on mobile, full nav on desktop
- **Tables:** Horizontal scroll on mobile (pricing comparison)
- **Images:** `srcset` with responsive sizes, WebP format with JPEG fallback

### Accessibility

- WCAG 2.1 AA compliance
- Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text
- All images have `alt` text
- Keyboard navigable
- Skip-to-content link
- Focus indicators visible
- ARIA labels on interactive elements
- Reduced motion: respect `prefers-reduced-motion`

### Analytics & Tracking

- Vercel Web Analytics (Core Web Vitals)
- Plausible Analytics (or GA4 if preferred)
- Conversion tracking: trial signups, demo bookings
- No third-party cookies (use first-party analytics)
- Cookie consent banner if required

### Integrations (for forms and CTAs)

- Trial signup → creates account in PestPilot (or captures email for follow-up)
- Demo booking → Calendly embed or custom scheduler
- Contact form → sends to email + stores in CRM
- Blog newsletter signup → email service provider (ConvertKit, Mailchimp, etc.)

---

## 10. Performance Targets

### Lighthouse Scores (minimum)

| Metric | Target | Stretch |
|--------|--------|---------|
| Performance | ≥ 90 | ≥ 95 |
| Accessibility | ≥ 95 | 100 |
| Best Practices | ≥ 95 | 100 |
| SEO | ≥ 95 | 100 |

### Core Web Vitals

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.0s |
| FID (First Input Delay) | < 50ms |
| CLS (Cumulative Layout Shift) | < 0.05 |
| INP (Interaction to Next Paint) | < 150ms |
| TTFB (Time to First Byte) | < 200ms |

### Load Time Targets

| Metric | Target |
|--------|--------|
| First meaningful paint | < 1.5s on 4G |
| Time to interactive | < 3.0s on 4G |
| Total page weight (homepage) | < 1.5 MB |
| Total page weight (blog post) | < 1.0 MB |
| Number of HTTP requests (homepage) | < 30 |

### Optimization Requirements

- **Images:** WebP with JPEG fallback, lazy-loaded below the fold, `width`/`height` attributes to prevent CLS
- **Fonts:** `font-display: swap`, preload critical fonts, subset to Latin characters
- **JavaScript:** Code-split per page, tree-shake unused code, no jQuery
- **CSS:** Tailwind purge unused styles, critical CSS inlined
- **Third-party scripts:** Deferred or async loaded, minimal third-party dependencies
- **Caching:** Vercel edge caching, `Cache-Control` headers on static assets (1 year with content hash)

### Monitoring

- Vercel Analytics for real-user Core Web Vitals
- Automated Lighthouse CI on every PR (block merge if Performance < 85)
- Uptime monitoring via Vercel or external service (UptimeRobot)
- Weekly performance report emailed to team

---

## Appendix A — File Structure

```
pestpilot-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── pricing/
│   │   └── page.tsx
│   ├── features/
│   │   ├── page.tsx
│   │   ├── scheduling/page.tsx
│   │   ├── dispatch/page.tsx
│   │   ├── invoicing/page.tsx
│   │   ├── chemical-tracking/page.tsx
│   │   └── reporting/page.tsx
│   ├── pest-control-software/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── demo/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   └── privacy/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Nav.tsx
│   │   └── MobileMenu.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── SocialProofBar.tsx
│   │   ├── PainPoints.tsx
│   │   ├── FeatureShowcase.tsx
│   │   ├── Differentiator.tsx
│   │   ├── ChemicalTracking.tsx
│   │   ├── RecurringCycles.tsx
│   │   ├── PaperTransition.tsx
│   │   ├── Testimonials.tsx
│   │   ├── PricingPreview.tsx
│   │   └── FinalCTA.tsx
│   ├── pricing/
│   │   ├── TierCard.tsx
│   │   ├── FeatureMatrix.tsx
│   │   ├── PricingQuiz.tsx
│   │   └── PricingFAQ.tsx
│   └── shared/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       ├── TestimonialCard.tsx
│       └── VideoModal.tsx
├── content/
│   └── blog/
│       └── *.mdx
├── lib/
│   ├── constants.ts
│   └── blog.ts
├── public/
│   ├── images/
│   ├── fonts/
│   ├── favicon.ico
│   └── og-image.png
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
├── package.json
└── vercel.json
```

---

## Appendix B — Milestones & Timeline

| Milestone | Deliverable | Target |
|-----------|-------------|--------|
| M1 | Design system + homepage wireframe approval | Week 1 |
| M2 | Homepage built (responsive, all sections) | Week 2 |
| M3 | Features pages + pricing page | Week 3 |
| M4 | About, demo, blog shell, legal pages | Week 4 |
| M5 | SEO optimization, analytics, performance tuning | Week 5 |
| M6 | QA, accessibility audit, launch | Week 6 |

---

*This contract is a living document. Update as decisions are made during design and development.*
