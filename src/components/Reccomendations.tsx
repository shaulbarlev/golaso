import React from "react";
import Gallery from "./Gallery";

const Reccomendations = () => {
  const images = [
    {
      id: "nature-landscape-2",
      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      alt: "Nature landscape",
    },
    {
      id: "forest-path-2",
      src: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
      alt: "Forest path",
    },
    {
      id: "desert-dunes-2",
      src: "https://images.unsplash.com/photo-1682687221248-3116ba6ab483",
      alt: "Desert dunes",
    },
    {
      id: "ocean-waves-2",
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      alt: "Ocean waves",
    },
    {
      id: "mountain-lake-2",
      src: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
      alt: "Mountain lake",
    },
    {
      id: "valley-view-2",
      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      alt: "Valley view",
    },
  ];

  return (
    <section id="reccomendations" className="py-16 px-5 bg-sky-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">לקוחות ממליצים</h2>
        <Gallery images={images} />
      </div>
    </section>
  );
};

export default Reccomendations;
