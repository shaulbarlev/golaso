import React from "react";
import Gallery from "./Gallery";

const Photos = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      alt: "Nature landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
      alt: "Forest path",
    },
    {
      src: "https://images.unsplash.com/photo-1682687221248-3116ba6ab483",
      alt: "Desert dunes",
    },
    {
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      alt: "Ocean waves",
    },
    {
      src: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
      alt: "Mountain lake",
    },
    {
      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      alt: "Valley view",
    },
  ];

  return (
    <section id="gallery" className="py-16 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          טעימה קטנה מהאירועים שלנו
        </h2>
        <Gallery images={images} aspectRatio="aspect-[16/9]" />
      </div>
    </section>
  );
};

export default Photos;
