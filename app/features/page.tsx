import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Calendar, FlaskConical, Map, Receipt, ShieldCheck } from "lucide-react";
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
    heading: "For the Office",
    description: "Keep scheduling, billing, and compliance moving from one clean command center.",
    items: [
      {
        title: "Scheduling",
        description: "Automate recurring pest cycles, drag jobs on the calendar, and prevent schedule conflicts.",
        href: "/features/scheduling",
        icon: Calendar,
        featured: false
      },
      {
        title: "Dispatch",
        description: "Build smarter routes by territory and urgency so the office stays ahead of the day.",
        href: "/features/dispatch",
        icon: Map,
        featured: false
      }
    ]
  },
  {
    heading: "For the Field",
    description: "Give technicians the exact workflow they need on the truck, on site, and after treatment.",
    items: [
      {
        title: "Chemical Tracking",
        description: "Log applications, track lot inventory, and stay audit-ready without extra paperwork.",
        href: "/features/chemical-tracking",
        icon: FlaskConical,
        featured: true
      },
      {
        title: "Reporting",
        description: "See callback rates, technician scorecards, and recurring revenue from every completed job.",
        href: "/features/reporting",
        icon: BarChart3,
        featured: false
      }
    ]
  },
  {
    heading: "For the Customer",
    description: "Make payment and communication feel modern without creating more admin work for your team.",
    items: [
      {
        title: "Invoicing",
        description: "Generate invoices instantly, collect field payments, and automate reminders after the visit.",
        href: "/features/invoicing",
        icon: Receipt,
        featured: false
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
              Every feature is built around how pest control companies actually operate.
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Office workflows, field execution, customer communication, and compliance all live in
              the same system, so nothing falls through the cracks between visits.
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

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Card
                      className={`rounded-[28px] p-7 ${
                        item.featured ? "border-accent/40 bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] shadow-lg" : ""
                      }`}
                      key={item.title}
                    >
                      <span
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                          item.featured ? "bg-accent/12 text-accent" : "bg-primary/8 text-primary"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <h2 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
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
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
