import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { Briefcase, Cog, TrendingUp, ArrowRight, ArrowDown } from 'lucide-react';

export function AboutModel() {
  const { t, isRTL } = useLanguage();

  const dimensions = [
    {
      num: t('aboutPage.model.dimensions.investment.number'),
      title: t('aboutPage.model.dimensions.investment.title'),
      role: t('aboutPage.model.dimensions.investment.role'),
      desc: t('aboutPage.model.dimensions.investment.desc'),
      icon: Briefcase,
    },
    {
      num: t('aboutPage.model.dimensions.operations.number'),
      title: t('aboutPage.model.dimensions.operations.title'),
      role: t('aboutPage.model.dimensions.operations.role'),
      desc: t('aboutPage.model.dimensions.operations.desc'),
      icon: Cog,
    },
    {
      num: t('aboutPage.model.dimensions.development.number'),
      title: t('aboutPage.model.dimensions.development.title'),
      role: t('aboutPage.model.dimensions.development.role'),
      desc: t('aboutPage.model.dimensions.development.desc'),
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-navy text-white relative overflow-hidden border-b border-white/10">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest">
              {t('aboutPage.model.eyebrow')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight"
          >
            {t('aboutPage.model.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-white/75 leading-relaxed font-normal"
          >
            {t('aboutPage.model.subtitle')}
          </motion.p>
        </div>

        {/* Integrated 3-Dimension Pipeline */}
        <div className="relative">
          {/* Desktop Connecting Track Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[72px] inset-x-12 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 z-0 opacity-40"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {dimensions.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative rounded-card p-6 sm:p-8 bg-navy-dark/80 backdrop-blur-sm border border-white/10 hover:border-gold/50 transition-all duration-300 group shadow-subtle flex flex-col justify-between"
                >
                  {/* Top Bar with Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl sm:text-3xl font-extrabold font-mono text-gold tracking-tight">
                        {item.num}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-navy-dark transition-all duration-300">
                        <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Role Pill */}
                    <span className="inline-block px-2.5 py-1 rounded bg-white/5 text-[10px] sm:text-[11px] font-semibold text-gold mb-3 border border-gold/25">
                      {item.role}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Flow indicator for mobile */}
                  {idx < 2 && (
                    <div className="lg:hidden flex justify-center pt-4 text-gold/60">
                      <ArrowDown className="w-5 h-5 animate-pulse" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Synergy Synthesis Outcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-6 sm:p-8 rounded-card bg-gradient-to-r from-navy-dark via-navy-light/40 to-navy-dark border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated"
        >
          <div className="space-y-1 text-center md:text-start">
            <span className="text-xs font-bold uppercase tracking-wider text-gold block">
              {t('aboutPage.model.synthesis.title')}
            </span>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
              {t('aboutPage.model.synthesis.desc')}
            </p>
          </div>

          <div className="flex-shrink-0 px-5 py-2.5 rounded-btn bg-gold text-navy-dark font-extrabold text-xs sm:text-sm tracking-wide shadow-subtle flex items-center gap-2">
            <span>{isRTL ? 'النمو والتوسع المستدام' : 'Sustainable Growth & Scale'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
