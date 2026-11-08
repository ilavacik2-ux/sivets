import React, { useEffect } from 'react';
import { PUBLIC_OFFER_DATA } from '../data/offerData';
import { X, FileText, Printer, ShieldCheck } from 'lucide-react';

export default function PublicOfferModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/50 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#FAF8F5] text-[#1C1917] border border-stone-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200/80 bg-white/80 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F878B3]/15 text-[#F878B3] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-medium tracking-tight text-neutral-900">
                {PUBLIC_OFFER_DATA.title}
              </h2>
              <p className="text-[11px] text-stone-500 uppercase tracking-wider font-sans">
                {PUBLIC_OFFER_DATA.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-stone-600 hover:text-black hover:bg-stone-100 transition-colors cursor-pointer"
              title="Распечатать"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Печать</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-500 hover:text-black hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 space-y-8 font-sans text-sm text-stone-700 leading-relaxed">
          {PUBLIC_OFFER_DATA.sections.map((section) => (
            <div key={section.id} className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900 tracking-tight pt-2 border-t border-stone-200/60 first:border-none first:pt-0">
                {section.title}
              </h3>
              {section.content && (
                <div className="space-y-2.5 text-stone-600">
                  {section.content.map((p, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}
              {section.requisites && (
                <div className="mt-4 p-5 rounded-2xl bg-white border border-stone-200/80 space-y-1.5 text-xs text-stone-700 shadow-sm">
                  <div className="flex items-center gap-2 font-semibold text-stone-900 mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#F878B3]" />
                    <span>Юридические реквизиты</span>
                  </div>
                  <div><strong>Исполнитель:</strong> {section.requisites.name}</div>
                  <div><strong>ИНН:</strong> {section.requisites.inn}</div>
                  <div><strong>ОГРНИП:</strong> {section.requisites.ogrnip}</div>
                  <div><strong>Телефон:</strong> <a href={`tel:${section.requisites.phone}`} className="underline hover:text-black">{section.requisites.phone}</a></div>
                  <div><strong>Email:</strong> <a href={`mailto:${section.requisites.email}`} className="underline hover:text-black">{section.requisites.email}</a>, <a href={`mailto:${section.requisites.prEmail}`} className="underline hover:text-black">{section.requisites.prEmail}</a></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3 border-t border-stone-200/80 bg-stone-100/60 text-center text-xs text-stone-500 shrink-0">
          Актуальная редакция • ИП Сивец А.В. • ИНН 770705715731
        </div>
      </div>
    </div>
  );
}
