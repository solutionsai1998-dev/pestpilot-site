"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/shared/Button";

const heroStats = [
  { label: "Less admin drag", detail: "with scheduling, dispatching, and invoicing in one place" },
  { label: "Recurring jobs handled", detail: "without rebuilding the same route every cycle" },
  { label: "Cash flow moves faster", detail: "when invoices and payments go out the same day" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-text-on-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(247,127,0,0.22),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(91,181,137,0.18),_transparent_32%),linear-gradient(135deg,_#17382a_0%,_#1b4332_50%,_#204b37_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),transparent_65%)]" />
        </div>

        <div className="container section-padding relative">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-small font-medium text-white/90 shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-accent" />
                Built for pest control operators who want a better way to work
              </div>
              <h1 className="mt-6 text-h1-mobile font-extrabold tracking-tight text-white md:text-h1-desktop">
                Stop drowning in paperwork. Start growing your pest control business.
              </h1>
              <p className="mt-6 max-w-xl text-body-mobile text-white/78 md:text-body">
                PestPilot handles scheduling, dispatching, invoicing, and getting paid — so you can focus on the work that actually makes money.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button className="min-w-[12rem]" href="/pricing">
                  Start Free Trial
                </Button>
                <Button
                  className="min-w-[11rem] border-white/20 bg-white/10 text-white hover:border-white hover:bg-white/14"
                  href="#outcomes"
                  variant="secondary"
                >
                  See How It Works
                </Button>
              </div>
              <p className="mt-4 text-small text-white/68">
                Built for pest control teams that want cleaner operations without more admin overhead.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    className="rounded-card border border-white/12 bg-white/8 p-4 shadow-sm backdrop-blur-sm"
                    key={stat.label}
                  >
                    <p className="text-base font-semibold text-white">{stat.label}</p>
                    <p className="mt-1 text-small text-white/68">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl pb-10 lg:mx-0 lg:pb-0">
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -right-10 bottom-8 h-32 w-32 rounded-full bg-emerald-300/20 blur-3xl" />
              <div className="relative rounded-[28px] border border-white/12 shadow-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/dashboard.png"
                  alt="PestPilot Command Center — dashboard overview with routes, jobs, and compliance"
                  className="w-full h-auto block"
                  width={1440}
                  height={1000}
                />
              </div>
              <div className="absolute -bottom-2 right-4 w-[26%] min-w-[7rem] max-w-[11rem] overflow-hidden rounded-[1.6rem] border border-white/18 bg-primary shadow-2xl md:-bottom-6 md:right-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/mobile-preview.png"
                  alt="PestPilot mobile technician route view"
                  className="block h-auto w-full"
                  width={780}
                  height={1688}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
