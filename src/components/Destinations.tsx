import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function Destinations() {
  const destinations = [
    {
      name: "Orange Bay",
      desc: "The 'Egyptian Maldives', featuring shallow, crystal-clear turquoise waters and pristine white sands.",
      img: "https://loremflickr.com/1200/800/beach,maldives?lock=14" // Generic maldives/beach
    },
    {
      name: "Giftun Island",
      desc: "A protected marine park offering spectacular coral drop-offs and vibrant schools of fish.",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Abu Ramada",
      desc: "Known as 'The Aquarium', an incredibly flat reef bursting with dense marine life.",
      img: "https://loremflickr.com/1200/800/coral,reef?lock=15"
    }
  ];

  return (
    <section id="destinations" className="py-24 bg-ocean relative overflow-hidden">
      <div className="absolute top-0 right-[-100px] w-[500px] h-[500px] bg-aqua/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block font-semibold italic underline underline-offset-8 decoration-white/20">
              Iconic Locations
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Discover Our <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-white font-bold">Destinations</span>
            </h2>
          </div>
          <p className="text-white/60 font-light max-w-md leading-relaxed">
            Sail to the Red Sea's most exclusive and breathtaking locations. From hidden coral gardens to famous white-sand islands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              key={i}
              className={`group overflow-hidden rounded-3xl relative bg-white/5 border border-white/10 ${i === 0 ? 'lg:col-span-2 lg:aspect-video' : 'aspect-[4/5] lg:aspect-auto'} h-[400px] lg:h-auto min-h-[400px]`}
            >
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean via-transparent to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-aqua/20 text-aqua px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-aqua/30 backdrop-blur-md">
                    Trending Destination
                  </span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <h3 className="text-4xl font-serif italic font-light text-white">{dest.name}</h3>
                    <p className="text-white/60 font-light text-sm mt-2">{dest.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0 ml-4 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
