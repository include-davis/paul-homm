import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";
import LangDropDown from "@/components/dropDown/dropDown";
import React, { useState, createContext } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const LanguageContext = React.createContext() //the "language" state variable initialized below can be accessed by all child components, wrapped by the <languageProvider> tag, by using the "const {language, setLanguage} = useContext(LanguageContext)" statement

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function Home() {
  const t = useTranslations('Index');

  //creates a "language" state variable, to track the currently selected language and indicate which language data to pull from the json
  const [language, setLanguage] = useState('moo');
  //sets up the context that will be passed to child compoenents
  const contextValue = {
    language,
    setLanguage,
  };

  return (
    <>
      Home yay
      <LanguageContext.Provider value={contextValue}>
        <LangDropDown></LangDropDown>
        Testing if this
      </LanguageContext.Provider>
    </>
  );
}
