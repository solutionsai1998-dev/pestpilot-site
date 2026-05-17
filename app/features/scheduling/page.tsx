import type { Metadata } from "next";
import { AlertTriangle, BellRing, CalendarDays, Repeat2 } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Scheduling Software for Pest Control | PestPilot",
  description:
    "Automate recurring pest cycles, customer reminders, and conflict-free scheduling with PestPilot.",
  alternates: {
    canonical: "https://pestpilot.app/features/scheduling"
  },
  openGraph: {
    title: "Scheduling Software for Pest Control | PestPilot",
    description:
      "Automate recurring pest cycles, customer reminders, and conflict-free scheduling with PestPilot.",
    url: "https://pestpilot.app/features/scheduling",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Scheduling Software for Pest Control | PestPilot",
    description:
      "Automate recurring pest cycles, customer reminders, and conflict-free scheduling with PestPilot."
  }
};

const features = [
  {
    title: "Drag-and-drop calendar",
    description: "Move jobs fast, rebalance routes, and see the whole week without fighting a clunky scheduler.",
    icon: CalendarDays
  },
  {
    title: "Recurring cycle templates",
    description: "Set up 30/60/90 day, quarterly, and annual service patterns once, then reuse them everywhere.",
    icon: Repeat2
  },
  {
    title: "Automated customer reminders",
    description: "Reduce missed appointments with reminder messages that go out before the technician rolls.",
    icon: BellRing
  },
  {
    title: "Conflict detection",
    description: "Catch overlapping jobs, overloaded boards, and route issues before they turn into callbacks.",
    icon: AlertTriangle
  }
] as const;

const steps = [
  "Define your cycle",
  "Set it and forget it",
  "PestPilot auto-schedules each round"
];

export default function SchedulingPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Included on all plans</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Recurring pest cycles, handled automatically
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              30/60/90 day, quarterly, and annual treatments scheduled without spreadsheets, sticky
              notes, or memory. Recurring automation creates the next round for you so customers
              never disappear between service cycles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-primary/10 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/calendar.png"
              alt="PestPilot treatment calendar showing scheduled recurring jobs"
              className="w-full h-auto block"
              width={1440}
              height={900}
            />
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
              Build the cycle once, then let the system keep it moving.
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

      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
              Related Features
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Keep the day moving after the schedule is set.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Dispatch", "/features/dispatch", "Turn scheduled work into cleaner daily routes."],
              ["Team Management", "/features/team-management", "Assign the right technician and keep capacity visible."],
              ["Customer Portal & SMS", "/features/customer-portal", "Remind customers before visits and reduce no-shows."]
            ].map(([title, href, description]) => (
              <Card className="rounded-[28px] p-7" key={title}>
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-small text-text-light">{description}</p>
                <Button className="mt-6" href={href}>Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-white/8 px-8 py-12 shadow-xl backdrop-blur md:px-12 md:py-16">
            <p className="text-body-mobile text-white/84 md:text-body">
              Unlike generic field service tools, PestPilot understands recurring retreatment logic,
              seasonal timing, and the scheduling pressure that comes with route density in pest control.
            </p>
            <div className="mt-8">
              <Button href="/pricing">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
