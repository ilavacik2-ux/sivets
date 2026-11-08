import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Cake } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Navbar({ onOpenBirthday }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { id: 'persona', label: '01. Персона', href: '#persona' },
    { id: 'pyramid', label: '02. Атлас нот', href: '#pyramid' },
    { id: 'videos', label: '03. Видео', href: '#videos' },
    { id: 'education', label: '04. Обучение', href: '#education' },
    { id: 'sluu', label: '05. SLUU', href: '#sluu' },
    { id: 'outlet', label: '06. Аутлет', href: '#outlet' },
    { id: 'birthday', label: '07. 14 Ноября', href: '#birthday' },
    { id: 'cooperation', label: '08. PR & Контакты', href: '#cooperation' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const unsubscribe = soundEngine.subscribe((active) => {
      setSoundActive(active);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleToggleSound = () => {
    const active = soundEngine.toggleAmbient();
    setSoundActive(active);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-6 sm:px-8 py-3.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-stone-200/90 shadow-md shadow-stone-900/5'
            : 'bg-white/80 backdrop-blur-xl border-stone-200/60 shadow-2xs'
        }`}
      >
        {/* Brand Typographic Monogram */}
        <a
          href="#"
          onClick={() => soundEngine.playClick()}
          className="group flex items-center gap-2.5 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium text-stone-900 transition-opacity hover:opacity-80"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#f878b3]" />
          <span className="font-semibold tracking-[0.22em] text-stone-900">NASTYA SIVETS</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-5 text-[11px] font-mono tracking-wider uppercase text-stone-600">
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

        {/* Actions: Sound + Birthday Trigger + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider border transition-all cursor-pointer ${
              soundActive
                ? 'bg-[#fdf2f7] text-[#e8559a] border-[#f878b3]/50 shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900 border-stone-200'
            }`}
            title={soundActive ? 'Отключить медитативный саундскейп' : 'Включить медитативный саундскейп'}
          >
            {soundActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#e8559a]" />
                <span className="hidden sm:inline">Звук</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden sm:inline">Звук</span>
              </>
            )}
          </button>

          {/* Birthday Trigger */}
          <button
            onClick={() => {
              soundEngine.playChime(659, 1.4);
              if (onOpenBirthday) onOpenBirthday();
            }}
            className="editorial-btn-dark flex items-center gap-1.5 px-3.5 py-1.5 rounded-full cursor-pointer shadow-xs"
            title="Открыть праздничную капсулу 14 Ноября"
          >
            <Cake className="w-3.5 h-3.5 text-[#f878b3]" />
            <span className="hidden sm:inline">14 Ноября</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-full text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Меню навигации"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden max-w-7xl mx-auto mt-2 p-6 rounded-3xl bg-white/98 backdrop-blur-2xl border border-stone-200 shadow-xl space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-400 pb-2 border-b border-stone-100">
            ОГЛАВЛЕНИЕ АТЛАСА
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono uppercase tracking-wider">
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
