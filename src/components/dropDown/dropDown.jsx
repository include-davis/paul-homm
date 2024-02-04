import React, { useState, useContext } from 'react';
import styles from "@/styles/components/dropDown/dropDown.module.scss";
import { LanguageContext } from "../../pages/index";
import { RxDividerVertical } from "react-icons/rx";



function DropDownTable({ tableState, clickLanguageFunct }) {
    let dropdownlist = ["English", "Chinese", "Korean", "Viet", "Hmong", "Spanish"];
    let table;
    if (tableState==true) {
        table = <ul className={styles.table}>
            <img  src='/dropDown/divider.svg' className={styles.line1 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.enOption}><button onClick={() => clickLanguageFunct("English")} className={styles.options}>{"English"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line2 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.cnOption}><button onClick={() => clickLanguageFunct("Chinese")} className={styles.options}>{"Chinese"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line3 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.koOption}><button onClick={() => clickLanguageFunct("Korean")} className={styles.options}>{"Korean"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line4 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.vnOption}><button onClick={() => clickLanguageFunct("Viet")} className={styles.options}>{"Viet"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line5 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.hmOption}><button onClick={() => clickLanguageFunct("Hmong")} className={styles.options}>{"Hmong"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line6 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.spOption}><button onClick={() => clickLanguageFunct("Spanish")} className={styles.options}>{"Spanish"}</button></div>
            </ul>
    }
    return (
        <div>
        {table}
        </div>
    )

}

export default function LangDropDown() {
    const [dropDown, setDropDown] = useState(false)
    const {language, setLanguage} = useContext(LanguageContext)
    let arrow;
    if (dropDown==false) { //render downward arrow is list is closed
        arrow = <button onClick={ toggleDropDown } className={styles.arrow}><img  src='/dropDown/arrowDown.svg' className={styles.arrowIcon} alt="Down Arrow"/></button>
    }
    else {
        arrow = <button onClick={ toggleDropDown } className={styles.arrow}><img  src='/dropDown/arrowUp.svg' className={styles.arrowIcon} alt="Up Arrow"/></button>
    }

    function toggleDropDown() {
        setDropDown(prevState => !prevState)
    }

    
    function clickLanguage(lang_code) {
        setLanguage(lang_code)
        setDropDown(prevState => !prevState)
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.selected}>{ language }</div>
            <RxDividerVertical className={styles.vDivider} />
            <img  src='/dropDown/translationIcon.svg' className={styles.translationIcon} alt="Translation Symbol"/>
            {arrow}
        </div>
        <DropDownTable tableState={ dropDown } clickLanguageFunct={ clickLanguage } />
    </div>

  );
}