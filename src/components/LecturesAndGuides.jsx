import React from 'react';
import { SITE_DATA } from '../data/content';
import { Headphones, BookOpen, Shield, ArrowUpRight } from 'lucide-react';

export default function LecturesAndGuides() {
  const { lectures, audioGuides, merch } = SITE_DATA;

  return (
    <section id="lectures" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-black/10 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f878b3] mb-2 block">
            Материалы & Мерч
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Лекции, аудиогиды <span className="italic font-light">& оберег</span>
          </h2>
        </div>
        <p className="text-xs uppercase tracking-widest text-neutral-500 max-w-xs">
          Авторские материалы для самостоятельного погружения
        </p>
      </div>

      {/* Grid: 3 Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* 1. Merch: Оберег от хейтеров */}
        <div className="relative flex flex-col justify-between rounded-[2rem] p-6 glass-panel border border-white/90 shadow-md hover:shadow-xl transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f878b3]/20 text-neutral-900 text-[11px] font-semibold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-[#f878b3]" />
                Лимитка
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Мерч</span>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-neutral-100 border border-black/5">
              <img
                src={merch.image}
                alt={merch.title}
                loading="lazy"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="font-serif text-2xl font-medium text-neutral-900 mb-2">
              {merch.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
              {merch.description}
            </p>
          </div>

          <a
            href={merch.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pink w-full py-3 rounded-full text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Купить оберег</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2. Exclusive Lectures */}
        <div className="relative flex flex-col justify-between rounded-[2rem] p-6 glass-panel border border-white/90 shadow-md hover:shadow-xl transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-medium uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-[#f878b3]" />
                Лекции
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Видеоформат</span>
            </div>

            <div className="space-y-4 mb-6">
              {lectures.map((lec) => (
                <a
                  key={lec.id}
                  href={lec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-white/80 transition-all hover:-translate-y-0.5 group/item shadow-sm"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={lec.image}
                      alt={lec.title}
                      loading="lazy"
                      width={80}
                      height={60}
                      className="w-16 h-12 object-cover rounded-xl border border-black/5"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                        {lec.format}
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 truncate group-hover/item:text-[#f878b3] transition-colors">
                        {lec.title}
                      </h4>
                      <div className="text-xs font-bold text-neutral-900 mt-0.5">
                        {lec.price}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover/item:text-black transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <a
            href={lectures[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-dark w-full py-3 rounded-full text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Перейти к лекциям</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3. Audio Guides */}
        <div className="relative flex flex-col justify-between rounded-[2rem] p-6 glass-panel border border-white/90 shadow-md hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-medium uppercase tracking-wider">
                <Headphones className="w-3.5 h-3.5 text-[#f878b3]" />
                Аудиогид
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">In-ear Experience</span>
            </div>

            {audioGuides.map((guide) => (
              <div key={guide.id} className="mb-5">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-neutral-100 border border-black/5">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    loading="lazy"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium mb-1">
                  {guide.format}
                </div>
                <h3 className="font-serif text-2xl font-medium text-neutral-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed">
                  {guide.description}
                </p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xl font-bold text-neutral-900">{guide.price}</span>
                  {guide.oldPrice && (
                    <span className="text-sm line-through text-neutral-400 font-medium">
                      {guide.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href={audioGuides[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pink w-full py-3 rounded-full text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Слушать аудиогид</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
