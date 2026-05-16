import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Compass, Award } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="section-padding bg-ocean relative overflow-hidden text-white border-t border-white/10">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-semibold italic underline underline-offset-8 decoration-white/20">
                About Elite Diving
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              A Legacy of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-white font-bold italic">Underwater</span> Excellence
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-white/60 text-lg leading-relaxed mb-6 font-light">
              Situated in the heart of Hurghada, Red Sea Elite Diving is a premium, PADI-certified dive center dedicated to delivering unparalleled underwater adventures. We blend five-star luxury with uncompromising safety standards.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-white/60 text-lg leading-relaxed mb-12 font-light">
              Whether exploring pristine coral gardens, swimming alongside wild dolphins, or learning from our elite international instructors, every journey with us is meticulously crafted to be extraordinary.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Safety First", desc: "100% incident-free record" },
                { icon: Award, title: "PADI 5-Star", desc: "Certified elite instructors" },
                { icon: Compass, title: "Premium Fleet", desc: "Luxury private yachts" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                    <item.icon className="w-5 h-5 text-aqua" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-tighter text-white">{item.title}</h4>
                    <p className="text-[10px] text-white/50 mt-1 uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Images */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[600px]"
          >
            <div className="absolute top-0 right-0 w-3/4 h-4/5 rounded-[40px] overflow-hidden border border-white/10 glass-card p-2 bg-white/5">
              <img 
                src="https://loremflickr.com/1200/800/scuba,diving?lock=10" 
                alt="Scuba diver exploring coral reef" 
                className="w-full h-full object-cover rounded-[32px] transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-[32px] overflow-hidden border border-white/10 z-10 glass-card p-2 bg-ocean">
              <img 
                src="https://loremflickr.com/1200/800/luxury,yacht?lock=11" 
                alt="Luxury yacht on the red sea" 
                className="w-full h-full object-cover rounded-[24px] transition-transform duration-1000 hover:scale-105"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 z-20 w-32 h-32 rounded-full bg-ocean border border-gold/30 flex items-center justify-center p-2 backdrop-blur-md">
              <div className="w-full h-full rounded-full border border-dashed border-gold/50 flex flex-col items-center justify-center">
                <span className="font-serif text-4xl text-gold leading-none italic">15</span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/70 mt-1 text-center font-bold">Years<br/>Elite</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
