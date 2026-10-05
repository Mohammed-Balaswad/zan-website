import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const PARTNERS = [
  {
    id: 'orienz',
    logo: '/images/partners/orienz.svg',
    nameKey: 'home.partners.names.orienz',
  },
  {
    id: 'madmadan',
    logo: '/images/partners/madmadan.svg',
    nameKey: 'home.partners.names.madmadan',
  },
  {
    id: 'rehlat-musafer',
    logo: '/images/partners/rehlat-musafer.svg',
    nameKey: 'home.partners.names.rehlatMusafer',
  },
  {
    id: 'sadr-alhijaz',
    logo: '/images/partners/sadr-alhijaz.svg',
    nameKey: 'home.partners.names.sadrAlhijaz',
  },
  {
    id: 'united-force',
    logo: '/images/partners/united-force.svg',
    nameKey: 'home.partners.names.unitedForce',
  },
  {
    id: 'wathbah',
    logo: '/images/partners/wathbah.svg',
    nameKey: 'home.partners.names.wathbah',
  },
];

export function PartnersSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="bg-surface-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold/60 sm:w-10" />

            <span className="text-[11px] font-bold tracking-[0.18em] text-gold">
              {t('home.partners.eyebrow')}
            </span>

            <span className="h-px w-8 bg-gold/60 sm:w-10" />
          </div>

          <h2 className="text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.65rem]">
            {t('home.partners.title')}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-[2] text-text-muted sm:text-base">
            {t('home.partners.subtitle')}
          </p>
        </motion.div>

        {/* Partners Logo Wall */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mx-auto mt-14 max-w-6xl border-y border-navy/10"
        >
          <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className="grid grid-cols-2 lg:grid-cols-6"
          >
            {PARTNERS.map((partner, index) => (
              <div
                key={partner.id}
                className={`
                  group relative flex min-h-[160px] items-center justify-center
                  px-6 py-10
                  transition-colors duration-300
                  hover:bg-white/70

                  ${index % 2 !== 0 ? 'border-s border-navy/10' : ''}

                  lg:border-s lg:border-navy/10
                  lg:first:border-s-0

                  ${index >= 2 ? 'border-t border-navy/10 lg:border-t-0' : ''}
                `}
              >
                <div className="flex w-full flex-col items-center justify-center gap-4">

                  {/* Logo */}
                  <div className="flex h-20 w-full items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={t(partner.nameKey)}
                      loading="lazy"
                      className="
                        max-h-20
                        max-w-[190px]
                        w-auto
                        object-contain

                        opacity-100
                        grayscale-0

                        lg:opacity-80
                        lg:grayscale

                        transition-all
                        duration-500

                        lg:group-hover:opacity-100
                        lg:group-hover:grayscale-0
                      "
                    />
                  </div>

                  {/* Partner Name */}
                  <span
                    className="
                      text-center
                      text-xs
                      font-medium
                      text-text-muted
                      transition-colors
                      duration-300
                      lg:group-hover:text-navy
                    "
                  >
                    {t(partner.nameKey)}
                  </span>
                </div>

                {/* Hover Accent */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute bottom-0 h-[2px] w-0
                    bg-gold
                    transition-all duration-300
                    lg:group-hover:w-10
                    ${isRTL
                      ? 'right-1/2 translate-x-1/2'
                      : 'left-1/2 -translate-x-1/2'}
                  `}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gold/50" />

          <span className="text-xs font-medium tracking-wide text-text-muted/80">
            {t('home.partners.footer')}
          </span>

          <span className="h-px w-10 bg-gold/50" />
        </motion.div>

      </div>
    </section>
  );
}