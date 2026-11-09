import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Mail, Check, Copy, ArrowUpRight, MessageCircle } from 'lucide-react';
import { IconTelegram } from './Icons';

export default function Collaboration() {
  const { collaboration } = SITE_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    soundEngine.playChime(659, 1.2);
    navigator.clipboard.writeText(collaboration.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="cooperation" className="py-16 sm:py-20 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Сотрудничество <span className="italic font-light text-stone-500">& спецпроекты</span>
          </h2>
        </div>
        <p className="text-base sm:text-lg text-stone-700 font-normal max-w-lg sm:text-right">
          Коммерческие интеграции в расследования, лекции и ольфакторный консалтинг для брендов.
        </p>
      </div>

      {/* Modern High-Impact Collaboration Portal */}
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-stone-200/90 bg-white p-8 sm:p-12 lg:p-14 shadow-sm space-y-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-snug">
              Создадим ольфакторную историю с безупречным вкусом
            </h3>
            <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed">
              По вопросам интеграций в YouTube/VK расследования, закрытых лекций для клиентов, создания ольфакторных концепций и брендовых коллабораций.
            </p>
          </div>

          {/* 2 Clear Channels of Communication */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* 1. Official Telegram Bot (Primary) */}
            <div className="p-7 rounded-2xl bg-stone-50/70 border border-stone-200/90 flex flex-col justify-between space-y-6 hover:border-stone-400 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#229ED9]/10 text-[#229ED9] flex items-center justify-center">
                    <IconTelegram className="w-6 h-6 fill-current" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-sans font-bold uppercase tracking-wider">
                    Быстрый ответ
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-medium text-stone-900">
                  Telegram-бот для заявок
                </h4>
                <p className="text-sm text-stone-700 font-normal leading-relaxed">
                  Прямой канал связи с PR-командой Насти. Автоматическая регистрация брифа и оперативная обратная связь.
                </p>
              </div>

              <a
                href={collaboration.botUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="editorial-btn-dark w-full py-4 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider shadow-sm hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Оставить заявку в Telegram</span>
                <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
              </a>
            </div>

            {/* 2. Direct PR Email */}
            <div className="p-7 rounded-2xl bg-stone-50/70 border border-stone-200/90 flex flex-col justify-between space-y-6 hover:border-stone-400 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#e8559a]/10 text-[#e8559a] flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-stone-200/70 text-stone-800 text-xs font-sans font-bold uppercase tracking-wider">
                    Официальная почта
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-medium text-stone-900">
                  Официальные запросы & КП
                </h4>
                <p className="text-sm text-stone-700 font-normal leading-relaxed">
                  Для отправки коммерческих предложений, пресс-релизов, приглашений на мероприятия и договоров.
                </p>
              </div>

              <button
                onClick={copyEmail}
                className="editorial-btn-light w-full py-4 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider border border-stone-300 hover:border-stone-500 bg-white transition-all cursor-pointer shadow-2xs hover:scale-[1.02]"
                title="Нажмите, чтобы скопировать email"
              >
                <span className="font-mono text-sm sm:text-base font-semibold">{collaboration.email}</span>
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-4 h-4 text-stone-400 ml-1" />
                )}
                {copiedEmail && (
                  <span className="text-xs text-emerald-600 font-sans font-bold">
                    (Скопировано!)
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
