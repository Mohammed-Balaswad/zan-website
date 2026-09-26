import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { IMAGES } from '../../../constants/images';
import { ShieldCheck, TrendingUp, Layers } from 'lucide-react';

export function AboutHero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-navy-dark text-white py-16 md:py-24 lg:py-28 border-b border-border/10">
      {/* Background Architectural Scrim & Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.aboutHero}
          alt="ZAN Institutional Architecture"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.32] contrast-[1.08] transition-transform duration-1000"
        />
        {/* Subtle multi-layer gradient overlays for pristine editorial contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy-dark/75 to-navy-dark" />
        <div
          className={`absolute inset-0 ${
            isRTL
              ? 'bg-gradient-to-l from-navy-dark/95 via-navy-dark/70 to-transparent'
              : 'bg-gradient-to-r from-navy-dark/95 via-navy-dark/70 to-transparent'
          }`}
        />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(to_right,#C6A15B_1px,transparent_1px),linear-gradient(to_bottom,#C6A15B_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('aboutPage.hero.eyebrow')}
            </span>
          </motion.div>

          {/* Institutional Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.2] tracking-tight mb-6"
          >
            {t('aboutPage.hero.title')}
          </motion.h1>

          {/* Subtitle / Supporting description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-normal max-w-3xl mb-12"
          >
            {t('aboutPage.hero.subtitle')}
          </motion.p>

          {/* Core Institutional Attributes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-white/50 block">
                  {isRTL ? 'البيئة الاستثمارية' : 'Market Stewardship'}
                </span>
                <span className="text-sm font-bold text-white block mt-0.5">
                  {isRTL ? 'السوق السعودي' : 'Saudi Market'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold flex-shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-white/50 block">
                  {isRTL ? 'منهجية العمل' : 'Core Focus'}
                </span>
                <span className="text-sm font-bold text-white block mt-0.5">
                  {isRTL ? 'منظومة متكاملة' : 'Integrated Model'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-white/50 block">
                  {isRTL ? 'الغاية المؤسسية' : 'Long-Term Objective'}
                </span>
                <span className="text-sm font-bold text-white block mt-0.5">
                  {isRTL ? 'قيمة مستدامة' : 'Sustainable Value'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
