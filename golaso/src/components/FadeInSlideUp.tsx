"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface FadeInSlideUpProps {
  children: React.ReactNode;
  className?: string; // Optional class name for styling
  yOffset?: number; // How far down the element starts from (pixels)
  duration?: number; // Animation duration in seconds
  delay?: number; // Delay before the animation starts
  once?: boolean; // Whether the animation should run only once when it enters the viewport
}

const FadeInSlideUp: React.FC<FadeInSlideUpProps> = ({
  children,
  className,
  yOffset = 20,
  duration = 0.5,
  delay = 0,
  once = true, // Default to animating only once
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
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
      // If you don't want viewport triggering, use this instead:
      // initial="hidden"
      // animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default FadeInSlideUp;
