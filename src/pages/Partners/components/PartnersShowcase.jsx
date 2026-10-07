import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

const PARTNERS = [
  {
    id: 'orienz',
    logo: '/images/partners/orienz.svg',
    nameKey: 'home.partners.names.orienz',
  },
  {
    id: 'wathbah',
    logo: '/images/partners/wathbah.svg',
    nameKey: 'home.partners.names.wathbah',
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
];

export function PartnersShowcase() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      className="relative overflow-hidden bg-surface-offwhite py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        {/* Section Introduction */}
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
                {t('partnersPage.showcase.eyebrow')}
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[2.7rem]">
              {t('partnersPage.showcase.title')}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-[2] text-text-muted sm:text-base lg:col-span-5 lg:pb-1">
            {t('partnersPage.showcase.subtitle')}
          </p>
        </motion.div>

        {/* Partner Directory */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mt-14 border-t border-navy/15 md:mt-20"
        >
          <div dir={isRTL ? 'rtl' : 'ltr'}>
            {PARTNERS.map((partner, index) => (
              <motion.article
                key={partner.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="
                  group relative
                  border-b border-navy/10
                  py-7
                  transition-colors duration-300
                  hover:bg-white/60
                  sm:py-8
                  lg:py-9
                "
              >
                <div
                  className="
                    grid grid-cols-[44px_1fr]
                    items-center gap-5
                    sm:grid-cols-[56px_180px_1fr]
                    sm:gap-8
                    lg:grid-cols-[64px_240px_1fr_auto]
                    lg:gap-10
                  "
                >
                  {/* Index */}
                  <span
                    className="
                      self-start pt-2
                      font-mono text-xs font-semibold
                      tracking-wide text-gold/70
                      sm:text-sm
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Logo */}
                  <div
                    className="
                      col-start-2 flex h-16
                      items-center justify-start
                      sm:col-start-auto
                      sm:h-20
                      sm:justify-center
                    "
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={t(partner.nameKey)}
                        loading="lazy"
                        className="
                          max-h-16 max-w-[170px]
                          w-auto object-contain
                          opacity-80
                          grayscale
                          transition-all duration-500
                          group-hover:opacity-100
                          group-hover:grayscale-0
                          sm:max-h-20
                          sm:max-w-[190px]
                        "
                      />
                    ) : (
                      <span
                        className="
                          text-xs font-medium
                          tracking-wide text-text-muted/70
                        "
                      >
                        {t(partner.nameKey)}
                      </span>
                    )}
                  </div>

                  {/* Partner Name */}
                  <div
                    className="
                      col-start-2
                      mt-1
                      sm:col-start-auto
                      sm:mt-0
                    "
                  >
                    <h3
                      className="
                        text-lg font-bold
                        tracking-tight text-navy
                        transition-colors duration-300
                        group-hover:text-gold-dark
                        sm:text-xl
                        lg:text-2xl
                      "
                    >
                      {t(partner.nameKey)}
                    </h3>

                    <p className="mt-1.5 text-xs text-text-muted">
                      {t('partnersPage.showcase.partnerLabel')}
                    </p>
                  </div>

                  {/* Hover Marker */}
                  <div
                    aria-hidden="true"
                    className="
                      hidden
                      h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-navy/10
                      text-gold
                      transition-all duration-300
                      group-hover:border-gold
                      lg:flex
                    "
                  >
                    <span
                      className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-gold
                        transition-transform duration-300
                        group-hover:scale-125
                      "
                    />
                  </div>
                </div>

                {/* Gold Hover Line */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute bottom-0 h-[2px] w-0
                    bg-gold transition-all duration-500
                    group-hover:w-14
                    ${isRTL ? 'right-0' : 'left-0'}
                  `}
                />
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center gap-4 md:mt-12"
        >
          <span className="h-px w-10 shrink-0 bg-gold/50" />

          <p className="text-xs font-medium leading-[1.9] text-text-muted sm:text-sm">
            {t('partnersPage.showcase.footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}