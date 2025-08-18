import { socialLinks } from "@/data/socialLinks";
import { Facebook, Instagram, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const ThankYou: React.FC = () => {
  return (
    <div className="rounded-[44px] border-2 border-secondary-light p-8 md:p-12 lg:p-16 w-full max-w-7xl mx-auto my-24">
      <div className="text-secondary-light font-fitfully text-6xl md:text-8xl lg:text-9xl font-normal uppercase mb-12 text-center">
        THANKS FOR
        <br />
        STAYING WITH US.
      </div>

      <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Chakri Nai Logo */}
          <div className="relative">
            <img
              className="w-64 h-auto"
              src="/assets/logo.png"
              alt="Chakri Nai Logo"
            />
          </div>

          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-6">
              <div className="text-secondary-light font-awesome-serif text-3xl md:text-4xl lg:text-5xl font-normal italic">
                chakrinaishow@gmail.com
              </div>

              <div className="text-secondary-light font-caption-handwriting text-2xl md:text-3xl lg:text-4xl font-normal italic">
                Kolkata, West Bengal
              </div>
            </div>
            <div className="text-secondary-light font-awesome-serif text-lg md:text-xl lg:text-2xl font-normal italic">
              Made by love CHAKRI NAI
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          {/* Instagram/Camera icon */}
          <Link href={socialLinks.instagram} className="bg-secondary-light rounded-full p-4 border border-black">
            <Instagram className="size-10" />
          </Link>
          {/* Profile icon */}
          <Link href={socialLinks.twitter} className="bg-secondary-light rounded-full p-4 border border-black">
            <X className="size-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
