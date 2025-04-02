"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Ball {
  id: number;
  x: number;
  delay: number;
  duration: number;
}

const FallingBallsSection = () => {
  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    // Calculate balls only on the client-side after mount
    const calculatedBalls = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      // Calculate x offset relative to the center of the screen
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 2,
    }));
    setBalls(calculatedBalls);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="h-50 bg-gradient-to-b from-sky-400 to-sky-700 relative overflow-hidden">
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute text-4xl"
          initial={{
            y: -50,
            x: `calc(-50vw + ${ball.x}px)`,
            opacity: 0,
          }}
          animate={{
            y: "100vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: ball.duration,
            delay: ball.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⚽
        </motion.div>
      ))}
    </section>
  );
};

export default FallingBallsSection;
