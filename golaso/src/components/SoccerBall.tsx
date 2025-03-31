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
        <motion.div
          animate={
            isAnimating
              ? {}
              : {
                  rotate: [0, 20, -17, 10, -8, 3, 0, 0],
                  translateY: [0, 0, -20, 0, 0],
                }
          }
          transition={{
            delay: 3.3,
            duration: 2,
            times: [0, 0.1, 0.2, 0.4, 3],
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          <a onClick={() => setIsAnimating(true)} className="text-7xl">
            ⚽
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SoccerBall;
