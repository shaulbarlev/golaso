import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-10">עלינו</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <p>
            גלעד, מייסד גולאסו, הוא אדם שמאמין בערכים ובכוחו של הספורט לשנות
            חיים. עם תשוקה לספורט ולחינוך, גלעד הקים את גולאסו במטרה להביא
            חוויות ספורטיביות מרתקות ומחנכות לכל הגילאים. הוא מאמין כי דרך
            הספורט ניתן לפתח ערכים כמו עבודת צוות, התמדה, והגינות, וליצור
            זכרונות שילוו את המשתתפים לכל החיים.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
