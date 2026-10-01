import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-element',
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ctaRef}
      id="contact"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-radial-vignette overflow-hidden border-t border-white/5"
      aria-label="Call to Action"
    >
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="cta-element inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Ready For The Next Step?</span>
        </div>

        <h2 className="cta-element font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Let's build something{' '}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text">
            that moves.
          </span>
        </h2>

        <p className="cta-element text-base sm:text-lg text-neutral-300 max-w-xl mx-auto mt-6 leading-relaxed">
          Whether you need a high-impact interactive hero, a scalable web application, or a complete digital overhaul, ITZFIZZ turns concepts into reality.
        </p>

        {/* CTA Actions */}
        <div className="cta-element mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contact@itzfizz.digital"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-xl shadow-purple-600/30 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-neutral-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>hello@itzfizz.digital</span>
          </a>
        </div>
      </div>
    </section>
  );
}
