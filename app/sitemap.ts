import type { MetadataRoute } from "next";

const baseUrl = "https://pestpilot.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/features`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/scheduling`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/features/dispatch`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/features/invoicing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/features/chemical-tracking`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/reporting`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/pest-control-software`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/demo`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 }
  ];
}
