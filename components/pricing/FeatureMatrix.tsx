import { featureRows } from "@/lib/pricing";

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
                {featureRows.map((row, index) => (
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
