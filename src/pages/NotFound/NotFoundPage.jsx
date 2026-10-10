import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function NotFoundPage() {
  const { language, t } = useLanguage();

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-surface-offwhite px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        {/* Error Code Container */}
        <div className="relative mb-6 inline-block">
          <span 
            dir="ltr" 
            style={{ fontFamily: 'Tajawal, sans-serif' }}
            className="text-8xl font-black tracking-tight text-[#0B1F33] md:text-9xl tabular-nums inline-block select-none"
          >
            404
          </span>
          <div className="absolute -bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-[#C6A15B]" />
        </div>

        {/* Page Title */}
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-[#0B1F33] md:text-3xl">
          {t('notFound.title')}
        </h1>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-md text-sm leading-7 text-[#66717C] md:text-base">
          {t('notFound.description')}
        </p>

        {/* Call to Actions (CTA) */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Home Button */}
          <Link
            to={`/${language}`}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0B1F33] px-7 text-sm font-medium text-white transition-all hover:bg-[#061421] sm:w-auto shadow-sm"
          >
            <Home size={17} className="text-[#C6A15B]" />
            <span>{t('notFound.backHome')}</span>
          </Link>

          {/* Contact Us Button */}
          <Link
            to={`/${language}/contact`}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#0B1F33]/20 bg-white px-7 text-sm font-medium text-[#0B1F33] transition-all hover:border-[#C6A15B] hover:text-[#C6A15B] sm:w-auto"
          >
            <Mail size={17} className="text-[#C6A15B]" />
            <span>{t('notFound.contactUs')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}