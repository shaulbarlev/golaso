import Image from "next/image";

interface GalleryProps {
  images: { src: string; alt: string; id: string }[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className={`relative overflow-hidden rounded-lg active:scale-105 transition-all duration-150`}
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
  );
};

export default Gallery;
