import type { Metadata } from "next";
import { MapPinned, Navigation, Smartphone, TimerReset } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Dispatch Software for Pest Control | PestPilot",
  description:
    "Route jobs by territory, service type, and urgency with dispatch tools built for pest control operators.",
  alternates: {
    canonical: "https://pestpilot.com/features/dispatch"
  },
  openGraph: {
    title: "Dispatch Software for Pest Control | PestPilot",
    description:
      "Route jobs by territory, service type, and urgency with dispatch tools built for pest control operators.",
    url: "https://pestpilot.com/features/dispatch",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dispatch Software for Pest Control | PestPilot",
    description:
      "Route jobs by territory, service type, and urgency with dispatch tools built for pest control operators."
  }
};

const features = [
  {
    title: "Route optimization",
    description: "Cluster stops by density, urgency, and territory so techs spend more time treating and less time driving.",
    icon: MapPinned
  },
  {
    title: "GPS tracking",
    description: "See where every technician is in the day and adjust the board when callbacks or urgent jobs hit.",
    icon: Navigation
  },
  {
    title: "Real-time status updates",
    description: "Know what is en route, in progress, complete, or delayed without calling every truck for updates.",
    icon: TimerReset
  },
  {
    title: "Mobile job cards",
    description: "Push route order, property notes, and treatment context directly to the technician's phone.",
    icon: Smartphone
  }
] as const;

const steps = [
  "Drag jobs onto the board",
  "Tech sees route on phone",
  "Office tracks in real time"
];

export default function DispatchPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Dispatch</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Routes built for pest control density
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Optimize by territory, service type, and urgency so techs spend less time driving and
              more time treating.
            </p>
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
              Keep the board flexible while the day is still unfolding.
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
              Unlike generic field service tools, PestPilot is designed around route density,
              recurring treatment windows, and the reality that pest control dispatch changes by the hour.
            </p>
            <div className="mt-8">
              <Button href="/demo">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
