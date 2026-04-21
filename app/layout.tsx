import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pestpilot.com"),
  title: "PestPilot — Pest Control Software Built for Your Business",
  description:
    "Scheduling, dispatch, invoicing, and EPA compliance — all in one. Built exclusively for pest control operators.",
  openGraph: {
    title: "PestPilot",
    description:
      "Scheduling, dispatch, invoicing, and EPA compliance — all in one. Built exclusively for pest control operators.",
    url: "https://pestpilot.com",
    siteName: "PestPilot",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PestPilot",
    description:
      "Scheduling, dispatch, invoicing, and EPA compliance — all in one. Built exclusively for pest control operators."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${jetbrainsMono.variable}`} lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main className="site-main" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
