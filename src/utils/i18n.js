import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ru',
        debug: true,
        // Распознавание и кэширование языковых кук
        detection: {
            // Order and from where user language should be detected:
            order: ['localStorage', 'cookie'],

            // Keys or params to lookup language from:
            lookupLocalStorage: "locale",
            lookupCookie: "locale",

            // Cache user language on:
            caches: ['localStorage', 'cookie'],

            // Only detect languages that are in the whitelist:
            checkWhitelist: true,
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });
