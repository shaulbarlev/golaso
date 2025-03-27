import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LogoText } from "@/components/LogoText";

const Header = () => {
  return (
    <header className="bg-sky-400 shadow text-white z-50 relative">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center h-20">
        <LogoText className="w-32" />
        <div className="text-2xl text-black font-bold bg-white border-5 border-green-400 px-5 py-2 rounded-full">
          גלעד{" "}
          <span className="inline-block align-[-4px]">
            <FaWhatsapp size={24} title="צור קשר בוואטסאפ" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
