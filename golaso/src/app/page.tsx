import React from "react";
import Head from "next/head";
import { FaTiktok } from "react-icons/fa6";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import EventCard from "@/components/EventCard";

const Home = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="גולאסו ערכים וספורט" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white text-gray-800">
        {/* Navbar */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-7 py-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold">גולאסו</h1>
            <nav className="space-x-4">
              <a href="#events" className="hover:text-blue-600">
                אירועים
              </a>
              <a href="#about" className="hover:text-blue-600">
                עלינו
              </a>
              <a href="#media" className="hover:text-blue-600">
                תמונות
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sky-500 to-sky-300 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 mx-10 text-white">
              חוויה ספורטיבית ורגעים בלתי נשכחים
            </h2>
            {/* <p className="text-lg text-gray-600 mb-8">
              A short, compelling message about what you offer.
            </p> */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-600 transition-colors"
              >
                <FaTiktok />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500 transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-800 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-600 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
            <button className="text-2xl bg-lime-200 mt-8 px-7 py-4 rounded-full border-2 border-black">
              בואו נדבר 💬
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="events" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-semibold text-center mb-10">
              סוגי אירועים
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <EventCard
                title="ימי הולדת / מסיבות כיתה"
                description="ימי הולדת שהופכים לחוויה ספורטיבית סוחפת, מלאה באקשן, צחוק וגיבוש.
                אנחנו נתאים לכם את הפעילויות ונדאג לאירוע שאף אחד לא ישכח."
              />
              <EventCard
                title="בתי ספר"
                description="גולאסו מביאים את חווית הספורט המושלמת לבתי ספר!
                נתאים את האירוע לצרכים שלכם עם פעילויות מרתקות שמחזקות את ,הגיבוש
                יוצרות הנאה, והכי חשוב - זכרונות שילוו את התלמידים/ות שנים קדימה."
              />
              <EventCard
                title="אירועי חברה / עיריות"
                description="מחפשים לשבור את שגרת העבודה בדרך יחודית?
                בא לכם לפנק את תושבי העיר, הילדים והילדות ואת המשפחות? גולאסו זו הכתובת."
              />
            </div>
          </div>
        </section>

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
                <p />
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section
        <section id="testimonials" className="bg-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold mb-10 rtl">
              מה הלקוחות שלנו אומרים
            </h3>
            <blockquote className="text-lg italic text-gray-700 rtl">
              &quot;החוויה הייתה מדהימה! הילדים נהנו מאוד והאירוע היה
              מושלם.&quot;
            </blockquote>
            <p className="mt-4 font-bold rtl">– אמא מאושרת</p>
          </div>
        </section> */}

        {/* Call to Action */}
        <section
          id="contact"
          className="py-16 bg-blue-600 text-white text-center"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-4 rtl">מוכנים להתחיל?</h3>
            <p className="mb-8 rtl">
              צרו איתנו קשר ונתחיל ליצור משהו מדהים יחד.
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100"
            >
              צור קשר
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="rtl">
              &copy; {new Date().getFullYear()} גולאסו. כל הזכויות שמורות.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
