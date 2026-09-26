import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { IMAGES } from '../../../constants/images';
import { CheckCircle2, Compass, Cpu, Target } from 'lucide-react';

export function AboutWhoWeAre() {
  const { t, isRTL } = useLanguage();

  const pillars = [
    {
      icon: Compass,
      title: t('aboutPage.whoWeAre.pillars.market.title'),
      desc: t('aboutPage.whoWeAre.pillars.market.desc'),
    },
    {
      icon: Cpu,
      title: t('aboutPage.whoWeAre.pillars.operations.title'),
      desc: t('aboutPage.whoWeAre.pillars.operations.desc'),
    },
    {
      icon: Target,
      title: t('aboutPage.whoWeAre.pillars.value.title'),
      desc: t('aboutPage.whoWeAre.pillars.value.desc'),
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white border-b border-border/70 overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                {t('aboutPage.whoWeAre.eyebrow')}
              </span>
            </div>

            {/* Editorial Statement */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy leading-[1.25] tracking-tight">
              {t('aboutPage.whoWeAre.title')}
            </h2>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base text-text-dark/85 leading-relaxed font-normal">
              {t('aboutPage.whoWeAre.paragraph1')}
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
              {t('aboutPage.whoWeAre.paragraph2')}
            </p>

            {/* Quote / Highlight Principle Block */}
            <div className={`p-5 rounded-lg bg-surface-offwhite border-t-2 sm:border-t-0 ${isRTL ? 'sm:border-r-4' : 'sm:border-l-4'} border-gold shadow-subtle`}>
              <p className="text-xs sm:text-sm font-medium text-navy leading-relaxed italic">
                "{t('aboutPage.whoWeAre.paragraph3')}"
              </p>
            </div>

            {/* 3 Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface-offwhite/60 border border-border/60 transition-colors duration-200 hover:border-gold/40"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Subtle Asymmetric Corner Borders */}
              <div
                aria-hidden="true"
                className={`hidden sm:block absolute -top-4 ${isRTL ? '-right-4' : '-left-4'} w-24 h-24 border-t-2 ${isRTL ? 'border-r-2' : 'border-l-2'} border-gold/40 rounded-sm pointer-events-none`}
              />
              <div
                aria-hidden="true"
                className={`hidden sm:block absolute -bottom-4 ${isRTL ? '-left-4' : '-right-4'} w-24 h-24 border-b-2 ${isRTL ? 'border-l-2' : 'border-r-2'} border-gold/40 rounded-sm pointer-events-none`}
              />

              {/* Main Image Frame */}
              <div className="relative overflow-hidden rounded-card shadow-elevated bg-navy border border-border/80 group">
                <img
                  src={IMAGES.aboutWhoWeAre}
                  alt={t('aboutPage.whoWeAre.title')}
                  className="w-full aspect-[4/5] object-cover object-center filter brightness-95 group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
                
                {/* Floating Institutional Badge */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-navy-dark/90 backdrop-blur-md border border-white/15 text-white shadow-elevated flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gold font-bold">
                      {t('aboutPage.whoWeAre.imageBadgeLabel')}
                    </span>
                    <span className="block text-xs font-semibold text-white/95 mt-0.5">
                      {t('aboutPage.whoWeAre.imageBadgeTitle')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
