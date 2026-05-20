import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PestPilot",
  description: "Privacy Policy for PestPilot pest control management software.",
  alternates: { canonical: "https://pestpilot.app/privacy" }
};

type Section = { title: string; paragraphs: string[] };

const sections: Section[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      "PestPilot (\"we,\" \"us,\" \"our\") respects your privacy and is committed to protecting the personal information you entrust to us. This Privacy Policy explains how we collect, use, store, share, and protect information when you use our pest control management platform (\"Service\").",
      "This Policy applies to Account Owners and Authorized Users (pest control business owners, managers, dispatchers, and technicians), Customers (the end clients of pest control businesses whose information is stored in the Service), and Website Visitors (anyone who visits our marketing website at pestpilot.app). By using the Service, you consent to the practices described in this Policy."
    ]
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "Information you provide directly includes: business name, address, email, and phone number; owner/manager contact details; payment information (processed through Stripe — we do not store full credit card numbers); authorized user names, emails, phone numbers, and roles; login credentials (managed by Clerk — we do not store passwords).",
      "Customer information entered by your business includes: names, contact information (email, phone, address), service history and treatment records, property details and access instructions, billing and payment history, and communication preferences including SMS opt-in status.",
      "Operational data includes: scheduled appointments and service jobs, technician assignments and route information, chemical product usage and EPA compliance records, invoices, payments, and financial records, and notes, photos, and documents uploaded to the Service.",
      "Information collected automatically includes: IP address and approximate geographic location, browser type and operating system, pages viewed and features used, phone numbers and message content for SMS delivery, delivery status and timestamps, opt-in and opt-out records, and application error reports via Sentry."
    ]
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "We use collected information to provide the Service (scheduling, dispatching, invoicing, customer management, route optimization, SMS notifications, and EPA compliance tracking), process payments and manage subscriptions, send service notifications, appointment reminders, support responses, and account updates, and deliver text messages to your Customers on your behalf.",
      "We also use data to fix bugs and improve performance, develop new features, analyze aggregate usage patterns (never individual Customer data), prevent fraud and security threats, and comply with legal obligations.",
      "We do not sell your data or Customer data to third parties, use Customer data for advertising not requested by you, share individual Customer data with other Companies on the platform, or use SMS opt-in data for any purpose other than providing the Service."
    ]
  },
  {
    title: "4. How We Store and Protect Data",
    paragraphs: [
      "Application hosting and database are provided by Railway, Inc. with data centers in the United States. All data transmission is encrypted via TLS/SSL (HTTPS). Passwords are never stored directly — managed by Clerk with industry-standard hashing. Database connections are encrypted and access-controlled.",
      "Active account data is retained for the duration of your subscription. Invoices and financial records are retained for 7 years (legal requirement). SMS delivery records are retained for 2 years. Authentication logs are retained for 1 year. Error and crash logs are retained for 90 days. Deleted account data is permanently removed within 90 days. Encrypted backups are retained 30 days for disaster recovery.",
      "While we implement industry-standard security practices, no online service can guarantee absolute security. We encourage you to use strong passwords, protect your credentials, and export critical data periodically."
    ]
  },
  {
    title: "5. Third-Party Service Providers",
    paragraphs: [
      "We use the following third-party services: Railway, Inc. for application hosting and database (all application data stored on their infrastructure); Stripe, Inc. for payment processing (credit card details go directly to Stripe, not through us); Twilio, Inc. for SMS delivery (phone numbers and message content transmitted for delivery); Google Maps Platform for geocoding and routing (addresses and coordinates for route calculation); Clerk, Inc. for user authentication (email, hashed password, name, session data); and Sentry for error tracking (application error reports and device info).",
      "All providers are contractually obligated to protect your data and process it only for the purposes of providing their services to us."
    ]
  },
  {
    title: "6. How We Share Information",
    paragraphs: [
      "We send text messages on your behalf to phone numbers you provide. Your Customers can view their own service history, invoices, and appointments through the portal you provide them. You control which Authorized Users can access your Company data.",
      "We may disclose information if required to comply with a court order, subpoena, or legal process; respond to lawful requests by public authorities; protect our rights, privacy, safety, or property; investigate or prevent fraud or security violations; or enforce our Terms of Service.",
      "In the event of a merger, acquisition, or sale of assets, user data may be transferred to the acquiring entity. We will notify Account Owners via email of any such change.",
      "We do not share data for third-party advertising, sale to data brokers, cross-Company marketing, or any purpose not described in this Policy."
    ]
  },
  {
    title: "7. Your Rights",
    paragraphs: [
      "Account Owners and Authorized Users may: access and export all data associated with their account at any time; update or correct inaccurate information; request deletion of data (subject to legal retention requirements); export data in CSV or JSON format within 10 business days of request; and request limitation of processing in certain circumstances.",
      "Customers of pest control businesses using PestPilot have the right to request access to their personal data, request correction of inaccurate information, request deletion of their data, and opt out of SMS messages at any time (reply STOP to any message). Customers should direct these requests to their pest control company first. If the Company is unresponsive, Customers may contact us directly at privacy@pestpilot.app.",
      "To exercise any of these rights, contact us at privacy@pestpilot.app. We will respond within 30 days. We may verify your identity before processing requests."
    ]
  },
  {
    title: "8. SMS Messaging Privacy",
    paragraphs: [
      "We only send SMS messages to phone numbers provided by the Account Owner. The Account Owner is responsible for obtaining proper consent from their Customers before enabling SMS notifications. Customers may opt out at any time by replying STOP to any message (processed immediately), contacting the pest control company directly, or updating preferences in the Customer Portal.",
      "SMS message content is transmitted to Twilio for delivery and not stored beyond our retention period. Phone numbers are used solely for Service-related communications. No mobile information is shared with third parties for marketing purposes. Opt-in and opt-out records are maintained for compliance purposes. SMS messaging is subject to carrier requirements including A2P 10DLC registration."
    ]
  },
  {
    title: "9. Cookies and Tracking",
    paragraphs: [
      "The Service uses essential cookies for session management and authentication (via Clerk), security and CSRF protection, and remembering your preferences. These cookies cannot be disabled without losing access to the Service.",
      "We use error tracking (Sentry) to monitor application health. We do not use third-party advertising trackers, remarketing pixels, or social media tracking. You can control cookies through your browser settings, though disabling essential cookies will prevent you from using the Service."
    ]
  },
  {
    title: "10. California Privacy Rights (CCPA)",
    paragraphs: [
      "If you are a California resident, you have the right to request disclosure of the personal information we collect, use, and share; request deletion of your personal information (subject to legal exceptions); opt out of the sale of personal information (we do not sell personal information); and exercise these rights without discrimination.",
      "To exercise these rights, email privacy@pestpilot.app with \"CCPA Request\" in the subject line. We will respond within 45 days. Categories of personal information we collect include identifiers (name, email, phone), commercial information (invoices, payment history), internet activity (pages viewed, features used), geolocation (approximate from IP), professional information (business name, role), and inferences (usage patterns). We do not sell any of these categories."
    ]
  },
  {
    title: "11. International Data Transfers",
    paragraphs: [
      "All data is stored and processed in the United States. If you access the Service from outside the United States, your data will be transferred to and processed in the United States. By using the Service, you consent to this transfer."
    ]
  },
  {
    title: "12. Data Breach Notification",
    paragraphs: [
      "In the event of a data breach that affects your personal information, we will notify affected Account Owners via email within 72 hours of discovery, describe the nature of the breach and the data affected, provide guidance on protective measures, and notify relevant authorities as required by applicable law."
    ]
  },
  {
    title: "13. Children's Privacy",
    paragraphs: [
      "The Service is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn that we have, we will delete it promptly. Contact us at privacy@pestpilot.app if you believe this has occurred."
    ]
  },
  {
    title: "14. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. For material changes, we will provide notice via email to Account Owners at least 30 days before the change takes effect, post the updated Policy with a revised effective date, and obtain explicit consent where required by law. Your continued use of the Service after changes become effective constitutes acceptance of the updated Policy."
    ]
  },
  {
    title: "15. Contact Us",
    paragraphs: [
      "For privacy questions, data requests, or concerns: email privacy@pestpilot.app or support@pestpilot.app, or visit pestpilot.app. We aim to respond to privacy inquiries within 5 business days and data requests within 30 days."
    ]
  }
];

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
              Last updated: May 19, 2026
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
