import React, { useState, useContext } from 'react';
import styles from "@/styles/components/dropDown/dropDown.module.scss";
import { RxDividerVertical } from "react-icons/rx";
import { PiTranslate } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsTranslate } from "react-icons/bs";
import { useRouter } from 'next/router';
import { useLocale } from 'next-intl';

const locales = [
    {name: "English", code: "en"},
    {name: "中文", code: "zh"},
    {name: "한국어", code: "ko"},
    {name: "Tiếng Việt", code: "vi"},
    {name: "Hmoob", code: "hmn"},
    {name: "Español", code: "es"},
];

export default function LangDropDown() {
    const currLocaleCode = useLocale();
    const currLocale = locales.find(lang => lang.code === currLocaleCode).name;

    const router = useRouter();
    const [dropDown, setDropDown] = useState(false);
    const [language, setLanguage] = useState(currLocale);
    const [headerVisibility, showHeader] = useState(false);

    function toggleDropDown() {
        setDropDown(!dropDown);
    }
    function toggleHeader() {
        showHeader(!headerVisibility)
        setDropDown(false);
    }
    const clickLanguage = (code, name) => {
        setLanguage(name);
        router.push(router.pathname, router.asPath, {locale: code});
        toggleDropDown();
    }

    let defaultHeader = <div className={styles.defaultHeader}>
            <div className={styles.selected}>{language}</div>
            <div className={styles.header_icons}>
                <RxDividerVertical className={styles.vDivider} />
                <PiTranslate preserveAspectRatio="none" className={styles.translationIcon} alt="Translation Symbol"/>
            </div>
            <button onClick={ toggleDropDown } className={styles.arrow}>
                { dropDown ? <IoIosArrowUp/>: <IoIosArrowDown/>}
            </button>
        </div>
    let mobileHeader = <div className={styles.mobileHeader}>
        { headerVisibility ? 
        <button onClick={ toggleDropDown } className={styles.mobile_headerText}>
            <div className={styles.selected}>{language}</div>
        </button>  : null }
        <div className={styles.header_icons}>
            { headerVisibility ? <RxDividerVertical className={styles.vDivider} /> : null }
            <BsTranslate onClick={ toggleHeader } preserveAspectRatio="none" className={styles.toggleIcon} alt="Translation Symbol"/>
        </div>
        </div>

  return (
    <div className={styles.container}>
        {defaultHeader}
        {mobileHeader}
        <div className={`${styles.table} ${dropDown? styles.active : null}`}>
            {locales.map((language, index) => (
                <div key = {index} className={styles.option}>
                    <div className={styles.divider} alt="Divider"></div>
                    <option className={styles.option_text} value={language.code}  onClick={() => clickLanguage(language.code, language.name)}>
                        {language.name}
                    </option>
                </div>
            ))}
        </div>
    </div>

  );
}