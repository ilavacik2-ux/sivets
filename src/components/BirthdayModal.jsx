import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';
import { X, Sparkles, Heart, Cake, Gift, Send, Copy, Check } from 'lucide-react';

export default function BirthdayModal({ isOpen, onClose }) {
  const [selectedAccord, setSelectedAccord] = useState(null);
  const [copied, setCopied] = useState(false);

  const accordWishes = [
    {
      id: 'champagne',
      name: 'Игристое шампанское & Блестки',
      desc: 'Искристые пузырьки, радость открытий',
      note: 'Настя, с Днем Рождения! Пусть каждый день искрится как дорогое шампанское, а твои парфюмерные проекты покоряют весь мир!'
    },
    {
      id: 'rose',
      name: 'Дамасская роза & Любовь',
      desc: 'Бархатные лепестки, чувственное тепло',
      note: 'С Днем Рождения, Настя! Неиссякаемой женской энергии, цветущей красоты, внутренней гармонии и самой глубокой любви!'
    },
    {
      id: 'cedar',
      name: 'Белый кедр & Спокойствие',
      desc: 'Медитативный дзен, чистота и сила',
      note: 'Дорогая Настя! Желаю нерушимого спокойствия, крепкого сна, верных соратников и процветания бренду SLUU!'
    },
    {
      id: 'vanilla',
      name: 'Бурбонская ваниль & Счастье',
      desc: 'Теплый уют, роскошь и вдохновение',
      note: 'Настя, с праздником 14 Ноября! Пусть жизнь будет наполнена теплыми моментами, путешествиями в столицы парфюмерии и счастьем!'
    },
  ];

  const triggerConfetti = () => {
    soundEngine.playChime(659, 1.8);
    const colors = ['#f878b3', '#e8559a', '#ffd166', '#f4a261', '#c5a059', '#ffffff'];

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: colors,
      zIndex: 9999
    });

    setTimeout(() => {
      confetti({
        particleCount: 65,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: colors,
        zIndex: 9999
      });
      confetti({
        particleCount: 65,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: colors,
        zIndex: 9999
      });
    }, 240);
  };

  useEffect(() => {
    if (isOpen) {
      triggerConfetti();
      setSelectedAccord(accordWishes[0]);
    }
  }, [isOpen]);

  const copyWish = () => {
    if (!selectedAccord) return;
    soundEngine.playChime(784, 1.2);
    navigator.clipboard.writeText(selectedAccord.note);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/35 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto no-scrollbar rounded-[2rem] p-6 sm:p-10 bg-white border border-stone-200/90 shadow-2xl shadow-stone-900/15 text-center animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-b from-[#f878b3]/20 via-[#c5a059]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 border border-stone-200 transition-all cursor-pointer z-20"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Birthday Date Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#fdf2f7] to-[#fef8ee] border border-[#f878b3]/40 text-xs font-mono font-bold uppercase tracking-widest text-[#e8559a] mb-4 shadow-2xs">
          <Cake className="w-4 h-4 text-[#e8559a]" />
          <span>14 Ноября • С Днем Рождения, Настя!</span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mb-3">
          Праздничная капсула
        </h3>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-6 max-w-md mx-auto">
          Пусть каждый новый год звучит как безупречная нишевая композиция: смело, глубоко, завораживающе и неповторимо. Процветания бренду <strong className="text-stone-900 font-medium">SLUU</strong>, неиссякаемого вдохновения и бесконечной любви!
        </p>

        {/* Interactive Olfactive Wish Composer */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 text-left">
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2.5 flex items-center gap-1.5 font-medium">
            <Gift className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Выберите праздничный ольфакторный аккорд:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5">
            {accordWishes.map((accord) => {
              const isSel = selectedAccord?.id === accord.id;
              return (
                <button
                  key={accord.id}
                  onClick={() => {
                    soundEngine.playChime(659, 1.0);
                    setSelectedAccord(accord);
                    triggerConfetti();
                  }}
                  className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer shadow-2xs ${
                    isSel
                      ? 'bg-[#fdf2f7] border-[#f878b3] text-stone-900 font-semibold'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                  }`}
                >
                  <div className="font-medium text-stone-900 mb-0.5">{accord.name}</div>
                  <div className="text-[10px] text-stone-500 font-light truncate">{accord.desc}</div>
                </button>
              );
            })}
          </div>

          {selectedAccord && (
            <div className="p-3.5 rounded-xl bg-[#fdf2f7] border border-[#f878b3]/30 text-xs text-stone-800 animate-in fade-in duration-300 mb-3">
              <span className="font-semibold text-[#e8559a] block mb-1">
                ✨ Готовое поздравление для Насти:
              </span>
              <p className="italic font-serif text-sm text-stone-800 leading-snug">
                &laquo;{selectedAccord.note}&raquo;
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={copyWish}
              className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-xs font-mono uppercase tracking-wider text-stone-800 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Скопировано!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#e8559a]" />
                  <span>Скопировать поздравление</span>
                </>
              )}
            </button>

            <a
              href="https://t.me/nastyasivets"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-dark py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Send className="w-3.5 h-3.5 text-[#f878b3]" />
              <span>В Telegram Насте</span>
            </a>
          </div>
        </div>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={triggerConfetti}
            className="editorial-btn-dark w-full sm:w-auto py-3.5 px-7 rounded-full flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#f878b3]" />
            <span>Запустить салют конфетти!</span>
          </button>

          <button
            onClick={onClose}
            className="editorial-btn-light w-full sm:w-auto py-3.5 px-6 rounded-full cursor-pointer shadow-2xs"
          >
            <span>Насладиться сайтом</span>
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-stone-400">
          <span>С глубоким уважением и любовью</span>
          <Heart className="w-3.5 h-3.5 text-[#e8559a] fill-[#e8559a]" />
        </div>
      </div>
    </div>
  );
}
