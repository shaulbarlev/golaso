"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface FadeInScaleDownProps {
  children: React.ReactNode;
  className?: string; // Optional class name for styling
  initialScale?: number; // The starting scale (e.g., 1.1 for 110%)
  duration?: number; // Animation duration in seconds
  delay?: number; // Delay before the animation starts
  once?: boolean; // Whether the animation should run only once when it enters the viewport
}

const FadeInScaleDown: React.FC<FadeInScaleDownProps> = ({
  children,
  className,
  initialScale = 1.4, // Default starting scale slightly larger
  duration = 0.5,
  delay = 0,
  once = true, // Default to animating only once
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: initialScale,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible" // Animate when the element enters the viewport
      viewport={{ once: once }} // Configure viewport triggering
    >
      {children}
    </motion.div>
  );
};

export default FadeInScaleDown;
