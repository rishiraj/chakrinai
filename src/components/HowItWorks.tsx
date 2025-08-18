import { merriweatherSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <div
      id="how-it-works"
      className="bg-neutral-cream rounded-[80px] w-11/12 mx-auto py-24 px-6 relative scroll-mt-[120px]"
    >
      {/* Paper Bucket */}
      <div className="absolute -top-16 right-6">
        <img
          className="w-32 h-auto"
          src="/assets/paper bucket.png"
          alt="Paper bucket"
        />
      </div>
      <div className="text-black text-center font-fitfully text-4xl md:text-6xl lg:text-8xl font-normal uppercase mb-16">
        How the Roast Happens
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
        {/* Step 1: Step Onto the Stage */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary rounded-full p-4 mb-8 w-64 h-64 md:size-64 flex items-center justify-center">
            <img
              className="rounded-full w-full h-full object-cover"
              src="/assets/roast 1.png"
              alt="Step onto the stage"
            />
          </div>
          <div className="max-w-sm">
            <h2 className="text-neutral-gray font-caption-handwriting text-2xl md:text-4xl lg:text45xl font-normal italic mb-4">
              Step Onto the Stage
            </h2>
            <p
              className={cn(
                merriweatherSans.className,
                merriweatherSans.variable,
                "text-neutral-gray-light font-product-sans text-base md:text-lg font-normal"
              )}
            >
              Step into the ring with your pitch and resume.
            </p>
          </div>
        </div>

        {/* Step 2: Roast */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary rounded-full p-4 mb-8 w-64 h-64 md:size-64 flex items-center justify-center">
            <img
              className="rounded-full w-full h-full object-cover"
              src="/assets/roast 2.png"
              alt="Get roasted"
            />
          </div>
          <div className="max-w-sm">
            <h2 className="text-neutral-gray font-caption-handwriting text-2xl md:text-4xl lg:text45xl font-normal italic mb-4">
              Roast
            </h2>
            <p
              className={cn(
                merriweatherSans.className,
                merriweatherSans.variable,
                "text-neutral-gray-light font-product-sans text-base md:text-lg font-normal"
              )}
            >
              Startup founders, comedians, and industry icons roast your
              pitch—with heart and humor.
            </p>
          </div>
        </div>

        {/* Step 3: Land Your Next Role */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary rounded-full p-4 mb-8 w-64 h-64 md:size-64 flex items-center justify-center">
            <img
              className="rounded-full w-full h-full object-cover"
              src="/assets/roast 3.png"
              alt="Land your next role"
            />
          </div>
          <div className="max-w-sm">
            <h2 className="text-neutral-gray font-caption-handwriting text-2xl md:text-4xl lg:text45xl font-normal italic mb-4">
              Land Your Next Role
            </h2>
            <p
              className={cn(
                merriweatherSans.className,
                merriweatherSans.variable,
                "text-neutral-gray-light font-product-sans text-base md:text-lg font-normal"
              )}
            >
              Walk away with real interviews, internships—or even job offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
