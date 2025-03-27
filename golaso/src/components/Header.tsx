import React from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LogoText } from "@/components/LogoText";

const Header = () => {
  return (
    <header className="bg-sky-400 shadow text-white z-50 relative shadow-lg">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center h-20">
        <LogoText className="w-32" />
        <WhatsAppButton text="גלעד" href="https://wa.me/972546123456" />
      </div>
    </header>
  );
};

export default Header;
