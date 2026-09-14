import ar from './ar.json';
import en from './en.json';
import ru from './ru.json';

export const SUPPORTED_LANGUAGES = {
  ar: { code: 'ar', name: 'العربية', dir: 'rtl', font: 'font-arabic' },
  en: { code: 'en', name: 'English', dir: 'ltr', font: 'font-latin' },
  ru: { code: 'ru', name: 'Русский', dir: 'ltr', font: 'font-latin' },
};

export const DEFAULT_LANGUAGE = 'ar';

export const translations = { ar, en, ru };

/**
 * Get translation by nested key (e.g. "nav.about")
 */
export function getTranslation(lang, key) {
  const dictionary = translations[lang] || translations[DEFAULT_LANGUAGE];
  const keys = key.split('.');
  let value = dictionary;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if missing in current lang
      let fallbackValue = translations.en;
      for (const fk of keys) {
        if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
          fallbackValue = fallbackValue[fk];
        } else {
          return key; // return key if not found
        }
      }
      return fallbackValue;
    }
  }
  return value;
}
