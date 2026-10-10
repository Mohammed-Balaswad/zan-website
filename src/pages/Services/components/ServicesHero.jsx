import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { ShieldCheck, Calculator, TrendingUp, ArrowDown } from 'lucide-react';

export function ServicesHero() {
  const { t, isRTL } = useLanguage();

  const highlights = [
    {
      id: 'marketEntry',
      icon: ShieldCheck,
      labelKey: 'servicesPage.hero.highlights.marketEntry.label',
      valueKey: 'servicesPage.hero.highlights.marketEntry.value',
    },
    {
      id: 'feasibilityPlan',
      icon: Calculator,
      labelKey: 'servicesPage.hero.highlights.feasibilityPlan.label',
      valueKey: 'servicesPage.hero.highlights.feasibilityPlan.value',
    },
    {
      id: 'operationsGrowth',
      icon: TrendingUp,
      labelKey: 'servicesPage.hero.highlights.operationsGrowth.label',
      valueKey: 'servicesPage.hero.highlights.operationsGrowth.value',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative -mt-20 w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-navy-dark text-white pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Background Image with Balanced Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={"/images/zan-services-hero.png"}
          alt="ZAN Institutional Services in Saudi Arabia"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.85] contrast-[1.06] transition-transform duration-1000"
        />

        {/* Cinematic Scrims - Zero Competition */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/30 to-navy-dark/60" />
        <div
          className={`absolute inset-0 ${
            isRTL
              ? 'bg-gradient-to-l from-navy-dark/90 via-navy-dark/60 to-transparent'
              : 'bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-transparent'
          }`}
        />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#C6A15B_1px,transparent_1px),linear-gradient(to_bottom,#C6A15B_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Main Content */}
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
              {t('servicesPage.hero.eyebrow')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ lineHeight: '1.25', paddingBottom: '0.2rem' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold text-white tracking-tight mb-6 drop-shadow-md"
          >
            {t('servicesPage.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-3xl mb-8 drop-shadow"
          >
            {t('servicesPage.hero.subtitle')}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              type="button"
              onClick={() => scrollToSection('services-list')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-navy font-bold text-sm rounded-btn transition-colors shadow-subtle cursor-pointer"
            >
              <span>{t('servicesPage.hero.exploreButton')}</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('journey')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium text-sm rounded-btn border border-white/20 transition-colors backdrop-blur-sm cursor-pointer"
            >
              <span>{t('servicesPage.hero.journeyButton')}</span>
            </button>
          </motion.div>

          {/* Institutional Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-navy-dark/50 backdrop-blur-md border border-white/10 shadow-2xl"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/60 block font-medium">
                      {t(item.labelKey)}
                    </span>
                    <span className="text-sm font-bold text-white block mt-0.5">
                      {t(item.valueKey)}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}