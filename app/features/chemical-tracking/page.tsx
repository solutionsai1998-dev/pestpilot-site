import type { Metadata } from "next";
import { BellRing, ClipboardCheck, FileStack, FlaskConical, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Chemical Tracking Software for Pest Control | PestPilot",
  description:
    "Track chemical usage, inventory lots, and EPA compliance reporting with software built specifically for pest control.",
  alternates: {
    canonical: "https://pestpilot.app/features/chemical-tracking"
  },
  openGraph: {
    title: "Chemical Tracking Software for Pest Control | PestPilot",
    description:
      "Track chemical usage, inventory lots, and EPA compliance reporting with software built specifically for pest control.",
    url: "https://pestpilot.app/features/chemical-tracking",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemical Tracking Software for Pest Control | PestPilot",
    description:
      "Track chemical usage, inventory lots, and EPA compliance reporting with software built specifically for pest control."
  }
};

const features = [
  {
    title: "Automatic application logs",
    description: "Capture product, rate, applicator, and treatment details as part of the job workflow without double entry.",
    icon: ClipboardCheck
  },
  {
    title: "Chemical inventory with lot tracking",
    description: "Track product movement by lot so you know what was used, where it went, and what is running low.",
    icon: FlaskConical
  },
  {
    title: "One-click EPA compliance reports",
    description: "Generate the records you need for inspections without stitching together spreadsheets and paper forms.",
    icon: FileStack
  },
  {
    title: "Applicator license verification",
    description: "Track applicator licenses with automatic expiry alerts so certifications never lapse unnoticed.",
    icon: ShieldCheck
  }
] as const;

const steps = [
  "Tech logs treatment in the field",
  "Inventory updates automatically",
  "Compliance report ready when you need it"
];

export default function ChemicalTrackingPage() {
  return (
    <>
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="border-white/20 bg-white/10 text-accent">Included on all plans</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-white md:text-h1-desktop">
              EPA compliance, built in. Not bolted on.
            </h1>
            <p className="mt-4 text-body-mobile text-white/78 md:text-body">
              Every application logged automatically. Inventory tracked by lot. Reports ready for audit, always.
            </p>
            <div className="mt-8 rounded-[28px] border border-accent/30 bg-white/10 p-6 text-left shadow-xl backdrop-blur md:p-8">
              <p className="text-lg font-semibold text-white">
                Passed your last EPA audit? With PestPilot, you&apos;ll be ready for the next one without the scramble.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-primary/10 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/chemicals.png"
              alt="PestPilot chemical tracking showing product inventory and application logs"
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
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 text-accent">
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Badge>License Tracking · Professional</Badge>
              <h2 className="mt-5 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
                Keep every applicator certified before the next job is assigned.
              </h2>
              <p className="mt-4 text-body-mobile text-text-light md:text-body">
                Track applicator licenses with automatic expiry alerts. Never let a certification lapse — PestPilot sends reminders before licenses expire.
              </p>
              <div className="mt-6 flex items-center gap-3 text-small font-semibold text-primary">
                <BellRing className="h-5 w-5 text-accent" />
                Expiry reminders before compliance becomes urgent
              </div>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-primary/10 bg-white shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/licenses.png"
                alt="PestPilot applicator license tracking with expiry dates"
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
            <Badge>EPA Reporting</Badge>
            <h2 className="mt-5 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Inspection-ready records in one click.
            </h2>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              PestPilot turns field application logs, chemical inventory, applicator details, and treatment history into EPA compliance reports without rebuilding the story from paper forms.
            </p>
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
              Compliance stays current because it happens inside the service workflow.
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
              Unlike generic field service tools, PestPilot treats chemical tracking as a first-class
              workflow, not an afterthought tacked on after scheduling and invoicing were already designed.
            </p>
            <div className="mt-8">
              <Button href="/demo">Book a Demo</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
