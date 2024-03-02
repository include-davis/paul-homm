import React, { useState, useContext } from 'react';
import styles from "@/styles/components/dropDown/dropDown.module.scss";
import { RxDividerVertical } from "react-icons/rx";
import { PiTranslate } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const lngs = {
    "en": {nativeName:"English"},
    "zh": {nativeName:"中文"},
    "ko": {nativeName:"한국어"},
    "vi": {nativeName:"Tiếng Việt"},
    "hmn": {nativeName:"Hmoob"},
    "es": {nativeName:"Español"},
};

function DropDownTable({ tableState, clickLanguageFunct }) {
    let table;
    let options = [];
    for (var key in lngs) { 
        options.push(<div key={"l"+key} className={styles.line} alt="Divider"></div>);
        options.push(<div key={key} className={styles.option}><button id={key} onClick={(e) => clickLanguageFunct(e.currentTarget.getAttribute("id"))} className={styles.option_text}>{lngs[key].nativeName}</button></div>)
    }
    if (tableState==true) {
        table = <ul className={styles.table}>
            {options.map(item => (
                item
            ))}
            </ul>
    }

    return (
        <div>
        {table}
        </div>
    )

}

export default function LangDropDown() {
    const { t, i18n } = useTranslation('Index')
    const [dropDown, setDropDown] = useState(false)
    const [language, setLanguage] = useState(lngs[i18n.language].nativeName)
    let arrow;
    if (dropDown==false) { //render downward arrow is list is closed
        arrow = <button onClick={ toggleDropDown } className={styles.arrow}><IoIosArrowDown preserveAspectRatio="none" className={styles.arrowIcon} alt="Down Arrow"/></button>
    }
    else {
        arrow = <button onClick={ toggleDropDown } className={styles.arrow}><IoIosArrowUp preserveAspectRatio="none" className={styles.arrowIcon} alt="Up Arrow"/></button>
    }

    function toggleDropDown() {
        setDropDown(prevState => !prevState)
    }
    const clickLanguage = (lng) => {
        setLanguage(lngs[lng].nativeName);
        i18n.changeLanguage(lng);
        setDropDown(prevState => !prevState)
        }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.selected}>{language}</div>
            <RxDividerVertical className={styles.vDivider} />
            <PiTranslate preserveAspectRatio="none" className={styles.translationIcon} alt="Translation Symbol"/>
            {arrow}
        </div>
        <DropDownTable tableState={ dropDown } clickLanguageFunct={ clickLanguage } />
    </div>

  );
}