import React, { useState, useEffect, useRef } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Shield, ArrowUpRight, Play, Pause, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EducationAndMasterclasses() {
  const { course, lectures, audioGuides, merch } = SITE_DATA;
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [demoSec, setDemoSec] = useState(0);
  const boutiqueScrollRef = useRef(null);

  const scrollBoutique = (direction) => {
    if (boutiqueScrollRef.current) {
      soundEngine.playClick();
      const scrollAmount = direction === 'left' ? -380 : 380;
      boutiqueScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
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

  const boutiqueItems = [
    {
      id: 'lecture-layering',
      title: lectures[0].title,
      format: lectures[0].format,
      badge: 'Авторский практикум',
      description: lectures[0].description,
      topics: lectures[0].topics || [
        'Принципы сочетания сложных формул и молекул',
        'Контраст и гармония базовых аккордов',
        'Авторские рецепты многослойных миксов',
        'Секреты стойкости шлейфа без удушья'
      ],
      price: lectures[0].price,
      note: 'Бессрочный доступ',
      btnText: 'Купить лекцию',
      image: lectures[0].image,
      link: lectures[0].link,
      isMerch: false
    },
    {
      id: 'lecture-wardrobe',
      title: lectures[1].title,
      format: lectures[1].format,
      badge: 'Гид по гардеробу',
      description: lectures[1].description,
      topics: lectures[1].topics || [
        'Базовый ольфакторный сет на все сезоны',
        'Вечерние, дневные и интимные шлейфы',
        'Флаконы-инвестиции, которые растут в цене',
        'Как не ошибиться при покупке аромата вслепую'
      ],
      price: lectures[1].price,
      note: 'Бессрочный доступ',
      btnText: 'Купить лекцию',
      image: lectures[1].image,
      link: lectures[1].link,
      isMerch: false
    },
    {
      id: 'audio-guide',
      title: 'Парфюмерный аудиогид «Красота невидимого»',
      format: audioGuides[0].format || 'В наушниках • 35 мин',
      badge: 'Аудиосопровождение в бутике',
      description: audioGuides[0].description,
      topics: audioGuides[0].topics || [
        'Включай в наушниках прямо в парфюмерном магазине',
        'Разбор шедевров Квентина Биша и редких компонентов',
        'Тестирование без спешки и давления продавцов',
        'Готовый маршрут по ключевым нотам'
      ],
      price: audioGuides[0].price,
      oldPrice: audioGuides[0].oldPrice,
      discount: 'Скидка -27%',
      btnText: 'Купить аудиогид',
      image: audioGuides[0].image,
      link: audioGuides[0].link,
      hasAudioTest: true,
      isMerch: false
    },
    {
      id: 'merch-obereg',
      title: merch.title,
      format: merch.tagline || 'Лимитированный тираж',
      badge: merch.badge || 'Коллекционный артефакт',
      description: merch.description,
      topics: merch.topics || [
        'Культовый лимитированный талисман от Насти Сивец',
        'Защита личного ольфакторного пространства от токсичности',
        'Премиальный подарочный футляр ручной работы',
        'Символ независимого парфюмерного вкуса'
      ],
      price: merch.price || '1 490 ₽',
      note: 'Ограниченный тираж',
      btnText: 'Заказать оберег',
      image: merch.image,
      link: merch.link,
      isMerch: true
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-14 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-9 pb-5 border-b border-stone-200/80 gap-6">
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
      <div id="course" className="mb-14 pb-14 border-b border-stone-200/80 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Full Uncropped Course Banner & Action */}
          <div className="lg:col-span-6 space-y-5">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100 rounded-2xl border border-stone-200/80 shadow-sm">
              <img
                src={course.image}
                alt={course.title}
                loading="eager"
                decoding="async"
                width={800}
                height={450}
                className="w-full h-full object-contain bg-[#f7f5f2]"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
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
                className="editorial-btn-dark px-7 py-3.5 rounded-xl flex items-center justify-center gap-2.5 whitespace-nowrap text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.1em] shadow-sm hover:shadow-md transition-all cursor-pointer w-full sm:w-auto hover:scale-105 shrink-0"
              >
                <span>Записаться на курс</span>
                <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
              </a>
            </div>

            {/* Course Features Checklist to fully utilize space */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-2.5">
              <div className="text-xs font-sans uppercase tracking-[0.14em] text-stone-600 font-bold">
                Что входит в обучение:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-stone-700 font-normal">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#e8559a] shrink-0" />
                  <span>4 тематических модуля</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#e8559a] shrink-0" />
                  <span>10 практических видеоуроков</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#e8559a] shrink-0" />
                  <span>Ольфакторные схемы и шпаргалки</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#e8559a] shrink-0" />
                  <span>Именной сертификат выпускника</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Course Narrative & Readable 4-Module Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-[#c5a059] font-bold mb-2">
                СОВМЕСТНО С ЛЕКТОРИЕМ «СИНХРОНИЗАЦИЯ»
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-stone-900 leading-tight mb-3">
                {course.title}
              </h3>

              <p className="text-stone-700 font-normal leading-relaxed text-base sm:text-lg">
                {course.description} Курс создан для тех, кто хочет научиться слышать архитектуру аромата, распознавать редкие компоненты от синтетических молекул и уверенно формировать собственный ольфакторный гардероб.
              </p>
            </div>

            {/* Sleek, Haute Parfumerie Syllabus List */}
            <div className="space-y-3 pt-4 border-t border-stone-200/80">
              <div className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-stone-500">
                Программа курса (4 модуля):
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.modules.map((mod) => (
                  <div
                    key={mod.num}
                    className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/70 space-y-1 shadow-2xs hover:border-[#f878b3]/40 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-sans font-bold text-[#e8559a] tracking-wider uppercase">
                        Модуль {mod.num}
                      </span>
                    </div>
                    <div className="font-serif text-base sm:text-lg text-stone-900 font-normal leading-snug">
                      {mod.title}
                    </div>
                    <p className="text-xs text-stone-600 font-sans font-normal leading-relaxed line-clamp-2">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Educational Materials, Audio Guide & Merch (Horizontal Smooth Scroll Carousel) */}
      <div>
        <div className="mb-6 flex items-center justify-between gap-4 pb-3 border-b border-stone-200/80">
          <div>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-stone-900 tracking-tight">
              Авторские лекции, аудиогид <span className="italic font-light text-stone-400">& артефакт</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 font-sans mt-0.5">
              Листайте вбок для выбора программы
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollBoutique('left')}
              className="w-10 h-10 rounded-full border border-stone-300 hover:border-stone-800 bg-white text-stone-700 hover:text-stone-900 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
              aria-label="Предыдущий материал"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBoutique('right')}
              className="w-10 h-10 rounded-full border border-stone-300 hover:border-stone-800 bg-white text-stone-700 hover:text-stone-900 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
              aria-label="Следующий материал"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track - Seamless Gallery with edge bleed and card peek */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <div
            ref={boutiqueScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x snap-mandatory scroll-smooth gallery-carousel-track"
          >
            {boutiqueItems.map((item) => (
              <div
                key={item.id}
                className="w-[84vw] sm:w-[380px] lg:w-[400px] shrink-0 snap-start editorial-card rounded-2xl overflow-hidden border border-stone-200/70 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] group flex flex-col justify-between"
              >
                <div>
                  {/* Widescreen 16:9 Image Preview with Badges */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                    <img
                    src={item.image}
                    alt={item.title}
                    loading="eager"
                    decoding="async"
                    width={700}
                    height={394}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Format Badge Overlay */}
                  <div className="absolute top-3 left-3 text-[11px] font-sans font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-900/85 text-white backdrop-blur-md">
                    {item.format}
                  </div>

                  {/* Audio Test Button (for audio guide) */}
                  {item.hasAudioTest && (
                    <button
                      onClick={toggleAudioDemo}
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-stone-900 shadow-md backdrop-blur-md text-xs font-sans font-semibold flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
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
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#e8559a] font-bold">
                      {item.badge}
                    </span>
                    {item.isMerch && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#c5a059] font-bold uppercase tracking-wider">
                        <Shield className="w-3 h-3" />
                        <span>Limited Edition</span>
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 font-sans font-normal leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Highlights Topics List */}
                  <div className="pt-3 border-t border-stone-100">
                    <div className="text-[11px] uppercase tracking-wider text-stone-400 font-sans font-bold mb-2">
                      {item.isMerch ? 'Особенности артефакта:' : 'В программе:'}
                    </div>
                    <div className="space-y-1.5 text-xs text-stone-700">
                      {item.topics.slice(0, 3).map((topic, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#e8559a] font-bold text-xs mt-0.5">✦</span>
                          <span className="leading-snug">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-5 sm:p-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-2 whitespace-nowrap shrink-0">
                    <span className="editorial-price text-2xl sm:text-3xl text-stone-900 whitespace-nowrap">
                      {item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="editorial-price text-sm text-stone-400 line-through whitespace-nowrap">
                        {item.oldPrice}
                      </span>
                    )}
                    {item.discount && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold whitespace-nowrap">
                        {item.discount}
                      </span>
                    )}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick()}
                    className="editorial-btn-dark px-4 sm:px-5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider hover:scale-105 transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0 max-w-[55%]"
                  >
                    <span className="truncate">{item.btnText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#f878b3] shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
