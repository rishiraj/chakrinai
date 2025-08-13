import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-neutral-cream rounded-[80px] w-full max-w-7xl mx-auto py-24 px-6">
      <div className="text-black text-center font-fitfully text-4xl md:text-6xl lg:text-8xl font-normal uppercase mb-16">
        How the Roast Happens
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
        {/* Step 1: Step Onto the Stage */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary rounded-full p-4 mb-8 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <img
              className="rounded-full w-full h-full object-cover"
              src="/assets/roast 1.png"
              alt="Step onto the stage"
            />
          </div>
          <div className="max-w-sm">
            <div className="text-neutral-gray font-caption-handwriting text-2xl md:text-4xl font-normal italic mb-4">
              Step Onto the Stage
            </div>
            <div className="text-neutral-gray-light font-product-sans text-base md:text-lg font-normal">
              Step into the ring with your pitch and resume.
            </div>
          </div>
        </div>
        
        {/* Step 2: Roast */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary rounded-full p-4 mb-8 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <img
              className="rounded-full w-full h-full object-cover"
              src="/assets/roast 2.png"
              alt="Get roasted"
            />
          </div>
          <div className="max-w-sm">
            <div className="text-neutral-gray font-caption-handwriting text-2xl md:text-4xl font-normal italic mb-4">
              Roast
            </div>
            <div className="text-neutral-gray-light font-product-sans text-base md:text-lg font-normal">
              Startup founders, comedians, and industry icons roast your
              pitch—with heart and humor.
            </div>
          </div>
        </div>
        
        {/* Step 3: Land Your Next Role */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary rounded-full p-4 mb-8 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <img
              className="rounded-full w-full h-full object-cover"
              src="/assets/roast 3.png"
              alt="Land your next role"
            />
          </div>
          <div className="max-w-sm">
            <div className="text-neutral-gray font-caption-handwriting text-2xl md:text-4xl font-normal italic mb-4">
              Land Your Next Role
            </div>
            <div className="text-neutral-gray-light font-product-sans text-base md:text-lg font-normal">
              Walk away with real interviews, internships—or even job offers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 