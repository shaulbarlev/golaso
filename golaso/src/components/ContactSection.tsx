import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-4 rtl">מוכנים להתחיל?</h3>
        <p className="mb-8 rtl">צרו איתנו קשר ונתחיל ליצור משהו מדהים יחד.</p>
        <a
          href="#"
          className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100"
        >
          צור קשר
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
