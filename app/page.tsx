import { ChemicalTracking } from "@/components/home/ChemicalTracking";
import { Differentiator } from "@/components/home/Differentiator";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { PainPoints } from "@/components/home/PainPoints";
import { PaperTransition } from "@/components/home/PaperTransition";
import { PricingPreview } from "@/components/home/PricingPreview";
import { RecurringCycles } from "@/components/home/RecurringCycles";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <PainPoints />
      <FeatureShowcase />
      <Differentiator />
      <ChemicalTracking />
      <RecurringCycles />
      <PaperTransition />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
