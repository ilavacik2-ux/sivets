import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Flame, ShoppingBag, ArrowUpRight, Sparkles, Feather, ShieldCheck, Compass } from 'lucide-react';

export default function SluuBrand() {
  const { sluuBrand } = SITE_DATA;

  return (
    <section id="sluu" className="py-20 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <Flame className="w-4 h-4 text-[#e8559a]" />
            <span>[ 05 / АВТОРСКИЙ БРЕНД ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            SLUU <span className="italic font-light text-stone-600">Aromatherapy</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-widest text-stone-500 font-mono sm:text-right">
          Создано Настей Сивец &bull; sluu.club
        </div>
      </div>

      {/* Main Brand Pavilion */}
      <div className="relative rounded-[2.5rem] p-8 sm:p-12 lg:p-14 bg-white/95 border border-stone-200/90 overflow-hidden shadow-xl shadow-stone-900/5 mb-10">
        {/* Ambient Candle Fire Glow */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#f878b3]/15 via-[#c5a059]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Brand Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-[11px] font-mono uppercase tracking-widest text-[#c5a059] mb-5 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#e8559a]" />
              <span>Ритуалы замедления & эстетика дома</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-4 leading-tight">
              Ароматерапия как искусство заботы о себе
            </h3>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light mb-8 max-w-xl">
              {sluuBrand.description}
            </p>

            {/* 3 Pillars */}
            <div className="space-y-3.5 mb-8">
              {sluuBrand.pillars?.map((pil, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-none border border-stone-200 text-[#e8559a] shadow-xs">
                    <Feather className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-900 mb-0.5">{pil.title}</div>
                    <div className="text-xs text-stone-600 font-light leading-relaxed">{pil.desc}</div>
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
              className="btn-glow-rose py-4 px-8 rounded-full text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2.5 shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Официальный бутик sluu.club</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Marketplaces Showcase Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-1 font-medium">
              Быстрый заказ на маркетплейсах
            </div>

            {/* Ozon */}
            <a
              href={sluuBrand.links[1].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="p-5 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200/80 hover:border-[#f878b3]/40 transition-all hover:-translate-y-0.5 group flex items-center justify-between shadow-2xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden flex-none border border-stone-200 shadow-2xs">
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
                  <div className="text-sm font-semibold text-stone-900 group-hover:text-[#e8559a] transition-colors">
                    SLUU на Ozon
                  </div>
                  <div className="text-xs text-stone-500 font-light">Доставка в любой пункт выдачи РФ</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </a>

            {/* Wildberries */}
            <a
              href={sluuBrand.links[2].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="p-5 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200/80 hover:border-[#f878b3]/40 transition-all hover:-translate-y-0.5 group flex items-center justify-between shadow-2xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden flex-none border border-stone-200 shadow-2xs">
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
                  <div className="text-sm font-semibold text-stone-900 group-hover:text-[#e8559a] transition-colors">
                    SLUU на Wildberries
                  </div>
                  <div className="text-xs text-stone-500 font-light">Фирменная витрина бренда</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </a>

            {/* Guarantee Pill */}
            <div className="mt-2 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 flex items-center gap-3 text-xs text-stone-600">
              <ShieldCheck className="w-4 h-4 text-[#c5a059] flex-none" />
              <span>Официальная сертифицированная продукция</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sensory Product Lineup Showcase */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#e8559a] flex items-center gap-2 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Знаковые позиции коллекции SLUU</span>
          </div>
          <span className="text-[11px] font-mono text-stone-500">Натуральный соевый воск & эфирные масла</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sluuBrand.products?.map((prod, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 bg-white/95 border border-stone-200/90 hover:border-[#f878b3]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-stone-900/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#fdf2f7] text-[#e8559a] border border-[#f878b3]/30 font-semibold">
                    {prod.badge}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                    {prod.type}
                  </span>
                </div>

                <h4 className="font-serif text-2xl font-medium text-stone-900 mb-2 group-hover:text-[#e8559a] transition-colors leading-snug">
                  {prod.name}
                </h4>

                <div className="text-xs text-stone-600 leading-relaxed font-light mb-4">
                  <span className="text-stone-400 font-mono text-[10px] uppercase block mb-0.5 font-medium">Ольфакторные ноты:</span>
                  {prod.notes}
                </div>

                <div className="text-[11px] font-mono text-stone-500 mb-6">
                  {prod.specs}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between">
                <span className="font-mono text-lg font-bold text-stone-900">{prod.price}</span>
                <a
                  href={prod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="btn-luxury-glass px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-2xs hover:border-[#f878b3] hover:text-[#e8559a]"
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
