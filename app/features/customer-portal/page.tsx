import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarClock, CreditCard, History, MessageSquareText } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Customer Portal & SMS | PestPilot",
  description:
    "Give customers a self-service portal to book, pay, reschedule, and receive SMS reminders without calling your office.",
  alternates: {
    canonical: "https://pestpilot.com/features/customer-portal"
  },
  openGraph: {
    title: "Customer Portal & SMS | PestPilot",
    description:
      "Give customers a self-service portal to book, pay, reschedule, and receive SMS reminders without calling your office.",
    url: "https://pestpilot.com/features/customer-portal",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Portal & SMS | PestPilot",
    description:
      "Give customers a self-service portal to book, pay, reschedule, and receive SMS reminders without calling your office."
  }
};

const benefits = [
  {
    title: "Self-service booking & rescheduling",
    description: "Customers book appointments and reschedule online without tying up your front office.",
    icon: CalendarClock
  },
  {
    title: "SMS & email reminders",
    description: "Automated appointment reminders reduce no-shows and keep customers engaged.",
    icon: MessageSquareText
  },
  {
    title: "Online invoice payments",
    description: "One-click payment from any invoice or reminder email, so you get paid faster.",
    icon: CreditCard
  },
  {
    title: "Service history at a glance",
    description: "Customers see their complete treatment history, reports, and upcoming appointments.",
    icon: History
  }
] as const;

const steps = [
  "Customer receives a magic link via email or SMS",
  "They log in to view appointments, pay invoices, and request reschedules",
  "You see all activity in your dashboard — no extra data entry"
] as const;

const relatedFeatures = [
  { title: "Scheduling", href: "/features/scheduling" },
  { title: "Invoicing", href: "/features/invoicing" },
  { title: "Branding", href: "/features/branding" }
] as const;

export default function CustomerPortalPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge>Included on all plans</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Let customers book, pay, and reschedule — without calling your office
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              A self-service portal with SMS reminders that keeps your schedule full and your customers
              happy — even between visits.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-primary/10 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/portal-login.png"
              alt="PestPilot branded customer portal login screen with secure magic link access"
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
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/portal-settings.png"
              alt="PestPilot portal settings showing customer self-service and reminder configuration"
              className="block h-auto w-full"
              width={1440}
              height={900}
            />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="rounded-[24px] p-6">
              <h2 className="text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                Customers get answers without waiting on your office.
              </h2>
              <p className="mt-3 text-small text-text-light">
                Portal access keeps appointment details, invoice links, treatment history, and service
                requests in one clean place.
              </p>
            </Card>
            <div className="overflow-hidden rounded-[24px] border border-primary/10 bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/customers.png"
                alt="PestPilot customer list showing portal-ready customer records and account activity"
                className="block h-auto w-full"
                width={1440}
                height={900}
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
              Customers take action on their own, while your team stays in control.
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
          <div className="mx-auto max-w-4xl rounded-[32px] border border-success/20 bg-success/8 px-8 py-10 text-center shadow-sm">
            <Badge className="border-success/25 bg-success/10 text-success">Included on all plans</Badge>
            <p className="mt-4 text-small text-text-light">
              Customer portal is included on every plan. SMS reminders are available on Professional.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-h2-mobile font-bold tracking-tight md:text-h2-desktop">
            Ready to let customers handle the simple stuff?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-mobile text-white/80 md:text-body">
            Start with a portal that reduces calls, speeds up payments, and keeps appointments moving.
          </p>
          <div className="mt-8">
            <Button href="/pricing">Start Free Trial</Button>
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
