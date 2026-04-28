import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Access | PestPilot",
  description:
    "Join 15 founding PestPilot members and lock in $49/mo for life. Exclusive early adopter program for pest control operators.",
  alternates: {
    canonical: "https://pestpilot.com/early-access"
  },
  openGraph: {
    title: "Become a Founding PestPilot | PestPilot",
    description:
      "Join 15 founding members. Lock in $49/mo for life and help shape the product.",
    url: "https://pestpilot.com/early-access",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Founding PestPilot",
    description:
      "Join 15 founding members. Lock in $49/mo for life and help shape the product."
  }
};

export default function EarlyAccessLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
