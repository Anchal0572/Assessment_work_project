import React from 'react';
import { Zap, Award, TrendingUp } from 'lucide-react';

export default function HeroStats() {
  const stats = [
    {
      value: '98%',
      label: 'Performance Index',
      description: 'Lighthouse score & speed benchmark',
      icon: Zap,
      gradient: 'from-cyan-400 to-blue-500',
      glow: 'group-hover:shadow-cyan-500/20',
      badge: 'Speed',
    },
    {
      value: '95%',
      label: 'Client Satisfaction',
      description: 'Brand resonance & UX feedback',
      icon: Award,
      gradient: 'from-purple-400 to-pink-500',
      glow: 'group-hover:shadow-purple-500/20',
      badge: 'Quality',
    },
    {
      value: '90%',
      label: 'Digital Growth',
      description: 'Engagement & conversion lift',
      icon: TrendingUp,
      gradient: 'from-indigo-400 to-cyan-400',
      glow: 'group-hover:shadow-indigo-500/20',
      badge: 'Impact',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-8 sm:mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="hero-stat-card group relative p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 backdrop-blur-md overflow-hidden text-left"
            >
              {/* Subtle top-edge accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4 text-purple-300 group-hover:text-cyan-300 transition-colors" />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/[0.05] text-neutral-400 border border-white/5">
                  {stat.badge}
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span
                  className={`stat-number font-display text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text`}
                >
                  {stat.value}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-neutral-200 mt-1">
                {stat.label}
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-center text-neutral-500 mt-3 font-mono tracking-wider">
        *Illustrative presentation metrics for assessment demonstration
      </p>
    </div>
  );
}
