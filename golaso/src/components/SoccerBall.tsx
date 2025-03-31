"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SoccerBallProps {
  className?: string;
}

export function SoccerBall({ className }: SoccerBallProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        window.location.assign("#events");
      }, 800);
    }
  }, [isAnimating]);

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 100 }}
        animate={isAnimating ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-white font-bold text-2xl mb-2">
          בעטו בכדור וגלו עוד!
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 100, y: 0 }}
        animate={
          isAnimating
            ? { opacity: 0, y: -500, scale: 0.2 }
            : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <a onClick={() => setIsAnimating(true)} className="text-[8em]">
          ⚽
        </a>
      </motion.div>
    </div>
  );
}

export default SoccerBall;
