# ITZFIZZ — Scroll-Driven Hero Animation

A modern, high-performance, single-page web application featuring a scroll-driven interactive hero section built for **ITZFIZZ Digital**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-8-646cff.svg)
![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88ce02.svg)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS%20v4-38bdf8.svg)

---

## 📌 Overview

This project was built as part of the **Itzfizz Digital Web Development Internship Assessment**. The core objective is to demonstrate modern frontend engineering, component modularity, fluid responsive UI, and advanced scroll kinematics using **GSAP** and **ScrollTrigger**.

The hero section features a futuristic digital 3D-isometric artifact (`.scroll-visual`) that seamlessly binds to scroll progress rather than playing an autoplay video or looped GIF. As the user navigates down the page, scroll physics dictate rotation, scale, 3D perspective tilt, horizontal displacement, and contextual narrative reveals.

---

## 🚀 Live Demo & Links

- **Live Demo**: [Live Demo](https://chatgpt.com/c/YOUR_DEPLOYED_URL)
- **GitHub Repository**: [GitHub Repository](https://chatgpt.com/c/YOUR_GITHUB_URL)

---

## ✨ Features

- **Scroll-Driven Hero Animation**: The main `.scroll-visual` moves, scales, and rotates in direct response to user scroll progress using GSAP ScrollTrigger `scrub`.
- **GSAP ScrollTrigger**: Pinned timeline architecture (`pin: true`, `scrub: 1.2`) ensuring frame-rate independence and 60FPS fluid motion.
- **Staggered Entrance Choreography**: On page load, the navbar, eyebrow text, headline letters (`WELCOME ITZFIZZ`), supporting text, illustrative metrics, and scroll indicators animate in sequence.
- **Background Parallax Effects**: Multi-layered ambient radiant blobs, circular gyro rings, and cyber grid backgrounds translate at variable depths.
- **Responsive UI Across All Viewports**: Tested and tailored for mobile (320px–425px), tablet (768px), and desktop (1024px–1440px+) screens without horizontal overflow.
- **Accessibility & Reduced Motion**: Automatically detects `prefers-reduced-motion: reduce` via `gsap.matchMedia()` to provide a gentle, non-jarring fallback for sensitive users.
- **Production-Ready Component Architecture**: Clean separation of concerns with dedicated components for Navbar, Hero, Stats, ScrollAnimation, About, Services, Technology, CTA, and Footer.

---

## 🛠️ Tech Stack

- **React 19**: Modern component lifecycle, hooks, and clean state handling.
- **Vite 8**: Ultra-fast next-gen build tool and development server.
- **JavaScript (ES6+)**: Clean, maintainable logic with zero legacy dependencies.
- **GSAP & GSAP ScrollTrigger**: Industry-standard high-performance animation engine.
- **Tailwind CSS v4**: Utility-first styling with custom glow effects, fonts, and dark theme design tokens.
- **Lucide React**: Crisp, modern icon pack.

---

## 📂 Project Architecture

```text
├── index.html                  # SEO metadata, Google Fonts (Syne, Plus Jakarta Sans, Space Grotesk)
├── vite.config.js              # Vite configuration with Tailwind CSS plugin and relative base path
├── package.json                # Project dependencies and build scripts
└── src/
    ├── main.jsx                # Application root mount
    ├── App.jsx                 # Main layout and section assembly
    ├── index.css               # Tailwind setup, custom grid patterns, glow utilities
    └── components/
        ├── Navbar.jsx          # Responsive navbar with logo, nav links, CTA, and mobile drawer
        ├── Hero.jsx            # 100vh hero with staggered WELCOME ITZFIZZ headline & scroll indicator
        ├── HeroStats.jsx       # 3 illustrative performance metrics with entrance stagger
        ├── ScrollVisual.jsx    # Stylized 3D-like digital object (.scroll-visual) built with SVG & gradients
        ├── ScrollAnimation.jsx # Pinned scroll section with scrubbed GSAP timeline and progressive cards
        ├── About.jsx           # Brand narrative and digital experience pillars
        ├── Services.jsx        # 4 service cards with transform-based hover animations
        ├── Technology.jsx      # Tech stack showcase (React, JS, GSAP, Tailwind, WordPress, Shopify)
        ├── CTA.jsx             # Final high-impact call to action ("Let's build something that moves.")
        └── Footer.jsx          # Agency footer with navigation links and back-to-top button
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_GITHUB_URL.git
   cd assessment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production bundle will be generated in the `dist/` directory with zero build errors.

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment

The project is structured with relative paths (`base: './'`) to enable instant one-click deployment on platforms like:
- **Vercel**: Import repository -> Framework preset: Vite -> Deploy.
- **Netlify**: Connect GitHub repository -> Build command: `npm run build` -> Publish directory: `dist`.
- **GitHub Pages**: Deploy contents of `dist` folder.

---

## 📝 Assessment Submission Details

- **Company**: ITZFIZZ Digital
- **Position**: Web Development Internship
- **Role Candidate**: Frontend Developer & UI/UX Engineer
- **Topic**: Scroll-Driven Hero Section Animation
