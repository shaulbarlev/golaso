"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { LogoText } from "@/components/LogoText";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <motion.header
      initial="hidden"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="text-white z-50 fixed top-0 left-0 right-0"
    >
      <div className="bg-sky-400 w-50 h-15 mt-2 mx-auto flex gap-3 flex-row items-center justify-center rounded-full shadow-2xl">
        <a href="#hero">
          <LogoText className="w-26 pr-3" />
        </a>
        <WhatsAppButton className="w-20" text="" />
      </div>
    </motion.header>
  );
};

export default Header;
