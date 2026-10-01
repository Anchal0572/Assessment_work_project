import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import HeroStats from './HeroStats';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const heroRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          noPreference: '(prefers-reduced-motion: no-preference)',
          reduced: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduced } = context.conditions;

          if (reduced) {
            gsap.to(
              [
                '.hero-eyebrow',
                '.hero-char',
                '.hero-supporting',
                '.hero-visual-badge',
                '.hero-stat-card',
                '.hero-scroll-indicator',
              ],
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.04,
              }
            );
            return;
          }

          // Full cinematic entrance timeline
          const tl = gsap.timeline({
            defaults: { ease: 'power3.out' },
          });

          // 1. Eyebrow text fade-in
          tl.fromTo(
            '.hero-eyebrow',
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.7, delay: 0.15 }
          );

          // 2. Headline staggered reveal
          tl.fromTo(
            '.hero-char',
            { opacity: 0, y: 35, rotateX: -45 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.7,
              stagger: 0.035,
              ease: 'back.out(1.4)',
            },
            '-=0.4'
          );

          // 3. Supporting text reveals
          tl.fromTo(
            '.hero-supporting',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7 },
            '-=0.3'
          );

          // 4. Hero Visual Badge enters with subtle scale + opacity
          tl.fromTo(
            '.hero-visual-badge',
            { opacity: 0, scale: 0.85, y: 15 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            '-=0.4'
          );

          // 5. Statistics appear one by one
          tl.fromTo(
            '.hero-stat-card',
            { opacity: 0, y: 25, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.12,
            },
            '-=0.3'
          );

          // 6. Scroll indicator appears
          tl.fromTo(
            '.hero-scroll-indicator',
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.2'
          );

          // Scroll indicator subtle idle bounce
          gsap.to('.hero-scroll-arrow', {
            y: 5,
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: 'power1.inOut',
          });

          // Fade out scroll indicator as soon as user starts scrolling
          ScrollTrigger.create({
            trigger: heroRef.current,
            start: 'top top',
            end: '+=180',
            onUpdate: (self) => {
              if (scrollIndicatorRef.current) {
                gsap.to(scrollIndicatorRef.current, {
                  opacity: Math.max(0, 1 - self.progress * 2.5),
                  overwrite: 'auto',
                  duration: 0.2,
                });
              }
            },
          });
        }
      );
    },
    { scope: heroRef }
  );

  const headlineWords = ['WELCOME', 'ITZFIZZ'];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cyber-grid bg-radial-vignette"
      aria-label="Hero Section"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto w-full text-center relative z-10 my-auto">
        {/* Eyebrow text */}
        <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-5 sm:mb-7 opacity-0">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-300">
            Creative Digital Engineering & Innovation
          </span>
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        </div>

        {/* Large Headline with strong letter spacing: W E L C O M E   I T Z F I Z Z */}
        <h1
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.16em] sm:tracking-[0.22em] text-white leading-tight uppercase select-none flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6"
          aria-label="WELCOME ITZFIZZ"
        >
          {headlineWords.map((word, wIdx) => (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              {word.split('').map((char, cIdx) => (
                <span
                  key={cIdx}
                  className={`hero-char inline-block opacity-0 transform-gpu transition-colors duration-200 hover:text-cyan-300 ${
                    wIdx === 1
                      ? 'bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent'
                      : 'text-white'
                  }`}
                  style={{ marginRight: '0.04em' }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Supporting copy */}
        <p className="hero-supporting text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mt-5 sm:mt-6 font-light tracking-wide opacity-0 leading-relaxed">
          Digital experiences built for brands that want to move forward.
        </p>

        {/* Futuristic Interactive Emblem / Preview Visual */}
        <div className="hero-visual-badge my-4 sm:my-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md opacity-0">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-spin-slow" />
          <span className="text-xs font-mono text-neutral-300 tracking-wider">
            SCROLL-CONTROLLED 3D KINEMATICS ACTIVE
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
            GSAP v3
          </span>
        </div>

        {/* Hero Statistics */}
        <HeroStats />
      </div>

      {/* Subtle Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="hero-scroll-indicator relative z-10 flex flex-col items-center justify-center gap-2 pt-4 opacity-0"
      >
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-neutral-400">
          Scroll To Explore
        </span>
        <div className="hero-scroll-arrow w-7 h-11 rounded-full border border-white/20 flex items-start justify-center p-1.5 bg-white/[0.02] backdrop-blur-sm">
          <div className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 animate-pulse" />
        </div>
        <ChevronDown className="w-4 h-4 text-neutral-400 -mt-1" />
      </div>
    </section>
  );
}
