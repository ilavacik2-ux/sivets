import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';

export default function SluuBrand() {
  const { sluuBrand } = SITE_DATA;

  return (
    <section id="sluu" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans uppercase tracking-[0.16em] text-[#e8559a] mb-2 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Бренд Насти Сивец</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            SLUU <span className="italic font-light text-stone-500">Aromatherapy</span>
          </h2>
        </div>
        <p className="text-base sm:text-lg text-stone-700 font-normal max-w-lg sm:text-right">
          {sluuBrand.description}
        </p>
      </div>

      {/* Hero Atmosphere Banner + Direct Store Channels */}
      <div className="mb-16 rounded-3xl overflow-hidden border border-stone-200/90 bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Lifestyle Photography */}
        <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/11] overflow-hidden bg-stone-100">
          <img
            src={sluuBrand.heroImage}
            alt="SLUU Aromatherapy — ритуалы заботы о себе"
            loading="lazy"
            width={900}
            height={600}
            className="w-full h-full object-cover object-center filter contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent lg:hidden" />
          <div className="absolute bottom-4 left-4 lg:hidden text-white font-serif text-xl font-medium">
            100% терапевтические бленды
          </div>
        </div>

        {/* Narrative & Store Access */}
        <div className="lg:col-span-5 p-8 sm:p-10 space-y-6">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-[#e8559a] font-bold">
              РИТУАЛЫ ЗАМЕДЛЕНИЯ
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 leading-snug">
              {sluuBrand.tagline}
            </h3>
            <p className="text-sm sm:text-base text-stone-700 font-normal leading-relaxed">
              Чистые эфирные масла без синтетических фиксаторов и отдушек. Каждая формула создана для точечной работы с эмоциональным состоянием.
            </p>
          </div>

          <div className="space-y-3 pt-3 border-t border-stone-100">
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

      {/* 4 Authentic Blend Cards with Real Product Photos */}
      <div>
        <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-stone-700 mb-8 pb-3 border-b border-stone-200/80 font-bold flex items-center justify-between">
          <span>КОЛЛЕКЦИЯ БЛЕНДОВ &bull; 100% ЭФИРНЫЕ МАСЛА</span>
          <span className="hidden sm:inline text-stone-500 text-xs font-semibold">Терапевтический класс</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sluuBrand.products.map((prod) => (
            <div
              key={prod.id}
              className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Product Photo */}
                <div className="relative aspect-square overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-900/85 text-white backdrop-blur-md">
                    {prod.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <div className="text-xs font-sans uppercase tracking-wider text-[#e8559a] font-bold">
                    {prod.type}
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                    «{prod.name}»
                  </h4>
                  <p className="text-sm text-stone-700 font-normal leading-relaxed">
                    {prod.desc}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-mono text-lg sm:text-xl font-bold text-stone-900">
                    {prod.price}
                  </span>

                  <a
                    href={prod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick()}
                    className="editorial-btn-dark px-5 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Заказать</span>
                    <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
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
