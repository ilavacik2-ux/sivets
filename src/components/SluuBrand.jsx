import React from 'react';
import { SITE_DATA } from '../data/content';
import { Sparkles, ArrowUpRight, Flame, ShoppingBag } from 'lucide-react';

export default function SluuBrand() {
  const { sluuBrand } = SITE_DATA;

  return (
    <section id="sluu" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      <div className="relative rounded-[3rem] p-8 sm:p-14 glass-panel-dark text-white overflow-hidden shadow-2xl border border-white/10">
        {/* Ambient background glow inside dark card */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#f878b3]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#f878b3]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Brand Info */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-widest text-[#f878b3] mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>Создано Настей Сивец</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white mb-4">
              SLUU <span className="italic font-light text-neutral-300">Aromatherapy</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light max-w-xl mb-8">
              {sluuBrand.description} Эфирные композиции, интерьерные диффузоры и свечи, созданные для глубокого расслабления и эстетики каждого дня.
            </p>

            {/* Quick value badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
                100% натуральные масла
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
                Нишевые профили ароматов
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
                Собственное производство
              </span>
            </div>

            {/* Main store button */}
            <a
              href={sluuBrand.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pink py-3.5 px-8 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Перейти в магазин sluu.club</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Marketplaces Card Stack */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
              Заказать на маркетплейсах
            </div>

            {/* Ozon */}
            <a
              href={sluuBrand.links[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all hover:-translate-y-1 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={sluuBrand.links[1].logo}
                    alt="Ozon"
                    loading="lazy"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#f878b3] transition-colors">
                    SLUU на Ozon
                  </div>
                  <div className="text-xs text-neutral-400">Быстрая доставка по всей России</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </a>

            {/* Wildberries */}
            <a
              href={sluuBrand.links[2].url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all hover:-translate-y-1 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={sluuBrand.links[2].logo}
                    alt="Wildberries"
                    loading="lazy"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#f878b3] transition-colors">
                    SLUU на Wildberries
                  </div>
                  <div className="text-xs text-neutral-400">Фирменный магазин бренда</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
