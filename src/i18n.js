import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];
const availableLanguages = ["en", "it", "de"];

i18n
  .use(Backend) // carica translation -> vedi /public/locales.

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // passo  i18n instance a react-i18next.

  .init({
    fallbackLng, // fallback se no set lang vedi sopra
    debug: false, // disattivo console.log
    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
