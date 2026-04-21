const rows = [
  {
    feature: "Users included",
    starter: "Up to 3 users",
    professional: "Up to 10 users",
    enterprise: "Unlimited users"
  },
  {
    feature: "Scheduling and recurring cycles",
    starter: "Included",
    professional: "Included",
    enterprise: "Included"
  },
  {
    feature: "Dispatch and routing",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Advanced"
  },
  {
    feature: "Chemical tracking",
    starter: "Essential logs",
    professional: "Full inventory + reporting",
    enterprise: "Full inventory + reporting"
  },
  {
    feature: "EPA compliance reports",
    starter: "Monthly export",
    professional: "One-click reports",
    enterprise: "One-click + custom exports"
  },
  {
    feature: "Customer reminders",
    starter: "Email",
    professional: "Email + SMS",
    enterprise: "Email + SMS"
  },
  {
    feature: "Reporting dashboards",
    starter: "Core metrics",
    professional: "Advanced dashboards",
    enterprise: "Custom dashboards"
  },
  {
    feature: "Support",
    starter: "Standard",
    professional: "Priority",
    enterprise: "White-glove"
  }
];

export function FeatureMatrix() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
            Compare Plans
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Pick the plan that fits your route count and compliance needs.
          </h2>
          <p className="mt-4 text-body-mobile text-text-light md:text-body">
            Every tier includes the pest-control core. Higher plans add deeper routing, reporting,
            and compliance workflows as your team grows.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-border bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-6 py-4 text-small font-semibold uppercase tracking-[0.18em]">Feature</th>
                  <th className="px-6 py-4 text-small font-semibold uppercase tracking-[0.18em]">Starter</th>
                  <th className="bg-accent px-6 py-4 text-small font-semibold uppercase tracking-[0.18em] text-white">
                    Professional
                  </th>
                  <th className="px-6 py-4 text-small font-semibold uppercase tracking-[0.18em]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr className={index % 2 === 0 ? "bg-white" : "bg-bg-alt/60"} key={row.feature}>
                    <td className="px-6 py-5 text-sm font-semibold text-primary">{row.feature}</td>
                    <td className="px-6 py-5 text-sm text-text">{row.starter}</td>
                    <td className="px-6 py-5 text-sm text-text">{row.professional}</td>
                    <td className="px-6 py-5 text-sm text-text">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
