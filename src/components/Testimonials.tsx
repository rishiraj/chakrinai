import React from 'react';
import { motion } from 'framer-motion';

// Enhanced animation variants - Transform-based only for better performance
const containerVariants = {
  hidden: { scale: 0.9, y: 80 },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "backOut" as const,
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
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
    y: [-20, 20, -20],
    rotate: [-8, 8, -8],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const floatingVariantsAlt = {
  animate: {
    y: [15, -15, 15],
    rotate: [5, -5, 5],
    scale: [1.02, 1, 1.02],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Developer",
      imageSrc: "/assets/logo.png",
      index: 0
    },
    {
      name: "John Doe",
      role: "Developer",
      imageSrc: "/assets/logo.png",
      index: 1
    },
    {
      name: "John Doe",
      role: "Developer",
      imageSrc: "/assets/logo.png",
      index: 2
    },
    {
      name: "John Doe",
      role: "Developer",
      imageSrc: "/assets/logo.png",
      index: 3
    }
  ];

  return (
    <motion.div
      className="w-full py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotate: idx % 2 === 0 ? 2 : -2,
                transition: { duration: 0.3, ease: "backOut" }
              }}
            >
              <div className="relative mb-8">
                <motion.div
                  className="bg-secondary border-4 border-black w-80 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-lg"
                  whileHover={{
                    scale: 1.02,
                    rotate: idx % 2 === 0 ? 1 : -1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.img
                    className="w-full h-full object-cover"
                    src={testimonial.imageSrc}
                    alt={`${testimonial.name} testimonial`}
                    initial={{ scale: 1.2, rotate: 5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
                  />
                </motion.div>
                {/* Megaphone icon */}
                <motion.img
                  className="absolute -right-8 -top-8 w-32 h-32 md:w-40 md:h-40 opacity-80"
                  src="/assets/mic.svg"
                  alt="Megaphone icon"
                  variants={floatingVariants}
                  animate="animate"
                  initial={{ scale: 0.3, rotate: -45, x: 30, y: 30 }}
                  whileInView={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "backOut" }}
                  viewport={{ once: true }}
                />
                {/* Resume icon */}
                <motion.div
                  className="absolute -left-8 -bottom-8 w-32 h-32 md:w-40 md:h-40 opacity-80"
                  style={{ transform: "rotate(-15deg)" }}
                  variants={floatingVariantsAlt}
                  animate="animate"
                  initial={{ scale: 0.3, rotate: -60, x: -30, y: -30 }}
                  whileInView={{ scale: 1, rotate: -15, x: 0, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
                  viewport={{ once: true }}
                >
                  <img
                    className="w-full h-full"
                    src="/assets/resume.svg"
                    alt="Resume icon"
                  />
                </motion.div>
              </div>
              <motion.div
                className="text-center"
                initial={{ y: 30, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
              >
                <motion.div
                  className="text-white font-caption-handwriting text-4xl md:text-6xl font-normal italic mb-4"
                  whileHover={{
                    scale: 1.1,
                    rotate: idx % 2 === 0 ? 3 : -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  {testimonial.name}
                </motion.div>
                <motion.div
                  className="text-black font-awesome-serif text-2xl md:text-3xl font-normal"
                  whileHover={{
                    scale: 1.05,
                    rotate: idx % 2 === 0 ? -2 : 2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {testimonial.role}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials; 