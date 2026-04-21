import { BellRing, CalendarSync, LayoutDashboard, Repeat2, ShieldCheck } from "lucide-react";

const cycleStages = [
  { label: "Initial", day: "Day 0", detail: "First inspection and treatment" },
  { label: "30-Day", day: "Day 30", detail: "Follow-up auto-scheduled" },
  { label: "60-Day", day: "Day 60", detail: "Reminder sent before visit" },
  { label: "Quarterly", day: "Ongoing", detail: "Quarterly cycle locked in" }
];

const features = [
  {
    icon: Repeat2,
    title: "Flexible cycle templates",
    body: "Build 30/60/90 day, monthly, quarterly, and custom retreatment workflows for each service type."
  },
  {
    icon: CalendarSync,
    title: "Auto-generate upcoming jobs",
    body: "Completed treatments instantly roll the next service into the schedule so nothing disappears into a notebook."
  },
  {
    icon: BellRing,
    title: "Automated reminders",
    body: "Send text and email reminders before each treatment to cut no-shows and keep customers informed."
  },
  {
    icon: LayoutDashboard,
    title: "At-risk dashboard",
    body: "See missed cycles, overdue callbacks, and accounts that need attention before recurring revenue slips away."
  }
];

export function RecurringCycles() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2 text-small font-semibold text-primary">
              <Repeat2 className="h-4 w-4" />
              Recurring Cycle Management
            </div>
            <h2 className="mt-5 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Never lose a recurring customer again.
            </h2>
            <p className="mt-4 max-w-2xl text-body-mobile text-text-light md:text-body">
              PestPilot keeps retreatments moving from the first service to long-term quarterly
              maintenance. Your team sees what is due, your customers get reminded, and missed
              cycles are easy to catch before they turn into churn.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, body }) => (
                <div className="rounded-card border border-border bg-white p-6 shadow-sm" key={title}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-small text-text-light">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -right-8 bottom-4 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-primary/10 bg-white p-5 shadow-xl">
              <div className="rounded-[24px] border border-border bg-[linear-gradient(180deg,#f7faf8_0%,#ffffff_100%)] p-5">
                <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-small font-semibold uppercase tracking-[0.22em] text-primary-light">
                      Customer Cycle Timeline
                    </p>
                    <p className="mt-1 text-sm text-text-light">
                      184 recurring accounts currently active
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-success/12 px-4 py-2 text-small font-semibold text-success">
                    <ShieldCheck className="h-4 w-4" />
                    96% on-schedule
                  </div>
                </div>

                <div className="mt-8">
                  <div className="relative hidden gap-4 md:grid md:grid-cols-4">
                    <div className="absolute left-[12.5%] right-[12.5%] top-6 h-1 rounded-full bg-[linear-gradient(90deg,#2d6a4f,#f77f00)]" />
                    {cycleStages.map((stage, index) => (
                      <div className="relative z-10" key={stage.label}>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-primary text-sm font-bold text-white shadow-md">
                          {index + 1}
                        </div>
                        <div className="mt-4 rounded-3xl border border-border bg-white p-4 shadow-sm">
                          <p className="text-small font-semibold uppercase tracking-[0.18em] text-primary-light">
                            {stage.day}
                          </p>
                          <p className="mt-2 text-lg font-semibold text-primary">{stage.label}</p>
                          <p className="mt-2 text-small text-text-light">{stage.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 md:hidden">
                    {cycleStages.map((stage, index) => (
                      <div className="flex gap-4" key={stage.label}>
                        <div className="flex flex-col items-center">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-semibold text-white shadow-sm">
                            {index + 1}
                          </div>
                          {index < cycleStages.length - 1 ? (
                            <div className="mt-2 h-full w-1 rounded-full bg-[linear-gradient(180deg,#2d6a4f,#f77f00)]" />
                          ) : null}
                        </div>
                        <div className="flex-1 rounded-3xl border border-border bg-white p-4 shadow-sm">
                          <p className="text-small font-semibold uppercase tracking-[0.18em] text-primary-light">
                            {stage.day}
                          </p>
                          <p className="mt-2 text-lg font-semibold text-primary">{stage.label}</p>
                          <p className="mt-2 text-small text-text-light">{stage.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Next 7 days", value: "42 jobs queued" },
                    { label: "Reminders sent", value: "118 delivered" },
                    { label: "At-risk accounts", value: "7 need review" }
                  ].map((metric) => (
                    <div className="rounded-2xl bg-bg-alt px-4 py-4" key={metric.label}>
                      <p className="text-small text-text-light">{metric.label}</p>
                      <p className="mt-2 text-base font-semibold text-text">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
