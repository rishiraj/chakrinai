import React from "react";
import { motion } from "framer-motion";

// Animation variants - Transform-based only for better performance
const containerVariants = {
  hidden: { scale: 0.9, y: 60 },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "backOut" as const,
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const titleVariants = {
  hidden: { y: 80, scale: 0.7, rotate: -8 },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "backOut" as const
    }
  }
};

const cardStackVariants = {
  hidden: { scale: 0.5, rotate: 10 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "backOut" as const,
      staggerChildren: 0.1
    }
  }
};

// Removed unused cardVariants - using inline variants instead

const Reviews: React.FC = () => {
  return (
    <motion.div
      className="bg-neutral-cream rounded-[80px] w-full max-w-7xl mx-auto py-24 px-6 relative mt-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background grid pattern */}
      <motion.div
        className="absolute inset-0 rounded-[80px] opacity-20"
        initial={{ scale: 1.2, rotate: 5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "backOut" }}
      >
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
      </motion.div>

      <div className="relative z-10">
        <motion.div
          className="text-black text-center font-caption-handwriting text-4xl md:text-6xl lg:text-7xl font-normal italic mb-16"
          variants={titleVariants}
        >
          ( what they say about us )
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={cardStackVariants}
        >
          {/* Stack of cards container */}
          <motion.div
            className="relative"
            variants={cardStackVariants}
          >
            {/* Bottom card (peeking out) */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-[calc(100%-20px)] h-[calc(100%-20px)] bg-orange-600 rounded-[20px] border-2 border-black transform rotate-1"
              variants={{
                hidden: { scale: 0.3, rotate: 25, x: 50, y: 50 },
                visible: {
                  scale: 1,
                  rotate: 1,
                  x: 0,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.8, ease: "backOut" }
                }
              }}
              whileHover={{
                rotate: 8,
                scale: 1.05,
                x: -5,
                y: -5,
                transition: { duration: 0.3 }
              }}
            ></motion.div>

            {/* Middle card */}
            <motion.div
              className="absolute -bottom-1 -right-1 w-[calc(100%-10px)] h-[calc(100%-10px)] bg-orange-500 rounded-[20px] border-2 border-black transform rotate-0.5"
              variants={{
                hidden: { scale: 0.4, rotate: 20, x: 30, y: 30 },
                visible: {
                  scale: 1,
                  rotate: 0.5,
                  x: 0,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.8, ease: "backOut" }
                }
              }}
              whileHover={{
                rotate: 5,
                scale: 1.03,
                x: -3,
                y: -3,
                transition: { duration: 0.3 }
              }}
            >
              {/* Review tab for middle card */}
              <motion.div
                className="absolute -top-3 -left-3 bg-white rounded-full border-2 border-black py-2 px-6"
                initial={{ scale: 0, rotate: -360, x: -50, y: -50 }}
                animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.7,
                  ease: "backOut",
                  type: "spring",
                  bounce: 0.6
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 15,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-black font-dk-keswick text-xl font-normal">
                  review
                </div>
              </motion.div>
            </motion.div>

            {/* Top card (main content) */}
            <motion.div
              className="relative bg-orange-500 rounded-[20px] border-2 border-black p-8 md:p-12 w-[28rem] md:w-[32rem] lg:w-[60rem] h-80 md:h-96 lg:h-[28rem] transform -rotate-1 shadow-lg"
              variants={{
                hidden: { scale: 0.5, rotate: -25, y: 100, x: -50 },
                visible: {
                  scale: 1,
                  rotate: -1,
                  y: 0,
                  x: 0,
                  transition: {
                    delay: 0.6,
                    duration: 1.0,
                    ease: "backOut",
                    type: "spring",
                    bounce: 0.4
                  }
                }
              }}
              whileHover={{
                rotate: 3,
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "backOut" }
              }}
              whileTap={{
                scale: 0.95,
                rotate: -5,
                transition: { duration: 0.1 }
              }}
            >
              {/* Review tab */}
              <motion.div
                className="absolute -top-3 -left-3 bg-white rounded-full border-2 border-black py-2 px-6 shadow-md"
                initial={{ scale: 0, rotate: -540, x: -100, y: -100 }}
                animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                transition={{
                  delay: 1.2,
                  duration: 0.8,
                  ease: "backOut",
                  type: "spring",
                  bounce: 0.7
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 20,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-black font-dk-keswick text-xl font-normal">
                  review
                </div>
              </motion.div>

              {/* Horizontal line */}
              <motion.div
                className="border-t-2 border-black mb-8 mt-4"
                initial={{ scaleX: 0, rotate: 10 }}
                animate={{ scaleX: 1, rotate: 0 }}
                transition={{ delay: 1.4, duration: 0.8, ease: "backOut" }}
              ></motion.div>

              {/* Review text */}
              <motion.div
                className="text-black font-caption-handwriting text-lg md:text-4xl font-normal italic leading-relaxed mb-8"
                initial={{ y: 60, scale: 0.8, rotate: -5 }}
                animate={{ y: 0, scale: 1, rotate: 0 }}
                transition={{ delay: 1.6, duration: 0.8, ease: "backOut" }}
              >
                &ldquo;This app makes managing my portfolio so
                <br />
                easy. I love the real-time updates and seamless
                <br />
                transactions. It&apos;s the best crypto app I&apos;ve ever
                <br />
                used!&rdquo;
              </motion.div>

              {/* Attribution and role */}
              <motion.div
                className="flex flex-col items-start justify-between"
                initial={{ y: 40, scale: 0.9, rotate: 3 }}
                animate={{ y: 0, scale: 1, rotate: 0 }}
                transition={{ delay: 1.8, duration: 0.6, ease: "backOut" }}
              >
                <motion.div
                  className="text-black font-caption-handwriting text-2xl md:text-4xl font-normal italic mb-4"
                  whileHover={{
                    scale: 1.15,
                    rotate: 3,
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  (John Doe)
                </motion.div>
                <motion.div
                  className="text-yellow-500 font-alumni-sans text-lg md:text-4xl font-medium italic self-end"
                  whileHover={{
                    scale: 1.15,
                    rotate: -3,
                    x: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  Developer
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reviews;
