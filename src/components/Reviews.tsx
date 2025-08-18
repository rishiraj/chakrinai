import React from "react";

const Reviews: React.FC = () => {
  return (
    <div className="bg-neutral-cream rounded-[80px] w-full max-w-7xl mx-auto py-24 px-6 relative mt-8">
      {/* Background grid pattern */}
      <div className="absolute inset-0 rounded-[80px] opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 69, 19, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="text-black text-center font-caption-handwriting text-4xl md:text-6xl lg:text-7xl font-normal italic mb-16">
          ( what they say about us )
        </div>

        <div className="flex justify-center">
          {/* Stack of cards container */}
          <div className="relative">
            {/* Bottom card (peeking out) */}
            <div className="absolute -bottom-2 -right-2 w-[calc(100%-20px)] h-[calc(100%-20px)] bg-orange-600 rounded-[20px] border-2 border-black transform rotate-1"></div>

            {/* Middle card */}
            <div className="absolute -bottom-1 -right-1 w-[calc(100%-10px)] h-[calc(100%-10px)] bg-orange-500 rounded-[20px] border-2 border-black transform rotate-0.5">
              {/* Review tab for middle card */}
              <div className="absolute -top-3 -left-3 bg-white rounded-full border-2 border-black py-2 px-6">
                <div className="text-black font-dk-keswick text-xl font-normal">
                  review
                </div>
              </div>
            </div>

            {/* Top card (main content) */}
            <div className="relative bg-orange-500 rounded-[20px] border-2 border-black p-8 md:p-12 w-[28rem] md:w-[32rem] lg:w-[60rem] h-80 md:h-96 lg:h-[28rem] transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
              {/* Review tab */}
              <div className="absolute -top-3 -left-3 bg-white rounded-full border-2 border-black py-2 px-6 shadow-md">
                <div className="text-black font-dk-keswick text-xl font-normal">
                  review
                </div>
              </div>

              {/* Horizontal line */}
              <div className="border-t-2 border-black mb-8 mt-4"></div>

              {/* Review text */}
              <div className="text-black font-caption-handwriting text-lg md:text-4xl font-normal italic leading-relaxed mb-8">
                &ldquo;This app makes managing my portfolio so
                <br />
                easy. I love the real-time updates and seamless
                <br />
                transactions. It&apos;s the best crypto app I&apos;ve ever
                <br />
                used!&rdquo;
              </div>

              {/* Attribution and role */}
              <div className="flex flex-col items-start justify-between">
                <div className="text-black font-caption-handwriting text-2xl md:text-4xl font-normal italic mb-4">
                  (John Doe)
                </div>
                <div className="text-yellow-500 font-alumni-sans text-lg md:text-4xl font-medium italic self-end">
                  Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
