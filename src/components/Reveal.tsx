"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, ReactNode } from "react";

/**
 * Reveal Component
 * ----------------
 * A simple, reusable animation wrapper for section reveals.
 * ✅ Keeps your exact behavior (fade + slide up)
 * ✅ Adds performance tweaks + polished transitions
 * ✅ Type-safe and responsive to scroll
 * ✅ Can stack with delay for staggered reveals
 */

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  yOffset = 30,
}: RevealProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.15, // slightly smoother trigger
    triggerOnce: true,
  });

  // Start animation when in view
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Variants (kept same but cleaner)
  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // smooth “power4.out” easing
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`will-change-transform ${className}`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
