import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { Check, Copy, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';

export default function OnlineCourse() {
  const { course } = SITE_DATA;
  const [copied, setCopied] = useState(false);

  const copyPromocode = () => {
    navigator.clipboard.writeText(course.promocode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="course" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-black/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f878b3] mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Главный образовательный проект</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Онлайн-курс <span className="italic font-light">по парфюмерии</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-widest text-neutral-500">
          Синхронизация &bull; Настя Сивец
        </div>
      </div>

      {/* Luxury Featured Card */}
      <div className="relative rounded-[2.5rem] overflow-hidden glass-panel border border-white/90 shadow-xl shadow-black/5 p-6 sm:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Banner Media */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-black/5 group">
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-semibold">
                {course.badge}
              </div>
            </div>
          </div>

          {/* Details & Interactive Promocode */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
              {course.subtitle}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-neutral-900 mb-4 leading-tight">
              От нот и молекул до нишевой коллекции
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6 font-normal">
              {course.description}
            </p>

            {/* Promocode Block */}
            <div className="mb-6 p-4 rounded-2xl bg-white/80 border border-[#f878b3]/30 shadow-sm flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                  {course.promoLabel}
                </div>
                <div className="font-mono text-base font-bold text-neutral-900 tracking-wider">
                  {course.promocode}
                </div>
              </div>

              <button
                onClick={copyPromocode}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all bg-[#f878b3]/20 hover:bg-[#f878b3] text-neutral-900 hover:text-white cursor-pointer"
                title="Скопировать промокод"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-700" />
                    <span>Скопировано!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Скопировать</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Link Button */}
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pink py-3.5 px-6 rounded-full text-center text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Записаться на курс</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
