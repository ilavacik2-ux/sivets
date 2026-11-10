import React from 'react';
import { SITE_DATA } from '../data/content';
import { Sparkles } from 'lucide-react';

export default function OlfactivePersona() {
  const { manifesto } = SITE_DATA;

  const pillars = [
    {
      num: '01',
      title: 'Ольфакторная память',
      desc: 'Запахи минуют рациональный фильтр сознания и мгновенно активируют лимбическую систему, воскрешая самые сокровенные моменты.'
    },
    {
      num: '02',
      title: 'Архитектура шлейфа',
      desc: 'Раскрытие композиции от верхних искристых нот до интимной базы — это скульптура в воздухе, меняющаяся вместе с теплом вашей кожи.'
    },
    {
      num: '03',
      title: 'Честный анализ',
      desc: 'Исследование редких компонентов, винтажей и современных молекул без рекламного шума, снобизма и коммерческих стереотипов.'
    }
  ];

  return (
    <section id="persona" className="py-8 sm:py-12 px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto scroll-mt-24">
      {/* Editorial Manifesto Pavilion Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-white via-[#FAF8F5] to-white border border-stone-200/90 p-8 sm:p-14 lg:p-16 shadow-xs overflow-hidden">
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#fce7f3]/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#fef3c7]/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          {/* Large Editorial Manifesto Quote */}
          <div className="relative pt-4">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-8xl sm:text-9xl text-[#f878b3]/15 select-none pointer-events-none leading-none">
              &ldquo;
            </span>
            <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[2.35rem] font-light text-stone-900 leading-[1.4] tracking-tight relative z-10 [text-wrap:balance]">
              &laquo;{manifesto.quote}&raquo;
            </blockquote>
            <div className="mt-4 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] text-[#e8559a] font-bold">
              {manifesto.author} &bull; {manifesto.role}
            </div>
          </div>

          <div className="w-12 h-[1px] bg-stone-300 mx-auto" />

          {/* 3 Pillars in High-Fashion Architectural Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
            {pillars.map((pil) => (
              <div
                key={pil.num}
                className="group relative p-7 rounded-2xl bg-white border border-stone-200/80 shadow-2xs hover:border-[#f878b3]/50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-[#e8559a] tracking-widest">
                      {pil.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-200 group-hover:bg-[#f878b3] transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900 mb-2.5 leading-snug">
                    {pil.title}
                  </h3>
                  <p className="text-sm text-stone-600 font-sans font-normal leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
