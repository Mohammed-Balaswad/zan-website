import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { language, t, isRTL } = useLanguage();

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Image with Cinematic Refined Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/riyadh-hero-3.jpg"
          alt="Riyadh Skyline Architecture - ZAN Global Investments"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-90 transition-transform duration-1000"
        />
        {/* Top Vignette Gradient for Navbar Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy-dark/20 to-navy-dark/60" />

        {/* Directional Scrim for Editorial Readability */}
        <div
          className={`absolute inset-0 ${
            isRTL
              ? 'bg-gradient-to-l from-navy-dark/90 via-navy-dark/55 to-transparent'
              : 'bg-gradient-to-r from-navy-dark/90 via-navy-dark/55 to-transparent'
          }`}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('home.hero.eyebrow')}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] tracking-tight mb-6 drop-shadow-sm"
          >
            {t('home.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-normal mb-10 max-w-2xl"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              to={`/${language}/opportunities`}
              className="px-8 py-4 bg-gold hover:bg-gold-dark text-navy-dark font-bold text-sm rounded-btn transition-all duration-200 flex items-center justify-center gap-2 shadow-elevated group"
            >
              <span>{t('home.hero.primaryCta')}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90 text-navy-dark" />
            </Link>

            <Link
              to={`/${language}/about`}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-btn border border-white/25 transition-all duration-200 flex items-center justify-center text-center backdrop-blur-md"
            >
              {t('home.hero.secondaryCta')}
            </Link>
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
