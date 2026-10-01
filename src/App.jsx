import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollAnimation from './components/ScrollAnimation';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#08080c] text-white overflow-x-hidden selection:bg-purple-600/40 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Viewport with Welcoming Headline, Eyebrow, Statistics & Indicator */}
        <Hero />

        {/* 2. Dedicated Scroll-Driven Animation Section (GSAP ScrollTrigger scrub) */}
        <ScrollAnimation />

        {/* 3. About ITZFIZZ Section */}
        <About />

        {/* 4. Services / Capabilities Section */}
        <Services />

        {/* 5. Modern Technology Section */}
        <Technology />

        {/* 6. Final Call to Action */}
        <CTA />
      </main>

      {/* Agency Footer */}
      <Footer />
    </div>
  );
}
