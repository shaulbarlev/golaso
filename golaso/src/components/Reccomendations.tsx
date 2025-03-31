const Gallery = () => {
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
  ];

  return (
    <section id="gallery" className="bg-sky-300 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">לקוחות ממליצים</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg hover:opacity-90 transition-opacity duration-300 aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
