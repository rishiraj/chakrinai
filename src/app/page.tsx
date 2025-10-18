"use client";
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
  BuyTickets,
  TicketsComingSoon,
  TrustedByCompanies,
} from "@/components";
// import { getRoastMasters } from "@/data/roastMasters";
import FeatureRule from "../../public/content/feature.rule.json";

export default function Home() {
  const ticketsDisplay = FeatureRule.ticketsDisplay ?? {};
  const ticketMode = ticketsDisplay.off
    ? "off"
    : ticketsDisplay.buy
    ? "buy"
    : ticketsDisplay.comingSoon
    ? "comingSoon"
    : "off";
  const showTicketsSection =
    Boolean(FeatureRule.sections?.tickets) && ticketMode !== "off";

  return (
    <div className="min-h-screen relative w-full">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30 z-[-1]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 63px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 63px)`,
          }}
        ></div>
      </div>
      {/* Header Component */}
      {FeatureRule.sections.header && <Header />}
      {/* Trusted by Companies Section */}
      {FeatureRule.sections.trustedCompanies && <TrustedByCompanies />}

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

      {/* Tickets Coming Soon Section */}
      {showTicketsSection && ticketMode === "comingSoon" && (
        <TicketsComingSoon />
      )}
      {showTicketsSection && ticketMode === "buy" && <BuyTickets />}

      {/* Thank You Section */}
      {FeatureRule.sections.thankyou && <ThankYou />}

      {/* Footer Component */}
      {FeatureRule.sections.footer && <Footer />}
    </div>
  );
}
