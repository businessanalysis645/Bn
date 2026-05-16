import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Anchor, ChevronDown } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-light/80 via-ocean/80 to-ocean z-10" />
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-aqua/10 rounded-full blur-[120px] z-20 pointer-events-none"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] z-20 pointer-events-none"></div>
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop" 
          alt="Underwater view of the Red Sea coral reef" 
          className="w-full h-[120%] object-cover object-center"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-8 block font-semibold italic underline underline-offset-8 decoration-white/20">
            Premium Marine Concierge
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-tight shadow-gold"
        >
          Explore the <br className="hidden md:block" />
          <span className="font-serif italic text-white/90">Magic</span> of the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-white font-bold">Red Sea</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Luxury diving experiences, snorkeling, yacht trips, and unforgettable sea adventures tailored for the elite traveler.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a href="#booking" className="bg-white text-ocean px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-aqua transition-all flex items-center justify-center gap-4 w-full sm:w-auto">
            Book Your Adventure
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
          <a href="#services" className="border border-white/20 px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:border-white transition-all w-full sm:w-auto text-center">
            Explore Trips
          </a>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-gold transition-colors"
      >
        <ChevronDown className="w-8 h-8 font-light" />
      </motion.a>
    </section>
  );
}
