import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import {
  Building2,
  Search,
  Calculator,
  ClipboardList,
  Wrench,
  Settings2,
  TrendingUp,
} from 'lucide-react';

export function AboutApproach() {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      num: t('aboutPage.approach.steps.establishment.number'),
      title: t('aboutPage.approach.steps.establishment.title'),
      desc: t('aboutPage.approach.steps.establishment.desc'),
      icon: Building2,
    },
    {
      num: t('aboutPage.approach.steps.market.number'),
      title: t('aboutPage.approach.steps.market.title'),
      desc: t('aboutPage.approach.steps.market.desc'),
      icon: Search,
    },
    {
      num: t('aboutPage.approach.steps.feasibility.number'),
      title: t('aboutPage.approach.steps.feasibility.title'),
      desc: t('aboutPage.approach.steps.feasibility.desc'),
      icon: Calculator,
    },
    {
      num: t('aboutPage.approach.steps.businessPlan.number'),
      title: t('aboutPage.approach.steps.businessPlan.title'),
      desc: t('aboutPage.approach.steps.businessPlan.desc'),
      icon: ClipboardList,
    },
    {
      num: t('aboutPage.approach.steps.preparation.number'),
      title: t('aboutPage.approach.steps.preparation.title'),
      desc: t('aboutPage.approach.steps.preparation.desc'),
      icon: Wrench,
    },
    {
      num: t('aboutPage.approach.steps.operation.number'),
      title: t('aboutPage.approach.steps.operation.title'),
      desc: t('aboutPage.approach.steps.operation.desc'),
      icon: Settings2,
    },
    {
      num: t('aboutPage.approach.steps.development.number'),
      title: t('aboutPage.approach.steps.development.title'),
      desc: t('aboutPage.approach.steps.development.desc'),
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white border-b border-border/70 overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('aboutPage.approach.eyebrow')}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            {t('aboutPage.approach.title')}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-text-muted leading-relaxed font-normal">
            {t('aboutPage.approach.subtitle')}
          </p>
        </div>

        {/* ================= DESKTOP HORIZONTAL TIMELINE (Hidden on smaller screens) ================= */}
        <div className="hidden xl:block relative pt-6 pb-4">
          {/* Continuous Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute top-[42px] inset-x-6 h-0.5 bg-border z-0"
          />

          <div className="grid grid-cols-7 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group relative flex flex-col"
                >
                  {/* Node Circle & Number */}
                  <div className="flex items-center justify-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-surface-offwhite border-2 border-border group-hover:border-gold group-hover:bg-gold transition-all duration-300 flex items-center justify-center text-navy group-hover:text-navy-dark shadow-subtle flex-shrink-0 z-10">
                      <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Step Sequence Badge */}
                  <span className="text-[10px] font-bold font-mono tracking-widest text-gold uppercase mb-1.5 block">
                    STEP {step.num}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-sm font-bold text-navy leading-snug mb-2 group-hover:text-gold transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[11px] text-text-muted leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= TABLET & MOBILE VERTICAL TIMELINE ================= */}
        <div className="xl:hidden relative pt-2">
          {/* Vertical Connecting Line */}
          <div
            aria-hidden="true"
            className={`absolute top-6 bottom-6 ${isRTL ? 'right-6' : 'left-6'} w-0.5 bg-border z-0`}
          />

          <div className="space-y-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isRTL ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className={`flex items-start gap-4 sm:gap-6 ${isRTL ? 'pr-0 sm:pr-2' : 'pl-0 sm:pl-2'} group`}
                >
                  {/* Vertical Node Icon Marker */}
                  <div className="w-12 h-12 rounded-full bg-surface-offwhite border-2 border-border group-hover:border-gold group-hover:bg-gold text-navy group-hover:text-navy-dark flex items-center justify-center shadow-subtle flex-shrink-0 z-10 transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Content Container */}
                  <div className="pt-1 flex-1">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-gold uppercase block mb-1">
                      STEP {step.num}
                    </span>
                    <h3 className="text-base font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
