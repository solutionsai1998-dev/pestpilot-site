import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "How to Set Up Recurring Service Cycles Without Losing Track | PestPilot",
  description:
    "A practical look at building recurring service cycles that stay organized as your pest control business grows."
};

export function generateStaticParams() {
  return [{ slug: "recurring-service-cycles" }];
}

const relatedArticles = [
  {
    title: "EPA Compliance for Pest Control: A Practical Checklist",
    href: "/blog/recurring-service-cycles",
    category: "Compliance"
  },
  {
    title: "5 Ways to Reduce Callback Rates This Season",
    href: "/blog/recurring-service-cycles",
    category: "Operations"
  },
  {
    title: "Chemical Inventory Management Best Practices",
    href: "/blog/recurring-service-cycles",
    category: "Compliance"
  }
] as const;

export default function BlogPostPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-light"
              href="/blog"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mt-8 max-w-3xl">
              <Badge>Operations</Badge>
              <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
                How to Set Up Recurring Service Cycles Without Losing Track
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-light">
                <span>April 21, 2026</span>
                <span>By PestPilot Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6 text-body-mobile leading-8 text-text-light md:text-body">
              <p>
                Recurring work is the engine of most pest control businesses, but it only stays
                profitable when the schedule is clean. The trouble starts when quarterly,
                bi-monthly, and annual treatments are all being tracked in different places. One
                customer gets skipped, another gets scheduled too early, and suddenly the office is
                spending the week fixing preventable problems instead of moving the route forward.
              </p>
              <p>
                The simplest way to avoid that mess is to build recurring cycles as a system instead
                of a memory exercise. Start by defining your service patterns clearly, including the
                visit window, service type, assigned territory, and customer notes that matter on
                every repeat visit. When that structure is consistent, dispatch becomes faster and
                technicians walk into each stop with the right context instead of guessing what the
                last service actually included.
              </p>
              <p>
                Good cycle management also creates better customer communication. When the schedule,
                reminders, treatment history, and invoicing all live in one workflow, customers get
                more predictable service and your team spends less time chasing paperwork. That is
                the difference between a route book that grows smoothly and one that gets harder to
                manage every season.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
                Related articles
              </p>
              <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
                Keep exploring practical ops guidance
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedArticles.map((article) => (
                <Card className="rounded-[28px] p-7" key={article.title}>
                  <Badge className="w-fit">{article.category}</Badge>
                  <h3 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                    {article.title}
                  </h3>
                  <Link
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-light"
                    href={article.href}
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-white/8 px-8 py-12 text-center shadow-xl backdrop-blur md:px-12 md:py-16">
            <h2 className="text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
              See how PestPilot handles this
            </h2>
            <div className="mt-8">
              <Button href="/demo">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
