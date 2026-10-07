import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export function ServicesOverview() {
  const { t, isRTL } = useLanguage();

  const dimensions = [
    {
      number: '01',
      key: 'servicesPage.overview.dimensions.investment',
    },
    {
      number: '02',
      key: 'servicesPage.overview.dimensions.planning',
    },
    {
      number: '03',
      key: 'servicesPage.overview.dimensions.operations',
    },
    {
      number: '04',
      key: 'servicesPage.overview.dimensions.development',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface-offwhite py-20 md:py-28 lg:py-32">

      <div className="relative z-10 mx-auto max-w-container px-4 md:px-8">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold sm:w-10" />

            <span className="text-[12px] font-bold tracking-[0.18em] text-gold">
              {t('servicesPage.overview.eyebrow')}
            </span>

            <span className="h-px w-8 bg-gold sm:w-10" />
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[2.7rem]">
            {t('servicesPage.overview.title')}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-[2] text-text-muted sm:text-base">
            {t('servicesPage.overview.subtitle')}
          </p>
        </motion.div>

        {/* Integrated Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mx-auto mt-16 max-w-6xl md:mt-20"
        >
          <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className="relative"
          >
            {/* Connecting line */}
            <div
              aria-hidden="true"
              className="
                absolute top-[31px] hidden h-px
                bg-gradient-to-r from-transparent via-gold/45 to-transparent
                lg:block
                left-[12.5%] right-[12.5%]
              "
            />

            <div className="grid grid-cols-1 lg:grid-cols-4">
              {dimensions.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="
                    group relative
                    border-b border-navy/10
                    px-5 py-8
                    last:border-b-0
                    lg:border-b-0
                    lg:px-7 lg:py-0
                  "
                >
                  {/* Number / node */}
                  <div className="relative z-10 flex items-center gap-4 lg:block">
                    <div
                      className="
                        flex h-16 w-16 shrink-0 items-center justify-center
                        rounded-full border border-gold/35
                        bg-surface-offwhite
                        transition-all duration-300
                        group-hover:border-gold
                        group-hover:bg-gold
                      "
                    >
                      <span
                        className="
                          font-mono text-sm font-semibold text-gold
                          transition-colors duration-300
                          group-hover:text-navy
                        "
                      >
                        {item.number}
                      </span>
                    </div>

                    <div className="lg:mt-7">
                      <h3
                        className="
                          text-xl font-bold tracking-tight text-navy
                          transition-colors duration-300
                          group-hover:text-gold-dark
                          sm:text-2xl
                        "
                      >
                        {t(`${item.key}.title`)}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-[1.9] text-text-muted">
                        {t(`${item.key}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Mobile / tablet separator accent */}
                  <span
                    aria-hidden="true"
                    className={`
                      absolute bottom-0 h-[2px] w-0
                      bg-gold transition-all duration-300
                      group-hover:w-10
                      lg:hidden
                      ${isRTL ? 'right-5' : 'left-5'}
                    `}
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-4 text-center md:mt-16"
        >
          <span className="hidden h-px w-12 bg-gold/40 sm:block" />

          <p className="text-xs font-medium leading-[1.9] text-text-muted sm:text-sm">
            {t('servicesPage.overview.closing')}
          </p>

          <span className="hidden h-px w-12 bg-gold/40 sm:block" />
        </motion.div>
      </div>
    </section>
  );
}