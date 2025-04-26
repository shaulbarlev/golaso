import React from "react";
import Image from "next/image";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import { WordFadeIn, FadeInSlideUp, FadeInScaleDown } from "./animations";
import EventsCampButton from "./EventsCampButton";
import { SoccerBall } from "./SoccerBall";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-sky-900 to-sky-500 py-10 relative overflow-hidden h-screen"
    >
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 text-center z-30 relative">
        <FadeInScaleDown>
          <Image
            className="rounded-full mx-auto mb-4 w-[40%] shadow-lg border-3 border-white"
            src="/img/golasologo-square.jpg"
            alt="גולאסו"
            width={400}
            height={400}
          />
        </FadeInScaleDown>
        <WordFadeIn
          startDelay={0.35}
          text="חוויה ספורטיבית ורגעים בלתי נשכחים"
          className="text-4xl font-bold mb-4 mx-5 text-white justify-center"
        />
        <div className="flex text-white gap-6 justify-center mt-3">
          <FadeInSlideUp delay={1.0} className="">
            <a
              href="https://www.tiktok.com/@goalso.sport"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 transition-colors bg-white rounded-full p-3 text-black hover:scale-110 transform duration-200 inline-block"
            >
              <FaTiktok />
            </a>
          </FadeInSlideUp>
          <FadeInSlideUp delay={1.1} className="">
            <a
              href="https://www.facebook.com/share/1Y4EXWj5Zj/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-800 transition-colors bg-white rounded-full p-3 text-black hover:scale-110 transform duration-200 inline-block"
            >
              <FaFacebook />
            </a>
          </FadeInSlideUp>
          <FadeInSlideUp delay={1.2}>
            <a
              href="https://www.instagram.com/goalso.sport"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-pink-600 transition-colors bg-white rounded-full p-3 text-black hover:scale-110 transform duration-200 inline-block"
            >
              <FaInstagram />
            </a>
          </FadeInSlideUp>
        </div>
        <div className="relative mt-8 inline-block">
          <FadeInSlideUp delay={1.5}>
            {/* <GreatEventButton /> */}
            <EventsCampButton />
          </FadeInSlideUp>
          <FadeInScaleDown delay={1.8}>
            <SoccerBall className="md:m-15 sm:m-4 m-5" />
          </FadeInScaleDown>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <video
          className="w-full h-full object-cover"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="/video/herovideo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
