import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { scale: 0.9, y: 60, opacity: 0 },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "backOut" as const,
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "backOut" as const,
    },
  },
};

const TicketsComingSoon: React.FC = () => (
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
      className="pointer-events-none absolute left-8 top-1/3 hidden h-24 w-auto select-none md:flex"
      initial={{ scale: 0.2, rotate: -60, x: -50, y: -50, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "backOut", type: "spring", bounce: 0.6 }}
      viewport={{ once: true }}
    />

    <motion.h2
      className="mb-6 text-center font-fitfully text-5xl font-normal uppercase text-primary md:text-7xl lg:text-8xl"
      variants={childVariants}
    >
      Tickets Coming Soon
    </motion.h2>

    <motion.p
      className="mx-auto max-w-2xl text-center font-awesome-serif text-xl italic text-black md:text-2xl lg:text-3xl"
      variants={childVariants}
    >
      We&apos;re putting the finishing touches on the ticket drop. Check back shortly
      for the official release and secure your spot in the crowd.
    </motion.p>

    <motion.div
      className="mt-10 flex flex-col items-center gap-4 text-center text-base font-semibold uppercase tracking-[0.3em] text-secondary-dark md:text-lg"
      variants={childVariants}
    >
      <span className="rounded-full bg-secondary-light/20 px-6 py-3">
        Final pricing and seating info go live with the ticket launch.
      </span>
      <span className="text-secondary">Stay ready — seats are limited!</span>
    </motion.div>
  </motion.section>
);

export default TicketsComingSoon;
