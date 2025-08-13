import React from 'react';

const Subtitle: React.FC = () => {
  return (
    <div className="relative w-full py-24 bg-primary">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`
        }}></div>
      </div>
      
      {/* Paper Plane with dashed path */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2">
        <img
          className="w-32 h-auto animate-bounce"
          src="/assets/paper plane.png"
          alt="Paper plane"
        />
        <img
          className="w-64 h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
          src="/assets/paer plane dashed path.svg"
          alt="Flight path"
        />
      </div>
      
      {/* Paper Bucket */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2">
        <img
          className="w-32 h-auto"
          src="/assets/paper bucket.png"
          alt="Paper bucket"
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="text-white font-caption-handwriting text-4xl md:text-6xl lg:text-7xl font-normal italic mb-8">
          ( from strategy to execution )
        </div>
        <div className="text-white font-fitfully text-6xl md:text-8xl lg:text-9xl font-normal uppercase leading-tight">
          seen in your one stop shop
        </div>
      </div>
    </div>
  );
};

export default Subtitle; 