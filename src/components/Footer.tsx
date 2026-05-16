import React from 'react';
import { Anchor, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ocean/80 pt-20 pb-10 border-t border-white/10 relative overflow-hidden backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border-2 border-gold rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-aqua rotate-45"></div>
              </div>
              <span className="text-lg font-light tracking-[0.2em] uppercase italic inline-block mt-1">Red Sea <span className="font-bold text-gold">Elite</span></span>
            </a>
            <p className="text-white/50 text-sm font-light leading-relaxed pr-4 mb-6">
              The premier luxury diving and yacht charter service in the Red Sea. Curating unforgettable marine adventures since 2011.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-aqua hover:border-aqua transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-aqua hover:border-aqua transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-aqua hover:border-aqua transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-widest text-white/40 mb-6 block font-bold">Experiences</span>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">VIP Yacht Charter</a></li>
              <li><a href="#services" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">Professional Scuba Diving</a></li>
              <li><a href="#services" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">Premium Snorkeling</a></li>
              <li><a href="#services" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">PADI Certifications</a></li>
              <li><a href="#services" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">Underwater Photography</a></li>
            </ul>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-widest text-white/40 mb-6 block font-bold">Destinations</span>
            <ul className="space-y-4">
              <li><a href="#destinations" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">Orange Bay</a></li>
              <li><a href="#destinations" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">Giftun Island Marine Park</a></li>
              <li><a href="#destinations" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">Mahmya Island</a></li>
              <li><a href="#destinations" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">Dolphin House</a></li>
              <li><a href="#destinations" className="text-white/60 hover:text-aqua text-sm font-light transition-colors">Abu Ramada Reef</a></li>
            </ul>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-widest text-white/40 mb-6 block font-bold">Accreditations</span>
            <div className="grid grid-cols-3 gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="w-full aspect-square border border-white/10 rounded-xl flex items-center justify-center text-[10px] font-bold text-white/60">PADI</div>
              <div className="w-full aspect-square border border-white/10 rounded-xl flex items-center justify-center text-[10px] font-bold text-white/60">SSI</div>
              <div className="w-full aspect-square border border-white/10 rounded-xl flex items-center justify-center text-[10px] font-bold text-white/60">ISO</div>
            </div>
            <p className="text-white/40 text-xs mt-6 italic">
              Operated under highest EU safety regulations and fully insured.
            </p>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-12">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Safety Record</span>
              <span className="text-[11px] font-bold text-white/80">100% International Standards</span>
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Location</span>
              <span className="text-[11px] font-bold text-white/80">Marina, Hurghada City</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Quick Connect</span>
              <span className="text-[11px] font-bold text-aqua">+20 102 345 6789</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-white/60">&copy; {new Date().getFullYear()} Red Sea Elite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
