import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PestPilot",
  description: "Placeholder Privacy Policy for PestPilot."
};

const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "This Privacy Policy is placeholder content for [Company Name] and should be reviewed by legal counsel before publication. We may collect information you provide directly, such as account details, billing contacts, service addresses, technician information, customer records, and support requests submitted through the Service.",
      "We may also collect technical and usage information, including device data, browser type, log data, approximate location information, and interactions with platform features, to operate and improve PestPilot."
    ]
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "[Company Name] may use collected information to provide and maintain the Service, process transactions, authenticate users, respond to support inquiries, improve features, monitor performance, and communicate important account or product updates.",
      "We may also use information in aggregated or de-identified form for analytics, benchmarking, product planning, and operational reporting, subject to applicable law."
    ]
  },
  {
    title: "Information Sharing",
    paragraphs: [
      "We may share information with service providers that help us host, secure, analyze, support, or process payments for the Service, subject to contractual protections. We do not sell personal information in this placeholder policy unless and until the final published policy explicitly states otherwise.",
      "We may also disclose information where required by law, legal process, or valid governmental request, or where reasonably necessary to protect the rights, safety, or property of [Company Name], our users, or others."
    ]
  },
  {
    title: "Data Security",
    paragraphs: [
      "[Company Name] intends to maintain administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction. No security measure is perfect, and this section should be tailored to actual security practices before launch.",
      "Users are responsible for maintaining the security of their credentials and for limiting access to accounts by authorized personnel only."
    ]
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We may retain information for as long as reasonably necessary to provide the Service, fulfill contractual obligations, resolve disputes, enforce agreements, and comply with legal or regulatory requirements. Exact retention schedules should be finalized in the production policy.",
      "When retention is no longer necessary, [Company Name] will delete or de-identify information in accordance with applicable law and internal retention procedures."
    ]
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, delete, or restrict certain personal information, and to object to or request portability of certain processing activities. This placeholder language should be updated to match the jurisdictions where [Company Name] operates.",
      "To exercise any applicable rights, contact [Company Name] at [Contact Email]. We may need to verify your identity before responding to your request."
    ]
  },
  {
    title: "Cookies",
    paragraphs: [
      "We may use cookies and similar technologies to keep users signed in, remember preferences, analyze usage, and improve product performance. Specific cookie categories and controls should be described in the final version of this policy.",
      "You may be able to manage certain cookie settings through your browser or device, though disabling some cookies may affect Service functionality."
    ]
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "The Service may integrate with third-party services such as payment processors, analytics providers, mapping tools, communication platforms, or accounting systems. Their handling of information is governed by their own terms and privacy policies.",
      "[Company Name] is not responsible for the privacy practices of third parties except as required by law or expressly stated in a separate agreement."
    ]
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "PestPilot is intended for business use and is not directed to children. [Company Name] does not knowingly collect personal information from children in connection with the Service."
    ]
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "[Company Name] may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or product features. We will post the updated version with a revised effective date, and may provide additional notice where required by law."
    ]
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have questions about this placeholder Privacy Policy or our privacy practices, please contact [Company Name] at [Contact Email]. Final production contact details and jurisdiction-specific disclosures should be added before launch."
    ]
  }
] as const;

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-border bg-white px-6 py-10 shadow-sm md:px-10 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-h1-mobile font-extrabold tracking-tight text-primary md:text-h1-desktop">
              Privacy Policy
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
