import type { Metadata } from "next";
import { BellRing, CreditCard, Receipt, Repeat2 } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Pest Control Invoicing Software | PestPilot",
  description:
    "Generate invoices on completion, collect field payments, and automate recurring billing with PestPilot."
};

const features = [
  {
    title: "On-site card payments",
    description: "Let technicians collect payment in the field so completed work turns into cash faster.",
    icon: CreditCard
  },
  {
    title: "Recurring service billing",
    description: "Keep quarterly and annual customers on the right billing rhythm without manual follow-up.",
    icon: Repeat2
  },
  {
    title: "QuickBooks sync",
    description: "Push invoice data into accounting workflows without double entry or end-of-week cleanup.",
    icon: Receipt
  },
  {
    title: "Payment reminder automation",
    description: "Follow up automatically with reminder messages when invoices stay open after the visit.",
    icon: BellRing
  }
] as const;

const steps = [
  "Complete the job",
  "Invoice generates automatically",
  "Customer pays online or in person"
];

export default function InvoicingPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Invoicing</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Get paid on-site, every time
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Send invoices the moment a job is done. Collect payment in the field and sync
              everything back to the office.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card className="rounded-[28px] p-7" key={feature.title}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-small text-text-light">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
              How it works
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Finish the work, send the invoice, collect the payment.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card className="rounded-[28px] p-7" key={step}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {index + 1}
                </div>
                <p className="mt-5 text-lg font-semibold text-primary">{step}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-white/8 px-8 py-12 shadow-xl backdrop-blur md:px-12 md:py-16">
            <p className="text-body-mobile text-white/84 md:text-body">
              Unlike generic field service tools, PestPilot ties billing directly to treatment
              completion and recurring service cycles, so collections stay aligned with how pest control work actually happens.
            </p>
            <div className="mt-8">
              <Button href="/demo">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
