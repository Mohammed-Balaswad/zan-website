import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { SERVICES_JOURNEY_STAGES } from '../../../data/services';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';

export function ServicesJourney() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="journey" className="relative overflow-hidden bg-navy py-20 md:py-28 lg:py-32 text-white border-y border-white/10">
      {/* Architectural subtle grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8" dir={isRTL ? 'rtl' : 'ltr'}>
        
        {/* ================= Header ================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl mb-14 md:mb-20 space-y-3"
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('servicesPage.journey.eyebrow')}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('servicesPage.journey.title')}
          </h2>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
            {t('servicesPage.journey.subtitle')}
          </p>
        </motion.div>

        {/* ================= Desktop & Tablet Stepped Timeline ================= */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {SERVICES_JOURNEY_STAGES.map((stage, idx) => {
              const isLast = idx === SERVICES_JOURNEY_STAGES.length - 1;
              const title = t(`servicesPage.journey.steps.${stage.key}.title`);
              const desc = t(`servicesPage.journey.steps.${stage.key}.desc`);
              const stageLabelText = t('servicesPage.journey.stageLabel') || 'Stage';

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                  className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold/40 hover:bg-white/[0.05] transition-all duration-300 ${
                    idx === 6 ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Top: Step Number & Stage Indicator */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl sm:text-3xl font-black text-gold/90 font-arabic tracking-tight">
                        {stage.number}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-gold/10 border border-gold/25 text-gold">
                        {stageLabelText} {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                      {desc}
                    </p>
                  </div>

                  {/* Bottom Line Accent */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-white/40 text-xs">
                    <span className="font-mono text-[11px]">0{idx + 1} / 07</span>
                    {!isLast && (
                      <span className="text-gold/60 flex items-center gap-1 text-[11px]">
                        {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= Mobile Vertical Journey ================= */}
        <div className="block md:hidden">
          <div className="relative">
            {/* Continuous Vertical Connecting Line - Centered precisely with the w-9 (36px) circle center -> 18px */}
            <div
              className={`absolute top-4 bottom-4 ${
                isRTL ? 'right-[18px]' : 'left-[18px]'
              } w-0.5 bg-gradient-to-b from-gold via-gold/50 to-gold/20`}
            />

            <div className="space-y-6">
              {SERVICES_JOURNEY_STAGES.map((stage, idx) => {
                const title = t(`servicesPage.journey.steps.${stage.key}.title`);
                const desc = t(`servicesPage.journey.steps.${stage.key}.desc`);
                const stageLabelText = t('servicesPage.journey.stageLabel') || 'Stage';

                return (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Node Circle */}
                    <div className="relative z-10 w-9 h-9 rounded-full bg-navy border-2 border-gold flex items-center justify-center text-gold font-bold text-xs flex-shrink-0 shadow-lg mt-1">
                      {stage.number}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 p-5 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-gold">
                          {stageLabelText} {idx + 1}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed font-light">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= Journey Bottom Summary Strip ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
            <p className="text-xs sm:text-sm text-white/80 font-medium">
              {t('servicesPage.journey.bottomBar.text')}
            </p>
          </div>
          <span className="text-xs font-semibold text-gold tracking-wide flex-shrink-0">
            {t('servicesPage.journey.bottomBar.badge')}
          </span>
        </motion.div>

      </div>
    </section>
  );
}