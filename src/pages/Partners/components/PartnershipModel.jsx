import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

export function PartnershipModel() {
  const { t, isRTL } = useLanguage();

  const stages = [
    {
      number: '01',
      key: 'partnersPage.model.stages.alignment',
    },
    {
      number: '02',
      key: 'partnersPage.model.stages.integration',
    },
    {
      number: '03',
      key: 'partnersPage.model.stages.execution',
    },
    {
      number: '04',
      key: 'partnersPage.model.stages.growth',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28 lg:py-32">
      {/* Subtle architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Top accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-container px-4 md:px-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-16"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-gold" />

              <span className="text-[11px] font-bold tracking-[0.18em] text-gold">
                {t('partnersPage.model.eyebrow')}
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
              {t('partnersPage.model.title')}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-[2] text-white/60 sm:text-base lg:col-span-5 lg:pb-1">
            {t('partnersPage.model.subtitle')}
          </p>
        </motion.div>

        {/* Partnership Path */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mt-16 md:mt-20 lg:mt-24"
        >
          <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className="relative"
          >
            {/* Connecting line */}
            <div
              aria-hidden="true"
              className="
                absolute top-[15px]
                hidden h-px
                bg-gradient-to-r from-gold/20 via-gold/55 to-gold/20
                lg:block
                left-[6%] right-[6%]
              "
            />

            <div className="grid grid-cols-1 lg:grid-cols-4">
              {stages.map((stage, index) => (
                <motion.article
                  key={stage.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="
                    group relative
                    border-b border-white/10
                    py-8
                    last:border-b-0
                    lg:border-b-0
                    lg:px-7
                    lg:py-0
                    first:lg:ps-0
                    last:lg:pe-0
                  "
                >
                  {/* Node */}
                  <div className="relative z-10 flex items-center gap-4 lg:block">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-navy">
                      <span className="h-2 w-2 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150" />
                    </div>

                    <span className="font-mono text-[11px] tracking-[0.16em] text-gold/70 lg:mt-5 lg:block">
                      {stage.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-5 ps-12 lg:ps-0">
                    <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-gold sm:text-2xl">
                      {t(`${stage.key}.title`)}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-[1.9] text-white/55">
                      {t(`${stage.key}.description`)}
                    </p>
                  </div>

                  {/* Mobile accent */}
                  <span
                    aria-hidden="true"
                    className={`
                      absolute bottom-0 h-[2px] w-0
                      bg-gold transition-all duration-500
                      group-hover:w-10
                      lg:hidden
                      ${isRTL ? 'right-0' : 'left-0'}
                    `}
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 flex max-w-4xl items-center gap-4 md:mt-16"
        >
          <span className="h-px w-10 shrink-0 bg-gold/40" />

          <p className="text-xs font-medium leading-[1.9] text-white/45 sm:text-sm">
            {t('partnersPage.model.closing')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}