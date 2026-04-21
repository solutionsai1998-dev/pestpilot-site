import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Pest Control Blog | PestPilot",
  description:
    "Read practical pest control operations, compliance, growth, and software guidance from PestPilot."
};

const posts = [
  {
    title: "How to Set Up Recurring Service Cycles Without Losing Track",
    category: "Operations",
    excerpt:
      "A simple framework for building recurring treatment schedules that stay organized as your route book grows.",
    href: "/blog/recurring-service-cycles",
    date: "April 21, 2026"
  },
  {
    title: "EPA Compliance for Pest Control: A Practical Checklist",
    category: "Compliance",
    excerpt:
      "The records, habits, and workflow checkpoints that make audits a lot less painful for your team.",
    href: "/blog/recurring-service-cycles",
    date: "April 17, 2026"
  },
  {
    title: "Why Generic Field Service Software Falls Short for PCOs",
    category: "Technology",
    excerpt:
      "What gets missed when software is built for every trade instead of the realities of pest control.",
    href: "/blog/recurring-service-cycles",
    date: "April 12, 2026"
  },
  {
    title: "5 Ways to Reduce Callback Rates This Season",
    category: "Operations",
    excerpt:
      "Tighten follow-through, technician visibility, and treatment consistency before callback pressure starts climbing.",
    href: "/blog/recurring-service-cycles",
    date: "April 8, 2026"
  },
  {
    title: "From Paper to PestPilot: A Solo Operator's Migration Story",
    category: "Growth",
    excerpt:
      "How one operator replaced clipboards and spreadsheets with a faster, cleaner system in under a week.",
    href: "/blog/recurring-service-cycles",
    date: "April 4, 2026"
  },
  {
    title: "Chemical Inventory Management Best Practices",
    category: "Compliance",
    excerpt:
      "A practical way to keep product usage, lot tracking, and reorder timing under control as the season ramps up.",
    href: "/blog/recurring-service-cycles",
    date: "March 29, 2026"
  }
] as const;

const inputClasses =
  "w-full rounded-button border border-border bg-white px-4 py-3 text-sm text-text shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export default function BlogPage() {
  return (
    <>
      <section className="section-padding bg-bg-alt">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Blog</Badge>
            <h1 className="mt-5 text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Pest control insights, guides, and industry updates.
            </h1>
            <p className="mt-4 text-body-mobile text-text-light md:text-body">
              Practical content for operators who want to grow smarter.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <Card className="flex h-full flex-col rounded-[28px] p-7" key={post.title}>
                <div className="flex items-center justify-between gap-4">
                  <Badge className="w-fit">{post.category}</Badge>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-text-light">
                    {post.date}
                  </span>
                </div>
                <h2 className="mt-5 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-small text-text-light">{post.excerpt}</p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-light"
                  href={post.href}
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="container">
          <Card className="mx-auto rounded-[32px] border-primary/10 p-8 md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                  Get weekly pest control ops tips
                </h2>
                <p className="mt-3 text-small text-text-light">
                  Short, practical ideas on scheduling, compliance, callbacks, and growth.
                </p>
              </div>
              <form action="#" className="flex w-full max-w-xl flex-col gap-3 sm:flex-row" method="POST">
                <input
                  className={inputClasses}
                  name="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-white/8 px-8 py-12 text-center shadow-xl backdrop-blur md:px-12 md:py-16">
            <h2 className="text-h2-mobile font-bold tracking-tight text-white md:text-h2-desktop">
              Want to see these workflows in action?
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
