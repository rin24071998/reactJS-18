import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '@locales/en/index';
import translationJP from '@locales/jp/index';

const language = localStorage.getItem('language') || 'en';
// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  jp: {
    translation: translationJP,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
