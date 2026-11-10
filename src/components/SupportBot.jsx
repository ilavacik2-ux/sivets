import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ExternalLink, ArrowRight, Check, Bot, User, RefreshCw } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function SupportBot() {
  const [isOpen, setIsOpen] = useState(false);
  // Default to collapsed on mobile to avoid covering half the screen
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Only auto-show prompt on desktop after delay, leave mobile clean
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      const timer = setTimeout(() => setShowPrompt(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Добрый день! Я виртуальный ассистент Насти Сивец. С удовольствием отвечу на любые вопросы по онлайн-курсу, лекциям, аудиогидам или бренду SLUU.',
      time: 'сейчас'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll on new message or when typing
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [chatHistory, isTyping, isOpen]);

  const handleOpen = () => {
    soundEngine.playClick();
    setIsOpen(true);
    setShowPrompt(false);
    setHasUnread(false);
  };

  // Smart knowledge base responder
  const generateBotReply = (query) => {
    const q = query.toLowerCase().trim();

    if (q.includes('привет') || q.includes('здравствуй') || q.includes('добрый день') || q.includes('хай') || q.includes('салют')) {
      return {
        text: 'Здравствуйте! Рада вас приветствовать. О чем рассказать подробнее: о курсе с Синхронизацией, авторских лекциях или ароматерапии SLUU?',
        actionLabel: 'Смотреть курс',
        actionLink: '#course'
      };
    }

    if (q.includes('материал') || q.includes('лекци') || q.includes('доступ') || q.includes('гардероб') || q.includes('лееринг')) {
      return {
        text: 'Авторские лекции Насти посвящены искусству лееринга (как безошибочно смешивать парфюмы, 2 500 ₽) и созданию идеального парфюмерного гардероба (1 500 ₽). Доступ открывается сразу после оплаты бессрочно.',
        actionLabel: 'Перейти к лекциям',
        actionLink: '#course'
      };
    }

    if (q.includes('оплат') || q.includes('купить') || q.includes('карт') || q.includes('за рубеж') || q.includes('цена') || q.includes('стоим') || q.includes('скидк') || q.includes('промокод')) {
      return {
        text: 'Оплата лекций и аудиогида проходит моментально онлайн российскими и зарубежными картами. Скидка 15% на флагманский курс «Синхронизации» действует автоматически при переходе по ссылке!',
        actionLabel: 'Курс со скидкой 15%',
        actionLink: '#course'
      };
    }

    if (q.includes('аудиогид') || q.includes('квентин') || q.includes('наушник') || q.includes('бутик')) {
      return {
        text: 'Парфюмерный аудиогид «Красота невидимого» (30-40 мин) со скидкой 990 ₽ (вместо 1 350 ₽). Включайте в наушниках в магазине, чтобы сразу тестировать шедевры без суеты.',
        actionLabel: 'Слушать аудиогид',
        actionLink: 'https://nastyasivets.com/page128351466.html'
      };
    }

    if (q.includes('sluu') || q.includes('слу') || q.includes('масл') || q.includes('бленд') || q.includes('магазин') || q.includes('ozon') || q.includes('wb') || q.includes('вайлдбер')) {
      return {
        text: 'SLUU Aromatherapy — авторский бренд Насти Сивец: 100% натуральные бленды эфирных масел терапевтического класса для фокуса, снятия стресса и сна. Заказывайте на sluu.club, Ozon и Wildberries!',
        actionLabel: 'Магазин sluu.club',
        actionLink: 'https://sluu.club/shop?utm_source=site_nastya'
      };
    }

    if (q.includes('оберег') || q.includes('мерч') || q.includes('хейтер')) {
      return {
        text: '«Оберег от хейтеров» — культовый лимитированный талисман Насти Сивец для защиты вашего ольфакторного дзена. Тираж строго ограничен!',
        actionLabel: 'Заказать оберег',
        actionLink: 'https://nastyasivets.com/page217407809.html'
      };
    }

    if (q.includes('день рождени') || q.includes('14 ноября') || q.includes('др') || q.includes('поздрав')) {
      return {
        text: 'День рождения Насти — 14 ноября! Спасибо за внимание и теплоту! ✨',
        actionLabel: 'Поздравить в Telegram',
        actionLink: 'https://t.me/nastyasivets'
      };
    }

    if (q.includes('менеджер') || q.includes('человек') || q.includes('сотрудничеств') || q.includes('pr') || q.includes('реклам') || q.includes('связаться') || q.includes('телефон') || q.includes('почт')) {
      return {
        text: 'По вопросам рекламы, интеграций, участия в мероприятиях или решения сложных вопросов с оплатой — напишите напрямую в Telegram-бот команды Насти:',
        actionLabel: 'Написать в Telegram @sivets_requestsbot',
        actionLink: 'https://t.me/sivets_requestsbot'
      };
    }

    // Default thoughtful reply
    return {
      text: `Благодарю за вопрос «${query}»! Я передала его команде Насти. Чтобы получить персональный ответ за пару минут, нажмите кнопку ниже для перехода в Telegram-бот заботы:`,
      actionLabel: 'Открыть Telegram-бот поддержки',
      actionLink: 'https://t.me/sivets_requestsbot'
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    soundEngine.playClick();
    setInputValue('');

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: 'сейчас'
    };

    setChatHistory((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Natural assistant typing latency
    setTimeout(() => {
      const replyData = generateBotReply(text);
      soundEngine.playChime(659, 0.4);
      setIsTyping(false);

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyData.text,
        actionLink: replyData.actionLink,
        actionLabel: replyData.actionLabel,
        time: 'сейчас'
      };

      setChatHistory((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleQuickQuestion = (type) => {
    handleOpen();
    if (type === 'materials') {
      handleSendMessage('Вопрос по материалам и лекциям');
    } else if (type === 'payment') {
      handleSendMessage('Вопрос по оплате и скидкам');
    } else if (type === 'sluu') {
      handleSendMessage('Где купить продукцию SLUU?');
    } else if (type === 'manager') {
      handleSendMessage('Связаться с менеджером');
    }
  };

  return (
    <aside aria-label="Служба заботы Насти" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none">
      {/* Speech Bubble & Quick Chips (hidden on mobile, shown on tablet/desktop) */}
      {!isOpen && showPrompt && (
        <div className="mb-3 hidden md:flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-3 duration-300 pointer-events-auto">
          {/* Main Speech Card - Clickable to open chat */}
          <div
            onClick={handleOpen}
            className="relative rounded-2xl bg-white px-4 py-3 text-xs sm:text-sm font-medium text-stone-800 shadow-xl border border-stone-200/90 max-w-[260px] text-right cursor-pointer hover:border-stone-400 transition-all hover:scale-[1.02]"
            title="Нажмите, чтобы открыть диалог"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPrompt(false);
              }}
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 flex items-center justify-center text-xs cursor-pointer shadow-xs"
              aria-label="Скрыть"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="leading-snug font-semibold text-stone-900">
              Добрый день! Напишите нам, мы поможем
            </p>
          </div>

          {/* Quick Action Chips */}
          <div className="flex flex-col items-end gap-1.5">
            <button
              onClick={() => handleQuickQuestion('materials')}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F878B3]/10 text-[#F878B3] border border-[#F878B3]/50 text-xs font-bold tracking-wide shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Вопрос по материалам
            </button>
            <button
              onClick={() => handleQuickQuestion('payment')}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F878B3]/10 text-[#F878B3] border border-[#F878B3]/50 text-xs font-bold tracking-wide shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F878B3] hover:bg-[#e8559a] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer pointer-events-auto group ring-4 ring-white/60"
          aria-label="Открыть онлайн-чат поддержки"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#e8559a] text-white text-[10px] sm:text-[11px] font-bold flex items-center justify-center ring-2 ring-white">
              1
            </span>
          )}
        </button>
      )}

      {/* Expanded Interactive Chat Modal */}
      {isOpen && (
        <div className="w-[94vw] sm:w-[400px] h-[540px] max-h-[82vh] rounded-3xl bg-white border border-stone-200/90 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 pointer-events-auto">
          {/* Chat Header */}
          <div className="px-5 py-4 bg-[#FAF8F5] border-b border-stone-200 flex items-center justify-between shrink-0">
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
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Закрыть чат"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 font-sans text-sm sm:text-base bg-[#FCFBFA]">
            {chatHistory.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-in fade-in duration-200`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#F878B3] text-white font-medium rounded-br-xs'
                      : 'bg-white text-stone-900 border border-stone-200/90 rounded-bl-xs font-normal'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Direct Action Link in Bot Reply */}
                  {msg.actionLink && (
                    <a
                      href={msg.actionLink}
                      target={msg.actionLink.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F878B3]/15 hover:bg-[#F878B3] text-stone-900 hover:text-white font-bold text-xs sm:text-sm transition-colors"
                    >
                      <span>{msg.actionLabel || 'Открыть'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <span className="text-xs text-stone-400 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-stone-600 text-xs sm:text-sm bg-white px-4 py-2.5 rounded-2xl w-fit border border-stone-200/70 shadow-2xs animate-in fade-in">
                <span className="font-medium">Ассистент печатает</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F878B3] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F878B3] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F878B3] animate-bounce [animation-delay:0.4s]" />
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Choice Buttons inside Chat */}
          <div className="px-3.5 py-2.5 bg-white border-t border-stone-100 flex gap-2.5 overflow-x-auto no-scrollbar shrink-0">
            <button
              onClick={() => handleQuickQuestion('materials')}
              className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-100 hover:bg-[#F878B3]/15 hover:text-[#F878B3] transition-colors cursor-pointer"
            >
              📚 Материалы
            </button>
            <button
              onClick={() => handleQuickQuestion('payment')}
              className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-100 hover:bg-[#F878B3]/15 hover:text-[#F878B3] transition-colors cursor-pointer"
            >
              💳 Оплата
            </button>
            <button
              onClick={() => handleQuickQuestion('sluu')}
              className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-100 hover:bg-[#F878B3]/15 hover:text-[#F878B3] transition-colors cursor-pointer"
            >
              🌿 SLUU
            </button>
            <button
              onClick={() => handleQuickQuestion('manager')}
              className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F878B3]/10 text-[#F878B3] hover:bg-[#F878B3] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>💬 Менеджер</span>
            </button>
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3.5 bg-white border-t border-stone-200 flex items-center gap-2.5 shrink-0"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Спросите о курсе, лекциях, SLUU..."
              className="flex-1 px-4 py-2.5 rounded-full bg-stone-100 text-sm sm:text-base text-stone-900 placeholder-stone-400 outline-none focus:ring-1 focus:ring-[#F878B3]"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#F878B3] hover:bg-[#f762a6] text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
              aria-label="Отправить сообщение"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}
    </aside>
  );
}
