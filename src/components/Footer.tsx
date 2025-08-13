import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="rounded-[44px] border-2 border-secondary-light p-8 md:p-12 lg:p-16 w-full max-w-7xl mx-auto my-24">
      <div className="text-secondary-light font-fitfully text-6xl md:text-8xl lg:text-9xl font-normal uppercase mb-12 text-center">
        thanks for staying with us.
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            className="w-64 h-auto"
            src="/assets/logo.png"
            alt="Chakri Nai Logo"
          />
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-6">
              <div className="text-secondary-light font-awesome-serif text-3xl md:text-4xl lg:text-5xl font-normal">
                hello123@gmail.com
              </div>
              <div className="text-secondary-light font-awesome-serif text-3xl md:text-4xl lg:text-5xl font-normal">
                +91-00000-00000
              </div>
              <div className="text-secondary-light font-caption-handwriting text-2xl md:text-3xl lg:text-4xl font-normal italic">
                Kolkata, Sector V, Bidhannagar
              </div>
            </div>
            <div className="text-secondary-light font-awesome-serif text-lg md:text-xl lg:text-2xl font-normal">
              Made by love CHAKRI NAI
            </div>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <div className="bg-secondary-light rounded-full p-8 md:p-12 transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-secondary-light font-bold text-lg md:text-xl">
              A
            </div>
          </div>
          <div className="bg-secondary-light rounded-full p-8 md:p-12 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-secondary-light font-bold text-lg md:text-xl">
              B
            </div>
          </div>
        </div>
      </div>
      
      {/* Barcode */}
      <div className="flex justify-end mt-8">
        <div className="w-2 h-32 bg-secondary-light rounded-sm"></div>
      </div>
    </div>
  );
};

export default Footer; 