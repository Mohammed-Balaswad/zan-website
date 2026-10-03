import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { BriefcaseBusiness, Settings2, TrendingUp } from 'lucide-react';

export function AboutModel() {
  const { t, isRTL } = useLanguage();

  const dimensions = [
    {
      num: t('aboutPage.model.dimensions.investment.number'),
      title: t('aboutPage.model.dimensions.investment.title'),
      desc: t('aboutPage.model.dimensions.investment.desc'),
      icon: BriefcaseBusiness,
    },
    {
      num: t('aboutPage.model.dimensions.operations.number'),
      title: t('aboutPage.model.dimensions.operations.title'),
      desc: t('aboutPage.model.dimensions.operations.desc'),
      icon: Settings2,
    },
    {
      num: t('aboutPage.model.dimensions.development.number'),
      title: t('aboutPage.model.dimensions.development.title'),
      desc: t('aboutPage.model.dimensions.development.desc'),
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-22 lg:py-26 text-white">
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

      <div className="relative z-10 mx-auto max-w-container px-4 md:px-8">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-9 bg-gold" />

            <span className="text-[11px] font-bold tracking-[0.2em] text-gold">
              {t('aboutPage.model.eyebrow')}
            </span>

            <span className="h-px w-9 bg-gold" />
          </div>

          {/* Main heading */}
          <h2 className="text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
            {t('aboutPage.model.title')}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-[1.9] text-white/65 sm:text-base">
            {t('aboutPage.model.subtitle')}
          </p>
        </motion.div>

        {/* =========================================================
            INTEGRATED MODEL
        ========================================================= */}
        <div dir={isRTL ? 'rtl' : 'ltr'} className="relative mt-12 md:mt-16">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch relative">
            {dimensions.map((item, index) => {
              const Icon = item.icon;
              const isNotLast = index < dimensions.length - 1;

              return (
                <div key={item.num} className="relative flex items-center">
                  <motion.article
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    className="group relative flex flex-col justify-between w-full h-full p-5 md:p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-gold/40 transition-all duration-300 z-10"
                  >
                    <div className="w-full">
                      
                      {/* الحاوية الأولى: الأيقونة والرقم */}
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-mono text-2xl font-semibold tracking-tight text-gold/90 sm:text-3xl">
                          {item.num}
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-navy text-gold transition-all duration-300 group-hover:border-gold/50 group-hover:bg-gold group-hover:text-navy shadow-md">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      {/* الحاوية الثانية: العنوان الرئيسي والوصف */}
                      <div className={`relative ${isRTL ? 'text-right' : 'text-left'}`}>
                        <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-xs leading-[1.8] text-white/60 sm:text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.article>

                  {/* خط فاصل بين البطاقات للشاشات الكبيرة */}
                  {isNotLast && (
                    <div 
                      aria-hidden="true" 
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-6 h-[2px] bg-gold/40 z-0 ${
                        isRTL ? '-left-6' : '-right-6'
                      }`} 
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            SYNTHESIS / CLOSING STATEMENT
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative mx-auto mt-14 max-w-6xl overflow-hidden border border-gold/25 bg-white/[0.035] md:mt-18 rounded-xl"
        >
          {/* Accent line */}
          <div
            aria-hidden="true"
            className={`absolute top-0 h-[2px] w-36 bg-gold ${
              isRTL ? 'right-0' : 'left-0'
            }`}
          />

          <div
            className={`flex flex-col gap-6 px-6 py-7 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between ${
              isRTL ? 'lg:text-right' : 'lg:text-left'
            }`}
          >
            <div>
              <h4 className="text-xs md:text-sm font-bold tracking-[0.15em] text-gold">
                {t('aboutPage.model.synthesis.title')}
              </h4>

              <p className="mt-3 max-w-3xl text-xs md:text-sm leading-[1.9] text-white/75">
                {t('aboutPage.model.synthesis.desc')}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="h-px w-10 bg-gold/50" />

              <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(198,161,91,0.10)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}