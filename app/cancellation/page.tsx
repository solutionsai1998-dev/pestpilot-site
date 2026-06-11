import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | PestPilot",
  description: "Cancellation and refund policy for PestPilot pest control software subscriptions."
};

const sections = [
  {
    title: "Subscription Cancellation",
    paragraphs: [
      "You may cancel your PestPilot subscription at any time from the Billing section of your account dashboard. When you cancel, your subscription will remain active through the end of your current billing period — you will not be charged again, and you will retain full access until the period ends.",
      "If you cancel during a free trial, your trial access ends immediately and no charges will be applied."
    ]
  },
  {
    title: "Refund Policy",
    paragraphs: [
      "PestPilot offers a 14-day free trial with no credit card required. Once a paid subscription begins, subscription fees are non-refundable for partial billing periods except where required by law.",
      "If you cancel a paid subscription, you will retain access through the end of the billing period in which you cancel, but no prorated refund will be issued for the remaining days. We do not offer refunds for unused SMS segments."
    ]
  },
  {
    title: "Annual Plans",
    paragraphs: [
      "Annual billing follows the same end-of-period policy. Annual plans paid in advance are non-refundable except where required by law, but you will retain access for the full annual term."
    ]
  },
  {
    title: "Per-Seat Billing",
    paragraphs: [
      "If your plan includes per-seat billing, adding seats takes effect immediately and is charged on your next billing cycle. Removing seats takes effect at the end of the current billing period — you will not be charged for removed seats in the next cycle.",
      "We do not prorate refunds for seat reductions mid-cycle."
    ]
  },
  {
    title: "Data After Cancellation",
    paragraphs: [
      "After cancellation, you have 30 days to request a data export by contacting support. Your account data will be permanently deleted within 90 days of cancellation.",
      "Demo accounts and trial data may be deleted at any time without notice."
    ]
  },
  {
    title: "Service Termination by PestPilot",
    paragraphs: [
      "PestPilot reserves the right to suspend or terminate accounts that violate our Terms of Service. In such cases, no refund will be provided for the current billing period. We will make reasonable efforts to notify you before taking action where circumstances allow."
    ]
  },
  {
    title: "How to Cancel",
    paragraphs: [
      "To cancel your subscription, log in to your PestPilot account, navigate to Billing, and use the Stripe billing portal to manage your subscription. You can also contact us at hello@pestpilot.app and we will process the cancellation within 2 business days."
    ]
  },
  {
    title: "Questions",
    paragraphs: [
      "If you have questions about this policy or need help with a cancellation or refund, reach out to us at hello@pestpilot.app. We respond to all billing inquiries within 2 business days."
    ]
  }
] as const;

export default function CancellationPage() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-border bg-white px-6 py-10 shadow-sm md:px-10 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Cancellation & Refund Policy
            </h1>
            <p className="mt-4 text-small font-medium uppercase tracking-[0.18em] text-text-light">
              Last updated: June 11, 2026
            </p>
          </div>

          <div className="mt-10 max-w-3xl space-y-10 text-body-mobile leading-8 text-text-light md:text-body">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-h3-mobile font-semibold text-primary md:text-h3-desktop">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
