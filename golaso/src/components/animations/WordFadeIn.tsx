"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface WordFadeInProps {
  text: string;
  stagger?: number; // Optional delay between words in seconds
  startDelay?: number; // Optional delay before the animation starts in seconds
  className?: string; // Optional className for styling the container
}

const WordFadeIn: React.FC<WordFadeInProps> = ({
  text,
  stagger = 0.1, // Default stagger time
  startDelay = 0, // Default start delay
  className = "",
}) => {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: () => ({
      transition: {
        delayChildren: startDelay, // Apply the start delay here
        staggerChildren: stagger, // Use the stagger prop here
      },
    }),
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", flexWrap: "wrap" }} // Ensures words wrap correctly
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ marginRight: "0.4em", display: "inline-block" }} // Add space between words
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WordFadeIn;
