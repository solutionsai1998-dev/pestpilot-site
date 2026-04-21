const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PestPilot",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Pest control software for scheduling, dispatch, invoicing, and EPA compliance.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "79",
    highPrice: "299",
    priceCurrency: "USD",
    offerCount: 3
  }
};

export function HomepageSchema() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
}
