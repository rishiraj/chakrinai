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
                hello123@gmail.com
              </div>
              <div className="text-secondary-light font-awesome-serif text-3xl md:text-4xl lg:text-5xl font-normal italic">
                +91-00000-00000
              </div>
              <div className="text-secondary-light font-caption-handwriting text-2xl md:text-3xl lg:text-4xl font-normal italic">
                Kolkata, Sector V, Bidhannagar
              </div>
            </div>
            <div className="text-secondary-light font-awesome-serif text-lg md:text-xl lg:text-2xl font-normal italic">
              Made by love CHAKRI NAI
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-end gap-4">
          {/* Instagram/Camera icon */}
          <div className="bg-secondary-light rounded-full p-4 border border-black">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-black rounded-sm relative">
                <div className="absolute top-1 right-1 w-2 h-2 border-2 border-black rounded-full"></div>
                <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Profile icon */}
          <div className="bg-secondary-light rounded-full p-4 border border-black">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-secondary-light rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
