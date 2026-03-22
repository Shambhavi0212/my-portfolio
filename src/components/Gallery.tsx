import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery10.jpeg",
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
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="gallery" className="py-24 px-6 text-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
      <div className="w-20 h-1 bg-[#80dfff] mx-auto mb-12"></div>

      {/* Container */}
      <div className="relative w-full max-w-6xl mx-auto h-[320px] sm:h-[420px] lg:h-[520px] overflow-hidden rounded-3xl border border-cyan-400/20 shadow-[0_0_80px_rgba(34,211,238,0.25)] flex items-center justify-center">

        {/* Fixed background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021d2b] via-[#043a4d] to-[#010c14]" />

        {/* Image animation */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative max-h-full max-w-full object-contain rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] z-10"
          />
        </AnimatePresence>

        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setIsPaused(true); // pause auto
              setDirection(index > current ? 1 : -1);
              setCurrent(index);

              // resume after 5 seconds
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index
                ? "bg-cyan-400 scale-125 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                : "bg-white/30 hover:bg-white/60"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
};

export default Gallery;