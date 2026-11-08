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
    <section id="cooperation" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Сотрудничество <span className="italic font-light text-stone-500">& спецпроекты</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-stone-600 font-light max-w-md sm:text-right">
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
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              По вопросам интеграций в YouTube/VK расследования, закрытых лекций для клиентов, создания ольфакторных концепций и брендовых коллабораций.
            </p>
          </div>

          {/* 2 Clear Channels of Communication */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* 1. Official Telegram Bot (Primary) */}
            <div className="p-6 rounded-2xl bg-stone-50/70 border border-stone-200/80 flex flex-col justify-between space-y-6 hover:border-stone-300 transition-all">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#229ED9]/10 text-[#229ED9] flex items-center justify-center">
                    <IconTelegram className="w-5 h-5 fill-current" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-sans font-semibold uppercase tracking-wider">
                    Быстрый ответ
                  </span>
                </div>
                <h4 className="font-serif text-xl font-normal text-stone-900">
                  Telegram-бот для заявок
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Прямой канал связи с PR-командой Насти. Автоматическая регистрация брифа и оперативная обратная связь.
                </p>
              </div>

              <a
                href={collaboration.botUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="editorial-btn-dark w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-sans font-medium uppercase tracking-wider shadow-sm hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Оставить заявку в Telegram</span>
                <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
              </a>
            </div>

            {/* 2. Direct PR Email */}
            <div className="p-6 rounded-2xl bg-stone-50/70 border border-stone-200/80 flex flex-col justify-between space-y-6 hover:border-stone-300 transition-all">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#e8559a]/10 text-[#e8559a] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-[10px] font-sans font-medium uppercase tracking-wider">
                    Официальная почта
                  </span>
                </div>
                <h4 className="font-serif text-xl font-normal text-stone-900">
                  Официальные запросы & КП
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Для отправки коммерческих предложений, пресс-релизов, приглашений на мероприятия и договоров.
                </p>
              </div>

              <button
                onClick={copyEmail}
                className="editorial-btn-light w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-sans font-medium uppercase tracking-wider border border-stone-200 hover:border-stone-400 bg-white transition-all cursor-pointer shadow-2xs"
                title="Нажмите, чтобы скопировать email"
              >
                <span className="font-mono">{collaboration.email}</span>
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-4 h-4 text-stone-400 ml-1" />
                )}
                {copiedEmail && (
                  <span className="text-[11px] text-emerald-600 font-sans font-semibold">
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
