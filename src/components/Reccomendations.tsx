import React from "react";
import Gallery from "./Gallery";
import getPhotos from "./getPhotos";

const Reccomendations = () => {
  const images = getPhotos("/img/gallery");

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
