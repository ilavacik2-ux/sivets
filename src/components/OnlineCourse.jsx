import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Check, Copy, ExternalLink, GraduationCap, Sparkles, BookOpen, Clock, Award } from 'lucide-react';

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
    <section id="course" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Editorial Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#f878b3] mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>[ 02 / ОБРАЗОВАТЕЛЬНЫЙ ФЛАГМАН ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Онлайн-курс <span className="italic font-light text-neutral-300">по парфюмерии</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono sm:text-right">
          Синхронизация &bull; Настя Сивец
        </div>
      </div>

      {/* Haute Parfumerie Pavilion Card */}
      <div className="relative rounded-[2.5rem] p-6 sm:p-10 lg:p-12 glass-luxury border border-white/15 overflow-hidden shadow-2xl shadow-black">
        {/* Ambient Backlight */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f878b3]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e5c18a]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Media Banner + Course Highlights */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group mb-6">
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono uppercase tracking-wider font-semibold">
                {course.badge}
              </div>
              <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[#e5c18a] text-[11px] font-mono uppercase tracking-wider">
                100% Практика
              </div>
            </div>

            {/* Interactive Module Navigator Tabs */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#f878b3]" />
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
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isCur
                          ? 'bg-[#f878b3]/20 border-[#f878b3]/60 shadow-[0_0_15px_rgba(248,120,179,0.2)]'
                          : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-neutral-400 font-bold mb-0.5">
                        МОДУЛЬ {mod.num}
                      </div>
                      <div className="text-xs font-medium text-white truncate">
                        {mod.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Module Details Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mt-3 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1.5">
                  <span className="text-[#f878b3] font-mono">0{activeModule + 1}.</span>
                  <span>{course.modules[activeModule].title}</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-light mb-3">
                  {course.modules[activeModule].desc}
                </p>
                {course.modules[activeModule].topics && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {course.modules[activeModule].topics.map((top, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] text-neutral-300 border border-white/10"
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
            <span className="text-xs uppercase tracking-widest text-[#f878b3] font-mono font-semibold mb-2 block">
              {course.subtitle}
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">
              От молекул и нот — к экспертному гардеробу
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-light">
              {course.description}
            </p>

            {/* Value Bullets */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-xs text-neutral-300 font-light">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#e5c18a]" />
                <span>Доступ навсегда</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#e5c18a]" />
                <span>Сертификат лектория</span>
              </div>
            </div>

            {/* Glowing Promocode Block */}
            <div className="mb-6 p-4 rounded-2xl bg-white/[0.05] border border-[#f878b3]/30 shadow-lg flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  {course.promoLabel}
                </div>
                <div className="font-mono text-lg font-bold text-white tracking-widest flex items-center gap-2">
                  <span>{course.promocode}</span>
                  <span className="text-[11px] font-normal text-[#f878b3] font-sans">(-15%)</span>
                </div>
              </div>

              <button
                onClick={copyPromocode}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all bg-[#f878b3]/20 hover:bg-[#f878b3] text-white hover:text-black cursor-pointer shadow-md"
                title="Скопировать промокод"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Скопировано!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#f878b3]" />
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
              className="btn-glow-rose py-4 px-8 rounded-full text-center text-xs font-mono uppercase tracking-widest inline-flex items-center justify-center gap-2.5 shadow-xl"
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
