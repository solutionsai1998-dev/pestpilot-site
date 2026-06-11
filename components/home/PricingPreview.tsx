import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { pricingTiers } from "@/lib/pricing";

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
              Simple pricing. Two plans, annual savings, and flexible seats.
            </h2>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Starter is $49/mo ($39/mo annual) with 2 users included. Professional is $99/mo ($89/mo annual) with
              5 users included. Both plans add $19/mo seats after that.
            </p>
          </div>

          <Link
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary-light"
            href="/demo"
          >
            Compare all features
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
          {pricingTiers.monthly.map((tier) => (
            <div
              className={`relative rounded-[28px] border p-7 shadow-sm transition-transform duration-200 ${
                tier.highlighted
                  ? "border-accent bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] shadow-xl xl:-translate-y-3"
                  : "border-border bg-white"
              }`}
              key={tier.name}
            >
              {tier.badge ? (
                <div className="absolute left-7 top-0 -translate-y-1/2 rounded-full bg-accent px-4 py-2 text-small font-semibold text-white shadow-md">
                  {tier.badge}
                </div>
              ) : null}

              <p className="text-small font-semibold uppercase tracking-[0.18em] text-primary-light">
                {tier.name}
              </p>
              <div className="mt-4">
                <p className="text-4xl font-extrabold tracking-tight text-primary">{tier.price}/mo</p>
                <p className="mt-1 text-small font-semibold text-accent">{tier.annualPrice}/mo annual</p>
              </div>
              <p className="mt-3 min-h-[3rem] text-small text-text-light">{tier.tagline}</p>
              <p className="mt-4 rounded-2xl bg-bg-alt px-4 py-3 text-sm font-semibold text-primary">{tier.seatInfo}</p>

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
                <Button className="w-full justify-center" href="/demo" variant={tier.highlighted ? "primary" : "secondary"}>
                  Book a Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-small text-text-light">
          14-day free trial · Launch pricing guaranteed through 2026 · Cancel anytime
        </p>
      </div>
    </section>
  );
}
