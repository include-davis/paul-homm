import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJson from './messages/en.json'
import esJson from './messages/es.json'
import hmnJson from './messages/hmn.json'
import koJson from './messages/ko.json'
import viJson from './messages/vi.json'
import zhJson from './messages/zh.json'

i18n.use(initReactI18next).init({
 resources: {
    "en": { ...enJson },
    "es": { ...esJson },
    "hmn": { ...hmnJson },
    "ko": { ...koJson },
    "vi": { ...viJson },
    "zh": { ...zhJson },
 }, // Where we're gonna put translations' files
 lng: "en",     // Set the initial language of the App
});