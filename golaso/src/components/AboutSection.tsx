import React from "react";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-sky-400 via-sky-200 to-sky-400 pt-8 p-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">מה זה גולאסו?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 pb-0 rounded-3xl shadow-lg">
          <p className="text-xl font-semibold">
            אני גלעד, מייסד גולאסו, ואני מאמין בערכים ובכוחו של הספורט לשנות
            חיים. עם תשוקה לספורט ולחינוך, הקמתי את גולאסו במטרה להביא חוויות
            ספורטיביות מרתקות ומחנכות לכל הגילאים. אני מאמין כי דרך הספורט ניתן
            לפתח ערכים כמו עבודת צוות, התמדה, והגינות, וליצור זכרונות שילוו את
            המשתתפים לכל החיים.
          </p>
          <Image
            className="mx-auto w-75"
            src="/img/gilad.png"
            alt="גולאסו"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
