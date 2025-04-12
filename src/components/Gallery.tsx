"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface GalleryProps {
  images: { src: string; alt: string; id: string }[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const selectedImageData = selectedImage
    ? images.find((img) => img.id === selectedImage)
    : null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg active:scale-105 transition-all duration-150 cursor-pointer`}
            onClick={() => setSelectedImage(image.id)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={
          selectedImageData || {
            src: "",
            alt: "",
          }
        }
      />
    </>
  );
};

export default Gallery;
