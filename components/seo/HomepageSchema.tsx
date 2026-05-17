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
    lowPrice: "49",
    highPrice: "99",
    priceCurrency: "USD",
    offerCount: 2
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
