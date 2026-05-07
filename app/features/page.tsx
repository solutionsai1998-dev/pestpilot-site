import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Card } from "@/components/shared/Card";
import { Badge } from "@/components/shared/Badge";

export const metadata: Metadata = {
  title: "Features | PestPilot",
  description:
    "Explore PestPilot's scheduling, dispatch, invoicing, reporting, and chemical tracking features for pest control operators.",
  alternates: {
    canonical: "https://pestpilot.com/features"
  },
  openGraph: {
    title: "Features | PestPilot",
    description:
      "Explore PestPilot's scheduling, dispatch, invoicing, reporting, and chemical tracking features for pest control operators.",
    url: "https://pestpilot.com/features",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Features | PestPilot",
    description:
      "Explore PestPilot's scheduling, dispatch, invoicing, reporting, and chemical tracking features for pest control operators."
  }
};

const sections = [
  {
    heading: "Run your office smoothly",
    description: "Keep the calendar, team, and cash flow moving without chasing spreadsheets or status updates.",
    items: [
      {
        title: "A full route calendar your office can trust",
        feature: "Scheduling & Dispatch",
        description: "Schedule recurring services, assign work, and keep routes clear before the day starts.",
        href: "/features/scheduling",
        screenshot: "/screenshots/calendar.png",
        alt: "PestPilot calendar showing scheduled jobs"
      },
      {
        title: "The right technician on the right job",
        feature: "Team Management",
        description: "Manage team members, assignments, and responsibilities so work moves cleanly from office to field.",
        href: "/features/team-management",
        screenshot: "/screenshots/team.png",
        alt: "PestPilot team management dashboard",
        badge: "Professional"
      },
      {
        title: "Invoices sent fast, payments tracked clearly",
        feature: "Invoicing & Billing",
        description: "Create invoices from completed work, collect payments online, and see receivables at a glance.",
        href: "/features/invoicing",
        screenshot: "/screenshots/invoices.png",
        alt: "PestPilot invoice list with payment statuses"
      }
    ]
  },
  {
    heading: "Stay compliant and protected",
    description: "Keep chemical records, licenses, and performance data ready before an audit or review forces the issue.",
    items: [
      {
        title: "Audit-ready chemical records without the scramble",
        feature: "Chemical Tracking",
        description: "Log applications, inventory lots, EPA records, and applicator licenses in the same workflow.",
        href: "/features/chemical-tracking",
        screenshot: "/screenshots/chemicals.png",
        alt: "PestPilot chemical tracking dashboard",
        badge: "Included on all plans"
      },
      {
        title: "Know what is working before callbacks pile up",
        feature: "Reporting & Scorecards",
        description: "Track callbacks, revenue, chemical usage, and technician scorecards so reviews are based on facts.",
        href: "/features/reporting",
        screenshot: "/screenshots/reports.png",
        alt: "PestPilot reporting dashboard",
        badge: "Advanced on Professional"
      }
    ]
  },
  {
    heading: "Delight your customers",
    description: "Make communication, payment, and your brand feel professional without adding office work.",
    items: [
      {
        title: "Customers can pay, message, and stay informed",
        feature: "Customer Portal & SMS",
        description: "Give customers a self-service portal with online payments and SMS reminders that reduce missed visits.",
        href: "/features/customer-portal",
        screenshot: "/screenshots/portal-login.png",
        alt: "PestPilot customer portal login screen",
        badge: "Portal all plans · SMS Professional"
      },
      {
        title: "A customer experience that looks like your company",
        feature: "Branding & White-Label",
        description: "Customize the customer-facing portal so reminders, payments, and service history reinforce your brand.",
        href: "/features/branding",
        screenshot: "/screenshots/branding.png",
        alt: "PestPilot branding settings screen",
        badge: "Included on all plans"
      }
    ]
  }
] as const;

export default function FeaturesPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>
              <ShieldCheck className="mr-2 h-4 w-4" />
              Feature Tour
            </Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Run cleaner routes, cleaner books, and cleaner compliance from one place.
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              PestPilot organizes the daily work around what operators need most: a smooth office,
              protected compliance, and customers who know what is happening next.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container space-y-16">
          {sections.map((section) => (
            <div key={section.heading}>
              <div className="max-w-2xl">
                <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
                  {section.heading}
                </p>
                <p className="mt-3 text-body-mobile text-text-light md:text-body">{section.description}</p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <Card className="overflow-hidden rounded-[28px] p-0" key={item.title}>
                    <div className="aspect-[16/10] overflow-hidden border-b border-border bg-bg-alt">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.screenshot} alt={item.alt} className="h-full w-full object-cover object-top" />
                    </div>
                    <div className="p-7">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-small font-semibold uppercase tracking-[0.18em] text-primary-light">
                          {item.feature}
                        </p>
                        {"badge" in item ? <Badge className="px-2 py-0 text-[11px]">{item.badge}</Badge> : null}
                      </div>
                      <h2 className="mt-4 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-small text-text-light">{item.description}</p>
                      <Link
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-light"
                        href={item.href}
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
