import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="rtl">
          &copy; {new Date().getFullYear()} גולאסו. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
