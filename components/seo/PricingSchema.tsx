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
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "79",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Growth",
      price: "149",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Scale",
      price: "299",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    }
  ]
};

export function PricingSchema() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
}
