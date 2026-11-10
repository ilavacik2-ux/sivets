import React, { useRef } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { ShoppingBag, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SluuBrand() {
  const { sluuBrand } = SITE_DATA;
  const sluuScrollRef = useRef(null);

  const scrollSluu = (direction) => {
    if (sluuScrollRef.current) {
      soundEngine.playClick();
      const scrollAmount = direction === 'left' ? -300 : 300;
      sluuScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="sluu" className="pt-8 sm:pt-12 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-stone-200/80 gap-6">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            SLUU <span className="italic font-light text-stone-400">Aromatherapy</span>
          </h2>
        </div>
        <p className="text-base sm:text-lg text-stone-600 font-sans font-normal max-w-lg sm:text-right">
          {sluuBrand.description}
        </p>
      </div>

      {/* Hero Atmosphere Banner + Direct Store Channels */}
      <div className="mb-12 rounded-3xl overflow-hidden border border-stone-200/80 bg-white shadow-xs grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Lifestyle Photography */}
        <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-stone-100 flex items-center justify-center">
          <img
            src={sluuBrand.heroImage}
            alt="SLUU Aromatherapy — ритуалы заботы о себе"
            loading="eager"
            decoding="async"
            width={900}
            height={600}
            className="w-full h-full object-cover object-center filter contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent" />
          <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 text-white font-serif text-xl sm:text-2xl font-light tracking-wide">
            100% терапевтические бленды
          </div>
        </div>

        {/* Narrative & Store Access */}
        <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#e8559a] font-bold">
              Ритуалы замедления
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-normal text-stone-900 leading-snug">
              {sluuBrand.tagline}
            </h3>
            <p className="text-sm sm:text-base text-stone-600 font-sans font-normal leading-relaxed">
              Чистые эфирные масла без синтетических фиксаторов и отдушек. Каждая формула создана для точечной работы с эмоциональным состоянием и восстановления баланса.
            </p>
          </div>

          <div className="space-y-3 pt-5 border-t border-stone-100">
            <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-stone-700 font-bold mb-3">
              ГДЕ КУПИТЬ ПРОДУКЦИЮ:
            </div>

            {/* 1. Official Store */}
            <a
              href={sluuBrand.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-dark w-full py-4 px-6 rounded-xl flex items-center justify-between text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider group cursor-pointer hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-4 h-4 text-[#f878b3]" />
                <span className="font-semibold">Интернет-магазин sluu.club</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
            </a>

            {/* Marketplaces */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={sluuBrand.links[1].url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="py-3.5 px-5 rounded-xl border border-stone-300 hover:border-stone-500 bg-stone-50/70 hover:bg-white text-stone-900 transition-all flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-semibold hover:scale-105"
              >
                <img
                  src={sluuBrand.links[1].logo}
                  alt="Ozon"
                  className="w-4 h-4 rounded-full object-contain"
                />
                <span>Ozon</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={sluuBrand.links[2].url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="py-3.5 px-5 rounded-xl border border-stone-300 hover:border-stone-500 bg-stone-50/70 hover:bg-white text-stone-900 transition-all flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-semibold hover:scale-105"
              >
                <img
                  src={sluuBrand.links[2].logo}
                  alt="Wildberries"
                  className="w-4 h-4 rounded-full object-contain"
                />
                <span>Wildberries</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Authentic Blend Cards with Horizontal Smooth Scroll */}
      <div>
        <div className="mb-6 flex items-center justify-between gap-3 pb-3 border-b border-stone-200/80">
          <div>
            <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-stone-900 font-bold">
              Коллекция блендов &bull; 100% эфирные масла
            </div>
            <p className="text-xs text-stone-500 font-sans mt-0.5">
              Листайте вбок для выбора аромата
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollSluu('left')}
              className="w-9 h-9 rounded-full border border-stone-300 hover:border-stone-800 bg-white text-stone-700 hover:text-stone-900 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
              aria-label="Предыдущий бленд"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollSluu('right')}
              className="w-9 h-9 rounded-full border border-stone-300 hover:border-stone-800 bg-white text-stone-700 hover:text-stone-900 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
              aria-label="Следующий бленд"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={sluuScrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth gallery-carousel-track pr-6 sm:pr-8"
        >
          {sluuBrand.products.map((prod) => (
            <div
              key={prod.id}
              className="w-[78vw] sm:w-[270px] md:w-[280px] lg:w-[290px] shrink-0 snap-start rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between group"
            >
                <div>
                  {/* Product Photo */}
                  <div className="relative aspect-square overflow-hidden bg-[#FAF8F5]">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="eager"
                      decoding="async"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-2.5 left-2.5 text-[11px] font-sans font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-900/85 text-white backdrop-blur-md">
                      {prod.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <div className="text-[11px] font-sans uppercase tracking-wider text-[#e8559a] font-bold">
                      {prod.type}
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-medium text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                      «{prod.name}»
                    </h4>
                    <p className="text-xs text-stone-600 font-sans font-normal leading-relaxed line-clamp-2">
                      {prod.desc}
                    </p>

                    {/* Aromatic composition */}
                    {prod.notes && (
                      <div className="pt-2.5 border-t border-stone-100 space-y-0.5">
                        <div className="text-[10px] font-sans uppercase tracking-wider text-stone-400 font-bold">
                          Масла:
                        </div>
                        <div className="text-xs text-stone-800 font-medium leading-relaxed truncate">
                          {prod.notes}
                        </div>
                      </div>
                    )}

                    {prod.benefit && (
                      <div className="text-xs text-[#e8559a] font-semibold flex items-center gap-1.5 pt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f878b3]" />
                        <span className="truncate">{prod.benefit}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="p-4 sm:p-5 pt-0 mt-auto">
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <span className="editorial-price text-xl sm:text-2xl text-stone-900 whitespace-nowrap shrink-0">
                      {prod.price}
                    </span>

                    <a
                      href={prod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundEngine.playClick()}
                      className="editorial-btn-dark px-4 py-2 rounded-xl text-xs font-sans font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs hover:scale-105 transition-all cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Купить</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#f878b3]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
