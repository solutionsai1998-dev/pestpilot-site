import { pricingTiers } from "@/lib/pricing";

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PestPilot",
  description:
    "Flat-rate pest control software pricing with no per-technician fees, free migration, and built-in compliance workflows.",
  brand: {
    "@type": "Brand",
    name: "PestPilot"
  },
  offers: pricingTiers.monthly.map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    price: tier.schemaPrice,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  }))
};

export function PricingSchema() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
}
