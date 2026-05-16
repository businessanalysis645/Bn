import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Packages() {
  const packages = [
    {
      name: "Beginner Experience",
      price: "$120",
      duration: "1 Day",
      features: [
        "Full equipment rental included",
        "2 guided dives (max 12m)",
        "Lunch and soft drinks on board",
        "Professional instructor",
        "Hotel pickup & drop-off"
      ],
      isPopular: false
    },
    {
      name: "Explorer Package",
      price: "$350",
      duration: "3 Days",
      features: [
        "6 guided dives at premium sites",
        "Nitrox fills included",
        "Gourmet lunch on board daily",
        "Small group guarantee (max 4)",
        "Marine park fees included"
      ],
      isPopular: true
    },
    {
      name: "VIP Luxury Charter",
      price: "$1,200",
      duration: "Full Day",
      features: [
        "Private luxury yacht",
        "Customized itinerary",
        "Private chef & fine dining",
        "Unlimited diving/snorkeling",
        "Professional underwater photographer"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-ocean relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block font-semibold italic underline underline-offset-8 decoration-white/20">
            Exclusive Selection
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 mt-4">
            Elite Diving <span className="font-serif italic text-white/90">Packages</span>
          </h2>
          <p className="text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for world-class experiences. Choose the package that suits your thirst for adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={i}
              className={`relative p-8 rounded-3xl flex flex-col ${
                pkg.isPopular 
                  ? 'bg-gold text-ocean overflow-hidden transform md:-translate-y-4' 
                  : 'bg-white/5 border border-white/10 backdrop-blur-xl'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-black/10 rounded-full"></div>
              )}
              
              <h4 className={`text-[10px] uppercase tracking-widest font-bold mb-2 ${pkg.isPopular ? 'text-ocean/70' : 'text-white/50'}`}>
                {pkg.name}
              </h4>
              <p className={`text-2xl font-serif italic mb-4 ${pkg.isPopular ? 'text-ocean' : 'text-white'}`}>
                {pkg.duration}
              </p>
              
              <div className="mb-8">
                <div className={`text-4xl font-bold font-sans tracking-tighter ${pkg.isPopular ? 'text-ocean' : 'text-aqua'}`}>
                  {pkg.price}
                  <span className={`text-xs font-normal ml-1 ${pkg.isPopular ? 'opacity-70' : 'text-white/50'}`}>/person</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.isPopular ? 'text-ocean/60' : 'text-aqua/60'}`} />
                    <span className={`font-light text-sm ${pkg.isPopular ? 'text-ocean/90' : 'text-white/80'}`}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                pkg.isPopular 
                  ? 'bg-ocean text-white hover:bg-white hover:text-ocean' 
                  : 'bg-white/10 hover:bg-aqua hover:text-ocean border-white/10 border'
              }`}>
                <span>Select Package</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
