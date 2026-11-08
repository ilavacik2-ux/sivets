import React from 'react';
import { SITE_DATA } from '../data/content';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { legal } = SITE_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 border-t border-black/10 py-12 px-4 sm:px-8 max-w-6xl mx-auto text-xs text-neutral-600">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <div>
          <div className="font-semibold text-neutral-900 tracking-wider uppercase mb-1">
            {legal.entity}
          </div>
          <div>ИНН: {legal.inn}</div>
          <div>Email: <a href={`mailto:${legal.email}`} className="underline hover:text-black">{legal.email}</a></div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={legal.offerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black underline transition-colors"
          >
            Публичная оферта
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-full bg-white/70 hover:bg-white border border-white/80 text-neutral-800 transition-all hover:-translate-y-0.5 shadow-sm cursor-pointer"
            aria-label="Наверх"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-wider font-semibold">Наверх</span>
          </button>
        </div>
      </div>

      <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
        <div>&copy; {new Date().getFullYear()} Настя Сивец. Все права защищены.</div>
        <div>Парфюмерный исследователь &bull; SLUU Aromatherapy</div>
      </div>
    </footer>
  );
}
