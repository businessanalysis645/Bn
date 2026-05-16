import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Navigation, HeartHandshake, Headphones } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    { icon: Shield, title: "PADI 5-Star", desc: "Highest international safety and training standards." },
    { icon: Navigation, title: "Expert Local Guides", desc: "Decades of experience in the Red Sea's hidden gems." },
    { icon: Sparkles, title: "Luxury Fleet", desc: "State-of-the-art yachts with premium amenities." },
    { icon: HeartHandshake, title: "Personalized Care", desc: "Small groups, 1-on-1 attention, tailored itineraries." },
    { icon: Headphones, title: "24/7 Support", desc: "Dedicated concierge for your entire booked journey." }
  ];

  return (
    <section className="py-24 bg-ocean relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aqua/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block font-semibold italic underline underline-offset-8 decoration-white/20">
              The Elite Difference
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 mt-4 leading-tight">
              Why Choose <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-white font-bold">Red Sea Elite</span>
            </h2>
            <p className="text-white/60 font-light text-lg mb-12 leading-relaxed">
              We do not just offer dives; we orchestrate seamless, luxurious sea expeditions. From the moment you contact us until your final departure, experience the Red Sea with unparalleled comfort and exclusivity.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx} 
                  className="flex gap-6 group bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex flex-shrink-0 items-center justify-center bg-ocean-light group-hover:border-aqua/50 transition-colors">
                    <reason.icon className="w-5 h-5 text-aqua group-hover:text-aqua transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-serif italic text-xl text-white mb-2">{reason.title}</h4>
                    <p className="text-white/60 font-light text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-white/10 glass-card p-2 bg-white/5">
               <img 
                src="https://images.unsplash.com/photo-1596401057633-54a8fea8ce64?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Yacht Interior" 
                className="w-full h-full object-cover rounded-[32px] transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
