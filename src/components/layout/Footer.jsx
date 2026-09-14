import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Mail, Globe } from 'lucide-react';

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy-dark">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border-dark">
          {/* Brand Info */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-black tracking-wider text-white font-latin">
                ZAN
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold font-latin mt-0.5">
                Global Investments
              </p>
            </div>
            <p className="text-xs text-text-light leading-relaxed">
              {t('common.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-xs text-text-light">
              <li>
                <Link to={`/${language}/about`} className="hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/projects`} className="hover:text-white transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/opportunities`} className="hover:text-white transition-colors">
                  {t('nav.opportunities')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/services`} className="hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Partnerships & Partners */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider">
              {t('nav.partnerships')}
            </h3>
            <ul className="space-y-2 text-xs text-text-light">
              <li>
                <Link to={`/${language}/partners`} className="hover:text-white transition-colors">
                  {t('nav.partners')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/partnerships`} className="hover:text-white transition-colors">
                  {t('nav.partnerships')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/contact`} className="hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider">
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-2.5 text-xs text-text-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{t('footer.officialEmail')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{t('footer.domain')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-text-light gap-4">
          <p>{t('footer.rights')}</p>
          <p className="text-[11px] text-text-light/60">zanglobal.sa</p>
        </div>
      </div>
    </footer>
  );
}
