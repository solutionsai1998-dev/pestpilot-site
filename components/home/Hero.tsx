"use client";

import { Play, ShieldCheck, Sparkles, TabletSmartphone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/shared/Button";
import { VideoModal } from "@/components/shared/VideoModal";

const heroStats = [
  { label: "15+ hours saved", detail: "every week in admin time" },
  { label: "30/60/90-day cycles", detail: "templated and auto-scheduled" },
  { label: "Audit-ready logs", detail: "chemical records stay organized" }
];

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
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
                Built exclusively for pest control operators
              </div>
              <h1 className="mt-6 text-h1-mobile font-extrabold tracking-tight text-white md:text-h1-desktop">
                Run Your Pest Control Business, Not Your Office.
              </h1>
              <p className="mt-6 max-w-xl text-body-mobile text-white/78 md:text-body">
                Save 15+ hours a week with scheduling, dispatch, invoicing, chemical tracking, and
                EPA compliance workflows built for the jobs your team actually runs.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button className="min-w-[12rem]" href="/demo">
                  Start Free Trial
                </Button>
                <Button
                  className="min-w-[11rem] border-white/20 bg-white/10 text-white hover:border-white hover:bg-white/14"
                  onClick={() => setIsVideoOpen(true)}
                  variant="secondary"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
              <p className="mt-4 text-small text-white/68">
                No credit card required · Setup in 15 minutes
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

            <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -right-10 bottom-8 h-32 w-32 rounded-full bg-emerald-300/20 blur-3xl" />
              <div className="relative rounded-[28px] border border-white/12 bg-white/10 p-4 shadow-xl backdrop-blur">
                <div className="rounded-[24px] border border-white/12 bg-[#f6f8f4] p-4 text-text shadow-xl">
                  <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                    <div>
                      <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
                        PestPilot Command Center
                      </p>
                      <p className="mt-1 text-sm text-text-light">
                        Today&apos;s routes, retreatments, and compliance in one view
                      </p>
                    </div>
                    <div className="hidden rounded-full bg-primary px-4 py-2 text-small font-semibold text-white sm:block">
                      Tuesday Queue
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-[20px] border border-primary/10 bg-white p-4 shadow-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-small font-semibold uppercase tracking-[0.18em] text-text-light">
                            Treatment Calendar
                          </p>
                          <p className="mt-1 text-xl font-semibold text-primary">28 jobs scheduled</p>
                        </div>
                        <ShieldCheck className="h-9 w-9 text-accent" />
                      </div>
                      <div className="mt-4 space-y-3">
                        {[
                          { title: "Initial service", meta: "8:00 AM · Desert Bloom HOA", tone: "bg-emerald-50 text-primary" },
                          { title: "30-day retreatment", meta: "10:30 AM · Mesa Family Dental", tone: "bg-amber-50 text-amber-900" },
                          { title: "Quarterly perimeter", meta: "1:15 PM · Red Canyon Storage", tone: "bg-stone-100 text-text" }
                        ].map((job) => (
                          <div
                            className="flex items-center justify-between rounded-2xl border border-border/80 px-4 py-3"
                            key={job.title}
                          >
                            <div>
                              <p className="font-semibold text-text">{job.title}</p>
                              <p className="text-small text-text-light">{job.meta}</p>
                            </div>
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${job.tone}`}>
                              Ready
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[20px] border border-primary/10 bg-primary p-5 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-small uppercase tracking-[0.18em] text-white/60">
                              Chemical Log
                            </p>
                            <p className="mt-1 text-lg font-semibold">Bifen IT · Lot B-248</p>
                          </div>
                          <TabletSmartphone className="h-8 w-8 text-accent" />
                        </div>
                        <div className="mt-4 space-y-2 text-small text-white/78">
                          <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2">
                            <span>Applied by Carlos R.</span>
                            <span>1.5 oz</span>
                          </div>
                          <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2">
                            <span>Applicator license</span>
                            <span>Verified</span>
                          </div>
                          <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2">
                            <span>Report status</span>
                            <span>Audit ready</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[20px] border border-primary/10 bg-white p-5 shadow-md">
                        <p className="text-small uppercase tracking-[0.18em] text-text-light">
                          Customer Snapshot
                        </p>
                        <p className="mt-1 text-lg font-semibold text-primary">
                          91% of recurring customers booked ahead
                        </p>
                        <div className="mt-4 h-3 overflow-hidden rounded-full bg-bg-alt">
                          <div className="h-full w-[91%] rounded-full bg-[linear-gradient(90deg,#2d6a4f,#f77f00)]" />
                        </div>
                        <div className="mt-4 flex items-center justify-between text-small text-text-light">
                          <span>Invoices due today</span>
                          <span className="font-semibold text-text">4</span>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-small text-text-light">
                          <span>Technicians in route</span>
                          <span className="font-semibold text-text">7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
}
