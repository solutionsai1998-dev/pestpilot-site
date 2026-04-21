import Link from "next/link";
import { BadgeCheck, Bug, ClipboardCheck, FlaskConical, Repeat, Shield } from "lucide-react";

const differentiators = [
  { icon: FlaskConical, text: "Chemical tracking with lot details, usage logs, and inventory visibility" },
  { icon: Shield, text: "EPA compliance records that stay audit-ready without spreadsheet cleanup" },
  { icon: Repeat, text: "Recurring service cycles built around pest retreatment windows, not generic jobs" },
  { icon: ClipboardCheck, text: "Applicator licensing and state-ready reporting workflows" },
  { icon: Bug, text: "Property notes, pest history, and service context tuned for real field conditions" }
];

export function Differentiator() {
  return (
    <section className="section-padding bg-primary text-text-on-dark">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div>
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-accent">
              Pest Control Only
            </p>
            <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
              Built for pest control, not plumbing, cleaning, or whoever else pays for a login.
            </h2>
            <p className="mt-5 text-body-mobile text-white/76 md:text-body">
              Housecall Pro serves dozens of industries. GorillaDesk still splits attention across
              pest, lawn, and cleaning. PestPilot does one thing and goes deeper where pest control
              operators actually feel the pain.
            </p>

            <div className="mt-8 space-y-4">
              {differentiators.map(({ icon: Icon, text }) => (
                <div className="flex items-start gap-4" key={text}>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-base text-white/84">{text}</p>
                </div>
              ))}
            </div>

            <Link
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-accent transition hover:text-[#ffab47]"
              href="/features"
            >
              See the difference
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute left-10 top-0 h-28 w-28 rounded-full bg-accent/18 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/8 p-5 shadow-xl backdrop-blur">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Housecall Pro",
                    subtitle: "20+ industries",
                    body: "Broad platform with shallower pest-specific depth.",
                    highlight: false
                  },
                  {
                    title: "GorillaDesk",
                    subtitle: "Pest + lawn + cleaning",
                    body: "Closer to the category, but still split across multiple workflows.",
                    highlight: false
                  },
                  {
                    title: "PestPilot",
                    subtitle: "Pest control only",
                    body: "Focused product decisions around operators, technicians, and EPA workflows.",
                    highlight: true
                  }
                ].map((column) => (
                  <div
                    className={`rounded-3xl border p-5 ${
                      column.highlight
                        ? "border-accent/40 bg-white text-text shadow-lg"
                        : "border-white/10 bg-white/5 text-white"
                    }`}
                    key={column.title}
                  >
                    <p
                      className={`text-small font-semibold uppercase tracking-[0.18em] ${
                        column.highlight ? "text-primary-light" : "text-white/60"
                      }`}
                    >
                      {column.subtitle}
                    </p>
                    <h3
                      className={`mt-2 text-xl font-semibold ${
                        column.highlight ? "text-primary" : "text-white"
                      }`}
                    >
                      {column.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm ${
                        column.highlight ? "text-text-light" : "text-white/72"
                      }`}
                    >
                      {column.body}
                    </p>

                    <div className="mt-5 space-y-3">
                      {[
                        "Recurring cycle logic",
                        "EPA compliance depth",
                        "Chemical inventory",
                        "License verification"
                      ].map((item) => (
                        <div
                          className={`flex items-center gap-2 rounded-2xl px-3 py-2 text-sm ${
                            column.highlight
                              ? "bg-primary/6 text-text"
                              : "bg-white/6 text-white/82"
                          }`}
                          key={`${column.title}-${item}`}
                        >
                          <BadgeCheck
                            className={`h-4 w-4 ${
                              column.highlight ? "text-success" : "text-white/60"
                            }`}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
