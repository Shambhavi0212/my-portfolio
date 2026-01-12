import { useEffect, useState } from "react";

const images = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
  "/gallery/gallery9.jpg",
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
<section id="gallery" className="py-24 px-6 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 tracking-wide">
        Gallery
      </h2>

      <div className="flex justify-center items-center">
        <div className="relative overflow-hidden rounded-3xl p-2 backdrop-blur-md bg-white/5 border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
  <img
    key={current}
    src={images[current]}
    alt="Gallery Slide"
    className="w-full max-w-6xl h-[280px] sm:h-[360px] lg:h-[460px] object-contain rounded-2xl transition-all duration-700 ease-in-out animate-fadeSlide"
  />
</div>

      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index
                ? "bg-cyan-400 scale-125 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                : "bg-white/30 hover:bg-white/60"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
