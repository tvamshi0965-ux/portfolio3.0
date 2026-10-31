import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-teal-500/15 py-12 text-gray-400 text-sm overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center font-serif text-teal-300 font-bold text-sm">
            TV
          </div>
          <div>
            <span className="font-serif text-white font-semibold text-base tracking-wide">T. VAMSHI</span>
            <p className="text-xs text-gray-500 font-mono">Full-Stack & AI Engineering</p>
          </div>
        </div>

        {/* Center: Social & Contact Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-teal-500/20 hover:text-teal-300 border border-white/5 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-teal-500/20 hover:text-teal-300 border border-white/5 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:tvamshi2007@gmail.com"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-teal-500/20 hover:text-teal-300 border border-white/5 transition-all"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top & copyright */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-500 font-mono text-center md:text-right">
            © {new Date().getFullYear()} T. Vamshi. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-300 transition-all hover:scale-105"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
