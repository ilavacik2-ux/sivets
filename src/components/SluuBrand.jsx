import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Flame, ShoppingBag, ArrowUpRight, Sparkles, Feather, ShieldCheck, Compass, Heart } from 'lucide-react';

export default function SluuBrand() {
  const { sluuBrand } = SITE_DATA;

  return (
    <section id="sluu" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#f878b3] mb-2">
            <Flame className="w-4 h-4 text-[#f878b3]" />
            <span>[ 05 / АВТОРСКИЙ БРЕНД ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            SLUU <span className="italic font-light text-neutral-300">Aromatherapy</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono sm:text-right">
          Создано Настей Сивец &bull; sluu.club
        </div>
      </div>

      {/* Main Brand Pavilion */}
      <div className="relative rounded-[2.5rem] p-8 sm:p-12 lg:p-14 glass-luxury border border-white/15 overflow-hidden shadow-2xl shadow-black mb-10">
        {/* Ambient Candle Fire Glow */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#f878b3]/20 via-[#e5c18a]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Brand Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-mono uppercase tracking-widest text-[#e5c18a] mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#f878b3]" />
              <span>Ритуалы замедления & эстетика дома</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">
              Ароматерапия как искусство заботы о себе
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-xl">
              {sluuBrand.description}
            </p>

            {/* 3 Pillars */}
            <div className="space-y-4 mb-8">
              {sluuBrand.pillars?.map((pil, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-none border border-white/10 text-[#f878b3]">
                    <Feather className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white mb-0.5">{pil.title}</div>
                    <div className="text-xs text-neutral-400 font-light leading-relaxed">{pil.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Flagship Store CTA */}
            <a
              href={sluuBrand.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="btn-glow-rose py-4 px-8 rounded-full text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2.5 shadow-xl"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Официальный бутик sluu.club</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Marketplaces Showcase Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
              Быстрый заказ на маркетплейсах
            </div>

            {/* Ozon */}
            <a
              href={sluuBrand.links[1].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#f878b3]/40 transition-all hover:-translate-y-1 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden flex-none">
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
                  <div className="text-xs text-neutral-400 font-light">Доставка в любой пункт выдачи РФ</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
            </a>

            {/* Wildberries */}
            <a
              href={sluuBrand.links[2].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#f878b3]/40 transition-all hover:-translate-y-1 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden flex-none">
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
                  <div className="text-xs text-neutral-400 font-light">Фирменная витрина бренда</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
            </a>

            {/* Guarantee Pill */}
            <div className="mt-2 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#e5c18a] flex-none" />
              <span>Официальная сертифицированная продукция</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sensory Product Lineup Showcase */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#f878b3] flex items-center gap-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Знаковые позиции коллекции SLUU</span>
          </div>
          <span className="text-[11px] font-mono text-neutral-400">Натуральный соевый воск & эфирные масла</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sluuBrand.products?.map((prod, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 glass-luxury border border-white/10 hover:border-[#f878b3]/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#f878b3]/15 text-[#f878b3] border border-[#f878b3]/30">
                    {prod.badge}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    {prod.type}
                  </span>
                </div>

                <h4 className="font-serif text-2xl font-medium text-white mb-2 group-hover:text-[#f878b3] transition-colors leading-snug">
                  {prod.name}
                </h4>

                <div className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                  <span className="text-neutral-400 font-mono text-[10px] uppercase block mb-0.5">Ольфакторные ноты:</span>
                  {prod.notes}
                </div>

                <div className="text-[11px] font-mono text-neutral-400 mb-6">
                  {prod.specs}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-lg font-bold text-white">{prod.price}</span>
                <a
                  href={prod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="btn-luxury-glass px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#f878b3] hover:text-black transition-all"
                >
                  <span>Заказать</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
