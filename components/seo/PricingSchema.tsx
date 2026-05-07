import { pricingTiers } from "@/lib/pricing";

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PestPilot",
  description:
    "Two PestPilot plans for pest control teams: Starter at $49/mo and Professional at $99/mo, with branding included on every plan.",
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
