import React, { useState, useContext } from 'react';
import styles from "@/styles/components/dropDown/dropDown.module.scss";
import { LanguageContext } from "../../pages/index";
import { RxDividerHorizontal } from "react-icons/rx";


function DropDownTable({ tableState, clickLanguageFunct }) {
    let dropdownlist = ["English", "Chinese", "Korean", "Viet", "Hmong", "Spanish"];
    let table;
    if (tableState==true) {
        table = <ul className={styles.table}>
            <RxDividerHorizontal className={styles.line1 + ' ' + styles.line} />
            <div className={styles.enOption}><button onClick={() => clickLanguageFunct("English")} className={styles.options}>{"English"}</button></div>
            <RxDividerHorizontal className={styles.line2 + ' ' + styles.line} />
            <div className={styles.cnOption}><button onClick={() => clickLanguageFunct("Chinese")} className={styles.options}>{"Chinese"}</button></div>
            <RxDividerHorizontal className={styles.line3 + ' ' + styles.line} />
            <div className={styles.koOption}><button onClick={() => clickLanguageFunct("Korean")} className={styles.options}>{"Korean"}</button></div>
            <RxDividerHorizontal className={styles.line4 + ' ' + styles.line} />
            <div className={styles.vnOption}><button onClick={() => clickLanguageFunct("Viet")} className={styles.options}>{"Viet"}</button></div>
            <RxDividerHorizontal className={styles.line5 + ' ' + styles.line} />
            <div className={styles.hmOption}><button onClick={() => clickLanguageFunct("Hmong")} className={styles.options}>{"Hmong"}</button></div>
            <RxDividerHorizontal className={styles.line6 + ' ' + styles.line} />
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
        arrow = <button onClick={ toggleDropDown } className={styles.arrow}>v</button>
    }
    else {
        arrow = <button onClick={ toggleDropDown } className={styles.arrow}>^</button>
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
            <button>{ language }</button>
            <img  src='/translationIcon.svg' className={styles.translationIcon} alt="Translation Symbol"/>
            {arrow}
        </div>
        <DropDownTable tableState={ dropDown } clickLanguageFunct={ clickLanguage } />
    </div>

  );
}