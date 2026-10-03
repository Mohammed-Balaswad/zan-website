import React, { createContext, useContext, useEffect, useLayoutEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, getTranslation } from '../i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { lang: urlLang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = SUPPORTED_LANGUAGES[urlLang] ? urlLang : DEFAULT_LANGUAGE;
  const langConfig = SUPPORTED_LANGUAGES[currentLang];

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = langConfig.dir;
  }, [currentLang, langConfig]);

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (!SUPPORTED_LANGUAGES[newLang] || newLang === currentLang) return;
    
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0 && SUPPORTED_LANGUAGES[pathParts[0]]) {
      pathParts[0] = newLang;
    } else {
      pathParts.unshift(newLang);
    }
    
    const newPath = '/' + pathParts.join('/') + location.search + location.hash;
    
    navigate(newPath, { replace: true, preventScrollReset: true });

    window.scrollTo({
      top: currentScrollY,
      behavior: 'instant'
    });

    requestAnimationFrame(() => {
      window.scrollTo(0, currentScrollY);
    });
  };

  const t = (key) => getTranslation(currentLang, key);

  return (
    <LanguageContext.Provider
      value={{
        language: currentLang,
        langConfig,
        changeLanguage,
        t,
        supportedLanguages: SUPPORTED_LANGUAGES,
        isRTL: langConfig.dir === 'rtl',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}