import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Gallery() {
  const images = [
    "https://loremflickr.com/1200/800/sea,turtle?lock=16", // Turtle
    "https://loremflickr.com/1200/800/scuba,diving?lock=10", // Scuba
    "https://loremflickr.com/1200/800/dolphin,sea?lock=12", // Dolphin
    "https://loremflickr.com/1200/800/luxury,yacht?lock=11", // Yacht
    "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1964&auto=format&fit=crop", // Reef
  ];

  return (
    <section id="gallery" className="py-24 bg-ocean overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aqua/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block font-semibold italic underline underline-offset-8 decoration-white/20">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mt-4">
            A Glimpse into <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-aqua to-white font-bold">Paradise</span>
          </h2>
        </div>
      </div>

      <div className="flex gap-4 px-6 overflow-x-auto pb-8 snap-x scrollbar-hide relative z-10" style={{ scrollbarWidth: 'none' }}>
        {images.map((src, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            key={i}
            className={`flex-none w-[80vw] sm:w-[500px] aspect-[4/5] sm:aspect-[3/4] relative group overflow-hidden rounded-3xl snap-center border border-white/10 glass-card bg-white/5 p-2 ${i % 2 === 0 ? 'sm:translate-y-8' : ''}`}
          >
            <img 
              src={src} 
              alt="Gallery item" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 rounded-[24px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
