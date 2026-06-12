import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PestPilot",
  description:
    "Terms of Service for PestPilot pest control management software.",
  alternates: { canonical: "https://pestpilot.app/terms" }
};

type Section = { title: string; paragraphs: string[] };

const sections: Section[] = [
  {
    title: "1. Overview",
    paragraphs: [
      "PestPilot (\"Service,\" \"we,\" \"us,\" \"our\") provides pest control management software for scheduling, dispatching, invoicing, customer management, and business operations. These Terms of Service (\"Terms\") govern your access to and use of our web application, APIs, and related services.",
      "By creating an account, accessing, or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service."
    ]
  },
  {
    title: "2. Definitions",
    paragraphs: [
      "\"Company\" means the pest control business entity that registers for the Service. \"Account Owner\" means the individual who creates the Company account and has authority to bind the Company to these Terms. \"Authorized Users\" means employees, contractors, or agents of the Company who are given access to the Service by the Account Owner. \"Customers\" means the Company's pest control clients whose information is stored in the Service."
    ]
  },
  {
    title: "3. Eligibility",
    paragraphs: [
      "You may use the Service only if you are at least 18 years old, have the legal authority to bind your Company to these Terms, are not prohibited from using the Service under any applicable law, and provide accurate and complete registration information."
    ]
  },
  {
    title: "4. Account Responsibilities",
    paragraphs: [
      "The person who creates the Company account is the Account Owner and is responsible for all activity under that account, including actions by Authorized Users. The Account Owner may invite Authorized Users and assign roles.",
      "The Company is responsible for obtaining proper consent before adding employees to the system, maintaining accurate user information, removing access promptly when employees or contractors leave the organization, and all activity performed under Company credentials by Authorized Users.",
      "You must keep login credentials secure and confidential. Notify us immediately at support@pestpilot.app if you suspect unauthorized access to your account. You agree to provide and maintain accurate business and contact information."
    ]
  },
  {
    title: "5. Subscription Plans and Pricing",
    paragraphs: [
      "Starter: $49/month — core scheduling, customer management, invoicing, 2 users included (additional seats at $19/month).",
      "Professional: $99/month — full feature set including dispatch, route optimization, SMS (500 segments included, overages at $0.04/segment), EPA tracking, customer portal, 5 users included (additional seats at $19/month).",
      "Launch pricing guaranteed through 2026. Annual billing available at a discount. All prices are in USD. We may adjust pricing with 30 days' written notice. Continued use after a price change constitutes acceptance.",
      "Professional plans include 500 SMS segments per month. Additional segments are billed at $0.04 per segment. SMS usage is measured per billing period and overages appear on your next invoice.",
      "Subscription fees are billed monthly in advance. SMS overages and other metered charges are billed in arrears. Payment is processed via credit card through our payment processor (Stripe, Inc.). By providing a payment method, you authorize us to charge all applicable fees.",
      "Accounts more than 30 days past due may be suspended. Accounts more than 60 days past due may be terminated. We will attempt to notify you before suspension or termination.",
      "Fees are non-refundable for partial billing periods except where required by law. If you cancel, your subscription remains active through the end of the current billing period. We do not offer refunds for unused SMS segments. We may offer free trial periods with no obligation to continue."
    ]
  },
  {
    title: "6. SMS/Text Messaging (A2P 10DLC Compliance)",
    paragraphs: [
      "By enabling SMS features, you acknowledge that PestPilot may send text messages on your behalf for appointment confirmations and reminders, technician arrival notifications, service completion notices, invoice and payment reminders, and seasonal service promotions (only if Customer has opted in to marketing messages). Message frequency varies based on your service schedule and account activity.",
      "You are responsible for obtaining proper consent from your Customers before sending them text messages through the Service. Consent must be clear and affirmative (checkbox, keyword opt-in, or written consent), documented and retrievable, and specific to the message types described above.",
      "Your Customers may opt out of text messages at any time by replying STOP to any message, contacting you directly, or updating preferences in the Customer Portal. When a Customer opts out, the Service will stop sending messages to that number immediately.",
      "Customers may reply HELP to any message for assistance. Wireless carriers are not liable for delayed or undelivered messages. Message and data rates may apply to recipients. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.",
      "We reserve the right to suspend SMS messaging for any Company that violates these provisions, sends prohibited content (illegal, harassing, deceptive, or unsolicited marketing to opted-out Customers), or generates complaints."
    ]
  },
  {
    title: "7. Acceptable Use",
    paragraphs: [
      "You may not use the Service for any illegal purpose; access or attempt to access other Companies' data; interfere with the Service's security, infrastructure, or operation; upload malicious code, viruses, or harmful content; use automated tools to scrape, crawl, or extract data from the Service; resell or sublicense access to the Service without written permission; use the Service to send spam, unsolicited messages, or misleading communications; or reverse engineer, decompile, or disassemble any part of the Service.",
      "Violation of these terms may result in warning, suspension, or immediate account termination without refund, at our sole discretion."
    ]
  },
  {
    title: "8. Intellectual Property",
    paragraphs: [
      "The Service, including its software, design, text, graphics, and underlying technology, is owned by PestPilot and protected by intellectual property laws. These Terms do not grant you any ownership rights. You retain ownership of all data you input into the Service, including Customer information, service records, schedules, and business documents.",
      "We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service during your active subscription, subject to these Terms."
    ]
  },
  {
    title: "9. Data and Content",
    paragraphs: [
      "You own your data. We do not claim ownership over your business data, Customer information, or content you upload to the Service. You are responsible for the accuracy and legality of data you enter, obtaining proper consent to store and process Customer and employee data, complying with all applicable privacy, employment, and consumer protection laws, and maintaining backups of critical data.",
      "We use your data only to provide, maintain, and improve the Service; send service-related communications; process billing and prevent fraud; and generate aggregated, anonymized analytics. We do not sell your data or share it with third parties for their marketing purposes.",
      "You may request a full export of your data at any time by contacting support@pestpilot.app. We will provide the export in a standard format within 10 business days."
    ]
  },
  {
    title: "10. Third-Party Integrations",
    paragraphs: [
      "Payment processing is handled by Stripe, Inc. Your credit card information is sent directly to Stripe and never stored on our servers. Route optimization and mapping are powered by Google Maps Platform. Address and route data are sent to Google to generate directions.",
      "Online invoice payments (Stripe Connect): If you enable online invoice payments, your Company must complete Stripe Connect onboarding, and Stripe's Connected Account Agreement applies. Payments made by your Customers are routed to your connected Stripe account. A payment processing fee of 2.9% + $0.30 per successful card transaction is deducted from each payment before payout. Refunds and disputes (chargebacks) are managed through Stripe and are deducted from your connected account balance; processing fees are not returned on refunds. We may update the processing fee with 30 days' written notice.",
      "Text messages are delivered through Twilio, Inc. Phone numbers and message content are transmitted to Twilio for delivery. User authentication is managed by Clerk, Inc. Login credentials are processed by Clerk and not stored directly by us.",
      "You acknowledge that use of these third-party services is subject to their respective terms and privacy policies."
    ]
  },
  {
    title: "11. Service Availability",
    paragraphs: [
      "We strive to provide reliable, uninterrupted service but do not guarantee 100% uptime. The Service may be temporarily unavailable during scheduled maintenance (we will provide reasonable advance notice), emergency fixes or security patches, and events beyond our reasonable control (force majeure). We are not liable for business losses resulting from service downtime."
    ]
  },
  {
    title: "12. Confidentiality",
    paragraphs: [
      "We treat your business data as confidential. Our personnel access your data only when necessary to provide customer support you have requested, troubleshoot and resolve technical issues, maintain system security and integrity, or comply with legal obligations. We do not share your confidential data with third parties except as described in these Terms and our Privacy Policy."
    ]
  },
  {
    title: "13. Term and Termination",
    paragraphs: [
      "Your subscription begins on the date you sign up and continues monthly unless cancelled. You may cancel at any time by emailing support@pestpilot.app or using the cancellation option in your account settings.",
      "Upon cancellation: your subscription remains active through the end of the current billing period; you have 30 days after cancellation to request a data export; your data will be permanently deleted within 90 days of cancellation; and your assigned SMS phone number will be released and may not be recoverable.",
      "We may suspend or terminate your account if you violate these Terms, fail to pay amounts due within 30 days of notice, or engage in conduct that harms other users, Customers, or us. We will provide written notice before termination except in cases of serious violation or security threat.",
      "Upon termination: your right to use the Service ends at the close of the current billing period; all outstanding fees become immediately due; we may retain data as required by law or for dispute resolution; and Sections 8, 10, 12, 14, 15, 16, and 17 survive termination."
    ]
  },
  {
    title: "14. Disclaimers",
    paragraphs: [
      "The Service is provided \"as is\" and \"as available\" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "We do not warrant that the Service will be uninterrupted, error-free, or secure; that results obtained from the Service will be accurate or reliable; or that defects in the Service will be corrected. We are not responsible for the availability, accuracy, or performance of third-party services (Stripe, Google Maps, Twilio, Clerk)."
    ]
  },
  {
    title: "15. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, our total aggregate liability to you for any and all claims arising from or related to these Terms or the Service is limited to the greater of: (a) the amount you paid us in the 12 months preceding the claim, or (b) one hundred dollars ($100).",
      "We are not liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, revenue, or business opportunities; loss of data (you are responsible for maintaining backups); business interruption; or cost of substitute services. This limitation applies regardless of the legal theory and even if we were advised of the possibility of such damages.",
      "You acknowledge that the fees charged for the Service reflect this allocation of risk and that you would not have been able to access the Service at these prices without these limitations."
    ]
  },
  {
    title: "16. Indemnification",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless PestPilot and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from or related to: your use of the Service; your violation of these Terms; your violation of any applicable law or regulation; your violation of any third party's rights; content or data you input into the Service; SMS messages sent on your behalf through the Service; your failure to obtain proper consent from Customers or employees; or claims by your Customers or employees regarding their data."
    ]
  },
  {
    title: "17. Dispute Resolution",
    paragraphs: [
      "These Terms are governed by the laws of the State of Arizona, United States, without regard to conflict of law principles. Before filing any formal claim, you agree to contact us at support@pestpilot.app and attempt to resolve the dispute informally. We will respond within 14 days and attempt resolution within 30 days.",
      "Any dispute that cannot be resolved informally shall be resolved through binding arbitration administered by JAMS under its Streamlined Arbitration Rules. Arbitration will be conducted in Maricopa County, Arizona. The arbitrator's decision is final and binding.",
      "You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration against us. Either party may seek injunctive or equitable relief in any court of competent jurisdiction for intellectual property violations or breaches of confidentiality obligations."
    ]
  },
  {
    title: "18. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. For material changes, we will provide at least 30 days' notice via email to the Account Owner, post the updated Terms with a revised effective date, and obtain explicit consent where required by law. Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms."
    ]
  },
  {
    title: "19. General Provisions",
    paragraphs: [
      "These Terms, together with our Privacy Policy, constitute the entire agreement between you and PestPilot regarding the Service. If any provision is found unenforceable, the remaining provisions remain in full effect. Our failure to enforce any right does not constitute a waiver of that right.",
      "You may not assign or transfer these Terms without our prior written consent. We may assign these Terms to a successor in connection with a merger, acquisition, or sale of assets. Neither party is liable for failures or delays due to causes beyond reasonable control, including natural disasters, war, terrorism, riots, government actions, pandemic, internet outages, or failures of third-party service providers.",
      "Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship between you and us. All notices under these Terms should be sent to support@pestpilot.app."
    ]
  },
  {
    title: "20. Contact",
    paragraphs: [
      "For questions about these Terms, contact us at support@pestpilot.app or visit pestpilot.app. We aim to respond to all inquiries within 2 business days."
    ]
  }
];

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
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
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
