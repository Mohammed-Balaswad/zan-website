import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { Mail, MapPin, Phone, ArrowUpLeft } from 'lucide-react';

export function ContactInfo() {
  const { t, isRTL } = useLanguage();

  const contacts = [
    {
      icon: MapPin,
      title: t('contactPage.info.addressTitle'),
      content: t('contactPage.info.addressValue'),
    },
    {
      icon: Mail,
      title: t('contactPage.info.emailTitle'),
      content: t('contactPage.info.emailValue'),
      href: 'mailto:info@zanglobal.sa',
      ltr: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="h-full bg-navy p-7 text-white md:p-10 lg:p-12"
    >
      <div className="mb-10">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-gold">
          {t('contactPage.info.eyebrow')}
        </span>

        <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
          {t('contactPage.info.title')}
        </h2>

        <p className="max-w-md text-sm leading-7 text-white/65 md:text-base">
          {t('contactPage.info.subtitle')}
        </p>
      </div>

      <div className="space-y-7">
        {contacts.map(({ icon: Icon, title, content, href, ltr }) => (
          <div key={title} className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/25 bg-gold/10 text-gold">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>

            <div>
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/45">
                {title}
              </span>

              {href ? (
                <a
                  href={href}
                  dir={ltr ? 'ltr' : undefined}
                  className="text-sm text-white/90 transition-colors hover:text-gold"
                >
                  {content}
                </a>
              ) : (
                <p className="max-w-sm text-sm leading-6 text-white/90">
                  {content}
                </p>
              )}
            </div>
          </div>
        ))}

        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/25 bg-gold/10 text-gold">
            <Phone className="h-5 w-5" strokeWidth={1.5} />
          </div>

          <div>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/45">
              {t('contactPage.info.phoneTitle')}
            </span>

            <div className="space-y-1">
              {t('contactPage.info.phones', { returnObjects: true }).map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  dir="ltr"
                  className="block text-sm text-white/90 transition-colors hover:text-gold"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-7">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold/80">
          {t('contactPage.info.assuranceTitle')}
        </span>

        <p className="max-w-md text-sm leading-7 text-white/55">
          {t('contactPage.info.assuranceText')}
        </p>
      </div>
    </motion.div>
  );
}