import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary">
      <div className="bg-neutral-cream rounded-t-[80px] w-full max-w-7xl mx-auto h-auto min-h-[886px] relative top-12 overflow-hidden">
        {/* Background Images */}
        <img
          className="w-96 h-auto absolute right-8 top-16 opacity-80"
          src="/assets/logo.png"
          alt="Decorative logo"
        />
        <img
          className="w-full max-w-6xl h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
          src="/assets/human.svg"
          alt="Background pattern"
        />
        
        {/* Navigation Bar */}
        <div className="bg-primary rounded-full px-8 py-6 w-full max-w-5xl mx-auto h-auto min-h-[106px] relative top-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="bg-white rounded-full px-8 py-4 flex items-center justify-center">
              <div className="text-primary text-left font-figma-hand text-2xl font-bold">
                Home
              </div>
            </div>
            <div className="rounded-full px-8 py-4 flex items-center justify-center">
              <div className="text-white text-left font-figma-hand text-2xl font-bold">
                About
              </div>
            </div>
          </div>
          
          {/* Logo */}
          <img
            className="w-56 h-auto absolute left-1/2 top-[-52px] -translate-x-1/2"
            src="/Chakri Nai Logo.jpeg"
            alt="Chakri Nai Logo"
          />
          
          <div className="flex items-center space-x-8">
            <div className="rounded-full px-8 py-4 flex items-center justify-center">
              <div className="text-white text-left font-figma-hand text-2xl font-bold">
                Speakers
              </div>
            </div>
            <div className="rounded-full px-8 py-4 flex items-center justify-center">
              <div className="text-white text-left font-figma-hand text-2xl font-bold">
                Tickets
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Marquee Text */}
      <div className="bg-primary py-12 flex flex-col items-center justify-center w-full absolute bottom-0">
        <div className="flex items-center space-x-6 overflow-hidden">
          <div className="flex items-center space-x-6 animate-marquee">
            <div className="text-white text-center font-awesome-serif text-5xl font-normal whitespace-nowrap">
              Pitch.
            </div>
            <div className="text-white text-center font-awesome-serif text-5xl font-normal whitespace-nowrap">
              Get Roasted.
            </div>
            <div className="text-white text-center font-awesome-serif text-5xl font-normal whitespace-nowrap">
              Get Hired.
            </div>
          </div>
          <div className="flex items-center space-x-6 animate-marqueue">
            <div className="text-white text-center font-awesome-serif text-5xl font-normal whitespace-nowrap">
              Pitch.
            </div>
            <div className="text-white text-center font-awesome-serif text-5xl font-normal whitespace-nowrap">
              Get Roasted.
            </div>
            <div className="text-white text-center font-awesome-serif text-5xl font-normal whitespace-nowrap">
              Get Hired.
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex flex-col items-center space-y-16 mb-16">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-black text-center font-awesome-serif text-6xl md:text-8xl lg:text-9xl font-normal">
              Pitch.
            </div>
            <div className="text-black text-center font-awesome-serif text-6xl md:text-8xl lg:text-9xl font-normal">
              Get Roasted.
            </div>
            <div className="text-black text-center font-awesome-serif text-6xl md:text-8xl lg:text-9xl font-normal relative">
              Get Hired.
              <div className="absolute inset-0 bg-secondary rounded-full -z-10 transform scale-110"></div>
            </div>
          </div>
          <div className="text-black text-center font-product-sans text-2xl md:text-3xl lg:text-4xl font-normal max-w-4xl">
            India&apos;s first roast-comedy job pitch
            <br />
            show — where job seekers get made, not broken.
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <button className="bg-white rounded-full border-2 border-black px-12 py-4 flex items-center justify-center shadow-button hover:shadow-lg transition-shadow">
            <div className="text-black text-center font-caption-handwriting text-2xl md:text-3xl font-normal italic">
              Buy Tickets
            </div>
          </button>
          <button className="bg-secondary rounded-full border-2 border-black px-12 py-4 flex items-center justify-center shadow-button hover:shadow-lg transition-shadow">
            <div className="text-black text-center font-caption-handwriting text-2xl md:text-3xl font-normal italic">
              Apply as Participant
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header; 