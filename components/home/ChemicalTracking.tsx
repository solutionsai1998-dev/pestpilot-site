import { ArrowRight, ClipboardCheck, FileStack, FlaskConical, ShieldCheck } from "lucide-react";
import { Button } from "@/components/shared/Button";

const spotlightPoints = [
  {
    icon: FlaskConical,
    title: "Chemical tracking",
    body: "Log products, rates, lot numbers, and applicators from the field without double entry."
  },
  {
    icon: FileStack,
    title: "Usage reports",
    body: "Generate usage summaries and service-level records without stitching together paperwork."
  },
  {
    icon: ClipboardCheck,
    title: "Audit-ready records",
    body: "Keep application logs, inventory movement, and treatment history organized for inspection day."
  }
];

export function ChemicalTracking() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-small font-semibold text-accent">
              <ShieldCheck className="h-4 w-4" />
              EPA Compliance, Built In
            </div>
            <h2 className="mt-5 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
              Audit-ready chemical records without the scramble.
            </h2>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Compliance should not depend on whether someone remembers which clipboard stayed in the
              truck. PestPilot captures chemical usage as part of the job workflow so your reporting
              is current when the question comes, not weeks later.
            </p>

            <div className="mt-8 space-y-5">
              {spotlightPoints.map(({ icon: Icon, title, body }) => (
                <div className="flex items-start gap-4" key={title}>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{title}</h3>
                    <p className="mt-1 text-base text-text-light">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/features/chemical-tracking">Learn More</Button>
              <Button href="/demo" variant="secondary">
                Start Free Trial
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[30px] border border-primary/10 bg-[linear-gradient(180deg,#f6f8f4_0%,#eef4ef_100%)] p-5 shadow-xl">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/15 blur-3xl" />
              <div className="relative rounded-[24px] border border-white bg-white/90 p-5 backdrop-blur">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-small font-semibold uppercase tracking-[0.22em] text-primary-light">
                      Compliance Dashboard
                    </p>
                    <p className="mt-1 text-sm text-text-light">Chemical usage log and report preview</p>
                  </div>
                  <div className="rounded-full bg-success/15 px-3 py-1 text-small font-semibold text-success">
                    Ready for audit
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.8fr]">
                  <div className="rounded-3xl border border-border bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-small uppercase tracking-[0.18em] text-text-light">
                          Application log
                        </p>
                        <p className="mt-1 text-lg font-semibold text-primary">April 2026</p>
                      </div>
                      <ShieldCheck className="h-8 w-8 text-accent" />
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        "Bifen IT · 1.5 oz · Lot B-248 · Carlos R.",
                        "Demand CS · 0.8 oz · Lot D-009 · Sarah T.",
                        "Termidor SC · 2.1 oz · Lot T-144 · Miguel A."
                      ].map((row) => (
                        <div className="rounded-2xl bg-bg-alt px-4 py-3 text-sm text-text" key={row}>
                          {row}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl bg-primary p-5 text-white">
                      <p className="text-small uppercase tracking-[0.18em] text-white/60">
                        Inventory status
                      </p>
                      <p className="mt-2 text-2xl font-bold">18 active products</p>
                      <p className="mt-2 text-sm text-white/76">
                        2 expiration alerts and 0 missing applicator records.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-dashed border-primary/20 bg-white p-5">
                      <p className="text-small uppercase tracking-[0.18em] text-text-light">
                        Export queue
                      </p>
                      <div className="mt-4 space-y-3">
                        {["Monthly EPA report", "Restricted-use summary", "Technician usage by product"].map(
                          (report) => (
                            <div
                              className="flex items-center justify-between rounded-2xl bg-bg-alt px-4 py-3 text-sm text-text"
                              key={report}
                            >
                              <span>{report}</span>
                              <ArrowRight className="h-4 w-4 text-primary" />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
