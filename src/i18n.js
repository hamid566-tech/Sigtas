import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './locales/english.json';
import dari from './locales/dari.json';
import pashto from './locales/pashto.json';

const storedLanguage = localStorage.getItem('i18nextLng') || 'English'; // Get language from localStorage or default to 'English'

i18n.use(initReactI18next).init({
  resources: {
    English: { translation: english },
    دری: { translation: dari },
    پښتو: { translation: pashto },
  },
  lng: storedLanguage, // Set language from localStorage
  fallbackLng: 'English', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

// Listen for language change and save it to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;