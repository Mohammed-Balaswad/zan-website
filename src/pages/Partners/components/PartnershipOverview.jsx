import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

export function PartnershipOverview() {
  const { t, isRTL } = useLanguage();

  const dimensions = [
    {
      number: '01',
      key: 'partnersPage.overview.dimensions.expertise',
    },
    {
      number: '02',
      key: 'partnersPage.overview.dimensions.integration',
    },
    {
      number: '03',
      key: 'partnersPage.overview.dimensions.value',
    },
  ];

  return (
    <section
      id="partners-overview"
      className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div
          dir={isRTL ? 'rtl' : 'ltr'}
          className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20"
        >
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-gold" />

              <span className="text-[11px] font-bold tracking-[0.18em] text-gold">
                {t('partnersPage.overview.eyebrow')}
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-3xl font-black leading-[1.2] tracking-tight text-navy sm:text-4xl lg:text-[2.7rem]">
              {t('partnersPage.overview.title')}
            </h2>

            <div
              className={`
                mt-8 border-gold
                ${
                  isRTL
                    ? 'border-r-2 pr-6'
                    : 'border-l-2 pl-6'
                }
              `}
            >
              <p className="max-w-xl text-xl font-semibold leading-[1.7] tracking-tight text-navy sm:text-2xl">
                {t('partnersPage.overview.statement')}
              </p>
            </div>

            <p className="mt-7 max-w-xl text-sm leading-[2] text-text-muted sm:text-base">
              {t('partnersPage.overview.subtitle')}
            </p>
          </motion.div>

          {/* Partnership Dimensions */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 lg:flex lg:items-center"
          >
            <div className="w-full border-t border-navy/10">
              {dimensions.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="
                    group grid grid-cols-[52px_1fr]
                    gap-5 border-b border-navy/10
                    py-7 sm:grid-cols-[64px_1fr]
                    sm:gap-7 sm:py-8
                  "
                >
                  <span className="pt-1 font-mono text-sm font-semibold tracking-wide text-gold/80">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-navy transition-colors duration-300 group-hover:text-gold-dark sm:text-2xl">
                      {t(`${item.key}.title`)}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-[1.9] text-text-muted sm:text-base">
                      {t(`${item.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}