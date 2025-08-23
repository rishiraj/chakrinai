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
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const titleVariants = {
    hidden: { y: 80, scale: 0.7, rotate: -8, opacity: 0 },
    visible: {
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "backOut" as const,
        },
    },
};

const TicketsComingSoon: React.FC = () => {
    return (
        <motion.div
            id="tickets"
            className="bg-neutral-cream rounded-[80px] w-11/12 max-w-7xl mx-auto py-20 px-6 my-16 relative border-2 border-secondary-light shadow-lg scroll-mt-[120px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Animated Paper Plane */}
            <motion.img
                src="/assets/barcode.png"
                alt="Ticket"
                className="absolute hidden md:flex top-1/3 left-8 w-auto h-24 select-none pointer-events-none"
                initial={{ scale: 0.2, rotate: -60, x: -50, y: -50, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "backOut", type: "spring", bounce: 0.6 }}
                viewport={{ once: true }}
            />
            <motion.div
                className="text-primary text-center font-fitfully text-5xl md:text-7xl lg:text-8xl font-normal uppercase mb-8"
                variants={titleVariants}
            >
                Tickets Coming Soon!
            </motion.div>
            <motion.div
                className="text-center text-xl md:text-2xl lg:text-3xl font-awesome-serif text-black italic mt-4"
                variants={titleVariants}
            >
                Stay tuned for updates on how to grab your spot at the show.
            </motion.div>
        </motion.div>
    );
};

export default TicketsComingSoon;
