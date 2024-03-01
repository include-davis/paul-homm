import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./messages/en.json"
import esJson from "./messages/es.json"
import hmnJson from "./messages/hmn.json"
import koJson from "./messages/ko.json"
import viJson from "./messages/vi.json"
import zhJson from "./messages/zh.json"

const resources = {
    en: {...enJson},
    es: {...esJson},
    hmn: {...hmnJson},
    ko: {...koJson},
    vi: {...viJson},
    zh: {...zhJson},
}

i18n.use(initReactI18next).init({
    debug: false,
  lng: 'en',
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources,
});

export default i18n;