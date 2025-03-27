import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import EventsSection from "@/components/EventsSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="גולאסו ערכים וספורט" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white text-gray-800">
        <Header />
        <HeroSection />
        <EventsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
