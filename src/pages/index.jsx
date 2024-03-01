import { Inter } from "next/font/google";
import LangDropDown from "@/components/dropDown/dropDown";
import React, { useState, createContext } from 'react';

const inter = Inter({ subsets: ["latin"] });
import i18n from "../i18n.config.ts";
import { useTranslation } from 'react-i18next';

export const LanguageContext = React.createContext() //the "language" state variable initialized below can be accessed by all child components, wrapped by the <languageProvider> tag, by using the "const {language, setLanguage} = useContext(LanguageContext)" statement

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function Home() {
  const { t } = useTranslation('Index');
  
  return (
    <>
      <LangDropDown></LangDropDown>
      <p>{t('title')}</p>
    </>
  );
}
