import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { OPPORTUNITIES_DATA } from '../../data/opportunities';
import { ArrowUpRight, TrendingUp, CheckCircle2 } from 'lucide-react';

export function OpportunitiesSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background Architectural Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('home.opportunities.eyebrow')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-1">
              {t('home.opportunities.title')}
            </h2>
            <p className="text-xs sm:text-sm text-text-light/80 mt-2 max-w-xl">
              {t('home.opportunities.subtitle')}
            </p>
          </div>
          <Link
            to={`/${language}/opportunities`}
            className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-white transition-colors group"
          >
            <span>{t('home.opportunities.viewAll')}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
          </Link>
        </div>

        {/* Opportunity Showcase Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OPPORTUNITIES_DATA.map((opp, idx) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="bg-navy-dark/90 border border-gold/30 rounded-card p-6 md:p-8 flex flex-col justify-between hover:border-gold transition-colors shadow-elevated group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-xs font-bold rounded-full">
                    {opp.type[language] || opp.type.ar}
                  </span>
                  <span className="text-xs text-text-light/60 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-gold" />
                    {opp.sector[language] || opp.sector.ar}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                  {opp.title[language] || opp.title.ar}
                </h3>

                <p className="text-xs sm:text-sm text-text-light/90 leading-relaxed">
                  {opp.description[language] || opp.description.ar}
                </p>

                {/* Advantage Highlights */}
                {opp.advantages && (
                  <div className="pt-2 border-t border-border-dark space-y-2">
                    {opp.advantages[language]?.map((adv, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs text-text-light/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{adv}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-border-dark flex items-center justify-between">
                <span className="text-xs text-gold/90 font-medium">
                  {opp.investmentSize[language] || opp.investmentSize.ar}
                </span>
                <Link
                  to={`/${language}/contact`}
                  className="px-4 py-2 bg-gold hover:bg-gold-dark text-navy font-bold text-xs rounded-btn transition-colors flex items-center gap-1.5"
                >
                  <span>{t('common.contactUs')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-90" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
