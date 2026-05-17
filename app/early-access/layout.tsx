import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | PestPilot",
  description: "Start a 14-day free trial of PestPilot. No credit card required.",
  alternates: {
    canonical: "https://pestpilot.app/early-access"
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function EarlyAccessLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
