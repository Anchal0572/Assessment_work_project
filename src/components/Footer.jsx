import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060609] border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 text-neutral-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-xl text-white tracking-wider">
              ITZFIZZ
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">
              DIGITAL
            </span>
          </div>
          <p className="text-xs text-neutral-500 max-w-xs text-center md:text-left">
            Scroll-driven interactive frontend built for the Itzfizz Web Development Assessment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <a href="#hero" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#scroll-area" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#technology" className="hover:text-white transition-colors">
            Tech
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Back to top button & copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-500 font-mono">
            © {new Date().getFullYear()} ITZFIZZ Digital.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
