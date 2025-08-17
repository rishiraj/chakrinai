import React from 'react';

const RoastMasters: React.FC = () => {
  return (
    <div className="w-full py-24 text-center bg-primary relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-white font-caption-handwriting text-4xl md:text-6xl lg:text-7xl font-normal italic mb-8">
          ( the roast masters )
        </div>
        <div className="text-secondary font-fitfully text-4xl md:text-6xl lg:text-8xl font-normal uppercase">
          Meet the Roast Masters
        </div>
      </div>
    </div>
  );
};

export default RoastMasters; 