import type { Metadata } from "next";
import { Compass, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "About PestPilot | Built for Pest Control Operators",
  description:
    "Learn why PestPilot exists and how we're building software specifically for pest control operators, not generic field service businesses."
};

const values = [
  {
    title: "Pest control only",
    description:
      "We serve one industry. Every feature, every workflow, every decision is filtered through the lens of a pest control operator.",
    icon: Compass
  },
  {
    title: "Paper to digital in 15 minutes",
    description:
      "If your tech can't figure it out on the first try, we failed. Simple is a feature.",
    icon: Sparkles
  },
  {
    title: "Compliance without panic",
    description:
      "EPA audits shouldn't require a week of spreadsheet scrambling. We automate the paper trail.",
    icon: ShieldCheck
  }
] as const;

const team = [
  {
    name: "Mason Reed",
    role: "Product Lead",
    bio: "Spent years watching office teams wrestle with route boards, callbacks, and recurring treatments that generic software never really understood."
  },
  {
    name: "Avery Collins",
    role: "Operations Advisor",
    bio: "Works directly with pest control operators to turn field headaches into workflows that save time instead of adding more admin."
  },
  {
    name: "Jordan Hale",
    role: "Customer Success",
    bio: "Focused on helping companies move from paper, spreadsheets, and patchwork tools into one system their team can actually use."
  }
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>About</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Built by pest control people, for pest control people.
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              We got tired of watching PCOs struggle with generic software. So we built something
              specific.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
                Why PestPilot exists
              </p>
              <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
                Generic software got the job done, but it never matched the job.
              </h2>
              <div className="mt-6 space-y-5 text-body-mobile text-text-light md:text-body">
                <p>
                  We saw pest control operators using Housecall Pro, GorillaDesk, and Jobber, tools
                  built for plumbers and cleaning companies. They worked okay, but they weren't
                  built for how pest control actually runs.
                </p>
                <p>
                  The recurring cycles. The chemical tracking. The EPA compliance. The seasonal
                  surges. Those details are the business, not edge cases. But in generic software,
                  they usually show up as workarounds, extra notes, or another spreadsheet someone
                  has to maintain.
                </p>
                <p>
                  So we built PestPilot, pest control software that does one thing well. It helps
                  office teams schedule faster, gives technicians a cleaner field workflow, and
                  keeps compliance ready without turning the whole company into part-time admins.
                </p>
              </div>
            </div>

            <Card className="rounded-[32px] border-primary/10 bg-[linear-gradient(180deg,#f8f9fa_0%,#ffffff_100%)] p-8">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                <Users className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                One industry. One standard.
              </h3>
              <p className="mt-3 text-small text-text-light">
                PestPilot is focused on the realities of route density, treatment histories,
                recurring plans, and compliance pressure, because that is what pest control teams
                manage every day.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
              What we believe
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              The product should fit the operator, not force the operator to adapt.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card className="rounded-[28px] p-7" key={value.title}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-small text-text-light">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
              Team
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Small team, big focus
            </h2>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              We keep the team lean so the product stays clear, fast, and close to what operators
              actually need in the field and in the office.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <Card className="rounded-[28px] p-7" key={member.name}>
                <p className="text-lg font-semibold text-primary">{member.name}</p>
                <p className="mt-2 text-small font-medium uppercase tracking-[0.2em] text-primary-light">
                  {member.role}
                </p>
                <p className="mt-4 text-small text-text-light">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-white/8 px-8 py-12 text-center shadow-xl backdrop-blur md:px-12 md:py-16">
            <h2 className="text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
              Ready to see what pest-control-specific software looks like?
            </h2>
            <div className="mt-8">
              <Button href="/demo">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
