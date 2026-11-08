import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { GraduationCap, BookOpen, Headphones, Shield, ArrowUpRight, Copy, Check, Play, Pause } from 'lucide-react';

export default function EducationAndMasterclasses() {
  const { course, lectures, audioGuides, merch } = SITE_DATA;
  const [copied, setCopied] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [demoSec, setDemoSec] = useState(0);

  const copyPromocode = () => {
    soundEngine.playChime(784, 1.4);
    navigator.clipboard.writeText(course.promocode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.22em] text-[#e8559a] mb-2 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Обучение & Курсы</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight [text-wrap:balance]">
            Обучение <span className="italic font-light text-stone-500">& авторские мастер-классы</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.16em] text-stone-400 font-sans font-medium sm:text-right">
          Синхронизация &bull; Частный архив материалов
        </div>
      </div>

      {/* Part 1: Flagship Course Brochure (Synchronize Collaboration) */}
      <div id="course" className="mb-20 pb-20 border-b border-stone-200/80 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Course Visual & Luxury Promocode Voucher */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 rounded-2xl border border-stone-200/80 shadow-sm">
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                width={700}
                height={437}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 text-[10px] font-sans font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-stone-900/85 text-white backdrop-blur-md">
                {course.badge}
              </div>
            </div>

            {/* Embossed Luxury Promocode Voucher */}
            <div className="editorial-card p-6 rounded-2xl space-y-4 border border-stone-200/90 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-stone-500 font-medium">
                  АВТОРСКИЙ ПРОМОКОД
                </span>
                <span className="px-3 py-1 rounded-full bg-[#fdf2f7] text-[#e8559a] text-xs font-sans font-bold">
                  {course.discount}
                </span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-mono text-xl font-bold tracking-widest text-stone-900 uppercase">
                  {course.promocode}
                </span>

                <button
                  onClick={copyPromocode}
                  className="editorial-btn-dark px-4 py-2.5 rounded-lg flex items-center gap-1.5 cursor-pointer font-sans text-xs font-medium tracking-wider"
                  title="Скопировать промокод"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Скопировано!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Копировать</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="editorial-btn-dark w-full py-4 rounded-xl flex items-center justify-center gap-2 text-center text-xs font-sans font-medium uppercase tracking-[0.14em] shadow-sm hover:shadow-md transition-all"
              >
                <span>Записаться на курс со скидкой</span>
                <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
              </a>
            </div>
          </div>

          {/* Right: Course Narrative & Interactive Syllabus */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#c5a059] font-medium mb-2">
                ФЛАГМАНСКИЙ КУРС &bull; ЛЕКТОРИЙ «СИНХРОНИЗАЦИЯ»
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-stone-900 leading-tight mb-4">
                {course.title}
              </h3>

              <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
                {course.description} Курс создан для тех, кто хочет перестать теряться в парфюмерных бутиках, научиться распознавать натуральные абсолюты от синтетических молекул и уверенно формировать собственный парфюмерный гардероб.
              </p>
            </div>

            {/* Interactive Module Navigator */}
            <div className="space-y-4 pt-4 border-t border-stone-200/80">
              <div className="text-[11px] font-sans uppercase tracking-[0.18em] font-semibold text-stone-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#e8559a]" />
                <span>ПРОГРАММА ОБУЧЕНИЯ (4 КЛЮЧЕВЫХ МОДУЛЯ):</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {course.modules.map((mod, idx) => {
                  const isCurrent = activeModule === idx;
                  return (
                    <button
                      key={mod.num}
                      onClick={() => {
                        soundEngine.playClick();
                        setActiveModule(idx);
                      }}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className={`text-[10px] font-sans font-bold mb-1 ${isCurrent ? 'text-[#f878b3]' : 'text-stone-400'}`}>
                        {mod.num}
                      </div>
                      <div className="text-xs font-serif truncate">
                        {mod.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Module Details */}
              <div className="editorial-card p-6 rounded-2xl space-y-3 bg-[#FAF8F5]">
                <div className="flex items-center gap-2">
                  <span className="text-[#e8559a] font-sans text-xs font-bold">
                    МОДУЛЬ {course.modules[activeModule].num}
                  </span>
                  <span className="text-stone-300">&bull;</span>
                  <h4 className="font-serif text-xl font-normal text-stone-900">
                    {course.modules[activeModule].title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {course.modules[activeModule].desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-stone-200/60">
                  {course.modules[activeModule].topics?.map((top, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white border border-stone-200/80 text-[10px] font-sans font-medium text-stone-600"
                    >
                      {top}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Private Masterclasses & Audio Guide Brochure */}
      <div>
        <div className="mb-10">
          <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#e8559a] font-semibold mb-2">
            ПРИВАТНЫЙ АРХИВ МАТЕРИАЛОВ
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
            Авторские лекции, аудиогид & лимитированный артефакт
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Lecture 1: Layering */}
          <div className="editorial-card p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-3">
                {lectures[0].format}
              </div>
              <h4 className="font-serif text-xl font-normal text-stone-900 mb-2">
                {lectures[0].title}
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                {lectures[0].description}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="font-mono text-sm font-semibold text-stone-900">
                {lectures[0].price}
              </span>
              <a
                href={lectures[0].link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="text-xs font-mono uppercase tracking-wider text-[#e8559a] hover:text-stone-900 transition-colors flex items-center gap-1"
              >
                <span>Доступ</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Lecture 2: Wardrobe */}
          <div className="editorial-card p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-3">
                {lectures[1].format}
              </div>
              <h4 className="font-serif text-xl font-normal text-stone-900 mb-2">
                {lectures[1].title}
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                {lectures[1].description}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="font-mono text-sm font-semibold text-stone-900">
                {lectures[1].price}
              </span>
              <a
                href={lectures[1].link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="text-xs font-mono uppercase tracking-wider text-[#e8559a] hover:text-stone-900 transition-colors flex items-center gap-1"
              >
                <span>Доступ</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Audio Guide with interactive sample */}
          <div className="editorial-card p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#c5a059] mb-3">
                <span className="flex items-center gap-1">
                  <Headphones className="w-3.5 h-3.5" />
                  <span>В наушниках</span>
                </span>
                <button
                  onClick={toggleAudioDemo}
                  className="px-2.5 py-0.5 rounded-full bg-stone-100 hover:bg-[#fdf2f7] text-stone-700 hover:text-[#e8559a] text-[10px] font-mono flex items-center gap-1 cursor-pointer transition-colors"
                  title="Прослушать фрагмент атмосферы"
                >
                  {isPlayingDemo ? (
                    <>
                      <Pause className="w-3 h-3 text-[#e8559a]" />
                      <span>{demoSec}s</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#e8559a]" />
                      <span>Тест 25s</span>
                    </>
                  )}
                </button>
              </div>
              <h4 className="font-serif text-xl font-normal text-stone-900 mb-2">
                {audioGuides[0].title}
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                {audioGuides[0].description}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="font-mono text-sm font-semibold text-stone-900">
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
                className="text-xs font-mono uppercase tracking-wider text-[#e8559a] hover:text-stone-900 transition-colors flex items-center gap-1"
              >
                <span>Купить</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Artifact: Оберег от хейтеров */}
          <div className="editorial-card p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#e8559a] mb-3 flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                <span>Лимитированный тираж</span>
              </div>
              <h4 className="font-serif text-xl font-normal text-stone-900 mb-2">
                {merch.title}
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                {merch.description}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="font-mono text-xs text-stone-500">
                Коллекционный талисман
              </span>
              <a
                href={merch.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="text-xs font-mono uppercase tracking-wider text-[#e8559a] hover:text-stone-900 transition-colors flex items-center gap-1"
              >
                <span>Заказать</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
