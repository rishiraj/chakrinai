// Enhanced animation variants - Transform-based only for better performance
// All animations avoid opacity changes to improve loading performance

// Utility function to check if user prefers reduced motion
export const shouldReduceMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Container animations for sections
export const containerVariants = {
  hidden: { scale: 0.9, y: 60 },
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

// Enhanced item entrance animations
export const itemVariants = {
  hidden: { y: 80, scale: 0.7, rotate: -5 },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: "backOut" as const
    }
  }
};

// Enhanced entrance animations for titles
export const titleVariants = {
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

// Dramatic card entrance animations
export const cardVariants = {
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

// Hero text with dramatic entrance
export const heroTextVariants = {
  hidden: { y: 120, scale: 0.5, rotate: 10 },
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

// Enhanced button animations with press-down effect
export const buttonVariants = {
  hidden: { scale: 0.3, y: 50, rotate: -15 },
  visible: {
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      bounce: 0.6
    }
  },
  hover: {
    scale: 1.15,
    y: -8,
    rotate: 2,
    transition: {
      duration: 0.2,
      ease: "backOut" as const
    }
  },
  tap: {
    scale: 0.9,
    y: 4,
    rotate: -1,
    transition: {
      duration: 0.1
    }
  }
};

// Enhanced floating animations for decorative elements
export const getFloatingVariants = () => ({
  animate: shouldReduceMotion() ? {} : {
    y: [-30, 30, -30],
    rotate: [-10, 10, -10],
    scale: [1, 1.1, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
});

export const getFloatingVariantsAlt = () => ({
  animate: shouldReduceMotion() ? {} : {
    y: [25, -25, 25],
    rotate: [8, -8, 8],
    scale: [1.05, 1, 1.05],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
});

// Static versions for server-side rendering with enhanced movement
export const floatingVariants = {
  animate: {
    y: [-30, 30, -30],
    rotate: [-10, 10, -10],
    scale: [1, 1.1, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export const floatingVariantsAlt = {
  animate: {
    y: [25, -25, 25],
    rotate: [8, -8, 8],
    scale: [1.05, 1, 1.05],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

// Enhanced step animations for process cards
export const stepVariants = {
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

// Enhanced card stack animations for reviews
export const cardStackVariants = {
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

// Stagger children variants
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Enhanced icon animations
export const iconVariants = {
  hidden: { scale: 0, rotate: -360 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: "backOut" as const,
      type: "spring" as const,
      bounce: 0.6
    }
  },
  hover: {
    scale: 1.3,
    rotate: 20,
    transition: { duration: 0.2 }
  }
};

// Enhanced decorative element entrance animations
export const decorativeEntranceVariants = {
  hidden: { scale: 0.2, rotate: -60, x: -50, y: -50 },
  visible: {
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "backOut" as const,
      type: "spring" as const,
      bounce: 0.6
    }
  }
};

// Text reveal animations without opacity
export const textRevealVariants = {
  hidden: { y: 40, scale: 0.8, rotate: 5 },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: "backOut" as const
    }
  }
};

// Enhanced image entrance animations
export const imageScaleVariants = {
  hidden: { scale: 0.3, rotate: -30, x: -30, y: -30 },
  visible: {
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "backOut" as const
    }
  }
};

// Viewport settings for scroll-triggered animations
export const defaultViewport = {
  once: true,
  amount: 0.3
};

export const partialViewport = {
  once: true,
  amount: 0.2
};

// Enhanced hover effects for interactive elements
export const interactiveHoverVariants = {
  hover: {
    scale: 1.2,
    rotate: 15,
    y: -10,
    transition: { duration: 0.3, ease: "backOut" as const }
  },
  tap: {
    scale: 0.95,
    rotate: -5,
    transition: { duration: 0.1 }
  }
};

// Common transition settings
export const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15
};

export const smoothTransition = {
  duration: 0.3,
  ease: "backOut" as const
};

// Utility function for creating custom entrance animations
export const createEntranceVariant = (
  initialY: number = 100,
  initialScale: number = 0.5,
  initialRotate: number = 10,
  duration: number = 0.8
) => ({
  hidden: { y: initialY, scale: initialScale, rotate: initialRotate },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration,
      ease: "backOut" as const
    }
  }
});

// Utility function for creating hover effects
export const createHoverVariant = (
  scale: number = 1.1,
  rotate: number = 5,
  y: number = -5
) => ({
  scale,
  rotate,
  y,
  transition: {
    duration: 0.2,
    ease: "backOut" as const
  }
});
