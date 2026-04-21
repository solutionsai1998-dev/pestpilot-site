import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

const testimonials = [
  {
    name: "Jake Mercer",
    company: "Mercer Pest Defense · Phoenix, AZ",
    quote:
      "We finally stopped missing 30-day retreatments. PestPilot keeps the schedule honest and the office team is not digging through paper tickets anymore.",
    rating: 5
  },
  {
    name: "Alicia Moreno",
    company: "Sonoran Shield Pest · Tucson, AZ",
    quote:
      "Free migration mattered. We moved from spreadsheets in a week and my two techs were logging treatments from the truck on day one.",
    rating: 5
  },
  {
    name: "Brandon Lee",
    company: "Cedar Ridge Exterminators · Dallas, TX",
    quote:
      "Chemical tracking used to live in three binders and a whiteboard. Now I can pull records for any property without turning the office upside down.",
    rating: 5
  },
  {
    name: "Tasha Nguyen",
    company: "Blue Mesa Pest Co. · Albuquerque, NM",
    quote:
      "We run five techs and the routing plus reminders have cut callbacks and no-shows enough that the software paid for itself fast.",
    rating: 5
  },
  {
    name: "Cole Ramsey",
    company: "Ramsey Family Pest · Oklahoma City, OK",
    quote:
      "Customers love the reminder texts and online payments. We look more organized without adding extra office admin.",
    rating: 4
  },
  {
    name: "Denise Porter",
    company: "Harborline Pest Services · Tampa, FL",
    quote:
      "As we grew past eight techs, recurring cycle visibility became critical. PestPilot gives our dispatch team one source of truth.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
            Wall of Love
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Operators of every size trust PestPilot to keep the routes moving.
          </h2>
          <p className="mt-4 text-body-mobile text-text-light md:text-body">
            From solo operators to multi-crew shops, teams use PestPilot to stay on top of
            recurring treatments, compliance, and customer communication.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {["1-2 techs", "3-5 techs", "6-10 techs"].map((tag) => (
            <span
              className="rounded-full border border-primary/10 bg-white px-4 py-2 text-small font-medium text-text-light shadow-sm"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-6 md:columns-2 xl:columns-3">
          {testimonials.map((testimonial) => (
            <div className="mb-6 break-inside-avoid" key={testimonial.name}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-primary">
            Join 500+ pest control companies using PestPilot
          </p>
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary-light"
            href="/demo"
          >
            Start free trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
