import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Alexander Wright",
      role: "Experienced Diver",
      text: "The VIP Luxury Charter was beyond expectations. The crew anticipated every need, the food was exquisite, and the dive sites were pristine and untouched.",
      rating: 5
    },
    {
      name: "Elena Rossi",
      role: "First-time Snorkeler",
      text: "I was extremely nervous about the water, but the instructors were so patient and professional. I saw sea turtles and felt completely safe the entire time.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Advanced Diver",
      text: "Flawless execution. The equipment is top-tier, the nitrox fills were perfect, and the guides know the reefs like the back of their hands. Truly elite.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-ocean relative overflow-hidden">
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-aqua/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block font-semibold italic underline underline-offset-8 decoration-white/20">
            Guest Experiences
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mt-4">
            Voices of the <span className="font-serif italic text-white/90">Elite</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative backdrop-blur-md"
            >
              <div className="text-6xl font-serif text-white/10 absolute top-4 left-6 leading-none">"</div>
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/70 font-light italic mb-8 min-h-[100px] text-sm leading-relaxed">
                  {review.text}
                </p>
                <div>
                  <h4 className="font-serif text-lg text-white font-italic">{review.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
