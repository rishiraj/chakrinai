import React from "react";
import { motion } from "framer-motion";
import { formLinks } from "@/data/forms";

const containerVariants = {
  hidden: { scale: 0.9, y: 60, opacity: 0 },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "backOut" as const,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: "backOut" as const,
    },
  },
};

const BuyTickets: React.FC = () => (
  <motion.section
    id="tickets"
    className="relative mx-auto my-16 w-11/12 max-w-7xl rounded-[80px] border-2 border-secondary-light bg-neutral-cream px-6 py-20 shadow-lg scroll-mt-[120px]"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.img
      src="/assets/barcode.png"
      alt="Ticket"
      className="pointer-events-none absolute right-10 top-10 hidden h-24 w-auto select-none md:flex"
      initial={{ scale: 0.2, rotate: 12, x: 80, y: -40, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "backOut", type: "spring", bounce: 0.5 }}
      viewport={{ once: true }}
    />

    <motion.h2
      className="mb-6 text-center font-fitfully text-5xl font-normal uppercase text-primary md:text-7xl lg:text-8xl"
      variants={childVariants}
    >
      Tickets On Sale Now
    </motion.h2>

    <motion.p
      className="mx-auto max-w-3xl text-center font-awesome-serif text-xl italic text-black md:text-2xl lg:text-[30px]"
      variants={childVariants}
    >
      Tickets are live on BookMyShow
      Grab yours before they&apos;re gone.
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center font-caption-handwriting italic text-2xl md:text-4xl mt-8"
      initial={{ y: 50, scale: 0.8, rotate: -3 }}
      animate={{ y: 0, scale: 1, rotate: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
    >
      <motion.a
        href={formLinks.tickets}
        target="_blank"
        className="bg-secondary rounded-full border-2 border-black px-12 py-4 shadow-button"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Buy tickets here
      </motion.a>
    </motion.div>
  </motion.section>
);

export default BuyTickets;
