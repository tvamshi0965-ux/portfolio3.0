import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

/**
 * CharacterHero: Displays the 3D character on the right side of hero section.
 * Features:
 * - High-res transparent cutout and studio backlit visual
 * - Subtle floating breathing animation
 * - 3D parallax tilt following mouse cursor
 * - Realistic cinematic dark navy & turquoise backlight
 * - Glowing outline (neon rim light)
 * - Video fallback layer with autoplay/loop/muted/playsInline
 */
const CharacterHero = () => {
  const [activeVisualMode, setActiveVisualMode] = useState('cinematic'); // 'cinematic' | 'hologram' | 'matrix'
  const cardRef = useRef(null);

  // Mouse tilt physics using Framer Motion springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const lightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, 80]), springConfig);
  const lightY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, 80]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg lg:max-w-xl mx-auto flex flex-col items-center justify-start select-none pt-0 lg:-mt-1"
      style={{ perspective: 1200 }}
    >
      {/* 1. Deep Navy & Turquoise Cinematic Backlight Radial Bloom */}
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none transform translate-x-10 -translate-y-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-[320px] h-[320px] rounded-full bg-blue-900/35 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[280px] h-[180px] rounded-full bg-cyan-400/20 blur-[80px] pointer-events-none" />

      {/* 2. Floating 3D Character Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        {/* Subtle Cyber Target Ring behind character */}
        <div className="absolute top-4 w-72 h-72 rounded-full border border-teal-500/20 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />
        <div className="absolute top-10 w-56 h-56 rounded-full border border-cyan-400/15 pointer-events-none" />

        {/* Cinematic Backlight Glow Disc */}
        <div className="absolute top-6 w-80 h-96 rounded-full bg-gradient-to-b from-teal-400/20 via-blue-900/30 to-transparent blur-3xl pointer-events-none" />

        {/* Character Image / Video wrapper */}
        <div className="relative overflow-visible group">
          {/* Neon rim glow layer */}
          <div
            className="absolute inset-0 z-0 pointer-events-none transition-all duration-700"
            style={{
              filter:
                activeVisualMode === 'hologram'
                  ? 'drop-shadow(0 0 35px rgba(45, 212, 191, 0.75))'
                  : 'drop-shadow(0 0 24px rgba(20, 184, 166, 0.45)) drop-shadow(0 0 55px rgba(15, 23, 42, 0.8))',
            }}
          />

          {/* Primary 3D Character Picture */}
          <picture className="relative z-10 block">
            {/* Transparent Cutout with clean bottom fade */}
            <img
              src="/character-transparent.png"
              alt="T. Vamshi Portrait"
              className={`w-full max-h-[580px] sm:max-h-[640px] object-contain object-top transition-all duration-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] ${
                activeVisualMode === 'hologram'
                  ? 'brightness-110 contrast-125 hue-rotate-15 filter saturate-150'
                  : activeVisualMode === 'matrix'
                  ? 'filter contrast-150 saturate-50'
                  : 'brightness-105'
              }`}
              style={{
                // Mask the bottom slightly so it fades seamlessly towards the wave level
                maskImage: 'linear-gradient(to bottom, black 82%, transparent 98%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 98%)',
                filter: 'drop-shadow(0 0 20px rgba(45, 212, 191, 0.35)) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8))',
              }}
              onError={(e) => {
                // Fallback to 3D.png if transparent cutout has any issue
                e.currentTarget.src = '/3D.png';
              }}
            />
          </picture>

          {/* Holographic Scanline Overlay if in Hologram mode */}
          {activeVisualMode === 'hologram' && (
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(45,212,191,0.06)_1px,transparent_1px)] bg-[size:100%_4px] mix-blend-overlay z-20" />
          )}

          {/* Floating Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-2 -left-3 sm:left-4 z-30 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-teal-500/40 shadow-[0_0_20px_rgba(20,184,166,0.3)] text-xs font-mono text-teal-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span>AI & Full-Stack Core</span>
          </motion.div>

          {/* LeetCode / Coding Stat Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute top-16 -right-2 sm:right-2 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-950/85 backdrop-blur-md border border-teal-500/30 text-xs text-gray-300 shadow-xl"
          >
            <Zap className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-[11px] font-mono">B.Tech CSE '27</span>
          </motion.div>
        </div>

        {/* Visual Mode Selector Pills */}
        <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-gray-800 text-[11px] font-mono text-gray-400 z-20">
          <span className="text-gray-500 text-[10px] uppercase tracking-wider">Aura:</span>
          <button
            onClick={() => setActiveVisualMode('cinematic')}
            className={`px-2.5 py-0.5 rounded-full transition-all ${
              activeVisualMode === 'cinematic'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-[0_0_10px_rgba(45,212,191,0.3)]'
                : 'hover:text-gray-200'
            }`}
          >
            Cinematic
          </button>
          <button
            onClick={() => setActiveVisualMode('hologram')}
            className={`px-2.5 py-0.5 rounded-full transition-all ${
              activeVisualMode === 'hologram'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-[0_0_10px_rgba(45,212,191,0.3)]'
                : 'hover:text-gray-200'
            }`}
          >
            Hologram
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CharacterHero;
