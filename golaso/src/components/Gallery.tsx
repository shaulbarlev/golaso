interface GalleryProps {
  images: { src: string; alt: string; id: string }[];
  aspectRatio?: string;
}

const Gallery = ({ images, aspectRatio = "aspect-[4/3]" }: GalleryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className={`relative overflow-hidden rounded-lg active:scale-105 transition-all duration-150 ${aspectRatio}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
