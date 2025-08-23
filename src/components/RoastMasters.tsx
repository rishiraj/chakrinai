import { formLinks } from "@/data/forms";
import { Sprout } from "lucide-react";
import React from "react";
import MicImage from "../../public/assets/mic.svg";
import ResumeImage from "../../public/assets/resume.svg";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants - Transform-based only for better performance
const containerVariants = {
  hidden: { scale: 0.8, y: 80 },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "backOut" as const,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { y: 100, scale: 0.5, rotate: -15 },
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

const cardVariants = {
  hidden: { y: 120, scale: 0.3, rotate: 20 },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "backOut" as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-30, 30, -30],
    rotate: [-10, 10, -10],
    scale: [1, 1.1, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

interface RoastMaster {
  id: string;
  name: string;
  title: string;
  image: string;
  bio?: string;
}

interface RoastMastersProps {
  roastMasters?: RoastMaster[];
}

const RoastMasters: React.FC<RoastMastersProps> = ({ roastMasters = [] }) => {
  const hasRoastMasters = roastMasters && roastMasters.length > 0;

  return (
    <motion.div
      id="roast-masters"
      className="w-full py-24 text-center relative scroll-mt-[120px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-white font-caption-handwriting text-4xl md:text-6xl lg:text-7xl font-normal italic mb-8"
          variants={titleVariants}
        >
          ( the roast masters )
        </motion.div>
        <motion.div
          className="text-secondary font-fitfully text-4xl md:text-6xl lg:text-8xl font-normal uppercase mb-16"
          variants={titleVariants}
        >
          <span className="font-hind-siliguri font-bold">{hasRoastMasters ? "শুধু জ্ঞান " : "শুধু জ্ঞান "}
            দেবেন, না চাকরিও দেবেন?</span>
        </motion.div>

        {hasRoastMasters ? (
          // Display roast masters when data is available
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {roastMasters.map((master, index) => (
              <motion.div
                key={master.id}
                className="bg-secondary rounded-[40px] p-8 relative"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={master.image}
                    alt={master.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white"
                    initial={{ scale: 0.3, rotate: -30, x: -20, y: -20 }}
                    animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: "backOut" }}
                  />
                  {/* Megaphone icon */}
                  <motion.div
                    className="absolute -top-2 -right-2 bg-white rounded-full p-2"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-neutral-black font-caption-handwriting text-2xl md:text-3xl font-normal italic mb-2"
                  initial={{ y: 30, scale: 0.8, rotate: 5 }}
                  animate={{ y: 0, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
                >
                  {master.name}
                </motion.h3>
                <motion.p
                  className="text-neutral-black font-merriweather-sans text-base font-medium"
                  initial={{ y: 25, scale: 0.9, rotate: -3 }}
                  animate={{ y: 0, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "backOut" }}
                >
                  {master.title}
                </motion.p>
                {master.bio && (
                  <motion.p
                    className="text-neutral-black font-merriweather-sans text-base md:text-lg mt-4 opacity-80"
                    initial={{ y: 20, scale: 0.95, rotate: 2 }}
                    animate={{ y: 0, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
                  >
                    {master.bio}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Recruitment section when no data is available
          <motion.div className="w-full mx-auto" variants={cardVariants}>
            <motion.div
              className="bg-secondary rounded-[60px] p-12 md:p-16 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4"
                variants={floatingVariants}
                animate="animate"
              >
                <motion.div
                  initial={{ scale: 0.2, rotate: -90, x: 50, y: 50 }}
                  animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1.0,
                    ease: "backOut",
                    type: "spring",
                    bounce: 0.6,
                  }}
                >
                  <Image src={MicImage} alt="mic" className="size-24 lg:size-40" />
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4"
                variants={{
                  animate: {
                    y: [15, -15, 15],
                    rotate: [3, -3, 3],
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                    },
                  },
                }}
                animate="animate"
              >
                <motion.div
                  initial={{ scale: 0.2, rotate: 90, x: -50, y: -50 }}
                  animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 1.0,
                    ease: "backOut",
                    type: "spring",
                    bounce: 0.6,
                  }}
                >
                  <Image src={ResumeImage} alt="resume" className="size-24 translate-y-10 lg:translate-y-0 lg:size-40" />
                </motion.div>
              </motion.div>

              <motion.div
                className="relative z-10"
                initial={{ y: 60, scale: 0.8, rotate: -5 }}
                animate={{ y: 0, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
              >
                <motion.div
                  className="mb-8"
                  variants={{
                    hidden: { y: 50, scale: 0.7, rotate: 10 },
                    visible: {
                      y: 0,
                      scale: 1,
                      rotate: 0,
                      transition: {
                        staggerChildren: 0.1,
                        duration: 0.6,
                        ease: "backOut",
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center"
                    variants={{
                      hidden: { scale: 0, rotate: -180 },
                      visible: {
                        scale: 1,
                        rotate: 0,
                        transition: { duration: 0.6, ease: "backOut" },
                      },
                    }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H13V16H11V12H7V10H11V6H13V10H17V12Z" />
                    </svg>
                  </motion.div>
                  <motion.h3
                    className="text-neutral-black font-fitfully text-3xl md:text-5xl font-normal uppercase mb-4"
                    variants={{
                      hidden: { y: 40, scale: 0.8, rotate: -5 },
                      visible: {
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        transition: { duration: 0.6, ease: "backOut" },
                      },
                    }}
                  >
                    Become a Roast Master
                  </motion.h3>
                  <motion.p
                    className="text-neutral-black font-merriweather-sans text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                    variants={{
                      hidden: { y: 30, scale: 0.9, rotate: 3 },
                      visible: {
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        transition: { duration: 0.6, ease: "backOut" },
                      },
                    }}
                  >
                    We&apos;re looking for founders, industry leaders, and comedians who can deliver brutal feedback with a punchline. If you believe in tough love and have the power to change a career in one night, we want you on the panel.
                  </motion.p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 mb-10"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    className="text-center w-full"
                    variants={{
                      hidden: { y: 50, scale: 0.8, rotate: -5 },
                      visible: {
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        transition: { duration: 0.6, ease: "backOut" },
                      },
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </motion.div>
                    <h4 className="text-neutral-black font-caption-handwriting text-2xl lg:text-4xl font-normal italic mb-2">
                      Discover Raw Talent
                    </h4>
                    <p className="text-neutral-black font-merriweather-sans text-base md:text-lg">
                      Find creative minds before they&apos;re buried in a pile of CVs.
                    </p>
                  </motion.div>
                  <motion.div
                    className="text-center w-full"
                    variants={{
                      hidden: { y: 50, scale: 0.8, rotate: 5 },
                      visible: {
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        transition: { duration: 0.6, ease: "backOut" },
                      },
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                    </motion.div>
                    <h4 className="text-neutral-black font-caption-handwriting text-2xl lg:text-4xl font-normal italic mb-2">
                      Build a Real Brand
                    </h4>
                    <p className="text-neutral-black font-merriweather-sans text-base md:text-lg">
                      Become a legend (or a beloved villain) in Kolkata&apos;s startup scene.
                    </p>
                  </motion.div>
                  <motion.div
                    className="text-center w-full"
                    variants={{
                      hidden: { y: 50, scale: 0.8, rotate: -5 },
                      visible: {
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        transition: { duration: 0.6, ease: "backOut" },
                      },
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sprout className="text-white size-8" />
                    </motion.div>
                    <h4 className="text-neutral-black font-caption-handwriting text-2xl lg:text-4xl font-normal italic mb-2">
                      Make a Difference
                    </h4>
                    <p className="text-neutral-black font-merriweather-sans text-base md:text-lg">
                      Don&apos;t just talk about the talent gap. Close it. Live on stage.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center font-caption-handwriting italic text-2xl md:text-4xl"
                  initial={{ y: 50, scale: 0.8, rotate: -3 }}
                  animate={{ y: 0, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
                >
                  <motion.a
                    href={formLinks.recruiters}
                    target="_blank"
                    className="bg-white rounded-full border-2 border-black px-12 py-4 shadow-button"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Become a roast master
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default RoastMasters;
