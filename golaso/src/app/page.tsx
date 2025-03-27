import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta
          name="description"
          content="A simple landing page built with Next.js and Tailwind CSS"
        />
      </Head>

      <main className="bg-white text-gray-800">
        {/* Navbar */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">BrandName</h1>
            <nav className="space-x-4">
              <a href="#features" className="hover:text-blue-600">
                Features
              </a>
              <a href="#testimonials" className="hover:text-blue-600">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Product</h2>
            <p className="text-lg text-gray-600 mb-8">
              A short, compelling message about what you offer.
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-semibold text-center mb-10">
              Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["One", "Two", "Three"].map((title, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-lg shadow">
                  <h4 className="text-xl font-bold mb-2">Feature {title}</h4>
                  <p className="text-gray-600">
                    Description of this awesome feature.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold mb-10">What Our Users Say</h3>
            <blockquote className="text-lg italic text-gray-700">
              &quot;This product changed the way I work. Highly
              recommended!&quot;
            </blockquote>
            <p className="mt-4 font-bold">– Happy Customer</p>
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="contact"
          className="py-16 bg-blue-600 text-white text-center"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-4">
              Ready to get started?
            </h3>
            <p className="mb-8">
              Reach out to us and let’s make something great together.
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} BrandName. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
