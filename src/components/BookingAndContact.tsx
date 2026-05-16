import React from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function BookingAndContact() {
  return (
    <section id="booking" className="py-24 bg-ocean relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop')] opacity-[0.03] bg-cover bg-center bg-fixed"></div>
      
      <div className="absolute top-1/2 right-[-200px] w-[600px] h-[600px] bg-aqua/5 rounded-full blur-[120px] z-0 pointer-events-none transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 glass-card"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-2">Book Your <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-aqua to-white">Adventure</span></h2>
            <p className="text-white/60 font-light mb-8 text-sm">Secure your spot for an unforgettable Red Sea experience.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2 font-bold">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-aqua/50 transition-colors text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2 font-bold">WhatsApp / Phone</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-aqua/50 transition-colors text-sm" placeholder="+1 234 567 8900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2 font-bold">Trip Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white/80 focus:outline-none focus:border-aqua/50 transition-colors appearance-none text-sm">
                    <option value="" disabled selected className="bg-ocean">Select an experience</option>
                    <option value="scuba" className="bg-ocean text-white">Scuba Diving</option>
                    <option value="snorkel" className="bg-ocean text-white">Snorkeling</option>
                    <option value="yacht" className="bg-ocean text-white">Private Yacht</option>
                    <option value="course" className="bg-ocean text-white">PADI Course</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2 font-bold">Date</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white/80 focus:outline-none focus:border-aqua/50 transition-colors text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2 font-bold">Special Requests</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-aqua/50 transition-colors resize-none text-sm" placeholder="Any dietary requirements, experience level, etc."></textarea>
              </div>

              <button type="button" className="w-full bg-ocean-light text-white px-8 py-5 text-xs uppercase tracking-[0.2em] font-bold border border-white/20 hover:bg-white hover:text-ocean transition-all rounded-xl mt-6 flex justify-center items-center gap-2">
                <span>Send Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-light mb-6">Get in <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-aqua to-white font-bold">Touch</span></h2>
              <p className="text-white/60 font-light mb-10 leading-relaxed">
                Have questions about our luxury packages or custom charters? Our concierge team is available 24/7 to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex flex-shrink-0 items-center justify-center bg-ocean-light group-hover:border-aqua/50 transition-colors">
                    <MapPin className="w-5 h-5 text-aqua" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">Marina Location</h4>
                    <p className="text-white font-serif italic text-md">New Marina, Hurghada, Red Sea, Egypt</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex flex-shrink-0 items-center justify-center bg-ocean-light group-hover:border-aqua/50 transition-colors">
                    <MessageCircle className="w-5 h-5 text-aqua" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">WhatsApp 24/7</h4>
                    <p className="text-white font-serif italic text-md">+20 100 000 0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex flex-shrink-0 items-center justify-center bg-ocean-light group-hover:border-aqua/50 transition-colors">
                    <Mail className="w-5 h-5 text-aqua" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">Email Concierge</h4>
                    <p className="text-white font-serif italic text-md">concierge@redseaelite.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder Map */}
            <div className="w-full h-48 bg-ocean-light border border-white/10 rounded-3xl relative overflow-hidden group glass-card p-2 bg-white/5">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover rounded-[24px] opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center bg-ocean/40 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700 rounded-[24px]">
                <span className="text-white uppercase tracking-widest text-[10px] font-bold border border-white/20 px-6 py-3 bg-ocean-light/80 hover:bg-aqua hover:text-ocean transition-colors rounded-xl">View on Map</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
