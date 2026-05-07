import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

export function FoundingMembers() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-[32px] border-2 border-accent/30 bg-[linear-gradient(135deg,_#fffaf2_0%,_#ffffff_100%)] px-8 py-12 text-center shadow-lg md:px-12 md:py-16">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-small font-semibold text-accent">
            <Star className="h-4 w-4" />
            Limited to 15 spots
          </div>

          <h2 className="text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Become a Founding PestPilot
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-mobile text-text-light md:text-body">
            Start on Starter at $49/mo or save with annual billing at $39/mo.
            Help shape the product while getting the best deal we&apos;ll ever offer.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/pricing">
              Claim Your Spot
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-light"
              href="/pricing"
            >
              See regular pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-small text-text-light">
            No payment required now · Lock in your rate before it&apos;s gone
          </p>
        </div>
      </div>
    </section>
  );
}
