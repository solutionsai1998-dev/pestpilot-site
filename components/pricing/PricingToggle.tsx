"use client";

import { useState } from "react";
import { TierCard } from "@/components/pricing/TierCard";

const plans = {
  monthly: [
    {
      name: "Starter",
      price: "$99",
      description: "For solo operators ready to replace paper, spreadsheets, and callback chaos.",
      features: [
        "Up to 3 users",
        "Scheduling and recurring cycles",
        "Customer CRM and service history",
        "Essential chemical logs"
      ],
      highlighted: false,
      badge: undefined
    },
    {
      name: "Professional",
      price: "$199",
      description: "For growing teams that need dispatch, reminders, and full compliance visibility.",
      features: [
        "Up to 10 users",
        "Advanced dispatch and routing",
        "Full chemical inventory tracking",
        "One-click EPA compliance reports"
      ],
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$299",
      description: "For established operators managing multiple crews, territories, or locations.",
      features: [
        "Unlimited users",
        "Custom reporting dashboards",
        "Priority onboarding and support",
        "Multi-location management"
      ],
      highlighted: false,
      badge: undefined
    }
  ],
  annual: [
    {
      name: "Starter",
      price: "$79",
      description: "For solo operators ready to replace paper, spreadsheets, and callback chaos.",
      features: [
        "Up to 3 users",
        "Scheduling and recurring cycles",
        "Customer CRM and service history",
        "Essential chemical logs"
      ],
      highlighted: false,
      badge: undefined
    },
    {
      name: "Professional",
      price: "$169",
      description: "For growing teams that need dispatch, reminders, and full compliance visibility.",
      features: [
        "Up to 10 users",
        "Advanced dispatch and routing",
        "Full chemical inventory tracking",
        "One-click EPA compliance reports"
      ],
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$249",
      description: "For established operators managing multiple crews, territories, or locations.",
      features: [
        "Unlimited users",
        "Custom reporting dashboards",
        "Priority onboarding and support",
        "Multi-location management"
      ],
      highlighted: false,
      badge: undefined
    }
  ]
};

export function PricingToggle() {
  type BillingCycle = "monthly" | "annual";
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div aria-label="Billing frequency" className="inline-flex rounded-full border border-border bg-bg-alt p-1 shadow-sm" role="tablist">
          <button
            aria-controls="pricing-panel-monthly"
            aria-selected={billingCycle === "monthly"}
            className={`rounded-full px-5 py-2 text-small font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
              billingCycle === "monthly" ? "bg-white text-primary shadow-sm" : "text-text-light"
            }`}
            id="pricing-tab-monthly"
            onClick={() => setBillingCycle("monthly")}
            role="tab"
            tabIndex={billingCycle === "monthly" ? 0 : -1}
            type="button"
          >
            Monthly
          </button>
          <button
            aria-controls="pricing-panel-annual"
            aria-selected={billingCycle === "annual"}
            className={`rounded-full px-5 py-2 text-small font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
              billingCycle === "annual"
                ? "bg-primary text-white shadow-sm"
                : "text-text-light"
            }`}
            id="pricing-tab-annual"
            onClick={() => setBillingCycle("annual")}
            role="tab"
            tabIndex={billingCycle === "annual" ? 0 : -1}
            type="button"
          >
            Annual
            <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
              Save 2 months
            </span>
          </button>
        </div>
      </div>

      <div
        aria-labelledby={billingCycle === "monthly" ? "pricing-tab-monthly" : "pricing-tab-annual"}
        className="mt-10 grid gap-6 xl:grid-cols-3"
        id={billingCycle === "monthly" ? "pricing-panel-monthly" : "pricing-panel-annual"}
        role="tabpanel"
        tabIndex={0}
      >
        {plans[billingCycle].map((plan) => (
          <TierCard
            badge={plan.badge}
            billingLabel={billingCycle === "monthly" ? "/mo" : "/mo billed annually"}
            ctaLabel="Start Free Trial"
            description={plan.description}
            features={plan.features}
            highlighted={plan.highlighted}
            href="/demo"
            key={`${billingCycle}-${plan.name}`}
            name={plan.name}
            price={plan.price}
          />
        ))}
      </div>
    </>
  );
}
