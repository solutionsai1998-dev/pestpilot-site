import { ArrowRight, DatabaseZap, NotebookTabs, Rocket } from "lucide-react";
import { Button } from "@/components/shared/Button";

const steps = [
  {
    number: "01",
    icon: NotebookTabs,
    title: "Sign up",
    detail: "15 minutes. No tech degree required."
  },
  {
    number: "02",
    icon: DatabaseZap,
    title: "Import customers",
    detail: "Send your spreadsheet, notebook list, or typed-in accounts."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start scheduling",
    detail: "Your first week of jobs is organized and ready to run."
  }
];

export function PaperTransition() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="rounded-[32px] border border-primary/10 bg-[linear-gradient(135deg,#f7faf8_0%,#eef4ef_46%,#ffffff_100%)] p-8 shadow-lg md:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div>
              <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
                From Paper to PestPilot
              </p>
              <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
                Still running your business on paper and prayers?
              </h2>
              <p className="mt-4 max-w-xl text-body-mobile text-text-light md:text-body">
                Switching software does not need to derail your routes. We help you move customer
                records, recurring schedules, and service history so you can pick up where you left
                off without the paper stack.
              </p>

              <div className="mt-8 rounded-[24px] border border-accent/20 bg-white/90 p-6 shadow-sm">
                <p className="text-small font-semibold uppercase tracking-[0.2em] text-accent">
                  Free data migration
                </p>
                <p className="mt-3 text-base text-text-light">
                  Every customer gets help moving customer lists, active schedules, and treatment
                  history into PestPilot. We do the cleanup so your office team can stay focused on
                  the phones and the board.
                </p>
              </div>

              <div className="mt-8">
                <Button href="/demo">
                  Start free — we&apos;ll help you move
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-4 h-28 w-28 rounded-full bg-accent/15 blur-3xl" />
              <div className="absolute right-6 bottom-4 h-24 w-24 rounded-full bg-primary/12 blur-3xl" />
              <div className="relative grid gap-4 lg:grid-cols-3">
                {steps.map(({ number, icon: Icon, title, detail }, index) => (
                  <div className="relative" key={title}>
                    <div className="h-full rounded-[28px] border border-border bg-white p-6 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-small font-semibold uppercase tracking-[0.18em] text-primary-light">
                          {number}
                        </span>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <h3 className="mt-6 text-h3-mobile font-semibold text-primary">{title}</h3>
                      <p className="mt-3 text-small text-text-light">{detail}</p>
                    </div>

                    {index < steps.length - 1 ? (
                      <div className="pointer-events-none absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-primary/35 lg:block">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-dashed border-primary/20 bg-white/85 p-5">
                <p className="text-small uppercase tracking-[0.18em] text-text-light">
                  Typical move-in checklist
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Customer accounts imported",
                    "Recurring cycles mapped",
                    "Open invoices reviewed",
                    "First routes staged"
                  ].map((item) => (
                    <div className="rounded-2xl bg-bg-alt px-4 py-3 text-sm text-text" key={item}>
                      {item}
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
