import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Check, Copy, ExternalLink, GraduationCap, BookOpen, Clock, Award } from 'lucide-react';

export default function OnlineCourse() {
  const { course } = SITE_DATA;
  const [copied, setCopied] = useState(false);
  const [activeModule, setActiveModule] = useState(0);

  const copyPromocode = () => {
    soundEngine.playChime(784, 1.4);
    navigator.clipboard.writeText(course.promocode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="course" className="py-20 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Editorial Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>[ 02 / ОБРАЗОВАТЕЛЬНЫЙ ФЛАГМАН ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Онлайн-курс <span className="italic font-light text-stone-600">по парфюмерии</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-widest text-stone-500 font-mono sm:text-right">
          Синхронизация &bull; Настя Сивец
        </div>
      </div>

      {/* Educational Pavilion Card */}
      <div className="relative rounded-[2.5rem] p-6 sm:p-10 lg:p-12 bg-white/95 border border-stone-200/90 overflow-hidden shadow-xl shadow-stone-900/5">
        {/* Ambient Backlight */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f878b3]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Media Banner + Course Highlights */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 shadow-md group mb-6 bg-stone-100">
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 text-stone-800 text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                {course.badge}
              </div>
              <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 text-[#c5a059] text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                100% Практика
              </div>
            </div>

            {/* Interactive Module Navigator Tabs */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 flex items-center gap-1.5 font-medium">
                <BookOpen className="w-3.5 h-3.5 text-[#e8559a]" />
                <span>Программа обучения (выберите модуль):</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {course.modules.map((mod, idx) => {
                  const isCur = activeModule === idx;
                  return (
                    <button
                      key={mod.num}
                      onClick={() => {
                        soundEngine.playClick();
                        setActiveModule(idx);
                      }}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer shadow-2xs ${
                        isCur
                          ? 'bg-[#fdf2f7] border-[#f878b3] text-[#e8559a] font-semibold'
                          : 'bg-stone-50 border-stone-200 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-stone-400 font-bold mb-0.5">
                        МОДУЛЬ {mod.num}
                      </div>
                      <div className="text-xs font-medium text-stone-900 truncate">
                        {mod.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Module Details Card */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 mt-3 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 mb-1.5">
                  <span className="text-[#e8559a] font-mono">0{activeModule + 1}.</span>
                  <span>{course.modules[activeModule].title}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-light mb-3">
                  {course.modules[activeModule].desc}
                </p>
                {course.modules[activeModule].topics && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stone-200/60">
                    {course.modules[activeModule].topics.map((top, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white text-stone-700 border border-stone-200 shadow-2xs"
                      >
                        ✓ {top}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Description & Promocode Trigger */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[#e8559a] font-mono font-semibold mb-2 block">
              {course.subtitle}
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-4 leading-tight">
              От молекул и нот — к экспертному гардеробу
            </h3>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 font-light">
              {course.description}
            </p>

            {/* Value Bullets */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-xs text-stone-700 font-light">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c5a059]" />
                <span>Доступ навсегда</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#c5a059]" />
                <span>Сертификат лектория</span>
              </div>
            </div>

            {/* Promocode Block */}
            <div className="mb-6 p-4 rounded-2xl bg-[#fdf2f7] border border-[#f878b3]/35 shadow-sm flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  {course.promoLabel}
                </div>
                <div className="font-mono text-lg font-bold text-stone-900 tracking-widest flex items-center gap-2">
                  <span>{course.promocode}</span>
                  <span className="text-[11px] font-semibold text-[#e8559a] font-sans">(-15%)</span>
                </div>
              </div>

              <button
                onClick={copyPromocode}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 cursor-pointer shadow-xs"
                title="Скопировать промокод"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Скопировано!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#e8559a]" />
                    <span>Скопировать</span>
                  </>
                )}
              </button>
            </div>

            {/* Action CTA Link */}
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="btn-glow-rose py-4 px-8 rounded-full text-center text-xs font-mono uppercase tracking-widest inline-flex items-center justify-center gap-2.5 shadow-md"
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
