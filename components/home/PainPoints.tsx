import Link from "next/link";
import { ClipboardList, RefreshCcw, ShieldAlert } from "lucide-react";
import { Card } from "@/components/shared/Card";

const painPoints = [
  {
    icon: ClipboardList,
    title: "Still on paper and sticky notes?",
    description:
      "Schedules living in your head, jobs scribbled on a pad, and invoices waiting until the weekend create avoidable scheduling chaos."
  },
  {
    icon: RefreshCcw,
    title: "Retreatment cycles slipping through the cracks?",
    description:
      "Recurring cycles are a mess when 30/60/90-day callbacks are tracked manually. Missed retreatment windows lead to churn and lost revenue."
  },
  {
    icon: ShieldAlert,
    title: "Dreading your next audit?",
    description:
      "Compliance anxiety is real when EPA records, chemical usage, and applicator details are spread across paper forms and memory."
  }
];

export function PainPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
            The Problem
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Running a pest control company shouldn&apos;t feel like herding bugs.
          </h2>
          <p className="mt-4 max-w-2xl text-body-mobile text-text-light md:text-body">
            Pest operators do not need another generic work order app. They need a system that
            understands callbacks, chemical logs, recurring service, and what happens when one tech
            is out sick on termite day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {painPoints.map(({ icon: Icon, title, description }) => (
            <Card
              className="group relative overflow-hidden border-border/80 bg-white hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              key={title}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#2d6a4f,#f77f00)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                {title}
              </h3>
              <p className="mt-4 text-body-mobile text-text-light md:text-body">{description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary-light"
            href="/features"
          >
            PestPilot handles all of it.
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
