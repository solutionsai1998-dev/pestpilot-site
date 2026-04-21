import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { FeatureMatrix } from "@/components/pricing/FeatureMatrix";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingToggle } from "@/components/pricing/PricingToggle";

export const metadata: Metadata = {
  title: "Pricing | PestPilot",
  description:
    "Flat-rate pest control software pricing with no per-technician fees, free migration, and built-in compliance workflows."
};

export default function PricingPage() {
  return (
    <>
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
              No credit card · Cancel anytime · Free data migration
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
              Start your free trial and bring your customer list over without rebuilding your whole
              operation from scratch.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/demo">Start Your Free Trial</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
