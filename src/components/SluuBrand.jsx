import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Flame, ShoppingBag, ArrowUpRight } from 'lucide-react';

export default function SluuBrand() {
  const { sluuBrand } = SITE_DATA;

  return (
    <section id="sluu" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <Flame className="w-3.5 h-3.5" />
            <span>Ароматерапия & Дом</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Ателье SLUU <span className="italic font-light text-stone-500">Aromatherapy</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono sm:text-right">
          Бренд Насти Сивец &bull; sluu.club
        </div>
      </div>

      {/* Brand Philosophy Editorial Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
        <div className="lg:col-span-6 space-y-5">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#c5a059] font-medium">
            РИТУАЛЫ ЗАМЕДЛЕНИЯ & ОЛЬФАКТОРНЫЙ ДЗЕН
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
            {sluuBrand.tagline}
          </h3>
          <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
            {sluuBrand.description}
          </p>
        </div>

        {/* 3 Pillars in Minimalist High-Fashion Layout */}
        <div className="lg:col-span-6 space-y-6 pt-2">
          {sluuBrand.pillars?.map((pil, idx) => (
            <div key={idx} className="pb-5 border-b border-stone-200/60 last:border-0">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-stone-900 font-semibold mb-1.5">
                <span className="text-[#e8559a]">0{idx + 1}.</span>
                <span>{pil.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed pl-6">
                {pil.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Minimalist Products Showcase (Aesop / Byredo Lookbook) */}
      <div className="mb-20">
        <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-stone-400 mb-8 pb-3 border-b border-stone-200/60 font-medium">
          КОЛЛЕКЦИЯ АТЕЛЬЕ &bull; АВТОРСКИЕ КОМПОЗИЦИИ
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sluuBrand.products?.map((prod, idx) => (
            <div
              key={idx}
              className="editorial-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-4">
                  <span>{prod.type}</span>
                  <span className="text-[#e8559a] font-semibold">{prod.badge}</span>
                </div>

                <h4 className="font-serif text-2xl font-normal text-stone-900 mb-4 leading-snug">
                  {prod.name}
                </h4>

                <div className="text-xs text-stone-600 font-light space-y-3 mb-8">
                  <div className="pb-2 border-b border-stone-100">
                    <span className="text-stone-400 uppercase tracking-wider text-[10px] block font-mono mb-0.5">Аккорды:</span>
                    <span className="font-serif italic text-stone-800">{prod.notes}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase tracking-wider text-[10px] block font-mono mb-0.5">Спецификация:</span>
                    <span className="font-mono text-[11px] text-stone-500">{prod.specs}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="font-mono text-base font-semibold text-stone-900">
                  {prod.price}
                </span>

                <a
                  href={prod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="text-xs font-mono uppercase tracking-wider text-[#e8559a] hover:text-stone-900 transition-colors flex items-center gap-1.5"
                >
                  <span>Заказать</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seamless Marketplace Concierge */}
      <div className="pt-8 border-t border-stone-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-1">
            ГДЕ ПРИОБРЕСТИ
          </div>
          <div className="font-serif text-xl sm:text-2xl text-stone-900">
            Официальный бутик & фирменные маркетплейсы
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={sluuBrand.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="editorial-btn-dark px-7 py-3.5 rounded-full flex items-center gap-2 shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#f878b3]" />
            <span>Официальный бутик sluu.club</span>
          </a>

          <a
            href={sluuBrand.links[1].url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="editorial-btn-light px-6 py-3.5 rounded-full flex items-center gap-2"
          >
            <span>Ozon</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
          </a>

          <a
            href={sluuBrand.links[2].url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="editorial-btn-light px-6 py-3.5 rounded-full flex items-center gap-2"
          >
            <span>Wildberries</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
