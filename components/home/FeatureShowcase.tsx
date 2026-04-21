"use client";

import clsx from "clsx";
import { Building2, Check, MapPinned, Sparkles, Users } from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    id: "office",
    label: "For the Office",
    shortLabel: "Office",
    icon: Building2,
    eyebrow: "For the Office",
    title: "Keep the front office ahead of the board, the phones, and the paperwork.",
    description:
      "Office staff can schedule faster, see retreatment demand before it becomes a fire drill, and keep revenue moving without piecing together three different tools.",
    features: [
      "Drag-and-drop scheduling with recurring cycle templates",
      "Customer CRM with treatment history and property notes",
      "Automated invoicing and payment collection",
      "Chemical inventory tracking and EPA compliance reports"
    ],
    comingSoonIndices: [],
    dashboardTitle: "Dispatch Board",
    cards: [
      { label: "Open schedule gaps", value: "3" },
      { label: "Invoices sent today", value: "24" },
      { label: "Callbacks due this week", value: "11" }
    ]
  },
  {
    id: "field-techs",
    label: "For Field Techs",
    shortLabel: "Field",
    icon: MapPinned,
    eyebrow: "For Field Techs",
    title: "Give techs everything they need in the truck, on site, and underground.",
    description:
      "Technicians get a clean mobile workflow with route order, treatment details, application logging, and signature capture even when service happens in weak-signal zones.",
    features: [
      "Mobile job view with route order and GPS directions",
      "One-tap chemical application logging",
      "Capture signatures and site photos on completion",
      "Offline mode for crawl spaces, attics, and remote properties"
    ],
    comingSoonIndices: [],
    dashboardTitle: "Tech Day View",
    cards: [
      { label: "Stops completed", value: "8/11" },
      { label: "Chemical entries synced", value: "14" },
      { label: "Average stop time", value: "27m" }
    ]
  },
  {
    id: "customers",
    label: "For Customers",
    shortLabel: "Customer",
    icon: Users,
    eyebrow: "For Customers",
    title: "Make service feel modern without making your team do more admin.",
    description:
      "Customers can book online, pay online, and see their service history while reminders and digital reports keep the relationship active between visits.",
    features: [
      "Online booking and self-service portal",
      "Automated text and email reminders before treatments",
      "Digital service reports with treatment details",
      "One-click payments from invoice and reminder links"
    ],
    comingSoonIndices: [0],
    dashboardTitle: "Customer Portal",
    cards: [
      { label: "Bookings this week", value: "19" },
      { label: "Reminder delivery", value: "98%" },
      { label: "Invoices paid online", value: "72%" }
    ]
  }
] as const;

export function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("office");
  const activePanel = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const ActiveIcon = activePanel.icon;

  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
            Feature Showcase
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            One platform for the office, the field, and the customer.
          </h2>
          <p className="mt-4 text-body-mobile text-text-light md:text-body">
            The workflow changes depending on who is using it. PestPilot organizes the product the
            same way your business operates.
          </p>
        </div>

        <div className="mt-10 border-b border-border">
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;

              return (
                <button
                  aria-controls={`feature-panel-${tab.id}`}
                  aria-selected={isActive}
                  className={clsx(
                    "group relative inline-flex items-center gap-3 border-b-2 px-1 py-4 text-left transition",
                    isActive
                      ? "border-accent text-primary"
                      : "border-transparent text-text-light hover:text-primary"
                  )}
                  id={`feature-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  type="button"
                >
                  <span
                    className={clsx(
                      "inline-flex h-10 w-10 items-center justify-center rounded-full transition",
                      isActive ? "bg-accent/15 text-accent" : "bg-white text-primary"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-base font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          aria-labelledby={`feature-tab-${activePanel.id}`}
          className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center"
          id={`feature-panel-${activePanel.id}`}
          role="tabpanel"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2 text-small font-semibold text-primary">
              <ActiveIcon className="h-4 w-4" />
              {activePanel.eyebrow}
            </div>
            <h3 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
              {activePanel.title}
            </h3>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              {activePanel.description}
            </p>

            <ul className="mt-6 space-y-4">
              {activePanel.features.map((feature, idx) => (
                <li className="flex items-start gap-3" key={feature}>
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-base text-text">{feature}</span>
                  {(activePanel.comingSoonIndices as readonly number[]).includes(idx) && (
                    <span className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      <Sparkles className="h-3 w-3" />
                      Coming soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -right-2 bottom-2 h-20 w-20 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-primary/10 bg-white p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-small font-semibold uppercase tracking-[0.22em] text-primary-light">
                    {activePanel.dashboardTitle}
                  </p>
                  <p className="mt-1 text-sm text-text-light">{activePanel.shortLabel} workspace mockup</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.85fr]">
                <div className="rounded-3xl bg-bg-alt p-4">
                  <div className="grid grid-cols-3 gap-3">
                    {activePanel.cards.map((card) => (
                      <div className="rounded-2xl bg-white p-4 shadow-sm" key={card.label}>
                        <p className="text-small text-text-light">{card.label}</p>
                        <p className="mt-2 text-2xl font-bold text-primary">{card.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-3xl border border-dashed border-primary/20 bg-white p-4">
                    <p className="text-small uppercase tracking-[0.18em] text-text-light">
                      Live workflow
                    </p>
                    <div className="mt-4 space-y-3">
                      {activePanel.features.slice(0, 3).map((feature) => (
                        <div
                          className="flex items-center justify-between rounded-2xl border border-border px-4 py-3"
                          key={feature}
                        >
                          <span className="max-w-[16rem] text-sm text-text">{feature}</span>
                          <span className="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                            Active
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-3xl bg-primary p-5 text-white">
                  <p className="text-small uppercase tracking-[0.18em] text-white/60">Snapshot</p>
                  <p className="text-xl font-semibold">Purpose-built for pest control workflows</p>
                  <div className="space-y-3">
                    {[
                      "Recurring schedules are visible before they slip.",
                      "Job details, signatures, and service history stay attached.",
                      "Team-wide updates stay in sync across office and field."
                    ].map((line) => (
                      <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/84" key={line}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
