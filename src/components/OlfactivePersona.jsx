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
    <section id="persona" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto scroll-mt-24">
      {/* Editorial Manifesto Pavilion Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-white via-[#FAF8F5] to-white border border-stone-200/90 p-8 sm:p-14 lg:p-16 shadow-sm overflow-hidden">
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#fce7f3]/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#fef3c7]/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.22em] text-[#e8559a] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ольфакторная философия</span>
          </div>

          {/* Large Editorial Quote */}
          <div className="relative">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-8xl sm:text-9xl text-[#f878b3]/20 select-none pointer-events-none leading-none">
              &ldquo;
            </span>
            <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[2.6rem] font-light text-stone-900 leading-[1.32] tracking-tight relative z-10">
              &laquo;{manifesto.quote}&raquo;
            </blockquote>
          </div>

          <div className="w-12 h-[1px] bg-[#f878b3] mx-auto opacity-60" />

          {/* 3 Pillars in Clean Architectural Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            {pillars.map((pil) => (
              <div
                key={pil.num}
                className="p-6 rounded-2xl bg-white/90 border border-stone-200/70 shadow-2xs space-y-2 hover:border-stone-300 transition-all"
              >
                <div className="text-[11px] font-mono font-bold text-[#e8559a]">
                  {pil.num} &bull; {pil.title}
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
