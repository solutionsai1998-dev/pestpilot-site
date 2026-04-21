import type { Metadata } from "next";
import { ArrowRight, Calendar, FlaskConical, Map, Receipt, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Pest Control Software | PestPilot",
  description:
    "PestPilot is pest control software built for scheduling, dispatch, invoicing, chemical tracking, and EPA compliance."
};

const highlights = [
  {
    title: "Recurring cycle management",
    description:
      "Build 30/60/90 day, quarterly, and annual service schedules without relying on spreadsheets or memory.",
    icon: Calendar
  },
  {
    title: "Chemical tracking & EPA compliance",
    description:
      "Log treatments, manage inventory by lot, and keep reports ready for inspections without extra admin work.",
    icon: FlaskConical
  },
  {
    title: "Route-optimized dispatch",
    description:
      "Organize jobs by territory, urgency, and density so technicians spend more time treating and less time driving.",
    icon: Map
  },
  {
    title: "Automated invoicing",
    description:
      "Generate invoices on completion, send reminders automatically, and stay aligned with recurring billing cycles.",
    icon: Receipt
  }
] as const;

const comparisons = [
  {
    title: "vs. Housecall Pro",
    description:
      "Housecall Pro serves 20+ industries. PestPilot serves one. That means pest-specific features like chemical tracking and recurring cycle management aren't add-ons, they're core."
  },
  {
    title: "vs. GorillaDesk",
    description:
      "GorillaDesk splits focus across pest, lawn, and cleaning. PestPilot goes deep on pest control compliance, reporting, and workflows."
  },
  {
    title: "vs. Jobber",
    description:
      "Jobber is a great general tool. But pest control has unique needs, EPA logs, retreatment cycles, chemical inventory, that generic tools treat as afterthoughts."
  }
] as const;

const personas = [
  {
    title: "Solo operators (1-2 techs)",
    description: "Replace paper and spreadsheets"
  },
  {
    title: "Growing teams (3-5 techs)",
    description: "Streamline dispatch and compliance"
  },
  {
    title: "Established companies (6-10+ techs)",
    description: "Scale without per-seat pricing pain"
  }
] as const;

export default function PestControlSoftwarePage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge>
              <ShieldCheck className="mr-2 h-4 w-4" />
              Pest Control Software
            </Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              The pest control software built for how you actually work.
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Scheduling, dispatch, invoicing, chemical tracking, and EPA compliance, all in one
              platform designed exclusively for pest control operators.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
              Why pest control operators choose PestPilot
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Built around recurring routes, compliance pressure, and office-to-field coordination.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <Card className="rounded-[28px] p-7" key={highlight.title}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-small text-text-light">{highlight.description}</p>
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
              How PestPilot compares
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              General field service software can work. Purpose-built software works better.
            </h2>
          </div>
          <div className="mt-10 space-y-6">
            {comparisons.map((comparison) => (
              <Card className="rounded-[28px] p-7" key={comparison.title}>
                <h3 className="text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                  {comparison.title}
                </h3>
                <p className="mt-3 text-body-mobile text-text-light md:text-body">
                  {comparison.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
              Who is PestPilot for?
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Built to fit different stages of growth without changing the core workflow.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {personas.map((persona) => (
              <Card className="rounded-[28px] p-7" key={persona.title}>
                <h3 className="text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                  {persona.title}
                </h3>
                <p className="mt-3 text-small text-text-light">{persona.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-white/8 px-8 py-12 text-center shadow-xl backdrop-blur md:px-12 md:py-16">
            <h2 className="text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
              Ready to try pest control software that actually gets your business?
            </h2>
            <div className="mt-8 flex justify-center">
              <Button href="/demo">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
