import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const ROUTE_TO_PAGE = {
  about: 'about',
  projects: 'projects',
  opportunities: 'opportunities',
  services: 'services',
  partners: 'partners',
  partnerships: 'partnerships',
  contact: 'contact',
  privacy: 'privacy',
};

const LOCALE_MAP = {
  ar: 'ar_SA',
  en: 'en_US',
  ru: 'ru_RU',
};

function updateMeta(attribute, key, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

export function PageSEO() {
  const { language, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const pageSegment = segments[1] || '';
    const page = ROUTE_TO_PAGE[pageSegment] || (
      pageSegment ? 'notFound' : 'home'
    );

    const title = t(`seo.pages.${page}.title`);
    const description = t(`seo.pages.${page}.description`);

    const siteUrl = 'https://zanglobal.sa';
    const canonicalUrl = new URL(
      location.pathname,
      siteUrl
    ).href;

    const shareImage = `${siteUrl}/brand/ZAN-global-investments-skyline-banner.avif`;

    document.title = title;

    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    updateMeta('name', 'description', description);
    updateMeta('property', 'og:type', 'website');
    updateMeta('property', 'og:site_name', 'ZAN Global Investments');
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:url', canonicalUrl);
    updateMeta('property', 'og:image', shareImage);
    updateMeta('property', 'og:image:alt', 'ZAN Global Investments Skyline Banner');
    updateMeta(
      'property',
      'og:locale',
      LOCALE_MAP[language] || LOCALE_MAP.ar
    );

    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:image', shareImage);

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalUrl);
  }, [language, location.pathname, t]);

  return null;
}