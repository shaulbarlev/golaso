import React from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

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
        <HeroSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
