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
    <section id="cooperation" className="py-12 sm:py-16 px-4 sm:px-12 lg:px-16 max-w-6xl mx-auto scroll-mt-24">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-5 border-b border-stone-200/80 gap-4">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Сотрудничество <span className="italic font-light text-stone-400">& спецпроекты</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-stone-600 font-sans font-normal max-w-md sm:text-right">
          Коммерческие интеграции в расследования, лекции и ольфакторный консалтинг для брендов.
        </p>
      </div>

      {/* Modern High-Impact Collaboration Portal */}
      <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 lg:p-12 shadow-xs space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#e8559a] font-bold">
            Партнерство & медиа
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 leading-snug">
            Создадим ольфакторную историю с безупречным вкусом
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-normal leading-relaxed">
            По вопросам интеграций в YouTube/VK расследования, закрытых лекций для клиентов, создания ольфакторных концепций и брендовых коллабораций.
          </p>
        </div>

        {/* 2 Clear Channels of Communication */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2">
          {/* 1. Official Telegram Bot (Primary) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/70 flex flex-col justify-between space-y-6 hover:border-[#f878b3]/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#229ED9]/10 text-[#229ED9] flex items-center justify-center">
                  <IconTelegram className="w-5 h-5 fill-current" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-sans font-bold uppercase tracking-wider">
                  Быстрый ответ
                </span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-stone-900">
                Telegram-бот для заявок
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-sans font-normal leading-relaxed">
                Прямой канал связи с PR-командой Насти. Автоматическая регистрация брифа и оперативная обратная связь.
              </p>
            </div>

            <a
              href={collaboration.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-dark w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider shadow-xs hover:scale-[1.01] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Оставить заявку в Telegram</span>
              <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
            </a>
          </div>

          {/* 2. Direct PR Email */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/70 flex flex-col justify-between space-y-6 hover:border-[#f878b3]/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#e8559a]/10 text-[#e8559a] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-stone-200/60 text-stone-700 text-[11px] font-sans font-bold uppercase tracking-wider">
                  Официальная почта
                </span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-stone-900">
                Официальные запросы & КП
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-sans font-normal leading-relaxed">
                Для отправки коммерческих предложений, пресс-релизов, приглашений на мероприятия и договоров.
              </p>
            </div>

            <button
              onClick={copyEmail}
              className="w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-sans font-medium uppercase tracking-wider border border-stone-300 hover:border-stone-800 bg-white text-stone-900 transition-all cursor-pointer shadow-2xs hover:scale-[1.01] active:scale-95"
              title="Нажмите, чтобы скопировать email"
            >
              <span className="lowercase font-sans text-xs sm:text-sm font-medium tracking-normal text-stone-900">
                {collaboration.email}
              </span>
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              )}
              {copiedEmail && (
                <span className="text-[11px] text-emerald-600 font-sans font-bold shrink-0">
                  (Скопировано)
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
