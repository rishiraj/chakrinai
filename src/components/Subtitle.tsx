import React from "react";

const Subtitle: React.FC = () => {
  return (
    <div className="relative w-full pt-24 pb-0">

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
            ( the participants )
          </div>
          <div className="text-white font-fitfully text-4xl md:text-6xl lg:text-8xl font-normal uppercase leading-tight">
            <span className="font-hind-siliguri font-bold">চাকরির ইন্টারভিউ, শুধু একটু বেশি ঝাল দিয়ে।</span>
          </div>
        </div>
        {/* Paper Plane with dashed path */}
        <div className="flex flex-row items-start w-fit justify-right bottom-0 mt-10 relative mr-auto xl:scale-150 z-10">

          <img
            className="w-64 h-auto"
            src="/assets/paer plane dashed path.svg"
            alt="Flight path"
          />
          <img
            className="w-32 h-auto absolute top-0 right-0 translate-x-3/4 -translate-y-1/2"
            src="/assets/paper plane.png"
            alt="Paper plane"
          />
        </div>
      </div>
    </div>
  );
};

export default Subtitle;