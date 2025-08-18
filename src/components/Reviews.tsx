"use client";

import React from "react";
import { motion } from "framer-motion";

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Colors inspired by the reference image
  const layerColors = ["#B73A2B", "#E46A3A", "#F08A3B"];

  // Compute slot (0=top,1=middle,2=bottom) for each layer based on active index
  const getSlotForLayer = (layer: number) => (layer - activeIndex + 3) % 3;

  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 34,
    mass: 0.6,
  } as const;

  const handleAdvance = () => setActiveIndex((prev) => (prev + 1) % 3);

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
          {/* Stack container sized to the top card */}
          <div className="relative w-[28rem] md:w-[32rem] lg:w-[60rem] h-80 md:h-96 lg:h-[28rem]">
            {[0, 1, 2].map((layer) => {
              const slot = getSlotForLayer(layer);
              const isTop = slot === 0;

              // Slot positions relative to container
              const positions = [
                // top (frontmost): tilt to lower-left (more)
                { x: 0, y: 0, rotate: -7, scale: 0.995 },
                // middle: tilt to lower-right
                { x: 0, y: 0, rotate: 7, scale: 0.99 },
                // bottom: tilt to lower-left (less)
                { x: 0, y: 0, rotate: 0, scale: 1 },
              ];

              const { x, y, rotate, scale } = positions[slot];

              return (
                <motion.div
                  key={layer}
                  className={`absolute inset-0 rounded-[20px] border-2 border-black shadow-lg ${
                    isTop ? "cursor-pointer" : ""
                  }`}
                  style={{ backgroundColor: layerColors[layer] }}
                  initial={false}
                  animate={{ x, y, rotate, scale, zIndex: 30 - slot * 10 }}
                  whileHover={isTop ? { rotate: -0.5, y: -4 } : undefined}
                  transition={spring}
                  onClick={isTop ? handleAdvance : undefined}
                  role={isTop ? "button" : undefined}
                  aria-label={isTop ? "Show next review" : undefined}
                >
                  {/* Review bubble: show on top and middle layer */}
                  {(slot === 0 || slot === 1) && (
                    <div className="absolute top-3 left-12 bg-white rounded-full border-2 border-black py-2  px-6 shadow-md">
                      <div className="text-black font-dk-keswick text-xl font-normal">
                        review
                      </div>
                    </div>
                  )}

                  {/* Content only on the top card */}
                  {isTop && (
                    <div className="relative w-full h-full p-8 md:p-16">
                      {/* Horizontal line */}
                      <div className="border-t-2 border-black mb-8 mt-4"></div>

                      {/* Review text */}
                      <div className="text-black font-caption-handwriting text-lg md:text-4xl font-normal italic leading-relaxed mb-8">
                        &ldquo;This app makes managing my portfolio so
                        <br />
                        easy. I love the real-time updates and seamless
                        <br />
                        transactions. It&apos;s the best crypto app I&apos;ve
                        ever
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
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
