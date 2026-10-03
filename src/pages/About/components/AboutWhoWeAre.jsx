import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { IMAGES } from '../../../constants/images';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';

export function AboutWhoWeAre() {
  const { t, isRTL, language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: t('aboutPage.whoWeAre.journey.discovery.title'),
      desc: t('aboutPage.whoWeAre.journey.discovery.desc'),
    },
    {
      number: '02',
      title: t('aboutPage.whoWeAre.journey.partnership.title'),
      desc: t('aboutPage.whoWeAre.journey.partnership.desc'),
    },
    {
      number: '03',
      title: t('aboutPage.whoWeAre.journey.operations.title'),
      desc: t('aboutPage.whoWeAre.journey.operations.desc'),
    },
    {
      number: '04',
      title: t('aboutPage.whoWeAre.journey.value.title'),
      desc: t('aboutPage.whoWeAre.journey.value.desc'),
    },
  ];

  // Automatically move through the journey.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="relative overflow-hidden bg-surface-offwhite py-20 md:py-28 lg:py-32">
      {/* Decorative background detail */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[-140px] ${
          isRTL ? 'left-[-100px]' : 'right-[-100px]'
        } h-[300px] w-[300px] rounded-full border border-gold/30`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[-190px] ${
          isRTL ? 'left-[-150px]' : 'right-[-150px]'
        } h-[400px] w-[400px] rounded-full border border-gold/20`}
      />

      <div className="relative z-10 mx-auto max-w-container px-4 md:px-8">
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-12 lg:gap-20">

          {/* =========================================================
              IMAGE SIDE
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex lg:order-2 lg:col-span-5"
          >
            <div className="relative mx-auto flex w-full max-w-[560px] flex-col">
              {/* Gold architectural frame */}
              <div
                aria-hidden="true"
                className="absolute -left-5 -top-5 h-[72%] w-[58%] rounded-[24px] bg-gold/55 sm:-left-6 sm:-top-6"
              />

              {/* Main image container stretching to full height */}
              <div className="relative z-10 flex flex-1 overflow-hidden rounded-[20px] bg-navy shadow-[0_30px_70px_-30px_rgba(6,20,33,0.35)]">
                <img
                  src={IMAGES.aboutWhoWeAre}
                  alt={t('aboutPage.whoWeAre.title')}
                  className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.025]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-transparent to-transparent" />

                {/* Image caption */}
                <div
                  className={`absolute bottom-0 ${
                    isRTL ? 'right-0 text-right' : 'left-0 text-left'
                  } max-w-[75%] p-6 sm:p-7`}
                >
                  <span className="mb-2 block h-px w-10 bg-gold" />

                  <p className="text-sm font-semibold leading-relaxed text-white sm:text-base">
                    {t('aboutPage.whoWeAre.imageCaption')}
                  </p>

                  <span className="mt-1 block text-[10px] font-medium tracking-[0.16em] text-white/55">
                    ZAN GLOBAL INVESTMENTS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              CONTENT SIDE
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className={`flex flex-col justify-between lg:order-1 lg:col-span-7 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          >
            <div>
              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs font-bold tracking-[0.18em] text-gold">
                  {t('aboutPage.whoWeAre.eyebrow')}
                </span>
              </div>

              {/* Main heading - تم توحيد مقاسه ليكون متوافقاً مع الهيكل العام */}
              <h2 className="max-w-2xl text-2xl font-extrabold leading-snug tracking-tight text-navy sm:text-3xl md:text-4xl">
                {t('aboutPage.whoWeAre.title')}
              </h2>

              {/* Copy */}
              <div className="mt-7 max-w-2xl space-y-4">
                <p className="text-base font-medium leading-[1.9] text-text-dark sm:text-lg">
                  {t('aboutPage.whoWeAre.paragraph1')}
                </p>

                <p className="text-sm leading-[1.9] text-text-muted sm:text-base">
                  {t('aboutPage.whoWeAre.paragraph2')}
                </p>
              </div>

              {/* =====================================================
                  JOURNEY / AUTO PLAY TIMELINE (2x2 on Mobile, 4 in a row on Desktop)
              ===================================================== */}
              <div className="mt-12">
                <div className="relative" dir={isRTL ? 'rtl' : 'ltr'}>
                  
                  {/* Desktop connecting line (hidden on mobile) */}
                  <div className="absolute left-0 right-0 top-[11px] hidden h-px bg-navy/15 sm:block" />

                  {/* Grid layout: 2 columns on mobile/tablet, 4 columns on desktop */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-4">
                    {steps.map((step, index) => {
                      const isActive = activeStep === index;

                      return (
                        <div key={step.number} className="relative">
                          {/* Node with solid background */}
                          <div className="relative z-10 mb-4 flex justify-start sm:mb-5">
                            <motion.span
                              animate={{
                                scale: isActive ? 1 : 0.9,
                                backgroundColor: isActive ? '#C6A15B' : '#fcfbf9',
                                borderColor: isActive ? '#C6A15B' : 'rgba(6, 20, 33, 0.25)',
                                boxShadow: isActive
                                  ? '0 0 0 6px rgba(198,161,91,0.15)'
                                  : '0 0 0 0 rgba(198,161,91,0)',
                              }}
                              transition={{
                                duration: 0.4,
                                ease: [0.25, 1, 0.5, 1],
                              }}
                              className="flex h-[22px] w-[22px] items-center justify-center rounded-full border bg-surface-offwhite"
                            >
                              {isActive && (
                                <span className="h-2 w-2 rounded-full bg-white" />
                              )}
                            </motion.span>
                          </div>

                          {/* Number */}
                          <motion.span
                            animate={{
                              color: isActive ? '#C6A15B' : '#9CA3AF',
                            }}
                            transition={{ duration: 0.3 }}
                            className="block text-[11px] font-bold tracking-widest"
                          >
                            {step.number}
                          </motion.span>

                          {/* Step title */}
                          <motion.h3
                            animate={{
                              color: isActive ? '#061421' : '#6B7280',
                              opacity: isActive ? 1 : 0.65,
                            }}
                            transition={{ duration: 0.3 }}
                            className="mt-1.5 text-xs font-bold leading-relaxed sm:mt-2 sm:text-[15px]"
                          >
                            {step.title}
                          </motion.h3>

                          {/* Step description */}
                          <motion.p
                            animate={{
                              color: isActive ? '#1F2937' : '#9CA3AF',
                              opacity: isActive ? 1 : 0.6,
                            }}
                            transition={{ duration: 0.3 }}
                            className="mt-1.5 max-w-[180px] text-[11px] leading-[1.7] sm:mt-2 sm:text-xs sm:leading-[1.8]"
                          >
                            {step.desc}
                          </motion.p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                SERVICES CTA
            ================================================     */}
            <div>
              <a
                href={`/${language}/services`}
                className="group mt-9 inline-flex items-center gap-3 text-sm font-bold text-navy-dark transition-all duration-300"
              >
                <span className="transition-colors duration-300 group-hover:text-gold">
                  {t('aboutPage.whoWeAre.journey.cta')}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold transition-all duration-300 group-hover:bg-gold">
                  {isRTL ? (
                    <ArrowUpLeft className="h-4 w-4 text-gold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-gold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-white" />
                  )}
                </span>
              </a>
            </div>

          </motion.div>
        </div>
        
      </div>
      
    </section>
  );
}