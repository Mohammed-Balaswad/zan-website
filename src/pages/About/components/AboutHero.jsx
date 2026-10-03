import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { IMAGES } from '../../../constants/images';
import { ShieldCheck, TrendingUp, Layers, ChevronDown } from 'lucide-react';

export function AboutHero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative -mt-20 w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-navy-dark text-white pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={"/images/zan-about-hero.png"}
          alt="ZAN Institutional Architecture"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.55] contrast-[1.08] transition-transform duration-1000"
        />

        {/* Cinematic Top-to-Bottom Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-navy-dark/40 to-navy-dark/60" />

        {/* Directional Scrim for Content Contrast */}
        <div
          className={`absolute inset-0 ${isRTL
              ? 'bg-gradient-to-l from-navy-dark/60 via-navy-dark/50 to-transparent'
              : 'bg-gradient-to-r from-navy-dark/60 via-navy-dark/50 to-transparent'
            }`}
        />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#C6A15B_1px,transparent_1px),linear-gradient(to_bottom,#C6A15B_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8 w-full my-auto">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6 backdrop-blur-xl shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />

            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('aboutPage.hero.eyebrow')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ lineHeight: '1.25', paddingBottom: '0.2rem' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-[1.4] sm:leading-[1.35] tracking-tight mb-6"
          >
            {t('aboutPage.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-3xl mb-10"
          >
            {t('aboutPage.hero.subtitle')}
          </motion.p>

          {/* Institutional Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-navy-dark/40 backdrop-blur-md border border-white/10 shadow-2xl"
          >
            {/* Saudi Market */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-white/60 block font-medium">
                  {t('aboutPage.hero.highlights.marketLabel')}
                </span>

                <span className="text-sm font-bold text-white block mt-1">
                  {t('aboutPage.hero.highlights.marketValue')}
                </span>
              </div>
            </div>

            {/* Integrated Model */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 shadow-inner">
                <Layers className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-white/60 block font-medium">
                  {t('aboutPage.hero.highlights.focusLabel')}
                </span>

                <span className="text-sm font-bold text-white block mt-1">
                  {t('aboutPage.hero.highlights.focusValue')}
                </span>
              </div>
            </div>

            {/* Sustainable Value */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 shadow-inner">
                <TrendingUp className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-white/60 block font-medium">
                  {t('aboutPage.hero.highlights.objectiveLabel')}
                </span>

                <span className="text-sm font-bold text-white block mt-1">
                  {t('aboutPage.hero.highlights.objectiveValue')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 animate-bounce hidden md:block">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}