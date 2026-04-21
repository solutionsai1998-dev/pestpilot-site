import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PestPilot",
  description: "Placeholder Terms of Service for PestPilot."
};

const sections = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "These Terms of Service are placeholder legal content for [Company Name] and are provided for design and product development purposes only. By accessing or using the PestPilot platform, you agree to be bound by the then-current version of these Terms and any policies incorporated by reference.",
      "If you are using the Service on behalf of a company, you represent that you have authority to bind that entity to these Terms. If you do not agree, do not access or use the Service."
    ]
  },
  {
    title: "Description of Service",
    paragraphs: [
      "PestPilot is a software platform intended to support pest control businesses with scheduling, dispatch, invoicing, reporting, compliance documentation, and related workflows. This section is placeholder language and should be reviewed by legal counsel before publication.",
      "[Company Name] may modify, improve, suspend, or discontinue portions of the Service from time to time. We will use reasonable efforts to communicate material changes where appropriate."
    ]
  },
  {
    title: "User Accounts",
    paragraphs: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate information and to keep that information current.",
      "You must promptly notify [Company Name] at [Contact Email] if you believe your account has been compromised or used without authorization."
    ]
  },
  {
    title: "Acceptable Use",
    paragraphs: [
      "You may not use the Service in a manner that violates applicable law, infringes the rights of others, attempts unauthorized access, interferes with platform operations, or introduces malicious code. Placeholder language should be tailored to the final product scope and jurisdiction.",
      "We reserve the right to investigate misuse and to suspend or terminate accounts that, in our reasonable judgment, create risk for the Service, other users, or third parties."
    ]
  },
  {
    title: "Billing and Payments",
    paragraphs: [
      "If the Service is offered on a paid basis, you agree to pay all fees described in your order form, subscription plan, or other commercial agreement with [Company Name]. Unless otherwise stated, fees are non-refundable except where required by law.",
      "[Company Name] may change pricing, introduce new fees, or update billing terms with advance notice. Taxes, duties, and government charges are your responsibility unless explicitly included."
    ]
  },
  {
    title: "Data and Privacy",
    paragraphs: [
      "As between the parties, you retain ownership of the business data you submit to the Service, subject to the rights needed by [Company Name] to provide, secure, maintain, and improve the platform. Your use of the Service is also subject to our Privacy Policy.",
      "You are responsible for ensuring that your collection and use of customer, employee, and compliance data complies with applicable law, including any notice or consent obligations."
    ]
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "The Service, including its software, interface design, branding, documentation, and related content, is owned by [Company Name] or its licensors and is protected by applicable intellectual property laws. These Terms do not transfer ownership of any intellectual property rights.",
      "Subject to these Terms, [Company Name] grants you a limited, non-exclusive, non-transferable, revocable right to access and use the Service for your internal business purposes."
    ]
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "This section is placeholder legal text and must be reviewed by counsel. To the maximum extent permitted by law, [Company Name] will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenues, data, or goodwill arising from or related to the Service.",
      "To the maximum extent permitted by law, the aggregate liability of [Company Name] for claims arising out of or relating to the Service will not exceed the amounts paid by you to [Company Name] for the Service during the twelve months preceding the event giving rise to the claim."
    ]
  },
  {
    title: "Termination",
    paragraphs: [
      "You may stop using the Service at any time, subject to any subscription commitments or cancellation procedures that apply to your plan. [Company Name] may suspend or terminate access if you violate these Terms, fail to pay fees when due, or create legal, security, or operational risk.",
      "Upon termination, your right to use the Service will cease, though provisions that by their nature should survive termination will remain in effect. Data retention and export timing should be finalized in production terms."
    ]
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have questions about these placeholder Terms of Service, please contact [Company Name] at [Contact Email]. Final production contact information, governing law, venue, and dispute terms should be added before launch."
    ]
  }
] as const;

export default function TermsPage() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-border bg-white px-6 py-10 shadow-sm md:px-10 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Terms of Service
            </h1>
            <p className="mt-4 text-small font-medium uppercase tracking-[0.18em] text-text-light">
              Last updated: April 21, 2026
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
