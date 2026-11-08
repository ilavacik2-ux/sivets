import React from 'react';
import { SITE_DATA } from '../data/content';

export default function OlfactivePersona() {
  const { manifesto } = SITE_DATA;

  return (
    <section id="persona" className="py-16 sm:py-20 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto scroll-mt-24 text-center">
      <div className="w-10 h-[1px] bg-[#f878b3] mx-auto mb-8 opacity-70" />
      
      <h2 className="font-serif text-2xl sm:text-4xl font-normal text-stone-900 tracking-tight mb-8">
        Ольфакторная персона <span className="italic font-light text-stone-500">& философия</span>
      </h2>

      <blockquote className="font-serif italic text-xl sm:text-3xl lg:text-[2.2rem] font-light text-stone-800 leading-[1.35] max-w-3xl mx-auto">
        &laquo;{manifesto.quote}&raquo;
      </blockquote>
    </section>
  );
}
