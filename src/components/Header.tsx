import Image from 'next/image';
import React from 'react';
import RedStroke from '../../public/assets/red-stroke.png';
import Marquee from "react-fast-marquee";
import Navbar from './Navbar';
const Header: React.FC = () => {
  return (

    <div className="w-full bg-primary pt-16">
      <div className="bg-neutral-cream rounded-t-[80px] w-11/12 mx-auto flex flex-col items-center gap-16 md:gap-24 px-4 py-12 md:py-20 relative overflow-hidden">

        <img
          className="w-full h-auto absolute left-1/2 bottom-0 -translate-x-1/2 opacity-60 -z-0"
          src="/assets/human.svg"
          alt="Background pattern"
        />

        {/* Navigation Section Wrapper  */}
        <Navbar />

        {/* Hero Content Section */}
        <div className="flex flex-col items-center gap-16 text-center z-10">
          {/* Hero Text */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-x-12 gap-y-4 font-awesome-serif font-normal text-6xl md:text-8xl">
              <h2>Pitch.</h2>
              <h2>Get Roasted.</h2>
              <h2 className="relative flex px-4 items-center justify-center">
                <Image src={RedStroke} alt="" className='scale-90 lg:scale-100' />
                <span className='absolute'> Get Hired.</span>
              </h2>
            </div>
            <p className="font-inter text-base md:text-3xl  w-11/12 lg:max-w-4xl px-8">
              India&apos;s first roast-comedy job pitch
              <br />
              show — where job seekers get made, not broken.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 font-caption-handwriting italic text-2xl md:text-4xl">
            <button className="bg-white rounded-full border-2 border-black px-12 py-4 shadow-button 
                     transform hover:translate-y-1 hover:shadow-md transition-all duration-150 ease-in-out">
              Buy Tickets
            </button>
            <button className="bg-secondary rounded-full border-2 border-black px-12 py-4 shadow-button 
                     transform hover:translate-y-1 hover:shadow-md transition-all duration-150 ease-in-out">
              Apply as Participant
            </button>
          </div>
          {/* Marquee Section */}
          <div className="bg-primary py-12 w-full overflow-x-hidden">
            <Marquee>
              <MarqueeText />
              <MarqueeText />
              <MarqueeText />
              <MarqueeText />
              <MarqueeText />
            </Marquee>
          </div>
        </div>
      </div>



    </div>
  );
};

// Helper component to avoid repeating the marquee text block
const MarqueeText = () => (
  <div className="flex items-center space-x-6 px-2 font-awesome-serif text-6xl text-white">
    <span>Pitch.</span>
    <span>Get Roasted.</span>
    <span>Get Hired.</span>
  </div>
);

export default Header;