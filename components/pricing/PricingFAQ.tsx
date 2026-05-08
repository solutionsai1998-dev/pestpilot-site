import { Card } from "@/components/shared/Card";

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes — 14 days, full Professional features, no credit card required. After the trial, choose Starter or Professional to keep using PestPilot."
  },
  {
    question: "Is launch pricing guaranteed?",
    answer:
      "Yes. Launch pricing is guaranteed through 2026. No contracts, cancel anytime."
  },
  {
    question: "Do you charge per technician?",
    answer:
      "Starter includes 2 users and Professional includes 5 users. Additional seats are $19/mo each on both plans with no hard cap."
  },
  {
    question: "Can you help migrate data from my current software?",
    answer:
      "Yes. The Data Migration Add-on is $199 one-time and includes customers, properties, service history, chemical product inventory, and technician records, delivered within 5 business days."
  },
  {
    question: "Is chemical tracking included on every plan?",
    answer:
      "Yes. Chemical tracking is included on both Starter and Professional, alongside the customer portal, recurring automation, and branding."
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. Upgrade as your route volume grows, or move down if your needs change. Your data stays intact either way."
  },
  {
    question: "Are there contracts?",
    answer:
      "No. You can cancel anytime, and there are no long-term contracts. Annual billing is optional if you want the lower monthly rate."
  }
];

export function PricingFAQ() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-small font-semibold uppercase tracking-[0.24em] text-primary-light">
            Pricing FAQ
          </p>
          <h2 className="mt-4 text-h2-mobile font-bold tracking-tight text-primary md:text-h2-desktop">
            Common questions before you switch.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card className="rounded-[24px] p-6" key={faq.question}>
              <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
              <p className="mt-3 text-small text-text-light">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
