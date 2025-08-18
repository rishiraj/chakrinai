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
      <Header />
      {/* Subtitle Component */}
      <Subtitle />

      {/* How It Works Component */}
      <HowItWorks />

      {/* Roast Masters Component */}
      <RoastMasters />

      {/* Testimonials Component */}
      {/* <Testimonials /> */}

      {/* Reviews Component */}
      <Reviews />

      {/* Footer Component */}
      <ThankYou />


      <Footer />
    </div>
  );
}
