import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPinned, Route, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Team & Technician Management | PestPilot",
  description:
    "Manage technician accounts, role-based access, mobile routes, GPS check-ins, and license tracking in PestPilot.",
  alternates: {
    canonical: "https://pestpilot.app/features/team-management"
  },
  openGraph: {
    title: "Team & Technician Management | PestPilot",
    description:
      "Manage technician accounts, role-based access, mobile routes, GPS check-ins, and license tracking in PestPilot.",
    url: "https://pestpilot.app/features/team-management",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Team & Technician Management | PestPilot",
    description:
      "Manage technician accounts, role-based access, mobile routes, GPS check-ins, and license tracking in PestPilot."
  }
};

const benefits = [
  {
    title: "Technician accounts with role-based access",
    description: "Each tech sees only their jobs, routes, and schedules.",
    icon: ShieldCheck
  },
  {
    title: "GPS check-in at job sites",
    description: "Automatic time stamps and location verification when techs arrive.",
    icon: MapPinned
  },
  {
    title: "Mobile route view",
    description: "Turn-by-turn directions with optimized stop order.",
    icon: Route
  },
  {
    title: "License & certification tracking",
    description: "Never let a license expire with automatic expiry alerts.",
    icon: BadgeCheck
  }
] as const;

const steps = [
  "Invite technicians via email with role-based permissions",
  "Techs see their daily route with GPS directions to each stop",
  "They check in on-site, log treatments, capture signatures — all from their phone"
] as const;

const relatedFeatures = [
  { title: "Dispatch", href: "/features/dispatch" },
  { title: "Chemical Tracking", href: "/features/chemical-tracking" },
  { title: "Reporting", href: "/features/reporting" }
] as const;

export default function TeamManagementPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge>Flexible team seats</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Give your techs the tools to work independently — without losing visibility
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Technician accounts, role-based access, mobile routes, and GPS check-ins so your team
              runs smoothly whether they&apos;re in the office or in the field.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-primary/10 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/team.png"
              alt="PestPilot team management screen showing technician accounts and role-based permissions"
              className="block h-auto w-full"
              width={1440}
              height={900}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card className="rounded-[28px] p-7" key={benefit.title}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                    {benefit.title}
                  </h2>
                  <p className="mt-3 text-small text-text-light">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
                Product proof
              </p>
              <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
                Route work stays mobile while the office keeps a live view.
              </h2>
              <p className="mt-4 text-body-mobile text-text-light md:text-body">
                Techs can follow the day&apos;s route, check in at each property, and complete job details
                from the same phone-friendly workflow.
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/technician-mobile-route.png"
                alt="PestPilot mobile technician route showing scheduled stops and navigation from a phone"
                className="block h-auto w-full"
                width={900}
                height={1200}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
              How it works
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Set permissions once, then let each tech run the route from their phone.
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

      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-sky-200 bg-sky-50 px-8 py-10 text-center shadow-sm">
            <Badge className="border-sky-200 bg-sky-100 text-sky-700">Flexible seats</Badge>
            <p className="mt-4 text-small text-text-light">
              Starter includes 2 users and Professional includes 5 users. Both plans add seats at $19/mo each with no hard cap.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-h2-mobile font-bold tracking-tight md:text-h2-desktop">
            Ready to give every tech a cleaner day in the field?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-mobile text-white/80 md:text-body">
            Start with routes, permissions, and check-ins that keep the field and office aligned.
          </p>
          <div className="mt-8">
            <Button href="/demo">Book a Demo</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-h3-mobile font-semibold text-primary md:text-h3-desktop">Related features</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedFeatures.map((feature) => (
              <Link
                className="flex items-center justify-between rounded-2xl border border-border bg-white p-5 text-primary transition hover:border-primary/40 hover:shadow-sm"
                href={feature.href}
                key={feature.href}
              >
                <span className="font-semibold">{feature.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
