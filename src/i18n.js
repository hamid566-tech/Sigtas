
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './locales/english.json';
import dari from './locales/dari.json';
import pashto from './locales/pashto.json';

i18n.use(initReactI18next).init({
  resources: {
     English: { translation: english },
    دری: { translation: dari },
    پښتو: { translation: pashto },
  },
  lng: 'English', // Default language
  fallbackLng: 'English', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;