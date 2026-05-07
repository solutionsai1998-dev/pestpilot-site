const metrics = [
  {
    label: "Hours saved per week",
    value: "13+",
    context: "On scheduling, dispatching, and invoicing admin"
  },
  {
    label: "Time to send an invoice",
    value: "Under 60 seconds",
    context: "From job completion to invoice sent"
  },
  {
    label: "Payment collection speed",
    value: "2x faster",
    context: "Online payments vs mailed checks"
  }
] as const;

export function ROIMetrics() {
  return (
    <section className="section-padding bg-primary text-text-on-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-accent">
            The ROI
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
            Small workflow fixes add up fast.
          </h2>
          <p className="mt-4 text-body-mobile text-white/76 md:text-body">
            When scheduling, dispatch, and billing live in one system, the admin work stops eating the week.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div
              className="rounded-[28px] border border-white/12 bg-white/8 p-8 text-center shadow-xl backdrop-blur"
              key={metric.label}
            >
              <p className="text-small font-semibold uppercase tracking-[0.18em] text-white/60">
                {metric.label}
              </p>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                {metric.value}
              </p>
              <p className="mt-4 text-base text-white/76">{metric.context}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-small text-white/60">
          Based on typical pest control workflows with 5-15 routes.
        </p>
      </div>
    </section>
  );
}
