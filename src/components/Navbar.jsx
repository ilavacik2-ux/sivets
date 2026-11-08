import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenBirthday }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Курс', href: '#course' },
    { label: 'Лекции', href: '#lectures' },
    { label: 'Видео', href: '#videos' },
    { label: 'SLUU', href: '#sluu' },
    { label: 'Аутлет', href: '#outlet' },
    { label: 'Сотрудничество', href: '#cooperation' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-6 py-3.5 flex items-center justify-between ${
          scrolled
            ? 'glass-pill shadow-lg shadow-black/5 border border-white/80'
            : 'bg-white/40 backdrop-blur-md border border-white/40'
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2 text-sm tracking-[0.2em] uppercase font-semibold text-neutral-900 transition-opacity hover:opacity-80"
        >
          <span className="w-2 h-2 rounded-full bg-[#f878b3] group-hover:scale-125 transition-transform" />
          <span>НАСТЯ СИВЕЦ</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wider text-neutral-700 uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#f878b3] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button: Birthday Trigger / Gift Mode */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBirthday}
            className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#f878b3]/15 text-[#141313] border border-[#f878b3]/30 hover:bg-[#f878b3] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
            title="Особый подарок к 14 ноября"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#f878b3] group-hover:text-white transition-colors animate-pulse" />
            <span className="hidden sm:inline">14 Ноября</span>
            <span className="sm:hidden">14.11</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-800 hover:text-black"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto glass-panel rounded-3xl p-6 shadow-xl border border-white/80 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider text-neutral-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-black/5 hover:text-[#f878b3] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBirthday();
              }}
              className="mt-2 w-full py-2.5 rounded-full bg-[#f878b3] text-black font-semibold text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Секретный сюрприз (14 ноября)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
