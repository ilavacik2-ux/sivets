import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('persona');

  const navLinks = [
    { id: 'persona', label: 'О Насте', href: '#persona' },
    { id: 'sluu', label: 'SLUU', href: '#sluu' },
    { id: 'course', label: 'Курс', href: '#course' },
    { id: 'videos', label: 'Видео', href: '#videos' },
    { id: 'cooperation', label: 'Контакты', href: '#cooperation' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 280;
      let currentSection = 'persona';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = link.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 px-4 sm:px-5 py-2 flex items-center justify-between gap-3 border ${
          scrolled
            ? 'bg-white/92 backdrop-blur-2xl border-stone-200/90 shadow-[0_12px_40px_-10px_rgba(28,25,23,0.08)]'
            : 'bg-[#FAF8F5]/85 backdrop-blur-xl border-stone-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
        }`}
      >
        {/* Brand Typographic Monogram with Nastya's Portrait Avatar */}
        <a
          href="#"
          onClick={() => {
            soundEngine.playChime(784, 0.8);
          }}
          className="group flex items-center gap-2.5 shrink-0 whitespace-nowrap font-serif tracking-[0.14em] uppercase text-stone-900 transition-opacity hover:opacity-85 pl-1"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-stone-300/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 bg-stone-100 shrink-0">
            <img
              src="/favicon.png"
              alt="Настя Сивец"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/5" />
          </div>

          <span className="font-serif font-medium text-stone-900 tracking-[0.14em] text-sm lg:text-base whitespace-nowrap">
            НАСТЯ СИВЕЦ
          </span>
        </a>

        {/* Desktop Nav Links with Tactile Pill Hover */}
        <div className="hidden lg:flex items-center gap-1 lg:gap-1.5 text-xs lg:text-[13px] font-sans tracking-[0.06em] uppercase font-medium bg-stone-100/80 p-1 rounded-full border border-stone-200/70 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => soundEngine.playClick()}
                className={`transition-all duration-300 px-3 lg:px-4 py-2 rounded-full text-center relative whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-stone-900 text-white font-semibold shadow-xs'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-white/90'
                }`}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right Action / Mobile Toggle */}
        <div className="flex items-center gap-2 pr-0.5 shrink-0">
          <a
            href="#cooperation"
            onClick={() => soundEngine.playClick()}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs lg:text-[13px] font-sans font-medium uppercase tracking-[0.08em] px-4 lg:px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95 group whitespace-nowrap shrink-0"
          >
            <span>Сотрудничество</span>
            <ArrowUpRight className="w-4 h-4 text-[#f878b3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Меню навигации"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 p-6 rounded-3xl bg-white/98 backdrop-blur-2xl border border-stone-200 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-[10px] font-sans font-medium uppercase tracking-[0.18em] text-stone-400 pb-2 border-b border-stone-100">
            НАВИГАЦИЯ
          </div>

          <div className="grid grid-cols-1 gap-1 text-xs font-sans font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  soundEngine.playClick();
                  setMobileMenuOpen(false);
                }}
                className={`py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-stone-900 text-white'
                    : 'hover:bg-stone-50 text-stone-700 hover:text-stone-900'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
