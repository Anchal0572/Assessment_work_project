import React from 'react';

export default function ScrollVisual() {
  return (
    <div className="scroll-visual relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] flex items-center justify-center select-none pointer-events-none">
      {/* Outer ambient radiant glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/35 to-cyan-500/25 blur-3xl transform scale-110 pointer-events-none" />

      {/* SVG Layer: High-tech 3D Isometric Quantum Monolith & Cyber Rings */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full relative z-10 drop-shadow-[0_0_45px_rgba(139,92,246,0.45)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="grad-core-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="grad-core-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#4f46e5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="grad-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#818cf8" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="grad-facet-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="grad-facet-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="grad-facet-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b0764" stopOpacity="0.95" />
          </linearGradient>

          <radialGradient id="grad-inner-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbit Gyroscope Ring 1 */}
        <ellipse
          cx="250"
          cy="250"
          rx="220"
          ry="110"
          stroke="url(#grad-ring)"
          strokeWidth="1.5"
          strokeDasharray="6 8 20 6"
          className="animate-spin-slow origin-center opacity-70"
        />

        {/* Outer Orbit Gyroscope Ring 2 (tilted opposite) */}
        <g transform="rotate(-40 250 250)">
          <ellipse
            cx="250"
            cy="250"
            rx="205"
            ry="95"
            stroke="url(#grad-core-1)"
            strokeWidth="1.2"
            strokeDasharray="12 10 4 6"
            className="animate-spin-reverse-slow origin-center opacity-60"
          />
        </g>

        {/* Outer Ring 3: Circular Telemetry ticks */}
        <circle
          cx="250"
          cy="250"
          r="170"
          stroke="#4f46e5"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeDasharray="2 14"
        />

        {/* Center Radiant Glow */}
        <circle cx="250" cy="250" r="100" fill="url(#grad-inner-glow)" className="animate-pulse-ring" />

        {/* 3D Isometric Floating Monolith Core */}
        <g id="isometric-monolith" className="origin-center" filter="url(#glow-blur)">
          {/* Top Facet */}
          <polygon
            points="250,140 330,185 250,230 170,185"
            fill="url(#grad-facet-top)"
            stroke="#67e8f9"
            strokeWidth="1.5"
          />

          {/* Left Facet */}
          <polygon
            points="170,185 250,230 250,330 170,285"
            fill="url(#grad-facet-left)"
            stroke="#818cf8"
            strokeWidth="1.5"
          />

          {/* Right Facet */}
          <polygon
            points="250,230 330,185 330,285 250,330"
            fill="url(#grad-facet-right)"
            stroke="#c084fc"
            strokeWidth="1.5"
          />

          {/* Inner Floating Tech Lattice Lines */}
          <line x1="250" y1="185" x2="250" y2="285" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7" />
          <line x1="210" y1="208" x2="290" y2="254" stroke="#67e8f9" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 3" />
          <line x1="290" y1="208" x2="210" y2="254" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 3" />

          {/* Floating Quantum Crystal Core Node */}
          <polygon
            points="250,205 275,220 250,235 225,220"
            fill="#ffffff"
            opacity="0.9"
          />
          <circle cx="250" cy="220" r="4" fill="#06b6d4" />
        </g>

        {/* Orbital Satellite Nodes */}
        <g className="animate-spin-slow origin-center">
          <circle cx="90" cy="250" r="5" fill="#38bdf8" />
          <circle cx="90" cy="250" r="10" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="90" y1="250" x2="140" y2="250" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 4" />

          <circle cx="410" cy="250" r="5" fill="#c084fc" />
          <circle cx="410" cy="250" r="10" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="410" y1="250" x2="360" y2="250" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 4" />
        </g>

        {/* Ambient Telemetry HUD text */}
        <text x="250" y="380" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Space Grotesk, monospace" letterSpacing="4" opacity="0.8">
          [ ITZFIZZ // MOTION CORE v2.4 ]
        </text>
        <text x="250" y="396" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="Space Grotesk, monospace" letterSpacing="2" opacity="0.7">
          SCROLL VELOCITY SENSING ENABLED
        </text>
      </svg>

      {/* Floating HUD Badges around the object */}
      <div className="absolute -top-2 left-6 sm:left-12 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-[10px] font-mono text-cyan-300 tracking-wider">
        SYS.ONLINE // 60FPS
      </div>
      <div className="absolute -bottom-2 right-6 sm:right-12 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-[10px] font-mono text-purple-300 tracking-wider">
        GSAP.TRIGGER // ACTIVE
      </div>
    </div>
  );
}
