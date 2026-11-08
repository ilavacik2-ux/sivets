import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Navbar({ onOpenBirthday }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { id: 'pyramid', label: 'Лаборатория', href: '#pyramid' },
    { id: 'course', label: 'Курс', href: '#course' },
    { id: 'lectures', label: 'Архив & Мерч', href: '#lectures' },
    { id: 'videos', label: 'Видео', href: '#videos' },
    { id: 'sluu', label: 'SLUU', href: '#sluu' },
    { id: 'outlet', label: 'Аутлет', href: '#outlet' },
    { id: 'cooperation', label: 'PR & Контакты', href: '#cooperation' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect current section
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
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#121015]/90 backdrop-blur-2xl border-white/15 shadow-2xl shadow-black/80'
            : 'bg-[#121015]/45 backdrop-blur-xl border-white/10'
        }`}
      >
        {/* Brand Monogram */}
        <a
          href="#"
          onClick={() => soundEngine.playClick()}
          className="group flex items-center gap-3 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium text-white transition-opacity hover:opacity-90"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f878b3] group-hover:scale-125 transition-transform" />
            <span className="absolute w-5 h-5 rounded-full bg-[#f878b3]/30 animate-ping" />
          </div>
          <div>
            <span className="font-semibold tracking-[0.2em]">НАСТЯ СИВЕЦ</span>
            <span className="hidden xl:inline text-[10px] text-neutral-400 font-light ml-2 tracking-widest border-l border-white/20 pl-2">
              PARFUMERIE NOUVELLE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 text-[11px] font-medium tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => soundEngine.playClick()}
                className={`transition-colors relative py-1 ${
                  isActive ? 'text-[#f878b3] font-semibold' : 'text-neutral-300 hover:text-white'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#f878b3] transition-all duration-300 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Actions: Sound Engine + Birthday Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Soundscape Ambient Button */}
          <button
            onClick={handleToggleSound}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase border transition-all cursor-pointer ${
              soundActive
                ? 'bg-[#f878b3]/20 text-[#f878b3] border-[#f878b3]/40 shadow-[0_0_15px_rgba(248,120,179,0.3)]'
                : 'bg-white/5 text-neutral-400 hover:text-white border-white/10 hover:border-white/25'
            }`}
            title={soundActive ? 'Отключить медитативный саундскейп' : 'Включить медитативный саундскейп'}
          >
            {soundActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#f878b3]" />
                <span className="hidden sm:inline">Звук: Вкл</span>
                <span className="flex items-end gap-0.5 h-3 ml-0.5">
                  <span className="w-0.5 h-full bg-[#f878b3] animate-pulse" />
                  <span className="w-0.5 h-2 bg-[#f878b3] animate-pulse delay-75" />
                  <span className="w-0.5 h-2.5 bg-[#f878b3] animate-pulse delay-150" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden sm:inline">Саундскейп</span>
              </>
            )}
          </button>

          {/* Birthday Special Pill */}
          <button
            onClick={() => {
              soundEngine.playChime(587, 1.5);
              onOpenBirthday();
            }}
            className="group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] font-semibold bg-gradient-to-r from-[#f878b3]/25 to-[#e5c18a]/25 text-white border border-[#f878b3]/40 hover:border-[#f878b3] hover:shadow-[0_0_20px_rgba(248,120,179,0.4)] transition-all duration-300 cursor-pointer"
            title="Капсула 14 Ноября"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#f878b3] group-hover:rotate-45 transition-transform" />
            <span className="hidden sm:inline tracking-wider">14 Ноября</span>
            <span className="sm:hidden font-mono">14.11</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-neutral-300 hover:text-white cursor-pointer"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto glass-luxury rounded-3xl p-6 shadow-2xl border border-white/15 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 text-xs uppercase tracking-widest text-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  soundEngine.playClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between py-2.5 border-b border-white/5 hover:text-[#f878b3] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                soundEngine.playChime(587, 1.5);
                onOpenBirthday();
              }}
              className="mt-3 w-full py-3 rounded-full btn-glow-rose text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Капсула ко Дню Рождения (14 ноября)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
