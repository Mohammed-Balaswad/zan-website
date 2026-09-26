import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { Eye, Target, Compass, Award, Building } from 'lucide-react';

export function AboutVisionMission() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-surface-offwhite border-b border-border/80 relative overflow-hidden">
      {/* Background Architectural Watermark / Geometry */}
      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18 space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('aboutPage.visionMission.eyebrow')}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            {isRTL ? 'الرؤية والرسالة المؤسسية' : 'Vision & Strategic Mission'}
          </h2>
        </div>

        {/* Bespoke Editorial Strategic Hierarchy (Not generic equal cards) */}
        <div className="space-y-8 lg:space-y-12">
          
          {/* 1. VISION - Primary Dominant Strategic Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 lg:p-14 rounded-card bg-white border border-border/80 shadow-soft relative overflow-hidden group"
          >
            {/* Top decorative gold bar */}
            <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-32 h-1 bg-gold`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Vision Label & Icon */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 border border-gold/30">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold block">
                    ZAN
                  </span>
                  <h3 className="text-2xl font-black text-navy mt-0.5">
                    {t('aboutPage.visionMission.vision.label')}
                  </h3>
                </div>
              </div>

              {/* Dominant Vision Statement */}
              <div className="lg:col-span-9 space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-navy leading-[1.3] tracking-tight">
                  "{t('aboutPage.visionMission.vision.title')}"
                </p>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-normal max-w-2xl">
                  {t('aboutPage.visionMission.vision.supporting')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. MISSION - Actionable Institutional Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-12 lg:p-14 rounded-card bg-navy text-white border border-white/10 shadow-elevated relative overflow-hidden"
          >
            {/* Top decorative accent bar */}
            <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-32 h-1 bg-gold`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Mission Label & Icon */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-gold flex items-center justify-center flex-shrink-0 border border-white/15">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold block">
                    ZAN
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">
                    {t('aboutPage.visionMission.mission.label')}
                  </h3>
                </div>
              </div>

              {/* Actionable Mission Statement */}
              <div className="lg:col-span-9 space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug tracking-tight">
                  "{t('aboutPage.visionMission.mission.title')}"
                </p>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal max-w-2xl">
                  {t('aboutPage.visionMission.mission.supporting')}
                </p>

                {/* Core Commitments Pill Row */}
                <div className="pt-4 flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/90">
                    <Compass className="w-3.5 h-3.5 text-gold" />
                    <span>{isRTL ? 'دراسة واختيار الفرص بعناية' : 'Disciplined Opportunity Selection'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/90">
                    <Award className="w-3.5 h-3.5 text-gold" />
                    <span>{isRTL ? 'حوكمة وإدارة احترافية' : 'Professional Governance'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/90">
                    <Building className="w-3.5 h-3.5 text-gold" />
                    <span>{isRTL ? 'تحالفات استراتيجية ممتدة' : 'Enduring Strategic Alliances'}</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
