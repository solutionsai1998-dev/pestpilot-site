import Link from "next/link";
import {
  BarChart3,
  CalendarDays,
  CreditCard,
  ShieldCheck,
  Truck,
  Users
} from "lucide-react";
import { Card } from "@/components/shared/Card";

const outcomes = [
  {
    icon: CalendarDays,
    title: "Fill your schedule in minutes, not hours",
    description:
      "Drag-and-drop scheduling with recurring cycle templates that auto-generate jobs.",
    screenshot: "/screenshots/calendar.png",
    alt: "PestPilot scheduling calendar with recurring service jobs",
    href: "/features/scheduling"
  },
  {
    icon: Truck,
    title: "Get more jobs done every day",
    description:
      "Visual dispatch board with GPS check-ins and optimized routes so techs spend less time driving.",
    screenshot: "/screenshots/dispatch.png",
    alt: "PestPilot dispatch board with technician assignments and route planning",
    href: "/features/dispatch"
  },
  {
    icon: CreditCard,
    title: "Get paid faster without chasing invoices",
    description:
      "Automated invoicing, online payments, and receivables tracking so cash flow stays healthy.",
    screenshot: "/screenshots/invoices.png",
    alt: "PestPilot invoicing screen with billing and payment status",
    href: "/features/invoicing"
  },
  {
    icon: ShieldCheck,
    title: "Pass every audit, every time",
    description:
      "Chemical tracking, EPA reports, and license management that keeps you compliant without the spreadsheet.",
    screenshot: "/screenshots/chemicals.png",
    alt: "PestPilot chemical tracking records and compliance tools",
    href: "/features/chemical-tracking"
  },
  {
    icon: Users,
    title: "Keep customers coming back season after season",
    description:
      "Self-service portal, SMS reminders, and automated follow-ups that make your business easy to work with.",
    screenshot: "/screenshots/customers.png",
    alt: "PestPilot customer portal and service history view",
    href: "/features/customer-portal"
  },
  {
    icon: BarChart3,
    title: "Know exactly where your money goes",
    description:
      "Revenue dashboards, technician scorecards, and job reports that show what's working and what's not.",
    screenshot: "/screenshots/dashboard.png",
    alt: "PestPilot dashboard with business metrics and performance reporting",
    href: "/features/reporting"
  }
] as const;

export function OutcomeGrid() {
  return (
    <section className="section-padding bg-white" id="outcomes">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
            What You Walk Away With
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Less admin drag. More time to run the business.
          </h2>
          <p className="mt-4 text-body-mobile text-text-light md:text-body">
            Every part of PestPilot is built to save time, protect revenue, and make the day run cleaner.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {outcomes.map(({ icon: Icon, title, description, screenshot, alt, href }) => (
            <Link className="group block" href={href} key={title}>
              <Card className="h-full overflow-hidden border-border/80 p-0 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                    {title}
                  </h3>
                  <p className="mt-3 text-small text-text-light">{description}</p>
                </div>
                <div className="border-t border-border bg-bg-alt/60 p-4">
                  <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={screenshot}
                      alt={alt}
                      className="block h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-primary-light">
                    Learn more
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
