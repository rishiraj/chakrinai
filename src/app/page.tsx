import React from "react";
import {
  Header,
  Subtitle,
  HowItWorks,
  RoastMasters,
  Testimonials,
  Reviews,
  ThankYou,
  Footer,
} from "@/components";
// import { getRoastMasters } from "@/data/roastMasters";
import FeatureRule from "../../public/content/feature.rule.json";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 63px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 63px)`,
          }}
        ></div>
      </div>
      {/* Header Component */}
      {FeatureRule.sections.header && <Header />}
      {/* Subtitle Component */}
      {FeatureRule.sections.subtitle && <Subtitle />}

      {/* How It Works Component */}
      {FeatureRule.sections.howItWorks && <HowItWorks />}

      {/* Roast Masters Component */}
      {FeatureRule.sections.roastMasters && <RoastMasters />}

      {/* Testimonials Component */}
      {/* <Testimonials /> */}

      {/* Reviews Component */}
      {FeatureRule.sections.reviews && <Reviews />}

      {/* Footer Component */}
      {FeatureRule.sections.footer && <ThankYou />}

      <Footer />
    </div>
  );
}
