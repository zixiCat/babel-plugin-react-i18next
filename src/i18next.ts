import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'What a save!': 'Thanks! Thanks! Thanks!',
      'ta1-s': 'thanks-thanks-thanks',
      'Hello <1>zixiCat!</1>': 'WOW! WOW! WOW!',
    },
  },
  cn: {
    translation: {
      'What a save!': '谢谢！谢谢！谢谢！',
      'what-a-save': '谢谢！谢谢！谢谢！',
      'Hello <1>zixiCat!</1>': '哇！哇！哇！',
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: true,
  },
});

export default i18next;
