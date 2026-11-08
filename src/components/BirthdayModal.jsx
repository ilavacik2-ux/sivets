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
    const colors = ['#f878b3', '#ffffff', '#ffd166', '#f4a261', '#e5c18a'];

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto no-scrollbar rounded-[2.5rem] p-6 sm:p-10 glass-luxury border border-[#f878b3]/40 shadow-[0_0_60px_rgba(248,120,179,0.3)] text-center animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-b from-[#f878b3]/25 via-[#e5c18a]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white border border-white/15 transition-all cursor-pointer z-20"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Birthday Date Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f878b3]/20 to-[#e5c18a]/20 border border-[#f878b3]/40 text-xs font-mono font-bold uppercase tracking-widest text-[#f878b3] mb-4">
          <Cake className="w-4 h-4 text-[#f878b3]" />
          <span>14 Ноября • С Днем Рождения, Настя!</span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-3">
          Праздничная капсула
        </h3>

        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light mb-6 max-w-md mx-auto">
          Пусть каждый новый год звучит как безупречная нишевая композиция: смело, глубоко, завораживающе и неповторимо. Процветания бренду <strong className="text-white font-medium">SLUU</strong>, неиссякаемого вдохновения и бесконечной любви!
        </p>

        {/* Interactive Olfactive Wish Composer */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-left">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2.5 flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5 text-[#e5c18a]" />
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
                  className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                    isSel
                      ? 'bg-[#f878b3]/20 border-[#f878b3] text-white shadow-[0_0_15px_rgba(248,120,179,0.3)]'
                      : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:text-white hover:border-white/25'
                  }`}
                >
                  <div className="font-medium text-white mb-0.5">{accord.name}</div>
                  <div className="text-[10px] text-neutral-400 font-light truncate">{accord.desc}</div>
                </button>
              );
            })}
          </div>

          {selectedAccord && (
            <div className="p-3.5 rounded-xl bg-[#f878b3]/15 border border-[#f878b3]/30 text-xs text-white animate-in fade-in duration-300 mb-3">
              <span className="font-semibold text-[#f878b3] block mb-1">
                ✨ Готовое поздравление для Насти:
              </span>
              <p className="italic font-serif text-sm text-neutral-200 leading-snug">
                &laquo;{selectedAccord.note}&raquo;
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={copyWish}
              className="flex-1 py-2 px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-mono uppercase tracking-wider text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Скопировано!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#f878b3]" />
                  <span>Скопировать поздравление</span>
                </>
              )}
            </button>

            <a
              href={`https://t.me/nastyasivets`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="py-2 px-4 rounded-xl bg-[#f878b3] hover:bg-[#ff8bc1] text-black text-xs font-mono font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>В Telegram Насте</span>
            </a>
          </div>
        </div>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={triggerConfetti}
            className="btn-glow-rose w-full sm:w-auto py-3.5 px-7 rounded-full text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Запустить салют конфетти!</span>
          </button>

          <button
            onClick={onClose}
            className="btn-luxury-glass w-full sm:w-auto py-3.5 px-6 rounded-full text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            <span>Насладиться сайтом</span>
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-neutral-400">
          <span>С глубоким уважением и любовью</span>
          <Heart className="w-3.5 h-3.5 text-[#f878b3] fill-[#f878b3]" />
        </div>
      </div>
    </div>
  );
}
