import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="rtl">
          &copy; {new Date().getFullYear()} גולאסו. כל הזכויות שמורות.
          <br />
          פיתוח אתר על ידי{" "}
          <a href="https://shaulb.com" className="underline">
            שאול בר-לב
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
