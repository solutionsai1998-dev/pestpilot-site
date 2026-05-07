import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { OutcomeGrid } from "@/components/home/OutcomeGrid";
import { PricingPreview } from "@/components/home/PricingPreview";
import { ROIMetrics } from "@/components/home/ROIMetrics";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <OutcomeGrid />
      <FeatureShowcase />
      <ROIMetrics />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
