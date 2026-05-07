import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Palette, Sparkles, Store } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Branding & White-Label | PestPilot",
  description:
    "Customize PestPilot with your logo, brand colors, white-labeled customer portal, invoices, reports, emails, and SMS.",
  alternates: {
    canonical: "https://pestpilot.com/features/branding"
  },
  openGraph: {
    title: "Branding & White-Label | PestPilot",
    description:
      "Customize PestPilot with your logo, brand colors, white-labeled customer portal, invoices, reports, emails, and SMS.",
    url: "https://pestpilot.com/features/branding",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding & White-Label | PestPilot",
    description:
      "Customize PestPilot with your logo, brand colors, white-labeled customer portal, invoices, reports, emails, and SMS."
  }
};

const benefits = [
  {
    title: "Custom logo & brand colors",
    description: "Upload your logo and set your brand color — it appears on invoices, the portal, and reports.",
    icon: Palette
  },
  {
    title: "White-labeled customer portal",
    description: "Customers see your branding, not PestPilot's, when they book and pay.",
    icon: Store
  },
  {
    title: "Professional invoices & reports",
    description: "Every document that leaves your office carries your brand identity.",
    icon: FileText
  },
  {
    title: "Consistent experience across touchpoints",
    description: "Portal, emails, SMS, and PDFs all match your visual identity.",
    icon: Sparkles
  }
] as const;

const steps = [
  "Upload your logo and pick your brand color in Settings",
  "PestPilot applies your branding to the customer portal, invoices, and reports",
  "Customers see a polished, professional experience that builds trust"
] as const;

const relatedFeatures = [
  { title: "Customer Portal", href: "/features/customer-portal" },
  { title: "Invoicing", href: "/features/invoicing" }
] as const;

export default function BrandingPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge>Branding & White-Label</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Your brand, your way — on every invoice, portal, and customer touchpoint
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Custom logos, brand colors, and a white-labeled customer portal so your business looks
              as professional as the service you provide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-primary/10 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/branding.png"
              alt="PestPilot branding settings with custom logo upload and brand color controls"
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
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/portal-settings.png"
                alt="PestPilot customer portal settings showing branded portal options for invoices and service history"
                className="block h-auto w-full"
                width={1440}
                height={900}
              />
            </div>
            <div>
              <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
                Product proof
              </p>
              <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
                The customer experience looks like your company from start to finish.
              </h2>
              <p className="mt-4 text-body-mobile text-text-light md:text-body">
                PestPilot carries your logo and color system across the portal, invoices, reports,
                email reminders, and customer-facing PDFs.
              </p>
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
              Set the brand once, then every customer touchpoint follows it.
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
          <div className="mx-auto max-w-4xl rounded-[32px] border border-purple-200 bg-purple-50 px-8 py-10 text-center shadow-sm">
            <Badge className="border-purple-200 bg-purple-100 text-purple-700">Enterprise only</Badge>
            <p className="mt-4 text-small text-text-light">
              White-label branding is included on Enterprise plans.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-h2-mobile font-bold tracking-tight md:text-h2-desktop">
            Ready for every touchpoint to look like your company?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-mobile text-white/80 md:text-body">
            Start with a branded portal, polished documents, and customer communication that builds trust.
          </p>
          <div className="mt-8">
            <Button href="/pricing">Start Free Trial</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-h3-mobile font-semibold text-primary md:text-h3-desktop">Related features</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
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
