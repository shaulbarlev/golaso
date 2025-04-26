import React from "react";
import Gallery from "./Gallery";
import getPhotos from "./getPhotos";

interface IPhotoProps {
  imgdir: string;
  title?: string;
}

const Photos = ({ imgdir, title }: IPhotoProps) => {
  const images = getPhotos(imgdir);
  return (
    <section id="gallery" className="py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        )}
        <Gallery images={images} />
      </div>
    </section>
  );
};

export default Photos;
