import type { Metadata } from "next";
import { PricingSchema } from "@/components/seo/PricingSchema";
import { Button } from "@/components/shared/Button";
import { FeatureMatrix } from "@/components/pricing/FeatureMatrix";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingToggle } from "@/components/pricing/PricingToggle";

export const metadata: Metadata = {
  title: "Pricing | PestPilot",
  description:
    "Two PestPilot plans for pest control teams: Starter at $49/mo and Professional at $99/mo, with branding included on every plan.",
  alternates: {
    canonical: "https://pestpilot.app/pricing"
  },
  openGraph: {
    title: "Pricing | PestPilot",
    description:
      "Two PestPilot plans for pest control teams: Starter at $49/mo and Professional at $99/mo, with branding included on every plan.",
    url: "https://pestpilot.app/pricing",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | PestPilot",
    description:
      "Two PestPilot plans for pest control teams: Starter at $49/mo and Professional at $99/mo, with branding included on every plan."
  }
};

export default function PricingPage() {
  return (
    <>
      <PricingSchema />

      <div className="border-b border-accent/20 bg-[linear-gradient(90deg,_#fff7ed_0%,_#fffaf2_50%,_#fff7ed_100%)]">
        <div className="container py-4 text-center">
          <p className="text-sm font-medium text-text">
            <span className="mr-1 inline-flex items-center rounded-full bg-accent px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
              Branding included
            </span>{" "}
            Your brand on every invoice, portal, and report — included on every plan.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
              Pricing
            </p>
            <h1 className="mt-4 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Simple pricing. Two plans. No contracts.
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Starter begins at $49/mo with 2 users included. Professional includes 5 users. Both plans add seats at
              $19/mo each when your team grows. Professional includes 500 SMS segments per month, with additional
              segments billed at $0.04 each. Start with a 14-day free trial. No credit card required.
            </p>
            <p className="mt-6 text-small font-medium text-text-light">
              Launch pricing guaranteed through 2026 · Save $120/year with annual billing · Cancel anytime · No contracts
            </p>
          </div>

          <PricingToggle />
        </div>
      </section>

      <FeatureMatrix />

      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-primary/10 bg-white p-8 shadow-card md:p-10">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-accent">Switching help</p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Need help switching from another tool?
            </h2>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              We&apos;ll import your customer list, service history, and chemical inventory for you.
            </p>
            <div className="mt-8 rounded-[24px] border border-border bg-bg-alt p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-h3-mobile font-semibold text-primary md:text-h3-desktop">Data Migration Add-on — $199 one-time</h3>
                  <ul className="mt-5 grid gap-3 text-small text-text-light md:grid-cols-2">
                    <li>• Import customers, properties, and service history</li>
                    <li>• Import chemical product inventory</li>
                    <li>• Import technician records</li>
                    <li>• Delivered within 5 business days</li>
                  </ul>
                </div>
                <Button href="mailto:hello@pestpilot.app?subject=Data%20Migration%20Add-on" variant="secondary">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingFAQ />

      <section className="section-padding bg-primary text-text-on-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-[linear-gradient(135deg,_#17382a_0%,_#1b4332_55%,_#204b37_100%)] px-8 py-12 text-center shadow-xl md:px-12 md:py-16">
            <h2 className="text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
              Ready to put your routes, compliance, and billing in one system?
            </h2>
            <p className="mt-4 text-body-mobile text-white/76 md:text-body">
              Start with scheduling, dispatch, invoicing, payments, chemical tracking, customer portal,
              recurring automation, and your brand included from day one.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/demo">Book a Demo</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
