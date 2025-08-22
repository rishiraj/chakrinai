import Image from "next/image";
import React from "react";
import RedStroke from "../../public/assets/red-stroke.png";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";
import { formLinks } from "@/data/forms";
import FeatureRule from "../../public/content/feature.rule.json";
import { motion } from "framer-motion";
import HumanImage from "../../public/assets/human.svg";
// Animation variants - Transform-based only for better performance
const containerVariants = {
  hidden: { scale: 0.8, y: 100 },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "backOut" as const,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 80, scale: 0.7, rotate: -5 },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: "backOut" as const,
    },
  },
};

const heroTextVariants = {
  hidden: { y: 120, scale: 0.5, rotate: 10 },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: "backOut" as const,
    },
  },
};

const buttonVariants = {
  hidden: { scale: 0.3, y: 50, rotate: -15 },
  visible: {
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      bounce: 0.6,
    },
  },
  hover: {
    scale: 1.15,
    y: -8,
    rotate: 2,
    transition: {
      duration: 0.2,
      ease: "backOut" as const,
    },
  },
  tap: {
    scale: 0.9,
    y: 4,
    rotate: -1,
    transition: {
      duration: 0.1,
    },
  },
};

const Header: React.FC = () => {
  return (
    <div id="home" className="w-full  pt-16">
      {/* Keep fixed Navbar outside transformed containers */}
      <Navbar />
      <motion.div
        className="bg-neutral-cream rounded-t-[80px] w-11/12 mx-auto flex flex-col items-center gap-16 md:gap-24 px-4 py-12 md:py-20 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full h-auto absolute left-0 bottom-0 -translate-x-1/2 opacity-60 -z-0"
          initial={{ scale: 1.3, rotate: -5, y: 50 }}
          animate={{ scale: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1.2, ease: "backOut" }}
        >
          <Image
            className="w-full h-auto"
            src={HumanImage}
            alt="Background pattern"
          />
        </motion.div>

        {/* Hero Content Section */}
        <motion.div
          className="flex flex-col items-center gap-16 text-center z-10 pt-40"
          variants={itemVariants}
        >
          {/* Hero Text */}
          <motion.div
            className="flex flex-col items-center gap-8"
            variants={heroTextVariants}
          >
            <motion.div
              className="flex flex-col md:flex-row items-center gap-x-12 gap-y-4 font-awesome-serif font-normal text-6xl md:text-8xl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.h2 variants={heroTextVariants}>Pitch.</motion.h2>
              <motion.h2 variants={heroTextVariants}>Get Roasted.</motion.h2>
              <motion.h2
                className="relative flex px-4 items-center justify-center"
                variants={heroTextVariants}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -45, x: -100 }}
                  animate={{ scale: 1.1, rotate: 0, x: 0 }}
                  transition={{
                    delay: 1.2,
                    duration: 1.0,
                    ease: "backOut",
                    type: "spring",
                    bounce: 0.4,
                  }}
                >
                  <Image
                    src={RedStroke}
                    alt=""
                    className="scale-90 lg:scale-100"
                  />
                </motion.div>
                <span className="absolute"> Get Hired.</span>
              </motion.h2>
            </motion.div>
            <motion.p
              className="font-merriweather-sans text-base md:text-3xl  w-11/12 lg:max-w-4xl px-8"
              variants={heroTextVariants}
            >
              India&apos;s first roast-comedy job pitch
              <br />
              show — where job seekers get made, not broken.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12 font-caption-handwriting italic text-2xl md:text-4xl"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {FeatureRule.header.showRecruiters && (
              <motion.a
                href={formLinks.recruiters}
                target="_blank"
                className="bg-white rounded-full border-2 border-black px-12 py-4 shadow-button"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Become a Roast Master
              </motion.a>
            )}
            {FeatureRule.header.showTickets && (
              <motion.a
                href={formLinks.tickets}
                target="_blank"
                className="bg-white rounded-full border-2 border-black px-12 py-4 shadow-button"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Buy Tickets
              </motion.a>
            )}

            <motion.a
              href={formLinks.participants}
              target="_blank"
              className="bg-secondary rounded-full border-2 border-black px-12 py-4 shadow-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Apply as Participant
            </motion.a>
          </motion.div>
          {/* Marquee Section */}
          <motion.div
            className="bg-primary py-12 w-full overflow-x-hidden"
            variants={itemVariants}
          >
            <Marquee>
              <MarqueeText />
              <MarqueeText />
              <MarqueeText />
              <MarqueeText />
              <MarqueeText />
            </Marquee>
          </motion.div>
        </motion.div>
      </motion.div>
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
