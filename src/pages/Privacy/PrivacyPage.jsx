import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpLeft, Clock3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function PrivacyPage() {
  const { language, t, isRTL } = useLanguage();

  const sections = t('privacyPage.sections', {
    returnObjects: true,
  });

  const contactPath = `/${language}/contact`;

  return (
    <main className="min-h-screen bg-surface-offwhite">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        <div className="relative mx-auto max-w-container px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
              <ShieldCheck size={25} strokeWidth={1.6} />
            </div>

            <p className="mb-4 text-sm font-semibold tracking-wide text-gold">
              {t('privacyPage.eyebrow')}
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              {t('privacyPage.title')}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
              {t('privacyPage.intro')}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
              <Clock3 className="h-4 w-4 shrink-0 text-gold" />

              <span>{t('privacyPage.updatedLabel')}:</span>

              <time dateTime="2026-10-11">
                {t('privacyPage.updatedDate')}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="mx-auto max-w-container px-5 py-12 md:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          {/* Side Note */}
          <aside className="h-fit rounded-2xl border border-[#E5E7EB] bg-white p-6 lg:sticky lg:top-28">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7F6F2] text-[#C6A15B]">
              <ShieldCheck size={21} />
            </div>

            <p className="mt-4 text-sm font-semibold text-[#0B1F33]">
              {t('privacyPage.title')}
            </p>

            <p className="mt-3 text-sm leading-7 text-[#66717C]">
              {t('privacyPage.closing')}
            </p>

            <Link
              to={contactPath}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F33] transition-colors hover:text-[#C6A15B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
            >
              <span>{t('privacyPage.contactLink')}</span>

              <ArrowUpLeft
                className={`h-4 w-4 ${isRTL ? '' : 'rotate-90'}`}
              />
            </Link>
          </aside>

          {/* Sections */}
          <div className="space-y-5">
            {Array.isArray(sections) &&
              sections.map((section, index) => (
                <article
                  key={`${index}-${section.title}`}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8"
                >
                  <h2 className="text-lg font-bold leading-8 text-[#0B1F33] md:text-xl">
                    {section.title}
                  </h2>

                  <p className="mt-4 whitespace-pre-line text-sm leading-8 text-[#66717C] md:text-base">
                    {section.body}
                  </p>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}