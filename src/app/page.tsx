import React from "react";
import {
  Header,
  Subtitle,
  HowItWorks,
  RoastMasters,
  Testimonials,
  Reviews,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Subtitle Component */}
      <Subtitle />

      {/* How It Works Component */}
      <HowItWorks />

      {/* Decorative image */}
      <div className="w-full flex justify-center py-16">
        <img
          className="w-64 h-auto opacity-80"
          src="/assets/human.svg"
          alt="Decorative human figure"
        />
      </div>

      {/* Roast Masters Component */}
      <RoastMasters />

      {/* Testimonials Component */}
      <Testimonials />

      {/* Reviews Component */}
      <Reviews />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
