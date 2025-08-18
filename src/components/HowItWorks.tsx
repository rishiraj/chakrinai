import { merriweatherSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

// Animation variants - Transform-based only for better performance
const containerVariants = {
  hidden: { scale: 0.9, y: 50 },
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
  hidden: { y: 100, scale: 0.6, rotate: -10 },
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

const stepVariants = {
  hidden: { y: 120, scale: 0.4, rotate: 15 },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: "backOut" as const
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-25, 25, -25],
    rotate: [-8, 8, -8],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const HowItWorks: React.FC = () => {
  return (
    <motion.div
      className="bg-neutral-cream rounded-[80px] w-11/12 mx-auto py-24 px-6 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >

      {/* Paper Bucket */}
      <motion.div
        className="absolute -top-16 right-6"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.img
          className="w-32 h-auto"
          src="/assets/paper bucket.png"
          alt="Paper bucket"
          initial={{ scale: 0.2, rotate: -60, x: -50, y: -50 }}
          whileInView={{ scale: 1, rotate: 0, x: 0, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "backOut",
            type: "spring",
            bounce: 0.6
          }}
          viewport={{ once: true }}
        />
      </motion.div>
      <motion.div
        className="text-black text-center font-fitfully text-4xl md:text-6xl lg:text-8xl font-normal uppercase mb-16"
        variants={titleVariants}
      >
        How the Roast Happens
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {/* Step 1: Step Onto the Stage */}
        <motion.div
          className="flex flex-col items-center text-center"
          variants={stepVariants}
        >
          <motion.div
            className="bg-primary rounded-full p-4 mb-8 w-64 h-64 md:size-64 flex items-center justify-center"
            whileHover={{
              scale: 1.2,
              rotate: 15,
              y: -10,
              transition: { duration: 0.3, ease: "backOut" }
            }}
            whileTap={{
              scale: 0.95,
              rotate: -5,
              transition: { duration: 0.1 }
            }}
          >
            <motion.img
              className="rounded-full w-full h-full object-cover"
              src="/assets/roast 1.png"
              alt="Step onto the stage"
              whileHover={{
                scale: 1.15,
                rotate: -10,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
          <motion.div
            className="max-w-sm"
            variants={{
              hidden: { y: 40, scale: 0.8, rotate: 5 },
              visible: {
                y: 0,
                scale: 1,
                rotate: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.6,
                  ease: "backOut"
                }
              }
            }}
          >
            <h2 className="text-neutral-gray font-caption-handwriting text-2xl md:text-4xl lg:text45xl font-normal italic mb-4">
              Step Onto the Stage
            </h2>
            <p className={cn(merriweatherSans.className, merriweatherSans.variable, "text-neutral-gray-light font-product-sans text-base md:text-lg font-normal")}>
              Step into the ring with your pitch and resume.
            </p>
          </motion.div>
        </motion.div>

        {/* Step 2: Roast */}
        <motion.div
          className="flex flex-col items-center text-center"
          variants={stepVariants}
        >
          <motion.div
            className="bg-primary rounded-full p-4 mb-8 w-64 h-64 md:size-64 flex items-center justify-center"
            whileHover={{
              scale: 1.2,
              rotate: -15,
              y: -10,
              transition: { duration: 0.3, ease: "backOut" }
            }}
            whileTap={{
              scale: 0.95,
              rotate: 5,
              transition: { duration: 0.1 }
            }}
          >
            <motion.img
              className="rounded-full w-full h-full object-cover"
              src="/assets/roast 2.png"
              alt="Get roasted"
              whileHover={{
                scale: 1.15,
                rotate: 10,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
          <motion.div
            className="max-w-sm"
            variants={{
              hidden: { y: 40, scale: 0.8, rotate: -5 },
              visible: {
                y: 0,
                scale: 1,
                rotate: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.6,
                  ease: "backOut"
                }
              }
            }}
          >
            <h2 className="text-neutral-gray font-caption-handwriting text-2xl md:text-4xl lg:text45xl font-normal italic mb-4">
              Roast
            </h2>
            <p className={cn(merriweatherSans.className, merriweatherSans.variable, "text-neutral-gray-light font-product-sans text-base md:text-lg font-normal")}>
              Startup founders, comedians, and industry icons roast your
              pitch—with heart and humor.
            </p>
          </motion.div>
        </motion.div>

        {/* Step 3: Land Your Next Role */}
        <motion.div
          className="flex flex-col items-center text-center"
          variants={stepVariants}
        >
          <motion.div
            className="bg-primary rounded-full p-4 mb-8 w-64 h-64 md:size-64 flex items-center justify-center"
            whileHover={{
              scale: 1.2,
              rotate: 15,
              y: -10,
              transition: { duration: 0.3, ease: "backOut" }
            }}
            whileTap={{
              scale: 0.95,
              rotate: -5,
              transition: { duration: 0.1 }
            }}
          >
            <motion.img
              className="rounded-full w-full h-full object-cover"
              src="/assets/roast 3.png"
              alt="Land your next role"
              whileHover={{
                scale: 1.15,
                rotate: -10,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
          <motion.div
            className="max-w-sm"
            variants={{
              hidden: { y: 40, scale: 0.8, rotate: 5 },
              visible: {
                y: 0,
                scale: 1,
                rotate: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.6,
                  ease: "backOut"
                }
              }
            }}
          >
            <h2 className="text-neutral-gray font-caption-handwriting text-2xl md:text-4xl lg:text45xl font-normal italic mb-4">
              Land Your Next Role
            </h2>
            <p className={cn(merriweatherSans.className, merriweatherSans.variable, "text-neutral-gray-light font-product-sans text-base md:text-lg font-normal")}>
              Walk away with real interviews, internships—or even job offers.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;
