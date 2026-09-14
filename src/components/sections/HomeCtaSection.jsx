import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { IMAGES } from '../../constants/images';
import { ArrowUpRight, Building2 } from 'lucide-react';

export function HomeCtaSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-surface-offwhite">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-card overflow-hidden bg-navy text-white p-8 sm:p-12 md:p-16 border border-gold/40 shadow-elevated"
        >
          {/* Architectural Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.ctaBanner}
              alt="ZAN Corporate Development"
              className="w-full h-full object-cover object-center filter brightness-50 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/90 to-navy-dark/80" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mb-2">
              <Building2 className="w-6 h-6" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {t('home.cta.title')}
            </h2>

            <p className="text-xs sm:text-sm text-text-light/90 leading-relaxed">
              {t('home.cta.subtitle')}
            </p>

            <div className="pt-4">
              <Link
                to={`/${language}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-navy font-bold text-sm rounded-btn transition-colors shadow-subtle group"
              >
                <span>{t('home.cta.button')}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
