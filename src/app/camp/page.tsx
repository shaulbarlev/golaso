import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { FadeInSection } from "@/components/animations";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MdFileDownload } from "react-icons/md";
import Photos from "@/components/Photos";

const Home = () => {
  return (
    <>
      <Head>
        <title>גולאסו - קייטנות</title>
        <meta name="description" content="גולאסו - קייטנות" />
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

      <main className="bg-sky-200 text-gray-80">
        <Header />

        <div className="pt-20 p-8">
          <FadeInSection>
            <h3 className="text-3xl font-semibold text-center mb-10">
              קייטנות בגולאסו
            </h3>
          </FadeInSection>
          <FadeInSection>
            <img
              src="/img/camp/flyer.jpeg"
              className="rounded-2xl shadow-xl my-2"
            />
          </FadeInSection>
          <FadeInSection>
            <img
              src="/img/camp/activities.jpeg"
              className="rounded-2xl shadow-xl my-2"
            />
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className="">
            <WhatsAppButton text="להרשמה" className="mx-auto" />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="p-5">
            <div className="bg-white/50 rounded-2xl p-5 flex items-center gap-2 w-fit mx-auto">
              <MdFileDownload />
              <span>שאלות ותשובות</span>
            </div>
          </div>
        </FadeInSection>
        <Photos imgdir="/img/campgallery" />
        <Footer />
      </main>
    </>
  );
};

export default Home;
