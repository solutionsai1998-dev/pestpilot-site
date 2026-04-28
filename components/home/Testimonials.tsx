import Link from "next/link";
import { ArrowRight, Compass, MessageSquare, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Help shape the roadmap",
    body: "Work directly with the builder on the workflows that matter most to solo operators and small pest control teams."
  },
  {
    icon: Wrench,
    title: "Launch with hands-on setup",
    body: "Get help importing customers, mapping recurring services, and dialing in the day-to-day system before you go live."
  },
  {
    icon: MessageSquare,
    title: "Stay close to product updates",
    body: "Founding users get a direct line for feedback, priority fixes, and new features as PestPilot expands."
  }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
            Founding operator access
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Get in early and build your operating system the right way.
          </h2>
          <p className="mt-4 text-body-mobile text-text-light md:text-body">
            PestPilot is opening to a small group of founding users who want a premium, purpose-built
            platform for scheduling, compliance, dispatch, and customer communication.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pillars.map(({ body, icon: Icon, title }) => (
            <div
              className="rounded-card border border-border bg-white p-6 shadow-card"
              key={title}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-body-mobile text-text-light md:text-body">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-primary">
            Apply for early access and claim a founding-user rollout slot
          </p>
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary-light"
            href="/early-access"
          >
            Apply for early access
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
