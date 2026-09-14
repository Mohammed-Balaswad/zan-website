import React, { createContext, useContext, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, getTranslation } from '../i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { lang: urlLang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Ensure current language is valid
  const currentLang = SUPPORTED_LANGUAGES[urlLang] ? urlLang : DEFAULT_LANGUAGE;
  const langConfig = SUPPORTED_LANGUAGES[currentLang];

  // Update HTML document attributes (RTL / LTR and lang code)
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = langConfig.dir;
  }, [currentLang, langConfig]);

  /**
   * Switch language and update URL while preserving current path slug
   * e.g., /ar/about -> /en/about
   */
  const changeLanguage = (newLang) => {
    if (!SUPPORTED_LANGUAGES[newLang] || newLang === currentLang) return;
    
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0 && SUPPORTED_LANGUAGES[pathParts[0]]) {
      pathParts[0] = newLang; // Replace locale in URL path
    } else {
      pathParts.unshift(newLang);
    }
    
    const newPath = '/' + pathParts.join('') + location.search + location.hash;
    navigate(newPath);
  };

  /**
   * Translation function helper t('key')
   */
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
