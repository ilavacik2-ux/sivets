import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, ExternalLink, ArrowRight, Check } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export default function SupportBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [hasUnread, setHasUnread] = useState(true);
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'bot',
      text: 'Добрый день! Я ассистент Насти Сивец. С удовольствием помогу вам с любым вопросом по материалам, оплате или сотрудничеству.',
      time: 'сейчас'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Auto-hide prompt bubble after user scrolls or after some seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Keep prompt visible initially as requested by user
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowPrompt(false);
    setHasUnread(false);
  };

  const handleQuickQuestion = (type) => {
    handleOpen();

    let userText = '';
    let botReply = '';
    let actionLink = null;
    let actionLabel = null;

    if (type === 'materials') {
      userText = 'Вопрос по материалам';
      botReply = 'Все авторские лекции и аудиогиды открываются моментально после оплаты. Доступ бессрочный. Если у вас возникла сложность с получением ссылки или открытием аудио — напишите напрямую нашему менеджеру в Telegram, мы решим за 2 минуты!';
      actionLink = 'https://t.me/sivets_requestsbot';
      actionLabel = 'Написать менеджеру в Telegram';
    } else if (type === 'payment') {
      userText = 'Вопрос по оплате';
      botReply = 'Оплата онлайн-курса «Синхронизации» проходит на официальной платформе Синхронизации (не забудьте промокод «НИШЕВЫМ» на скидку 15%). Лекции и аудиогиды оплачиваются российскими и зарубежными картами. Нужна помощь с оплатой из-за рубежа?';
      actionLink = 'https://t.me/sivets_requestsbot';
      actionLabel = 'Помощь с оплатой в Telegram';
    } else if (type === 'sluu') {
      userText = 'Заказ SLUU Aromatherapy';
      botReply = 'Вся линейка ароматерапии SLUU (соевые свечи, диффузоры, интерьерные мисты) доступна в официальном магазине sluu.club, а также на Ozon и Wildberries с быстрой доставкой.';
      actionLink = 'https://sluu.club/shop?utm_source=site_nastya';
      actionLabel = 'Перейти в магазин SLUU';
    }

    setChatHistory((prev) => [
      ...prev,
      { sender: 'user', text: userText, time: 'сейчас' },
      { sender: 'bot', text: botReply, actionLink, actionLabel, time: 'сейчас' }
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');

    setChatHistory((prev) => [
      ...prev,
      { sender: 'user', text: userText, time: 'сейчас' },
      {
        sender: 'bot',
        text: 'Спасибо за сообщение! Чтобы оперативно получить персональный ответ от команды Насти, нажмите кнопку ниже для перехода в Telegram-бот поддержки:',
        actionLink: 'https://t.me/sivets_requestsbot',
        actionLabel: 'Открыть Telegram-бот поддержки',
        time: 'сейчас'
      }
    ]);
  };

  return (
    <aside aria-label="Служба заботы" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Speech Bubble & Quick Chips (shown when closed) */}
      {!isOpen && showPrompt && (
        <div className="mb-3 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Main Speech Card */}
          <div className="relative rounded-2xl bg-white px-4 py-3 text-xs sm:text-sm font-medium text-stone-800 shadow-xl border border-stone-200/80 max-w-[240px] text-right">
            <button
              onClick={() => setShowPrompt(false)}
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300 flex items-center justify-center text-[10px]"
              aria-label="Скрыть"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="leading-snug">Добрый день! Напишите нам, мы поможем</p>
          </div>

          {/* Quick Action Chips exactly like in Nastya's screenshot */}
          <div className="flex flex-col items-end gap-1.5">
            <button
              onClick={() => handleQuickQuestion('materials')}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F878B3]/10 text-[#F878B3] border border-[#F878B3]/40 text-xs font-semibold tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Вопрос по материалам
            </button>
            <button
              onClick={() => handleQuickQuestion('payment')}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F878B3]/10 text-[#F878B3] border border-[#F878B3]/40 text-xs font-semibold tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Вопрос по оплате
            </button>
          </div>
        </div>
      )}

      {/* Floating Pink Bubble Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="relative w-14 h-14 rounded-full bg-[#F878B3] hover:bg-[#f762a6] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          aria-label="Открыть онлайн-чат поддержки"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center ring-2 ring-white animate-pulse">
              1
            </span>
          )}
        </button>
      )}

      {/* Expanded Interactive Chat Modal */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] max-h-[85vh] rounded-3xl bg-white border border-stone-200/90 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Chat Header */}
          <div className="px-5 py-4 bg-[#FAF8F5] border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://static.tildacdn.com/tild3564-3133-4161-b432-373034306535/IMG_0059.JPG"
                  alt="Настя Сивец"
                  className="w-10 h-10 rounded-full object-cover border border-stone-200"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-stone-900 leading-tight">
                  Служба заботы Насти
                </h3>
                <span className="text-[11px] text-stone-500 font-sans">
                  Онлайн • отвечаем за пару минут
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
              aria-label="Закрыть чат"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs sm:text-sm bg-[#FCFBFA]">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#F878B3] text-white rounded-br-sm'
                      : 'bg-white text-stone-800 border border-stone-200/70 rounded-bl-sm'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Direct Action Button in Bot Reply */}
                  {msg.actionLink && (
                    <a
                      href={msg.actionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F878B3]/15 hover:bg-[#F878B3] text-stone-900 hover:text-white font-semibold text-xs transition-colors"
                    >
                      <span>{msg.actionLabel || 'Открыть'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <span className="text-[10px] text-stone-400 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Choice Buttons inside Chat */}
          <div className="px-3 py-2 bg-white border-t border-stone-100 flex gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleQuickQuestion('materials')}
              className="shrink-0 px-3 py-1 rounded-full text-[11px] font-medium bg-stone-100 hover:bg-[#F878B3]/15 hover:text-[#F878B3] transition-colors"
            >
              Материалы
            </button>
            <button
              onClick={() => handleQuickQuestion('payment')}
              className="shrink-0 px-3 py-1 rounded-full text-[11px] font-medium bg-stone-100 hover:bg-[#F878B3]/15 hover:text-[#F878B3] transition-colors"
            >
              Оплата
            </button>
            <button
              onClick={() => handleQuickQuestion('sluu')}
              className="shrink-0 px-3 py-1 rounded-full text-[11px] font-medium bg-stone-100 hover:bg-[#F878B3]/15 hover:text-[#F878B3] transition-colors"
            >
              SLUU
            </button>
            <a
              href="https://t.me/sivets_requestsbot"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-3 py-1 rounded-full text-[11px] font-medium bg-[#F878B3]/10 text-[#F878B3] hover:bg-[#F878B3] hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Telegram</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Напишите ваш вопрос..."
              className="flex-1 px-4 py-2 rounded-full bg-stone-100 text-xs sm:text-sm text-stone-800 placeholder-stone-400 outline-none focus:ring-1 focus:ring-[#F878B3]"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-[#F878B3] hover:bg-[#f762a6] text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
              aria-label="Отправить"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}
    </aside>
  );
}
