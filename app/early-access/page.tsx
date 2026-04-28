"use client";

import { useState } from "react";
import { Check, ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/shared/Button";

const techOptions = ["1", "2-3", "4-5", "6-10", "10+"];

const benefits = [
  { icon: Zap, text: "$49/mo locked for life (normally $99/mo)" },
  { icon: Users, text: "Limited to 15 founding members" },
  { icon: Shield, text: "Direct input on product roadmap" }
];

export default function EarlyAccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const body = {
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      technicians: form.get("technicians"),
      painPoint: form.get("painPoint")
    };

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-small font-semibold uppercase tracking-[0.24em] text-accent">
              Founding Members Program
            </p>
            <h1 className="mt-4 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Become a Founding PestPilot
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              We&apos;re onboarding 15 early adopters who will help shape the product.
              In return, you get the best price we&apos;ll ever offer — locked for life.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="bg-bg-alt py-10">
        <div className="container">
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
            {benefits.map(({ icon: Icon, text }) => (
              <div
                className="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm"
                key={text}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form or Success */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-[32px] border border-border bg-bg-alt px-6 py-10 shadow-sm md:px-10 md:py-14">
            {submitted ? (
              <div className="text-center">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/12 text-success">
                  <Check className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
                  You&apos;re in.
                </h2>
                <p className="mt-4 text-body-mobile text-text-light md:text-body">
                  Thanks for applying to the founding members program. We&apos;ll review your
                  submission and reach out within 24 hours.
                </p>
                <p className="mt-2 text-small text-text-light">
                  Keep an eye on your inbox — we&apos;ll be in touch at the email you provided.
                </p>
                <div className="mt-8">
                  <Button href="/" variant="secondary">
                    Back to Home
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <h2 className="text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                    Apply for early access
                  </h2>
                  <p className="mt-2 text-small text-text-light">
                    Fill out the form below. We&apos;ll reach out to confirm your spot.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="mb-1.5 block text-sm font-medium text-text"
                      htmlFor="name"
                    >
                      Full name <span className="text-error">*</span>
                    </label>
                    <input
                      className="w-full rounded-button border border-border bg-white px-4 py-3 text-sm text-text transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      required
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-1.5 block text-sm font-medium text-text"
                      htmlFor="email"
                    >
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      className="w-full rounded-button border border-border bg-white px-4 py-3 text-sm text-text transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      id="email"
                      name="email"
                      placeholder="jane@company.com"
                      required
                      type="email"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-1.5 block text-sm font-medium text-text"
                      htmlFor="company"
                    >
                      Company name
                    </label>
                    <input
                      className="w-full rounded-button border border-border bg-white px-4 py-3 text-sm text-text transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      id="company"
                      name="company"
                      placeholder="Smith Pest Control"
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-1.5 block text-sm font-medium text-text"
                      htmlFor="technicians"
                    >
                      Number of technicians
                    </label>
                    <select
                      className="w-full rounded-button border border-border bg-white px-4 py-3 text-sm text-text transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      defaultValue=""
                      id="technicians"
                      name="technicians"
                    >
                      <option disabled value="">
                        Select…
                      </option>
                      {techOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="mb-1.5 block text-sm font-medium text-text"
                      htmlFor="painPoint"
                    >
                      What&apos;s your biggest pain point right now?
                    </label>
                    <textarea
                      className="w-full rounded-button border border-border bg-white px-4 py-3 text-sm text-text transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      id="painPoint"
                      name="painPoint"
                      placeholder="Scheduling, compliance, invoicing, something else…"
                      rows={4}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-error">{error}</p>
                  )}

                  <Button className="w-full justify-center" type="submit">
                    {loading ? "Submitting…" : "Apply for Founding Access"}
                  </Button>

                  <p className="text-center text-small text-text-light">
                    No payment required now · We&apos;ll confirm your spot by email
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      {!submitted && (
        <section className="section-padding bg-primary text-text-on-dark">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
                Only 15 spots. Once they&apos;re gone, they&apos;re gone.
              </h2>
              <p className="mt-4 text-body-mobile text-white/76 md:text-body">
                Founding members get $49/mo locked for life, direct access to our team,
                and real influence over what we build next.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="#name">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
