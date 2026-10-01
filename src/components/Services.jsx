import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, ShoppingBag, Terminal, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      badge: 'React & Jamstack',
      description:
        'Architecting fast, responsive, and maintainable web applications engineered with clean code and cutting-edge standards.',
      tags: ['Single Page Apps', 'Component Systems', 'API Integration'],
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Palette,
      title: 'UI/UX Experiences',
      badge: 'Creative & Motion',
      description:
        'Crafting immersive user interfaces with micro-interactions, intuitive layouts, and cinematic scroll kinematics that captivate visitors.',
      tags: ['Design Systems', 'Interactive Prototypes', 'Motion UI'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      badge: 'Shopify & Headless',
      description:
        'Designing frictionless digital storefronts engineered for high conversion rates, lightning page speeds, and flawless checkouts.',
      tags: ['Store Architecture', 'Conversion Polish', 'Catalog UX'],
      gradient: 'from-indigo-500 to-purple-400',
    },
    {
      icon: Terminal,
      title: 'Digital Solutions',
      badge: 'Bespoke Tech',
      description:
        'Custom interactive tools, CMS platforms (WordPress & Headless), and bespoke digital products tailored to client objectives.',
      tags: ['Custom Solutions', 'Performance Audits', 'CMS Workflows'],
      gradient: 'from-cyan-400 to-emerald-400',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#08080c] border-t border-white/5"
      aria-label="Our Services"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
              // Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
              Services Built For{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Momentum
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md">
            From interactive brand sites to scalable web platforms, we engineer solutions with visual refinement and technical excellence.
          </p>
        </div>

        {/* 4 Service Cards with transform-based hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="service-card group relative p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.07] hover:border-white/20 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 overflow-hidden"
              >
                {/* Glow accent */}
                <div
                  className={`absolute -right-16 -top-16 w-44 h-44 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 pointer-events-none`}
                />

                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-cyan-300 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-white/[0.04] text-neutral-400 border border-white/5">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-cyan-400" />
                </h3>

                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] text-neutral-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
