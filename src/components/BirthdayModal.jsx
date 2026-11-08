import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, Heart, Cake } from 'lucide-react';

export default function BirthdayModal({ isOpen, onClose }) {
  const triggerConfetti = () => {
    // Luxury confetti palette: Rose pink, champagne, gold, pearlescent
    const colors = ['#f878b3', '#ffffff', '#ffd166', '#f4a261', '#e76f51'];

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    }, 200);
  };

  useEffect(() => {
    if (isOpen) {
      triggerConfetti();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg rounded-[2.5rem] p-8 sm:p-10 glass-panel border border-white/90 shadow-2xl overflow-hidden text-center animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-neutral-600 hover:text-black border border-black/5 transition-all cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Date Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f878b3]/20 border border-[#f878b3]/30 text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6">
          <Cake className="w-4 h-4 text-[#f878b3]" />
          <span>14 Ноября • С Днем Рождения!</span>
        </div>

        <h3 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight mb-4">
          Дорогая Настя!
        </h3>

        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal mb-8 max-w-md mx-auto">
          Пусть каждый новый день звучит как безупречная нишевая композиция: гармонично, смело, тепло и неповторимо. Процветания бренду <strong className="text-neutral-900">SLUU</strong>, неиссякаемого вдохновения, любви и преданной аудитории!
        </p>

        {/* Interactive action triggers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={triggerConfetti}
            className="btn-pink w-full sm:w-auto py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Запустить конфетти!</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-6 rounded-full text-xs font-medium uppercase tracking-wider bg-white/80 hover:bg-white text-neutral-800 border border-black/10 transition-all cursor-pointer shadow-sm"
          >
            <span>Прекрасно</span>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-neutral-400">
          <span>Сделано с любовью</span>
          <Heart className="w-3.5 h-3.5 text-[#f878b3] fill-[#f878b3]" />
        </div>
      </div>
    </div>
  );
}
