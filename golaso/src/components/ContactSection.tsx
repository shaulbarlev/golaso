import React from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-green-300 text-black text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* <h3 className="text-3xl font-semibold mb-4 rtl">בואו נדבר</h3> */}
        <WhatsAppButton
          className="mx-auto shadow-xl mb-8"
          text="בואו נדבר"
          href="https://wa.me/972546123456"
        />
        <h1 className="font-semibold text-2xl rtl leading-relaxed">
          ביחד נרים אירוע מדהים!
        </h1>
        <h2 className="text-xl rtl leading-relaxed">נענה לכם על כל שאלה 😎</h2>
      </div>
    </section>
  );
};

export default ContactSection;
