import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const proofPoints = [
  {
    title: "Daily route work",
    description:
      "Built around recurring service plans, technician assignments, job notes, callbacks, and a dispatch board operators can scan quickly.",
  },
  {
    title: "Chemical records",
    description:
      "Technicians can log products and usage in the field so service history, inventory, and reporting stay tied to the actual job.",
  },
  {
    title: "Customer follow-up",
    description:
      "Customer profiles, invoices, portal access, reminders, and recurring work live together instead of being split across spreadsheets.",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
            Built from field workflows
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Built for the real day-to-day of pest control teams.
          </h2>
          <p className="mt-4 text-body-mobile text-text-light md:text-body">
            PestPilot helps operators organize routes, compliance, dispatch, invoices, and customer communication without enterprise complexity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {proofPoints.map(({ title, description }) => (
            <div className="rounded-card border border-border bg-white p-6 shadow-card" key={title}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-body-mobile text-text-light md:text-body">{description}</p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-small font-semibold uppercase tracking-[0.18em] text-primary-light">
                  Verified product workflow
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-primary">
            Want to see the workflow against your operation?
          </p>
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary-light"
            href="/demo"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
