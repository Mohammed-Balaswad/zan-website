import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { Eye, Target, Compass, Award, Building } from 'lucide-react';

export function AboutVisionMission() {
  const { t, isRTL } = useLanguage();

  const principles = [
    { icon: Compass, text: t('aboutPage.visionMission.principles.opportunities') },
    { icon: Award, text: t('aboutPage.visionMission.principles.management') },
    { icon: Building, text: t('aboutPage.visionMission.principles.alliances') },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-surface-offwhite py-20 md:py-28 lg:py-32">
      <div className="relative z-10 mx-auto max-w-container px-4 md:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl space-y-3 md:mb-18"
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('aboutPage.visionMission.eyebrow')}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            {t('aboutPage.visionMission.heading')}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Vision Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col overflow-hidden rounded-card border border-border/80 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl sm:p-10"
          >
            <div className={`absolute top-0 h-1 w-24 bg-gold transition-all duration-300 group-hover:w-full ${isRTL ? 'right-0' : 'left-0'}`} />

            {/* Header inside card */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-navy">
                  {t('aboutPage.visionMission.vision.label')}
                </h3>
              </div>
            </div>

            {/* Main Title */}
            <p className="text-xl font-extrabold leading-snug tracking-tight text-navy sm:text-2xl">
              {t('aboutPage.visionMission.vision.title')}
            </p>

            {/* Supporting Description with balanced spacing */}
            <p className="mt-5 text-sm leading-relaxed text-text-muted">
              {t('aboutPage.visionMission.vision.supporting')}
            </p>
          </motion.article>

          {/* Mission Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-card border border-border/80 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl sm:p-10"
          >
            <div className={`absolute top-0 h-1 w-24 bg-gold transition-all duration-300 group-hover:w-full ${isRTL ? 'right-0' : 'left-0'}`} />

            <div>
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-navy">
                    {t('aboutPage.visionMission.mission.label')}
                  </h3>
                </div>
              </div>

              {/* Main Title */}
              <p className="text-xl font-extrabold leading-snug tracking-tight text-navy sm:text-2xl">
                {t('aboutPage.visionMission.mission.title')}
              </p>

              {/* Supporting Description */}
              <p className="mt-5 text-sm leading-relaxed text-text-muted">
                {t('aboutPage.visionMission.mission.supporting')}
              </p>
            </div>

            {/* Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-border/60">
              {principles.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-navy/80 bg-surface-offwhite p-2.5 rounded-lg border border-border/40 transition-colors duration-200 hover:border-gold/40 hover:bg-gold/5">
                    <Icon className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="truncate">{item.text}</span>
                  </div>
                );
              })}
            </div>

          </motion.article>

        </div>
      </div>
    </section>
  );
}