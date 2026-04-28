import type { Metadata } from "next";
import { PricingSchema } from "@/components/seo/PricingSchema";
import { Button } from "@/components/shared/Button";
import { FeatureMatrix } from "@/components/pricing/FeatureMatrix";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingToggle } from "@/components/pricing/PricingToggle";

export const metadata: Metadata = {
  title: "Pricing | PestPilot",
  description:
    "Flat-rate pest control software pricing with no per-technician fees, free migration, and built-in compliance workflows.",
  alternates: {
    canonical: "https://pestpilot.com/pricing"
  },
  openGraph: {
    title: "Pricing | PestPilot",
    description:
      "Flat-rate pest control software pricing with no per-technician fees, free migration, and built-in compliance workflows.",
    url: "https://pestpilot.com/pricing",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | PestPilot",
    description:
      "Flat-rate pest control software pricing with no per-technician fees, free migration, and built-in compliance workflows."
  }
};

export default function PricingPage() {
  return (
    <>
      <PricingSchema />

      {/* Founding Member Banner */}
      <div className="border-b border-accent/20 bg-[linear-gradient(90deg,_#fff7ed_0%,_#fffaf2_50%,_#fff7ed_100%)]">
        <div className="container py-4 text-center">
          <p className="text-sm font-medium text-text">
            <span className="mr-1 inline-flex items-center rounded-full bg-accent px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
              Founding Deal
            </span>{" "}
            Solo operators pay{" "}
            <span className="font-bold text-accent">$49/mo</span> (normally $99/mo) — locked for life.{" "}
            <a className="font-semibold text-primary underline underline-offset-2 transition hover:text-primary-light" href="/early-access">
              Claim your spot →
            </a>
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
              Simple pricing. No per-technician fees.
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Built for pest control operators who want flat pricing, clean onboarding, and room to
              grow without surprise seat costs.
            </p>
            <p className="mt-6 text-small font-medium text-text-light">
              Apply for early access · Free data migration · No payment to start
            </p>
          </div>

          <PricingToggle />
        </div>
      </section>

      <FeatureMatrix />
      <PricingFAQ />

      <section className="section-padding bg-primary text-text-on-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-[linear-gradient(135deg,_#17382a_0%,_#1b4332_55%,_#204b37_100%)] px-8 py-12 text-center shadow-xl md:px-12 md:py-16">
            <h2 className="text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
              Ready to put your routes, compliance, and billing in one system?
            </h2>
            <p className="mt-4 text-body-mobile text-white/76 md:text-body">
              Apply for early access and bring your customer list over without rebuilding your whole
              operation from scratch.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/early-access">Apply for Early Access</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
