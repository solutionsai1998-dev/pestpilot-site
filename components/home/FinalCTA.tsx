import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/shared/Button";

export function FinalCTA() {
  return (
    <section className="section-padding bg-primary text-text-on-dark">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[#1B4332] px-8 py-12 shadow-xl md:px-12 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(247,127,0,0.18),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(135deg,_#17382a_0%,_#1b4332_55%,_#204b37_100%)]" />
          <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:46px_46px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
              Ready to ditch the paperwork and grow your pest control business?
            </h2>
            <p className="mt-4 text-body-mobile text-white/76 md:text-body">
              Start your trial, bring over your customer list, and get your routes organized without
              rebuilding your business from scratch.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="min-w-[15rem]" href="/demo">
                Start Your Free Trial
              </Button>
            </div>

            <p className="mt-4 text-small text-white/68">
              No credit card required · 14-day free trial · Setup in 15 minutes
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-small font-medium text-white/84 sm:flex-row sm:gap-8">
              <Link className="inline-flex items-center gap-2 transition hover:text-white" href="/demo">
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                className="inline-flex items-center gap-2 transition hover:text-white"
                href="tel:+1-555-000-0000"
              >
                <PhoneCall className="h-4 w-4" />
                Call us: (555) 000-0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
