import type { Metadata } from "next";
import { BarChart3, Bug, DollarSign, PhoneCall, Users } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Pest Control Reporting Software | PestPilot",
  description:
    "Track callbacks, recurring revenue, chemical usage, and technician performance with PestPilot reporting dashboards.",
  alternates: {
    canonical: "https://pestpilot.com/features/reporting"
  },
  openGraph: {
    title: "Pest Control Reporting Software | PestPilot",
    description:
      "Track callbacks, recurring revenue, chemical usage, and technician performance with PestPilot reporting dashboards.",
    url: "https://pestpilot.com/features/reporting",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Reporting Software | PestPilot",
    description:
      "Track callbacks, recurring revenue, chemical usage, and technician performance with PestPilot reporting dashboards."
  }
};

const features = [
  {
    title: "Callback tracking that shows where service is slipping",
    description: "Spot service quality issues fast by seeing which routes, techs, or service types are driving callbacks before repeat problems pile up.",
    icon: Bug
  },
  {
    title: "Chemical usage reports",
    description: "Measure product usage across jobs, technicians, and accounts without waiting for end-of-month cleanup.",
    icon: BarChart3
  },
  {
    title: "Recurring revenue dashboard",
    description: "Keep an eye on the health of your route book, renewal base, and future service value in one place.",
    icon: DollarSign
  },
  {
    title: "Technician scorecards for better reviews",
    description: "Compare jobs completed, average service time, customer callbacks, and revenue generated across the whole team.",
    icon: Users
  }
] as const;

const steps = [
  "Data flows in from every job",
  "Dashboards update automatically",
  "Export or share when needed"
];

export default function ReportingPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Reporting · Enterprise scorecards</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Dashboards that show what actually matters
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              See callback rates, recurring revenue, chemical usage, and technician performance in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-primary/10 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/reports.png"
              alt="PestPilot revenue dashboard showing monthly revenue, AR aging, and technician metrics"
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Badge>Technician Scorecards · Enterprise</Badge>
              <h2 className="mt-5 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
                Make performance reviews about facts, not gut feel.
              </h2>
              <p className="mt-4 text-body-mobile text-text-light md:text-body">
                See how each technician performs — jobs completed, average service time, customer callbacks, and revenue generated. Scorecards make performance reviews data-driven instead of guesswork.
              </p>
              <div className="mt-6 flex items-center gap-3 text-small font-semibold text-primary">
                <PhoneCall className="h-5 w-5 text-accent" />
                Callback tracking connects service quality to each route and technician.
              </div>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-primary/10 bg-white shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/scorecards.png"
                alt="PestPilot technician scorecards showing jobs completed and callback metrics"
                className="block h-auto w-full"
                width={1440}
                height={900}
              />
            </div>
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
              The data is already there. PestPilot turns it into something you can act on.
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
              Unlike generic field service tools, PestPilot reports on the metrics pest control operators actually manage by, from recurring revenue health to chemical usage and callback pressure.
            </p>
            <div className="mt-8">
              <Button href="/early-access">Apply for Early Access</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
