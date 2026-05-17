import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
              Ready to replace the paperwork with a sharper operating system?
            </h2>
            <p className="mt-4 text-body-mobile text-white/76 md:text-body">
              Start with the core PestPilot workflow and your brand included, then add Professional
              visibility, integrations, and extra seats when your team is ready.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="min-w-[15rem]" href="/pricing">
                Start Free Trial
              </Button>
            </div>

            <p className="mt-4 text-small text-white/68">
              Cancel anytime · No contracts · Branding included on every plan
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-small font-medium text-white/84 sm:flex-row sm:gap-8">
              <Link className="inline-flex items-center gap-2 transition hover:text-white" href="/demo">
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                className="inline-flex items-center gap-2 transition hover:text-white"
                href="mailto:hello@pestpilot.app"
              >
                hello@pestpilot.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
