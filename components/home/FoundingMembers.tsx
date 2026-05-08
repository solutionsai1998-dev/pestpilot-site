import { Button } from "@/components/shared/Button";

export function LaunchPricing() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-accent/20 bg-white p-8 text-center shadow-card md:p-10">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-accent">Launch Pricing</p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Start PestPilot with launch pricing guaranteed through 2026.
          </h2>
          <p className="mt-4 text-body-mobile text-text-light md:text-body">
            Try every Professional feature for 14 days with no credit card required. No contracts, cancel anytime.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/pricing">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
