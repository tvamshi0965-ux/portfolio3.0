import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Moon, Sun, ArrowUpRight, Code2 } from 'lucide-react';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cyberMode, setCyberMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-teal-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Initials / Personal Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="group flex items-center gap-2.5 text-white font-serif text-xl sm:text-2xl font-bold tracking-wider"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-600/10 border border-teal-500/40 group-hover:border-teal-400 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all duration-300">
            <span className="font-serif text-teal-300 group-hover:text-white transition-colors">TV</span>
            {/* Tiny turquoise status indicator */}
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
          </div>
          <span className="hidden sm:inline-block font-sans text-sm tracking-widest text-gray-300 uppercase font-medium group-hover:text-teal-300 transition-colors">
            T. VAMSHI
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-teal-300 transition-all rounded-full hover:bg-teal-500/10 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Theme Toggle & Resume Action */}
        <div className="flex items-center gap-3">
          {/* Animated Cyber/Neon Theme Toggle */}
          <button
            onClick={() => setCyberMode(!cyberMode)}
            aria-label="Toggle Theme Atmosphere"
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-teal-500/30 hover:border-teal-400 text-xs font-mono text-teal-300 transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_20px_rgba(45,212,191,0.35)]"
          >
            {cyberMode ? (
              <>
                <Sparkles className="w-3.5 h-3.5 text-teal-300 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="hidden sm:inline">CYBER</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">DARK</span>
              </>
            )}
          </button>

          {/* Resume Quick Access Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 hover:from-teal-200 hover:to-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:scale-105 active:scale-95"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-teal-300 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-teal-500/20 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-lg font-medium text-gray-200 hover:text-teal-300 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-semibold text-sm uppercase tracking-wider"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
