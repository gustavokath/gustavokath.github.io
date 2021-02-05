import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import json from '../../public/locales/pt-BR/translation.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt-BR',
    lng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
    ns: ['translations'],
    defaultNS: 'translations',
    resources: { 'pt-BR': { translations: json } },
  });

export default i18n;
