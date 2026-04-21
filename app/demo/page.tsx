import type { Metadata } from "next";
import { CalendarCheck2, CreditCard, DatabaseZap, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Book a Demo | PestPilot",
  description:
    "Book a PestPilot demo and see how scheduling, dispatch, invoicing, and compliance workflows work for pest control companies."
};

const trustPoints = [
  {
    title: "No credit card required",
    icon: CreditCard
  },
  {
    title: "Free data migration",
    icon: DatabaseZap
  },
  {
    title: "Setup in 15 minutes",
    icon: CalendarCheck2
  }
] as const;

const inputClasses =
  "mt-2 w-full rounded-button border border-border bg-white px-4 py-3 text-sm text-text shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export default function DemoPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Book a Demo</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              See PestPilot in action.
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              15 minutes. No sales pressure. Just a walkthrough of how it works for pest control
              companies like yours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Card className="rounded-[32px] border-primary/10 p-8 md:p-10">
              <div className="flex items-center gap-3 text-primary">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-primary">Book your walkthrough</p>
                  <p className="text-small text-text-light">Tell us a little about your company.</p>
                </div>
              </div>

              <form action="#" className="mt-8 space-y-6" method="POST">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block text-sm font-medium text-primary">
                    Full Name
                    <input className={inputClasses} name="fullName" required type="text" />
                  </label>
                  <label className="block text-sm font-medium text-primary">
                    Company Name
                    <input className={inputClasses} name="companyName" required type="text" />
                  </label>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block text-sm font-medium text-primary">
                    Email
                    <input className={inputClasses} name="email" required type="email" />
                  </label>
                  <label className="block text-sm font-medium text-primary">
                    Phone <span className="text-text-light">(optional)</span>
                    <input className={inputClasses} name="phone" type="tel" />
                  </label>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block text-sm font-medium text-primary">
                    Number of technicians
                    <select className={inputClasses} defaultValue="" name="technicians" required>
                      <option disabled value="">
                        Select team size
                      </option>
                      <option value="1-2">1-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6-10">6-10</option>
                      <option value="10+">10+</option>
                    </select>
                  </label>
                  <label className="block text-sm font-medium text-primary">
                    Current software
                    <select className={inputClasses} defaultValue="" name="software" required>
                      <option disabled value="">
                        Select current setup
                      </option>
                      <option value="none">None/Spreadsheets</option>
                      <option value="housecall-pro">Housecall Pro</option>
                      <option value="gorilladesk">GorillaDesk</option>
                      <option value="jobber">Jobber</option>
                      <option value="servicetitan">ServiceTitan</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>

                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit">Request Demo</Button>
                  <p className="text-small text-text-light">
                    We&apos;ll respond within 1 business day. No spam, ever.
                  </p>
                </div>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="rounded-[32px] border-accent/30 bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] p-8 shadow-lg">
                <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
                  What to expect
                </p>
                <h2 className="mt-4 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                  We&apos;ll show you the workflows that matter most.
                </h2>
                <ul className="mt-6 space-y-4 text-small text-text-light">
                  <li>Recurring service scheduling and cycle management</li>
                  <li>Dispatch boards built for dense routes and seasonal volume</li>
                  <li>Chemical logs, invoicing, and compliance from one system</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <Card className="rounded-[28px] p-7 text-center" key={item.title}>
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 text-lg font-semibold text-primary">{item.title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
