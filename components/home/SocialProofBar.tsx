const logos = ["Route-ready workflows", "EPA-friendly records", "Recurring service plans", "Mobile field updates"];

const stats = [
  "Trusted by pest control operators nationwide",
  "Built for solo operators and small teams",
  "Direct product feedback with the builder"
];

export function SocialProofBar() {
  return (
    <section className="border-y border-border bg-bg-alt/70 py-6">
      <div className="container flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-small font-semibold uppercase tracking-[0.2em] text-primary-light">
            Pest control software built for operators who want a cleaner system
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-small text-text-light">
            {stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {logos.map((logo) => (
            <div
              className="inline-flex min-w-[8.5rem] items-center justify-center rounded-full border border-border bg-white px-4 py-2 text-small font-semibold text-text-light shadow-sm"
              key={logo}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
