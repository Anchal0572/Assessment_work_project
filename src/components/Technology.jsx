import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Technology() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.tech-card',
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.4)',
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

  const technologies = [
    {
      name: 'React.js',
      role: 'UI Architecture',
      desc: 'Component modularity, declarative rendering & reactive state pipelines.',
      category: 'Frontend Core',
      accent: 'border-cyan-500/30 hover:border-cyan-400 group-hover:text-cyan-400',
      iconText: '⚛️',
      color: 'from-cyan-500/20 to-blue-500/10',
    },
    {
      name: 'JavaScript',
      role: 'Modern ES6+ Logic',
      desc: 'Clean asynchronous workflows, functional paradigms & dynamic manipulation.',
      category: 'Language Engine',
      accent: 'border-amber-500/30 hover:border-amber-400 group-hover:text-amber-400',
      iconText: 'JS',
      color: 'from-amber-500/20 to-yellow-500/10',
    },
    {
      name: 'GSAP',
      role: 'GreenSock Motion',
      desc: 'ScrollTrigger timelines, buttery scrub physics & GPU-accelerated motion.',
      category: 'Kinematics',
      accent: 'border-emerald-500/30 hover:border-emerald-400 group-hover:text-emerald-400',
      iconText: '⚡',
      color: 'from-emerald-500/20 to-teal-500/10',
    },
    {
      name: 'Tailwind CSS',
      role: 'Design System',
      desc: 'Utility-first rapid prototyping, consistent tokens & responsive layouts.',
      category: 'Styling Layer',
      accent: 'border-sky-500/30 hover:border-sky-400 group-hover:text-sky-400',
      iconText: '🌊',
      color: 'from-sky-500/20 to-cyan-500/10',
    },
    {
      name: 'WordPress',
      role: 'Enterprise CMS',
      desc: 'Custom theme architecture, REST API headless feeds & client authoring.',
      category: 'Content Engine',
      accent: 'border-blue-500/30 hover:border-blue-400 group-hover:text-blue-400',
      iconText: 'WP',
      color: 'from-blue-500/20 to-indigo-500/10',
    },
    {
      name: 'Shopify',
      role: 'Commerce Platform',
      desc: 'Liquid storefront customization, checkout optimization & app integrations.',
      category: 'E-commerce',
      accent: 'border-green-500/30 hover:border-green-400 group-hover:text-green-400',
      iconText: '🛍️',
      color: 'from-green-500/20 to-emerald-500/10',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090f] border-t border-white/5"
      aria-label="Technologies and Capabilities"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400">
            // Tech Stack & Tooling
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Engineered with Modern Standards
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4">
            Mastery of the core technologies powering high-performing digital agencies, from motion kinematics to enterprise CMS platforms.
          </p>
        </div>

        {/* 6 Technology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`tech-card group relative p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border ${tech.accent} transition-all duration-300 transform-gpu hover:-translate-y-1.5`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-display font-extrabold text-lg text-white">
                  {tech.iconText}
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/5">
                  {tech.category}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs font-mono text-purple-300/80 mt-0.5 mb-2">
                {tech.role}
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
