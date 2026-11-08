import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenOffer }) {
  const { legal } = SITE_DATA;

  const scrollToTop = () => {
    soundEngine.playChime(784, 1.0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-28 border-t border-stone-200/80 py-16 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto text-xs text-stone-500 font-light">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
        <div>
          <div className="font-mono text-xs font-semibold text-stone-900 tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f878b3]" />
            <span>{legal.entity}</span>
          </div>
          <div className="font-mono text-[11px] text-stone-500 space-y-1">
            <div>ИНН: {legal.inn}</div>
            <div>
              Email:{' '}
              <a
                href={`mailto:${legal.email}`}
                className="text-stone-800 hover:text-[#e8559a] transition-colors underline underline-offset-2"
              >
                {legal.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://t.me/parfoutlet"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="text-stone-600 hover:text-[#e8559a] underline underline-offset-4 transition-colors font-mono text-[11px] uppercase tracking-wider inline-flex items-center gap-1"
          >
            <span>Парфюмерный аутлет</span>
            <ArrowUpRight className="w-3 h-3 text-stone-400" />
          </a>

          <button
            onClick={() => {
              soundEngine.playClick();
              if (onOpenOffer) onOpenOffer();
            }}
            className="text-stone-600 hover:text-stone-900 underline underline-offset-4 transition-colors font-mono text-[11px] uppercase tracking-wider cursor-pointer"
          >
            Публичная оферта
          </button>

          <button
            onClick={scrollToTop}
            className="editorial-btn-light flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer shadow-2xs"
            aria-label="Вернуться в начало"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#e8559a]" />
            <span>Наверх</span>
          </button>
        </div>
      </div>

      {/* Legal Footnote & Disclaimer */}
      <div className="pt-6 border-t border-stone-200/50 space-y-3 text-[10px] sm:text-[11px] font-sans text-stone-400">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>&copy; {new Date().getFullYear()} Настя Сивец. Все права защищены.</div>
          <div className="flex items-center gap-2 text-stone-500 font-sans text-[11px]">
            <span>НАСТЯ СИВЕЦ</span>
            <span>&bull;</span>
            <span>SLUU AROMATHERAPY</span>
          </div>
        </div>

        <p className="text-[10px] text-stone-400 font-light leading-relaxed max-w-4xl">
          * Деятельность организации Meta Platforms Inc. (включая социальную сеть Instagram) признана экстремистской и запрещена на территории Российской Федерации. Все платежи на сайте обрабатываются через защищенный платежный шлюз с шифрованием данных по стандарту PCI DSS.
        </p>
      </div>
    </footer>
  );
}
