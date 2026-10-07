import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Mail, Phone, ArrowUpLeft } from 'lucide-react';

export function Footer() {
  const { language, t, isRTL } = useLanguage();

  const homePath = `/${language}`;

  const quickLinks = [
    { to: homePath, label: t('nav.home') },
    { to: `/${language}/about`, label: t('nav.about') },
    { to: `/${language}/services`, label: t('nav.services') },
    { to: `/${language}/partners`, label: t('nav.partners') },
  ];

  // دالة موحدة لكل الروابط للتحقق مما إذا كنا في نفس الصفحة
  const handleLinkClick = (e, targetPath) => {
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    const normalizedTarget = targetPath.replace(/\/+$/, '') || '/';

    if (currentPath === normalizedTarget) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* Architectural subtle grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Subtle top accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-container px-4 pb-8 pt-14 md:px-8 md:pt-16">
        {/* Main Footer */}
        <div
          className="
            grid grid-cols-1 gap-12
            pb-12
            md:grid-cols-2
            lg:grid-cols-12
            lg:gap-16
          "
        >
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              to={homePath}
              onClick={(e) => handleLinkClick(e, homePath)}
              className="
                inline-block rounded-btn py-1
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-gold
              "
              aria-label={t('common.companyName')}
            >
              <img
                src="/images/ZAN-LOGO-2.svg"
                alt={t('common.companyName')}
                className="
                  h-9 w-auto max-w-[165px]
                  object-contain
                  brightness-0 invert
                  transition-transform duration-300
                  hover:scale-[1.02]
                "
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-[2] text-white/60">
              {t('common.tagline')}
            </p>

            <Link
              to={`/${language}/contact`}
              onClick={(e) => handleLinkClick(e, `/${language}/contact`)}
              className="
                group mt-7 inline-flex items-center gap-3
                text-sm font-semibold text-white/75
                transition-colors duration-300
                hover:text-gold
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-gold
                rounded-btn
              "
            >
              <span>{t('footer.contactCta')}</span>

              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full border border-white/15
                  text-gold
                  transition-all duration-300
                  group-hover:border-gold
                  group-hover:bg-gold
                  group-hover:text-navy
                "
              >
                <ArrowUpLeft
                  className={`h-3.5 w-3.5 ${
                    isRTL ? '' : 'rotate-90'
                  }`}
                />
              </span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-[0.12em] text-gold">
              {t('footer.quickLinks')}
            </h3>

            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={(e) => handleLinkClick(e, link.to)}
                    className="
                      inline-block text-sm text-white/60
                      transition-colors duration-300
                      hover:text-white
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-gold
                      rounded-sm
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold tracking-[0.12em] text-gold">
              {t('footer.contactInfo')}
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-white/60">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />

                <span className="leading-relaxed">
                  {t('footer.address')}
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />

                <a
                  href={`mailto:${t('footer.officialEmail')}`}
                  className="
                    transition-colors duration-300
                    hover:text-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-gold
                    rounded-sm
                  "
                >
                  {t('footer.officialEmail')}
                </a>
              </li>

              {/* Primary Phone */}
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />

                <a
                  href={`tel:${t('footer.phonePrimary').replace(/\s/g, '')}`}
                  aria-label={t('footer.phonePrimary')}
                  dir="ltr"
                  className="
                    transition-colors duration-300
                    hover:text-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-gold
                    rounded-sm
                  "
                >
                  {t('footer.phonePrimary')}
                </a>
              </li>

              {/* Secondary Phone */}
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />

                <a
                  href={`tel:${t('footer.phoneSecondary').replace(/\s/g, '')}`}
                  aria-label={t('footer.phoneSecondary')}
                  dir="ltr"
                  className="
                    transition-colors duration-300
                    hover:text-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-gold
                    rounded-sm
                  "
                >
                  {t('footer.phoneSecondary')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex flex-col items-center justify-between
            gap-4 border-t border-white/10
            pt-7
            text-xs
            md:flex-row
          "
        >
          <p className="text-xs text-white/45">
            {t('footer.rights')}
          </p>

          <span className="select-none text-[11px] tracking-wide text-white/30">
            {t('footer.domain')}
          </span>
        </div>
      </div>
    </footer>
  );
}