import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/shared/Button";

const tiers = [
  {
    name: "Starter",
    price: "$99/mo",
    tagline: "For the solo operator ready to go digital",
    features: ["Up to 3 users", "Scheduling and calendar", "Customer CRM", "Recurring cycle management"],
    highlighted: false
  },
  {
    name: "Professional",
    price: "$199/mo",
    tagline: "For growing teams that need it all",
    features: ["Up to 10 users", "Dispatch and routing", "Chemical tracking", "EPA compliance reports"],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$299/mo",
    tagline: "For established companies with compliance needs",
    features: ["Unlimited users", "Custom reporting", "Priority support", "Multi-location support"],
    highlighted: false
  }
];

export function PricingPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
              Pricing Preview
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Simple pricing. No per-technician fees.
            </h2>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Clear starting prices, flat plans, and room to grow without hidden surprises when you
              add routes or office staff.
            </p>
          </div>

          <Link
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary-light"
            href="/pricing"
          >
            Compare all features
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              className={`relative rounded-[28px] border p-7 shadow-sm transition-transform duration-200 ${
                tier.highlighted
                  ? "border-accent bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] shadow-xl xl:-translate-y-3"
                  : "border-border bg-white"
              }`}
              key={tier.name}
            >
              {tier.highlighted ? (
                <div className="absolute left-7 top-0 -translate-y-1/2 rounded-full bg-accent px-4 py-2 text-small font-semibold text-white shadow-md">
                  Most Popular
                </div>
              ) : null}

              <p className="text-small font-semibold uppercase tracking-[0.18em] text-primary-light">
                {tier.name}
              </p>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-primary">{tier.price}</p>
              <p className="mt-3 min-h-[3rem] text-small text-text-light">{tier.tagline}</p>

              <div className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <div className="flex items-start gap-3" key={feature}>
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-success/12 text-success">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="w-full justify-center" href="/pricing" variant={tier.highlighted ? "primary" : "secondary"}>
                  See plan
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-small text-text-light">
          No credit card required · Cancel anytime · Free data migration
        </p>
      </div>
    </section>
  );
}
