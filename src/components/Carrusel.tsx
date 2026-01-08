import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const Carrusel = () => {
  const images = [
    "/about-me/foto-1.webp",
    "/about-me/foto-2.webp",
    "/about-me/foto-3.webp",
    "/about-me/foto-4.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Cambia cada 6 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative w-full h-full  overflow-hidden rounded-lg bg-gradient-to-br from-slate-900/20 to-slate-800/20 dark:from-slate-950/40 dark:to-slate-900/40">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 100, damping: 25 },
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
          }}
          className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8"
        >
          <div className="relative w-full h-full max-w-2xl mx-auto">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={images[currentIndex]}
                alt={`Galería ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay con gradiente sutil */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full backdrop-blur-sm"
              animate={{
                scale: currentIndex === index ? 1.5 : 1,
                backgroundColor:
                  currentIndex === index
                    ? "rgb(59 130 246)"
                    : "rgba(255 255 255 / 0.4)",
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Ring effect al hacer hover */}
            <motion.div
              className="absolute inset-0 -m-1 rounded-full border-2 border-blue-400/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.4 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
