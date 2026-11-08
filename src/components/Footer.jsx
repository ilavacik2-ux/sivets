import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { legal } = SITE_DATA;

  const scrollToTop = () => {
    soundEngine.playChime(784, 1.0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-stone-200/80 py-16 px-4 sm:px-8 max-w-6xl mx-auto text-xs text-stone-500 font-light">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
        <div>
          <div className="font-mono text-xs font-semibold text-stone-900 tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f878b3]" />
            <span>{legal.entity}</span>
          </div>
          <div className="font-mono text-[11px] text-stone-500 space-y-0.5">
            <div>ИНН: {legal.inn}</div>
            <div>
              Email:{' '}
              <a href={`mailto:${legal.email}`} className="text-stone-800 hover:text-[#e8559a] transition-colors underline">
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
            className="text-stone-600 hover:text-stone-900 underline underline-offset-4 transition-colors font-mono text-[11px] uppercase tracking-wider"
          >
            Публичная оферта
          </a>

          <button
            onClick={scrollToTop}
            className="btn-luxury-glass flex items-center gap-2 px-4 py-2.5 rounded-full text-stone-800 text-[11px] font-mono uppercase tracking-widest cursor-pointer shadow-xs hover:border-[#f878b3] hover:text-[#e8559a]"
            aria-label="Вернуться наверх"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#e8559a]" />
            <span>Наверх</span>
          </button>
        </div>
      </div>

      <div className="pt-8 border-t border-stone-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-400">
        <div>&copy; {new Date().getFullYear()} Настя Сивец. Все права защищены.</div>
        <div className="flex items-center gap-2 text-stone-500">
          <span>ОЛЬФАКТОРНОЕ ИСКУССТВО</span>
          <span>&bull;</span>
          <span>SLUU AROMATHERAPY</span>
        </div>
      </div>
    </footer>
  );
}
