const logos = ["Field Notes", "RouteSync", "QuickBooks", "Service Maps", "TextPulse"];

const stats = ["500,000+ treatments tracked", "99.9% uptime", "4.9★ operator rating"];

export function SocialProofBar() {
  return (
    <section className="border-y border-border bg-bg-alt/70 py-6">
      <div className="container flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-small font-semibold uppercase tracking-[0.2em] text-primary-light">
            Trusted by 250+ pest control companies
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
