import React from "react";
import Image from "next/image";
import { FaTiktok, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-sky-900 to-sky-500 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center z-30 relative">
        <Image
          className="rounded-full mx-auto mb-10 w-40 shadow-lg border-3 border-white"
          src="/img/golasologo-square.jpg"
          alt="גולאסו"
          width={400}
          height={400}
        />
        <h2 className="text-4xl font-bold mb-4 mx-5 text-white">
          חוויה ספורטיבית ורגעים בלתי נשכחים
        </h2>
        <div className="flex text-white justify-center space-x-6">
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 transition-colors bg-white rounded-full p-3 text-black"
          >
            <FaTiktok />
          </a>
          {/* <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-green-500 transition-colors bg-white rounded-full p-3 text-black"
          >
            <FaWhatsapp />
          </a> */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-800 transition-colors bg-white rounded-full p-3 text-black"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-pink-600 transition-colors bg-white rounded-full p-3 text-black"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="relative mt-8 inline-block">
          <button className="text-xl text-black font-bold bg-sky-300 px-7 py-4 rounded-full shadow-lg border-3 border-black btn-light-sweep">
            <span className="text-shadow-lg ml-2 relative z-10">
              לחץ כאן לאירוע מדהים!
            </span>
            <div className="inline-block align-[-5px] relative z-10">
              <FaWhatsapp size={30} title="צור קשר בוואטסאפ" />
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/video/video1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
