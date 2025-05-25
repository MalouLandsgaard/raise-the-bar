import { setDefaultOptions } from 'date-fns';
import { da as daLocale } from 'date-fns/locale';
import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import daDefault from './da/default.json';

export const defaultNamespace = 'default';
export const defaultLanguage = 'da';

export const resources = {
  da: {
    default: daDefault,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  defaultNS: defaultNamespace,
  ns: ['default'],
  interpolation: {
    escapeValue: false,
  },
});

setDefaultOptions({ locale: daLocale });
