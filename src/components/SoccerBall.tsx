"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SoccerBallProps {
  className?: string;
}

export function SoccerBall({ className }: SoccerBallProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showGoal, setShowGoal] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setShowGoal(true);
        // Hide the goal after 2 seconds
        setTimeout(() => {
          setShowGoal(false);
        }, 2000);
      }, 200);
    }
  }, [isAnimating]);

  return (
    <div className={className}>
      <motion.div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none z-50 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={showGoal ? { opacity: 1, scale: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 5,
        }}
      >
        <img
          src="/img/goal.png"
          alt="soccerball"
          className="max-w-[80vw] max-h-[80vh] object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 100 }}
        animate={isAnimating ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-white font-bold text-2xl mb-2">בעטו בכדור!</h3>
      </motion.div>
      <motion.div
        className="w-full h-full bg-black/50 fixed top-0 left-0 z-40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={showGoal ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      ></motion.div>
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
          drag
          // dragSnapToOrigin
          dragConstraints={{
            top: -400,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          whileDrag={{ scale: 1.2 }}
          onDragEnd={() => setIsAnimating(true)}
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
