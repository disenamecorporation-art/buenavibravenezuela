import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  "https://i.postimg.cc/kXLzkY4D/Whats-App-Image-2026-06-17-at-07-56-49-(1).jpg",
  "https://i.postimg.cc/Pr09BVxq/Whats-App-Image-2026-06-17-at-07-56-49-(2).jpg",
  "https://i.postimg.cc/bN4WKVvC/Whats-App-Image-2026-06-17-at-07-56-50.jpg"
];

export default function HeroSlider({ onOpenContact }: { onOpenContact: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl font-extralight text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] tracking-[12px] uppercase mb-2"
        >
          Buena Vibra Venezuela
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-[#c79b72] italic opacity-80 text-[14px] mt-2"
        >
          Donde la conexión humana trasciende la pantalla
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={onOpenContact}
          className="bg-gradient-to-r from-[#c79b72] to-[#986946] text-black px-8 py-3 rounded-full font-normal tracking-[2px] uppercase text-[12px] hover:scale-105 transition"
        >
          Contáctanos
        </motion.button>
      </div>
    </div>
  );
}
