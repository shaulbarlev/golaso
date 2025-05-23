import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Photos from "@/components/Photos";

import { FadeInSection } from "@/components/animations";

const Home = () => {
  return (
    <>
      <Head>
        <title>גולאסו ערכים וספורט</title>
        <meta
          name="description"
          content="גולאסו - חוויה ספורטיבית בלתי נשכחת"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="bg-white text-gray-800">
        <Header />
        <FadeInSection>
          <EventsSection />
        </FadeInSection>
        <FadeInSection>
          <AboutSection />
        </FadeInSection>
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
        <div className="bg-sky-200">
          <Photos imgdir="/img/gallery" title="טעימה קטנה מהאירועים שלנו" />
        </div>
        <Photos imgdir="/img/recommendations" title="לקוחות ממליצים" />
        <Footer />
      </main>
    </>
  );
};

export default Home;
