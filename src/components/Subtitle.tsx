import React from "react";

const Subtitle: React.FC = () => {
  return (
    <div className="relative w-full py-24 bg-primary">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)`,
          }}
        ></div>
      </div>

      {/* Paper Bucket */}
      {/* <div className="absolute right-8 top-1/2 -translate-y-1/2">
        <img
          className="w-32 h-auto"
          src="/assets/paper bucket.png"
          alt="Paper bucket"
        />
      </div> */}

      <div className="container mx-auto px-6 text-center relative flex flex-col items-center justify-between">
        <div className="container relative">
          <div className="text-white font-caption-handwriting text-4xl md:text-6xl lg:text-7xl font-normal mb-8">
            ( from strategy to execution )
          </div>
          <div className="text-white font-fitfully text-6xl md:text-8xl lg:text-9xl font-normal uppercase leading-tight">
            seen in your one stop shop
          </div>
        </div>
        {/* Paper Plane with dashed path */}
        <div className="flex flex-row items-start w-full justify-right bottom-0 bg-black mt-10">
          
          <img
            className="w-64 h-auto  opacity-60"
            src="/assets/paer plane dashed path.svg"
            alt="Flight path"
          />
          <img
            className="w-32 h-auto"
            src="/assets/paper plane.png"
            alt="Paper plane"
          />
        </div>
      </div>
    </div>
  );
};

export default Subtitle;
