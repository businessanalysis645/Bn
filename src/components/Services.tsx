import React from 'react';
import { motion } from 'motion/react';
import { Anchor, Waves, Sailboat, Camera, Fish, Sun, MapPin, GraduationCap } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "Scuba Diving",
      description: "Explore world-class dive sites with elite guides. From reefs to wrecks.",
      icon: Anchor,
      image: "https://images.unsplash.com/photo-1544526226-d4568090fea4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Private Yachts",
      description: "Charter our luxury vessels for an exclusive, tailored sea experience.",
      icon: Sailboat,
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2074&auto=format&fit=crop"
    },
    {
      title: "Snorkeling Trips",
      description: "Discover shallow coral gardens vibrant with marine life in crystal waters.",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1621323385202-0e359050d53c?q=80&w=1964&auto=format&fit=crop" /* Replace with better later */
    },
    {
      title: "Dolphin Watching",
      description: "Respectful encounters with wild dolphins at Dolphin House reef.",
      icon: Fish,
      image: "https://images.unsplash.com/photo-1608666579298-0c679a615ebb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "PADI Courses",
      description: "From beginner to divemaster, learn with certified highly skilled instructors.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1518413998822-0d674cccaeb2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Underwater Photo",
      description: "Professional photography services to capture your underwater journey.",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1964&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="section-padding bg-ocean relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block font-semibold italic underline underline-offset-8 decoration-white/20">
              Curated Experiences
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mt-4">
              Our Premium <br/>
              <span className="font-serif italic text-white/90">Services</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-aqua/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-ocean-light z-10 group-hover:border-aqua/50 transition-colors">
                <service.icon className="w-5 h-5 text-aqua group-hover:text-aqua transition-colors duration-300" />
              </div>
              
              <div className="flex-1 z-10">
                <span className="block text-gold text-[10px] mb-2 tracking-widest font-mono">0{index + 1}</span>
                <h3 className="text-xl font-serif italic text-white mb-3 group-hover:text-aqua transition-colors duration-300">{service.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10 z-10">
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-white group-hover:text-aqua transition-colors flex items-center gap-2">
                  Explore
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
