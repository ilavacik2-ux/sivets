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
        <div className="text-xs sm:text-sm uppercase tracking-[0.14em] text-stone-600 font-sans font-bold sm:text-right">
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

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
              <div>
                <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-[#e8559a] font-bold">
                  Спецусловия по ссылке
                </div>
                <div className="text-sm sm:text-base font-sans text-stone-700 font-medium mt-0.5">
                  Скидка 15% автоматически применяется при переходе
                </div>
              </div>

              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="editorial-btn-dark px-7 py-4 rounded-xl flex items-center justify-center gap-2.5 whitespace-nowrap text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.1em] shadow-sm hover:shadow-md transition-all cursor-pointer w-full sm:w-auto hover:scale-105"
              >
                <span>Записаться на курс</span>
                <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
              </a>
            </div>
          </div>

          {/* Right: Course Narrative & Readable 4-Module Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-[#c5a059] font-bold mb-2">
                СОВМЕСТНО С ЛЕКТОРИЕМ «СИНХРОНИЗАЦИЯ»
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-stone-900 leading-tight mb-4">
                {course.title}
              </h3>

              <p className="text-stone-700 font-normal leading-relaxed text-base sm:text-lg">
                {course.description} Курс создан для тех, кто хочет научиться слышать архитектуру аромата, распознавать редкие компоненты от синтетических молекул и уверенно формировать собственный ольфакторный гардероб.
              </p>
            </div>

            {/* Clear, well-proportioned 4-module syllabus without squished buttons */}
            <div className="space-y-4 pt-4 border-t border-stone-200/80">
              <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] font-bold text-stone-700">
                ПРОГРАММА ОБУЧЕНИЯ (4 МОДУЛЯ):
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.modules.map((mod) => (
                  <div
                    key={mod.num}
                    className="p-5 rounded-2xl bg-white border border-stone-200/90 space-y-2 shadow-2xs hover:border-stone-400 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-sans font-bold text-[#e8559a]">
                        МОДУЛЬ {mod.num}
                      </span>
                    </div>
                    <div className="font-serif text-lg sm:text-xl text-stone-900 font-medium">
                      {mod.title}
                    </div>
                    <p className="text-sm text-stone-700 font-normal leading-relaxed">
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
        <div className="mb-12">
          <h3 className="font-serif text-2xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Авторские лекции, аудиогид <span className="italic font-light text-stone-500">& артефакт</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Lecture 1: Layering */}
          <div className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div>
              {/* Uncropped 16:9 Slide Preview */}
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                <img
                  src={lectures[0].image}
                  alt={lectures[0].title}
                  loading="lazy"
                  width={500}
                  height={281}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-sans uppercase tracking-wider text-[#e8559a] font-bold">
                  {lectures[0].format}
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                  {lectures[0].title}
                </h4>
                <p className="text-sm text-stone-700 font-normal leading-relaxed">
                  {lectures[0].description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-stone-900">
                    {lectures[0].price}
                  </span>
                  <div className="text-xs text-stone-500 font-sans font-medium">
                    Бессрочный доступ
                  </div>
                </div>

                <a
                  href={lectures[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-6 py-3 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider hover:scale-105 transition-all shadow-sm cursor-pointer"
                >
                  <span>Купить</span>
                  <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. Lecture 2: Wardrobe */}
          <div className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div>
              {/* Uncropped 16:9 Slide Preview */}
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                <img
                  src={lectures[1].image}
                  alt={lectures[1].title}
                  loading="lazy"
                  width={500}
                  height={281}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-sans uppercase tracking-wider text-[#e8559a] font-bold">
                  {lectures[1].format}
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                  {lectures[1].title}
                </h4>
                <p className="text-sm text-stone-700 font-normal leading-relaxed">
                  {lectures[1].description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-stone-900">
                    {lectures[1].price}
                  </span>
                  <div className="text-xs text-stone-500 font-sans font-medium">
                    Бессрочный доступ
                  </div>
                </div>

                <a
                  href={lectures[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-6 py-3 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider hover:scale-105 transition-all shadow-sm cursor-pointer"
                >
                  <span>Купить</span>
                  <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
                </a>
              </div>
            </div>
          </div>

          {/* 3. Audio Guide with Interactive Sample */}
          <div className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div>
              {/* Uncropped 16:9 Slide Preview */}
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                <img
                  src={audioGuides[0].image}
                  alt={audioGuides[0].title}
                  loading="lazy"
                  width={500}
                  height={281}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                <button
                  onClick={toggleAudioDemo}
                  className="absolute bottom-3 right-3 px-3.5 py-2 rounded-full bg-white/95 hover:bg-white text-stone-900 shadow-md backdrop-blur-md text-xs font-sans font-semibold flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
                  title={isPlayingDemo ? "Остановить фрагмент" : "Прослушать фрагмент атмосферы"}
                >
                  {isPlayingDemo ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#e8559a] fill-current" />
                      <span className="text-[#e8559a] font-mono text-xs font-bold">{demoSec}s</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-stone-900 fill-current ml-0.5" />
                      <span className="text-xs font-mono font-medium">Тест 25s</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-sans uppercase tracking-wider text-[#e8559a] font-bold">
                  В наушниках &bull; 35 мин
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                  {audioGuides[0].title}
                </h4>
                <p className="text-sm text-stone-700 font-normal leading-relaxed">
                  {audioGuides[0].description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-stone-900">
                      {audioGuides[0].price}
                    </span>
                    <span className="text-sm font-mono text-stone-400 line-through">
                      {audioGuides[0].oldPrice}
                    </span>
                  </div>
                  <div className="text-xs text-emerald-600 font-sans font-semibold">
                    Выгода 360 ₽
                  </div>
                </div>

                <a
                  href={audioGuides[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-6 py-3 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider hover:scale-105 transition-all shadow-sm cursor-pointer"
                >
                  <span>Купить</span>
                  <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
                </a>
              </div>
            </div>
          </div>

          {/* 4. Artifact: Оберег от хейтеров */}
          <div className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div>
              {/* Uncropped 16:9 Image Preview */}
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                <img
                  src={merch.image}
                  alt={merch.title}
                  loading="lazy"
                  width={500}
                  height={281}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-sans uppercase tracking-wider text-[#e8559a] font-bold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#e8559a]" />
                  <span>Лимитированный тираж</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                  {merch.title}
                </h4>
                <p className="text-sm text-stone-700 font-normal leading-relaxed">
                  {merch.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-stone-900">
                    1 490 ₽
                  </span>
                  <div className="text-xs text-stone-500 font-sans font-medium">
                    Коллекционный мерч
                  </div>
                </div>

                <a
                  href={merch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-6 py-3 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider hover:scale-105 transition-all shadow-sm cursor-pointer"
                >
                  <span>Заказать</span>
                  <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
