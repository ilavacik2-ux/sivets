import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { id: 'persona', label: 'О Насте', href: '#persona' },
    { id: 'course', label: 'Курс', href: '#course' },
    { id: 'videos', label: 'Видео', href: '#videos' },
    { id: 'sluu', label: 'SLUU', href: '#sluu' },
    { id: 'outlet', label: 'Аутлет', href: '#outlet' },
    { id: 'cooperation', label: 'Контакты', href: '#cooperation' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 250;
      let currentSection = '';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = link.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-6 sm:px-8 py-3.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-stone-200/90 shadow-md shadow-stone-900/5'
            : 'bg-white/80 backdrop-blur-xl border-stone-200/60 shadow-2xs'
        }`}
      >
        {/* Brand Typographic Monogram */}
        <a
          href="#"
          onClick={() => soundEngine.playClick()}
          className="group flex items-center gap-2.5 text-xs sm:text-sm tracking-[0.22em] uppercase font-medium text-stone-900 transition-opacity hover:opacity-80"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#f878b3]" />
          <span className="font-semibold text-stone-900">NASTYA SIVETS</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-[12px] font-sans font-medium tracking-[0.12em] uppercase text-stone-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => soundEngine.playClick()}
                className={`transition-colors py-1 relative ${
                  isActive ? 'text-[#e8559a] font-semibold' : 'hover:text-stone-900'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right Action / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#cooperation"
            onClick={() => soundEngine.playClick()}
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.14em] px-4 py-1.5 rounded-full border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-400 bg-white transition-all"
          >
            Связаться
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Меню навигации"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 p-6 rounded-3xl bg-white/98 backdrop-blur-2xl border border-stone-200 shadow-xl space-y-3">
          <div className="text-[10px] font-sans font-medium uppercase tracking-[0.18em] text-stone-400 pb-2 border-b border-stone-100">
            НАВИГАЦИЯ
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs font-sans font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  soundEngine.playClick();
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 px-3 rounded-xl hover:bg-stone-50 text-stone-700 hover:text-stone-900 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-300" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
