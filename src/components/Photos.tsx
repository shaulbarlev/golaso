import React from "react";
import Gallery from "./Gallery";
import getPhotos from "./getPhotos";

const Photos = () => {
  const images = getPhotos("/img/gallery");
  return (
    <section id="gallery" className="py-16 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          טעימה קטנה מהאירועים שלנו
        </h2>
        <Gallery images={images} />
      </div>
    </section>
  );
};

export default Photos;
