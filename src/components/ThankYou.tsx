import { socialLinks } from "@/data/socialLinks";
import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
import XIcon from "../../public/assets/X.svg";
import Image from "next/image";
import { motion } from 'framer-motion';


// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Individual icon animation variants
const iconVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      scale: { duration: 0.2 },
      rotate: { duration: 0.6, ease: "easeInOut" },
    },
  },
  tap: {
    scale: 0.95,
    rotate: 15,
  },
};

// Instagram specific variants
const instagramVariants = {
  ...iconVariants,
  hover: {
    scale: 1.1,
    backgroundColor: "#000000",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

// X/Twitter specific variants
const twitterVariants = {
  ...iconVariants,
  hover: {
    scale: 1.1,
    backgroundColor: "#000000",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

const ThankYou: React.FC = () => {


  return (
    <div className="rounded-[44px] border-2 border-secondary-light p-8 md:p-12 lg:p-16 w-full max-w-7xl mx-auto my-24 z-50">
      <div className="text-secondary-light font-fitfully text-6xl md:text-8xl lg:text-9xl font-normal uppercase mb-12 text-center">
        THANKS FOR
        <br />
        STAYING WITH US.
      </div>

      <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Chakri Nai Logo */}
          <div className="relative">
            <img
              className="w-64 h-auto"
              src="/assets/logo.png"
              alt="Chakri Nai Logo"
            />
          </div>

          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-6">
              <div className="text-secondary-light font-awesome-serif text-3xl md:text-4xl lg:text-5xl font-normal italic">
                chakrinaishow@gmail.com
              </div>

              <div className="text-secondary-light font-caption-handwriting text-2xl md:text-3xl lg:text-4xl font-normal italic">
                Kolkata, West Bengal
              </div>
            </div>
            <div className="text-secondary-light font-awesome-serif text-lg md:text-xl lg:text-2xl font-normal italic">
              Made by love CHAKRI NAI
            </div>
          </div>
        </div>



        {/* Social Media Icons */}
        <motion.div
          className="flex items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Instagram/Camera icon */}
          <motion.div variants={instagramVariants}>
            <Link
              href={socialLinks.instagram}
              className="block group"
            >
              <motion.div
                className="bg-secondary-light rounded-full p-4 border border-black relative overflow-hidden"
                whileHover="hover"
                whileTap="tap"
                variants={instagramVariants}
              >
                <Instagram className="size-10 relative z-10 group-hover:text-white transition-colors duration-300" />
              </motion.div>
            </Link>
          </motion.div>

          {/* X/Twitter icon */}
          <motion.div variants={twitterVariants}>
            <Link
              href={socialLinks.twitter}
              className="block group"
            >
              <motion.div
                className="bg-secondary-light rounded-full p-4 border border-black relative overflow-hidden cursor-pointer"
                whileHover="hover"
                whileTap="tap"
                variants={twitterVariants}
              >
                <Image
                  src={XIcon}
                  alt="X Icon"
                  className="size-10 invert relative z-10 group-hover:invert-0 transition-all duration-300"
                />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>


      </div>
    </div>
  );
};

export default ThankYou;
