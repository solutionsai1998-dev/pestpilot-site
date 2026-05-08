import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "PestPilot keeps our recurring routes, invoices, and service notes in one place. My office manager finally has a clean daily board instead of three spreadsheets.",
    name: "Maria R.",
    role: "Owner, Sonoran Shield Pest",
  },
  {
    quote:
      "The chemical tracking alone saves us hours at the end of the month. Techs log what they used in the field and the records are ready when we need them.",
    name: "Jason K.",
    role: "Operations Manager, Palmetto Pest Pros",
  },
  {
    quote:
      "We moved from paper routes to PestPilot without losing our customer history. Scheduling callbacks and follow-ups is much easier now.",
    name: "Denise T.",
    role: "Co-owner, North Valley Pest Control",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
            Operator proof
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Built for the real day-to-day of pest control teams.
          </h2>
          <p className="mt-4 text-body-mobile text-text-light md:text-body">
            PestPilot helps operators organize routes, compliance, dispatch, invoices, and customer communication without enterprise complexity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <div className="rounded-card border border-border bg-white p-6 shadow-card" key={name}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-primary">
                <Quote className="h-5 w-5" />
              </div>
              <p className="mt-5 text-body-mobile text-text-light md:text-body">“{quote}”</p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-semibold text-primary">{name}</p>
                <p className="mt-1 text-small text-text-light">{role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-primary">
            Try every Professional feature free for 14 days.
          </p>
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary-light"
            href="/pricing"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
