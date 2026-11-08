import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Headphones, Shield, ArrowUpRight, Play, Pause } from 'lucide-react';

export default function EducationAndMasterclasses() {
  const { course, lectures, audioGuides, merch } = SITE_DATA;
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [demoSec, setDemoSec] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlayingDemo) {
      interval = setInterval(() => {
        setDemoSec((prev) => {
          if (prev >= 25) {
            setIsPlayingDemo(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      setDemoSec(0);
    }
    return () => clearInterval(interval);
  }, [isPlayingDemo]);

  const toggleAudioDemo = () => {
    if (!isPlayingDemo) {
      soundEngine.playLayeredChord([528, 659, 784], 3.5);
      setIsPlayingDemo(true);
    } else {
      setIsPlayingDemo(false);
    }
  };

  return (
    <section id="education" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight [text-wrap:balance]">
            Курс по парфюмерии <span className="italic font-light text-stone-500">& лекторий</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.16em] text-stone-400 font-sans font-medium sm:text-right">
          Синхронизация &bull; Лекторий
        </div>
      </div>

      {/* Part 1: Flagship Course Showcase (Synchronize Collaboration) */}
      <div id="course" className="mb-20 pb-20 border-b border-stone-200/80 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Full Uncropped Course Banner & Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100 rounded-2xl border border-stone-200/80 shadow-sm">
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                width={800}
                height={450}
                className="w-full h-full object-contain bg-[#f7f5f2]"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
              <div>
                <div className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#e8559a] font-semibold">
                  Спецусловия по ссылке
                </div>
                <div className="text-sm font-sans text-stone-600">
                  Скидка 15% автоматически применяется при переходе
                </div>
              </div>

              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="editorial-btn-dark px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 whitespace-nowrap text-xs font-sans font-medium uppercase tracking-[0.14em] shadow-sm hover:shadow-md transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>Записаться на курс</span>
                <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
              </a>
            </div>
          </div>

          {/* Right: Course Narrative & Readable 4-Module Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#c5a059] font-medium mb-2">
                СОВМЕСТНО С ЛЕКТОРИЕМ «СИНХРОНИЗАЦИЯ»
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-tight mb-4">
                {course.title}
              </h3>

              <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
                {course.description} Курс создан для тех, кто хочет научиться слышать архитектуру аромата, распознавать редкие компоненты от синтетических молекул и уверенно формировать собственный ольфакторный гардероб.
              </p>
            </div>

            {/* Clear, well-proportioned 4-module syllabus without squished buttons */}
            <div className="space-y-3 pt-4 border-t border-stone-200/80">
              <div className="text-[11px] font-sans uppercase tracking-[0.18em] font-semibold text-stone-400 mb-3">
                ПРОГРАММА ОБУЧЕНИЯ (4 МОДУЛЯ):
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.modules.map((mod) => (
                  <div
                    key={mod.num}
                    className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-1.5 shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#e8559a]">
                        МОДУЛЬ {mod.num}
                      </span>
                    </div>
                    <div className="font-serif text-base text-stone-900 font-normal">
                      {mod.title}
                    </div>
                    <p className="text-xs text-stone-500 font-light leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Educational Materials, Audio Guide & Merch */}
      <div>
        <div className="mb-10">
          <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
            АВТОРСКИЕ МАТЕРИАЛЫ &bull; БУТИК
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
            Авторские лекции, аудиогид & лимитированный артефакт
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Lecture 1: Layering */}
          <div className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                <img
                  src={lectures[0].image}
                  alt={lectures[0].title}
                  loading="lazy"
                  width={400}
                  height={275}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-900/85 text-white backdrop-blur-md">
                  {lectures[0].format}
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <h4 className="font-serif text-lg sm:text-xl font-normal text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                  {lectures[0].title}
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3">
                  {lectures[0].description}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="font-mono text-base font-semibold text-stone-900">
                  {lectures[0].price}
                </span>
                <a
                  href={lectures[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-4 py-2 rounded-lg flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider hover:scale-105 transition-all shadow-xs"
                >
                  <span>Доступ</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#f878b3]" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. Lecture 2: Wardrobe */}
          <div className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                <img
                  src={lectures[1].image}
                  alt={lectures[1].title}
                  loading="lazy"
                  width={400}
                  height={275}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-900/85 text-white backdrop-blur-md">
                  {lectures[1].format}
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <h4 className="font-serif text-lg sm:text-xl font-normal text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                  {lectures[1].title}
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3">
                  {lectures[1].description}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="font-mono text-base font-semibold text-stone-900">
                  {lectures[1].price}
                </span>
                <a
                  href={lectures[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-4 py-2 rounded-lg flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider hover:scale-105 transition-all shadow-xs"
                >
                  <span>Доступ</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#f878b3]" />
                </a>
              </div>
            </div>
          </div>

          {/* 3. Audio Guide with Interactive Sample */}
          <div className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                <img
                  src={audioGuides[0].image}
                  alt={audioGuides[0].title}
                  loading="lazy"
                  width={400}
                  height={275}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-900/85 text-white backdrop-blur-md">
                  В наушниках &bull; 35 мин
                </div>

                <button
                  onClick={toggleAudioDemo}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-stone-900 shadow-md backdrop-blur-md text-[11px] font-sans font-medium flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
                  title={isPlayingDemo ? "Остановить фрагмент" : "Прослушать фрагмент атмосферы"}
                >
                  {isPlayingDemo ? (
                    <>
                      <Pause className="w-3 h-3 text-[#e8559a] fill-current" />
                      <span className="text-[#e8559a] font-mono text-[10px] font-semibold">{demoSec}s</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-stone-900 fill-current ml-0.5" />
                      <span className="text-[10px] font-mono">Тест 25s</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <h4 className="font-serif text-lg sm:text-xl font-normal text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                  {audioGuides[0].title}
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3">
                  {audioGuides[0].description}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="font-mono text-base font-semibold text-stone-900">
                    {audioGuides[0].price}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400 line-through ml-1.5">
                    {audioGuides[0].oldPrice}
                  </span>
                </div>
                <a
                  href={audioGuides[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-4 py-2 rounded-lg flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider hover:scale-105 transition-all shadow-xs"
                >
                  <span>Купить</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#f878b3]" />
                </a>
              </div>
            </div>
          </div>

          {/* 4. Artifact: Оберег от хейтеров */}
          <div className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                <img
                  src={merch.image}
                  alt={merch.title}
                  loading="lazy"
                  width={400}
                  height={275}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-900/85 text-white backdrop-blur-md flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#f878b3]" />
                  <span>Лимитированный тираж</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <h4 className="font-serif text-lg sm:text-xl font-normal text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                  {merch.title}
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3">
                  {merch.description}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-stone-500">
                  {merch.price}
                </span>
                <a
                  href={merch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-4 py-2 rounded-lg flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider hover:scale-105 transition-all shadow-xs"
                >
                  <span>Заказать</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#f878b3]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
