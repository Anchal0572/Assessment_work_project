import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Sparkles, Code2, Cpu, Globe2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const pillars = [
    {
      icon: Code2,
      title: 'Clean Engineering',
      desc: 'Modular, robust codebases designed for speed and longevity.',
    },
    {
      icon: Sparkles,
      title: 'Motion Architecture',
      desc: 'Kinematic scroll interactions and micro-animations that captivate.',
    },
    {
      icon: Cpu,
      title: 'Performance First',
      desc: 'Optimized rendering cycles, lightweight bundles, and zero lag.',
    },
    {
      icon: Globe2,
      title: 'Cross-Device Polish',
      desc: 'Pixel-perfect responsiveness across every modern screen dimension.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090f] border-t border-white/5"
      aria-label="About ITZFIZZ"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="about-reveal inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Who We Are</span>
          </div>

          <h2 className="about-reveal font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Digital experiences that{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text">
              move brands forward.
            </span>
          </h2>

          <p className="about-reveal text-base sm:text-lg text-neutral-300 mt-6 leading-relaxed">
            At ITZFIZZ, we specialize in building modern digital experiences, bespoke websites, and interactive web applications. We blend cutting-edge front-end engineering with purposeful motion design to craft memorable web journeys that feel alive.
          </p>
        </div>

        {/* Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="about-reveal group p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-300 transform-gpu hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-cyan-300 mb-4 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
