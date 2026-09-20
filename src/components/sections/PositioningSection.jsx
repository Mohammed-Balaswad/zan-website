import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // تم إضافة استيراد Link لمنع الشاشة البيضاء
import { useLanguage } from '../../context/LanguageContext';
import {
  ArrowUpLeft,
  Building2,
  Search,
  Calculator,
  ClipboardList,
  Settings2,
  TrendingUp,
} from 'lucide-react';

const JOURNEY_ICONS = [
  Building2,
  Search,
  Calculator,
  ClipboardList,
  Settings2,
  TrendingUp,
];

const JOURNEY_KEYS = [
  'establishment',
  'market',
  'feasibility',
  'businessPlan',
  'operation',
  'development',
];

export function PositioningSection() {
  const { t, language } = useLanguage(); // تم تضمين language هنا لكي يعمل الراوت بنجاح

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface-offwhite"
    >
      {/* ─────────────────────────────────────────────
          INTRO / POSITIONING
      ───────────────────────────────────────────── */}
      <div className="max-w-container mx-auto px-5 md:px-8 py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-xl mx-auto lg:mx-0">

              <div
                aria-hidden="true"
                className="hidden lg:block absolute -bottom-5 -left-5 w-28 h-28 border-l border-b border-gold/50 rounded-bl-3xl pointer-events-none"
              />

              <div
                aria-hidden="true"
                className="hidden lg:block absolute -top-5 -right-5 w-28 h-28 border-t border-r border-gold/50 rounded-tr-3xl pointer-events-none"
              />

              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={"/images/about-section-image.webp"}
                  alt={t('home.positioning.imageAlt')}
                  className="w-full aspect-[4/5] object-cover object-center"
                />

                {/* subtle image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
              </div>

              {/* Small label */}
              <div className="absolute -bottom-4 right-6 md:right-8 backdrop-blur-md bg-navy-dark/50 text-white px-5 py-3 rounded-xl shadow-xl border border-gold/30 flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                    ZAN
                  </span>
                  <span className="block mt-0.5 text-xs font-medium tracking-wide">
                    {t('home.positioning.imageLabel')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-bold tracking-wide text-gold">
                {t('home.positioning.eyebrow')}
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-navy-dark">
              {t('home.positioning.title')}
            </h2>

            {/* Description */}
            <div className="mt-7 max-w-2xl space-y-4 text-sm sm:text-base leading-8 text-gray-600">
              <p>{t('home.positioning.paragraph1')}</p>
              <p>{t('home.positioning.paragraph2')}</p>
            </div>

            {/* Positioning statement */}
            <div className="mt-9 flex items-start gap-4 border-s-2 border-gold ps-5">
              <div>
                <span className="block text-xs font-bold text-gold mb-1">
                  {t('home.positioning.statementLabel')}
                </span>

                <p className="text-base sm:text-lg font-bold text-navy-dark leading-8">
                  {t('home.positioning.statement')}
                </p>
              </div>
            </div>

            {/* CTA / continuation */}
            <Link
              to={`/${language}/about`}
              className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-navy-dark group cursor-pointer transition-all duration-300"
            >
              <span className="transition-colors duration-300 group-hover:text-gold">
                {t('home.positioning.journeyIntro')}
              </span>

              <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gold text-gold transition-all duration-300 group-hover:bg-gold">
                <ArrowUpLeft className="w-4 h-4 rtl:-scale-x-100 text-gold transition-all duration-300 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          ZAN JOURNEY
      ───────────────────────────────────────────── */}
      <div className="relative bg-navy-dark text-white overflow-hidden">

        {/* Background architectural lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
        >
          <div className="absolute -top-40 -end-40 w-[520px] h-[520px] rounded-full border border-white" />
          <div className="absolute -top-28 -end-28 w-[400px] h-[400px] rounded-full border border-white" />
          <div className="absolute -top-16 -end-16 w-[280px] h-[280px] rounded-full border border-white" />
        </div>

        <div className="relative max-w-container mx-auto px-5 md:px-8 py-16 md:py-20 lg:py-24">

          {/* Journey heading */}
          <div className="max-w-2xl mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-bold tracking-wide text-gold">
                {t('home.positioning.journeyEyebrow')}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
              {t('home.positioning.journeyTitle')}
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-7 text-white/70">
              {t('home.positioning.journeyDescription')}
            </p>
          </div>

          {/* Journey timeline */}
          <div className="relative">

            {/* Desktop connecting line */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-[27px] start-[8%] end-[8%] h-px bg-white/15"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-5">
              {JOURNEY_KEYS.map((key, index) => {
                const Icon = JOURNEY_ICONS[index];

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: 'easeOut',
                    }}
                    className="relative group"
                  >
                    {/* Number / node */}
                    <div className="relative z-10 flex items-center gap-3 lg:block">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white/15 bg-navy-dark text-gold transition-all duration-300 group-hover:border-gold/60 group-hover:bg-gold group-hover:text-navy-dark">
                        <Icon className="w-5 h-5" strokeWidth={1.7} />
                      </div>

                      <span className="lg:block mt-3 text-[10px] font-bold tracking-[0.18em] text-white/40">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-1 lg:mt-4 ps-[68px] sm:ps-[68px] lg:ps-0">
                      <h4 className="text-sm font-bold text-white leading-6">
                        {t(`home.positioning.journey.${key}.title`)}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-white/60">
                        {t(`home.positioning.journey.${key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-14 lg:mt-16 pt-7 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm font-medium text-white/70">
              {t('home.positioning.journeyBottom')}
            </p>

            <span className="text-xs font-bold tracking-wider text-gold">
              ZAN — {t('home.positioning.tagline')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}