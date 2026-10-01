import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Compass, Cpu, Activity } from 'lucide-react';
import ScrollVisual from './ScrollVisual';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const sectionRef = useRef(null);
  const visualWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop layout (> 768px)
      mm.add(
        {
          isDesktop: '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
          isMobile: '(max-width: 768px) and (prefers-reduced-motion: no-preference)',
          isReduced: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, isMobile, isReduced } = context.conditions;

          if (isReduced) {
            // Simplified scroll behavior for reduced motion
            gsap.to('.scroll-visual', {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
              },
              opacity: 0.8,
              scale: 1,
            });
            return;
          }

          // Responsive animation coordinates
          const xPhase1 = isDesktop ? 220 : 40;
          const xPhase2 = isDesktop ? -230 : -45;
          const yPhase1 = isDesktop ? -20 : -15;
          const yPhase2 = isDesktop ? 30 : 20;
          const yPhase3 = isDesktop ? 130 : 70;

          // Main ScrollTrigger Timeline pinned to scroll
          const mainTl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '+=240%',
              scrub: 1.2, // buttery smooth scrub physics
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Parallax background items
          mainTl.to(
            '.parallax-blob-1',
            {
              y: -180,
              x: 60,
              scale: 1.2,
              ease: 'none',
            },
            0
          );

          mainTl.to(
            '.parallax-blob-2',
            {
              y: 150,
              x: -70,
              scale: 0.9,
              ease: 'none',
            },
            0
          );

          mainTl.to(
            '.parallax-ring',
            {
              rotate: 180,
              y: -90,
              ease: 'none',
            },
            0
          );

          mainTl.to(
            '.parallax-grid',
            {
              y: -100,
              ease: 'none',
            },
            0
          );

          // -------------------------------------------------------------
          // STAGE 0 -> STAGE 1 (0% to ~33%):
          // Visual translates to the right, slight rotation, scale increases
          // -------------------------------------------------------------
          mainTl
            .to(
              '.scroll-visual',
              {
                x: xPhase1,
                y: yPhase1,
                scale: isDesktop ? 1.15 : 1.06,
                rotation: 16,
                transformPerspective: 1000,
                rotateY: 18,
                ease: 'power1.inOut',
              },
              0
            )
            .to(
              '.phase-card-1',
              {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: 'power2.out',
              },
              0.05
            )
            .to(
              '.phase-card-1',
              {
                opacity: 0,
                y: -25,
                scale: 0.95,
                ease: 'power2.in',
              },
              0.3
            );

          // -------------------------------------------------------------
          // STAGE 1 -> STAGE 2 (~33% to ~68%):
          // Visual moves horizontally across to left, rotation increases, subtle floating
          // -------------------------------------------------------------
          mainTl
            .to(
              '.scroll-visual',
              {
                x: xPhase2,
                y: yPhase2,
                scale: isDesktop ? 1.25 : 1.12,
                rotation: -20,
                transformPerspective: 1000,
                rotateY: -25,
                ease: 'power1.inOut',
              },
              0.35
            )
            .to(
              '.phase-card-2',
              {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: 'power2.out',
              },
              0.38
            )
            .to(
              '.phase-card-2',
              {
                opacity: 0,
                y: -25,
                scale: 0.95,
                ease: 'power2.in',
              },
              0.65
            );

          // -------------------------------------------------------------
          // STAGE 2 -> STAGE 3 (~68% to 100%):
          // Visual moves toward next section, scale changes, rotation completes, opacity gently fades
          // -------------------------------------------------------------
          mainTl
            .to(
              '.scroll-visual',
              {
                x: 0,
                y: yPhase3,
                scale: 0.92,
                rotation: 45,
                transformPerspective: 1000,
                rotateY: 0,
                opacity: 0.45,
                ease: 'power1.inOut',
              },
              0.7
            )
            .to(
              '.phase-card-3',
              {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: 'power2.out',
              },
              0.72
            );
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="scroll-area"
      className="scroll-animation-section relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#07070b]"
      aria-label="Scroll Driven Interactive Visual Area"
    >
      {/* Background Parallax Elements */}
      <div className="parallax-grid absolute inset-0 bg-cyber-grid opacity-35 pointer-events-none" />

      {/* Parallax Gradient Blobs */}
      <div className="parallax-blob-1 absolute top-10 left-[15%] w-96 h-96 rounded-full bg-gradient-to-br from-indigo-700/25 via-purple-600/20 to-transparent blur-[100px] pointer-events-none" />
      <div className="parallax-blob-2 absolute bottom-12 right-[15%] w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-cyan-600/20 via-blue-600/15 to-transparent blur-[110px] pointer-events-none" />

      {/* Decorative Parallax Gyro Rings */}
      <div className="parallax-ring absolute w-[650px] h-[650px] rounded-full border border-white/[0.04] pointer-events-none opacity-40" />
      <div className="parallax-ring absolute w-[880px] h-[880px] rounded-full border border-purple-500/[0.05] pointer-events-none opacity-30" />

      {/* Section Header / Telemetry Bar (Pinned at top of screen) */}
      <div className="absolute top-20 sm:top-24 left-0 right-0 z-20 px-6 sm:px-12 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
            Interactive Kinematics // Real-time Scroll Response
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-neutral-500">
          <span>GSAP.SCROLLTRIGGER</span>
          <span>•</span>
          <span>PINNED TIMELINE</span>
          <span>•</span>
          <span>SCRUB 1.2S</span>
        </div>
      </div>

      {/* Main Interactive Stage Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[500px]">
        {/* The Central Visual with class .scroll-visual */}
        <div
          ref={visualWrapperRef}
          className="relative z-10 flex items-center justify-center transform-gpu"
        >
          <ScrollVisual />
        </div>

        {/* Phase Narrative Cards (Revealed progressively on scroll) */}
        {/* Phase Card 1: Left on desktop, Top on mobile */}
        <div className="phase-card-1 absolute left-4 sm:left-10 lg:left-16 max-w-xs sm:max-w-sm p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 opacity-0 translate-y-8 pointer-events-none z-20 shadow-2xl">
          <div className="flex items-center gap-2 text-cyan-400 mb-2">
            <Layers className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">
              Stage 01 // Genesis
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
            Kinematic Scroll Binding
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
            The visual directly reacts to user scroll velocity and displacement without artificial playbacks.
          </p>
        </div>

        {/* Phase Card 2: Right on desktop, Bottom on mobile */}
        <div className="phase-card-2 absolute right-4 sm:right-10 lg:right-16 max-w-xs sm:max-w-sm p-4 sm:p-5 rounded-2xl glass-panel-glow border border-purple-500/30 opacity-0 translate-y-8 pointer-events-none z-20 shadow-2xl">
          <div className="flex items-center gap-2 text-purple-400 mb-2">
            <Compass className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">
              Stage 02 // Spatial Orbit
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
            Dynamic 3D Trajectory
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
            Smoothly interpolating isometric angles and scale harmonics across the entire viewport coordinates.
          </p>
        </div>

        {/* Phase Card 3: Bottom Center */}
        <div className="phase-card-3 absolute bottom-8 sm:bottom-12 max-w-md text-center p-4 sm:p-5 rounded-2xl glass-panel border border-cyan-500/20 opacity-0 translate-y-8 pointer-events-none z-20 shadow-2xl">
          <div className="inline-flex items-center gap-2 text-cyan-300 mb-1.5">
            <Activity className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">
              Stage 03 // Convergence
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
            Seamless Section Handoff
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
            Gliding into foundational agency capabilities with zero layout shifts and uncompromised 60FPS precision.
          </p>
        </div>
      </div>

      {/* Progress Telemetry Indicator Bar at bottom */}
      <div className="absolute bottom-4 left-6 right-6 sm:left-12 sm:right-12 z-20 flex items-center justify-between text-[10px] font-mono text-neutral-500 pointer-events-none">
        <span>00% START</span>
        <div className="h-[1px] flex-1 mx-4 bg-white/10 relative">
          <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-purple-500 to-cyan-400" />
        </div>
        <span>100% COMPLETE</span>
      </div>
    </section>
  );
}
