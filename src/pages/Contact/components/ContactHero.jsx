import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { ChevronDown, Handshake, TrendingUp, Building2, ArrowDown } from 'lucide-react';

export function ContactHero() {
  const { t, isRTL } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scopes = [
    {
      key: 'investment',
      icon: TrendingUp,
    },
    {
      key: 'partnership',
      icon: Handshake,
    },
    {
      key: 'projects',
      icon: Building2,
    },
  ];

  return (
    <section className="relative -mt-20 w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-navy-dark text-white pt-28 pb-20 md:pt-32 md:pb-24">
      {/* Background Image with Balanced Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={"/images/zan-contact-hero.webp"}
          alt="Contact With Us"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.85] contrast-[1.06] transition-transform duration-1000"
        />

        {/* Cinematic Top-to-Bottom Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/30 to-navy-dark/60" />

        {/* Directional Scrim for Content Contrast & Zero Competition */}
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
              {t('contactPage.hero.eyebrow')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ lineHeight: '1.25', paddingBottom: '0.2rem' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.4] sm:leading-[1.35] tracking-tight mb-6 drop-shadow-md"
          >
            {t('contactPage.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-3xl mb-8 drop-shadow"
          >
            {t('contactPage.hero.subtitle')}
          </motion.p>

          {/* Action CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-4 mb-12"
          >
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-navy font-bold text-sm rounded-btn transition-colors shadow-subtle cursor-pointer"
            >
              <span>{t('contactPage.hero.contactButton')}</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Scopes Grid (Clean 3-Column Border Layout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid max-w-3xl grid-cols-1 border-y border-white/15 sm:grid-cols-3"
          >
            {scopes.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className={`flex items-center gap-3 py-4 sm:px-5 ${
                  index !== 0 ? 'border-t border-white/10 sm:border-t-0 sm:border-s' : ''
                }`}
              >
                <Icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="text-sm text-white/85">
                  {t(`contactPage.hero.scopes.${key}`)}
                </span>
              </div>
            ))}
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