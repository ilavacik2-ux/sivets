import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const { legal } = SITE_DATA;

  const scrollToTop = () => {
    soundEngine.playChime(784, 1.0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-white/10 py-16 px-4 sm:px-8 max-w-6xl mx-auto text-xs text-neutral-400 font-light">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
        <div>
          <div className="font-mono text-xs font-semibold text-white tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f878b3]" />
            <span>{legal.entity}</span>
          </div>
          <div className="font-mono text-[11px] text-neutral-400 space-y-0.5">
            <div>ИНН: {legal.inn}</div>
            <div>
              Email:{' '}
              <a href={`mailto:${legal.email}`} className="text-white hover:text-[#f878b3] transition-colors underline">
                {legal.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={legal.offerUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="text-neutral-300 hover:text-white underline underline-offset-4 transition-colors font-mono text-[11px] uppercase tracking-wider"
          >
            Публичная оферта
          </a>

          <button
            onClick={scrollToTop}
            className="btn-luxury-glass flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-[11px] font-mono uppercase tracking-widest cursor-pointer"
            aria-label="Вернуться наверх"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#f878b3]" />
            <span>Наверх</span>
          </button>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
        <div>&copy; {new Date().getFullYear()} Настя Сивец. Все права защищены.</div>
        <div className="flex items-center gap-2 text-neutral-400">
          <span>PARFUMERIE NOUVELLE</span>
          <span>&bull;</span>
          <span>SLUU AROMATHERAPY</span>
        </div>
      </div>
    </footer>
  );
}
