import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles, ChevronDown } from 'lucide-react';
import CharacterHero from './CharacterHero';
import CyberWave from './CyberWave';

const Hero = ({ onOpenResume }) => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black flex flex-col justify-between pt-24 md:pt-28 lg:pt-32 overflow-hidden"
    >
      {/* Cinematic Background Lighting & Gradients */}
      <div className="absolute inset-0 bg-black pointer-events-none" />
      {/* Subtle deep navy gradient behind the hero */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full bg-[radial-gradient(ellipse_at_70%_35%,rgba(15,23,42,0.65)_0%,rgba(4,20,30,0.4)_45%,transparent_80%)] pointer-events-none" />
      {/* Subtle ambient turquoise glow patch */}
      <div className="absolute top-24 right-1/4 w-[480px] h-[480px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      {/* Faint cyber grid in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start w-full py-8 lg:py-0">
          
          {/* LEFT COLUMN: Introduction Text & Actions (approx 6-7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 lg:pr-8"
          >
            {/* Status / Welcome Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-teal-500/30 backdrop-blur-md w-fit shadow-[0_0_15px_rgba(20,184,166,0.15)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <span className="text-xs uppercase tracking-widest font-mono text-teal-300">
                Available for Engineering Roles
              </span>
            </motion.div>

            {/* Main Heading: HELLO, I'M T. VAMSHI with elegant serif typography */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.08] text-white tracking-tight font-medium"
              >
                HELLO, I'M <br />
                <span className="italic font-normal bg-gradient-to-r from-white via-gray-100 to-teal-200 bg-clip-text text-transparent">
                  T. VAMSHI
                </span>
              </motion.h1>
            </div>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <div className="h-0.5 w-8 bg-teal-400 rounded-full" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-teal-300 tracking-wide font-normal">
                Full-Stack Developer & AI Engineer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-gray-300 text-base sm:text-lg max-w-xl font-light leading-relaxed"
            >
              Crafting digital experiences that inspire and engage through innovative design and cutting-edge technology.
            </motion.p>

            {/* Interactive Call-To-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* View My Work Button */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_28px_rgba(45,212,191,0.6)] hover:scale-105 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-teal-500/40 hover:border-teal-300 font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_25px_rgba(45,212,191,0.3)] hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-teal-300 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Tech stack highlight pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="pt-4 flex items-center gap-6 text-xs text-gray-400 font-mono"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                React + Vite
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Python & AI
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Full-Stack Systems
              </span>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: 3D Character Placement (approx 5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-start relative"
          >
            <CharacterHero />
          </motion.div>

        </div>
      </div>

      {/* Animated Bottom Wave Section (futuristic digital ocean effect) */}
      <div className="relative w-full z-20 mt-4 lg:-mt-10">
        <CyberWave />
      </div>
    </section>
  );
};

export default Hero;
