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
            <Link
              to={`/${language}`}
              onClick={(e) => {
                if (window.location.pathname === `/${language}` || window.location.pathname === `/${language}/`) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-block group cursor-pointer py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-btn"
              aria-label={t('common.companyName')}
            >
              <img
                src="/images/ZAN-LOGO-2.svg"
                alt="ZAN Global Investments Logo"
                className="h-7 sm:h-8 md:h-9 w-auto max-w-[130px] sm:max-w-[150px] object-contain transition-all duration-300 brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] group-hover:scale-[1.02]"
              />
            </Link>
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