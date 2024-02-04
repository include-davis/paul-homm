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
            <div className={styles.enOption}><button onClick={() => clickLanguageFunct("en")} className={styles.options}>{"English"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line2 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.cnOption}><button onClick={() => clickLanguageFunct("zh")} className={styles.options}>{"中文"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line3 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.koOption}><button onClick={() => clickLanguageFunct("ko")} className={styles.options}>{"한국어"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line4 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.vnOption}><button onClick={() => clickLanguageFunct("vi")} className={styles.options}>{"Tiếng Việt"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line5 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.hmOption}><button onClick={() => clickLanguageFunct("hmn")} className={styles.options}>{"Hmoob"}</button></div>
            <img  src='/dropDown/divider.svg' className={styles.line6 + ' ' + styles.line} alt="Divider"/>
            <div className={styles.spOption}><button onClick={() => clickLanguageFunct("es")} className={styles.options}>{"Español"}</button></div>
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
    let selected;
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

    if (language=="en") {
        selected = "English"
    }
    else if (language=="zh") {
        selected = "中文"
    }
    else if (language=="ko") {
        selected = "한국어"
    }
    else if (language=="vi") {
        selected = "Tiếng Việt"
    }
    else if (language=="hmn") {
        selected = "Hmoob"
    }
    else {
        selected = "Español"
    }
    
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.selected}>{ selected }</div>
            <RxDividerVertical className={styles.vDivider} />
            <img  src='/dropDown/translationIcon.svg' className={styles.translationIcon} alt="Translation Symbol"/>
            {arrow}
        </div>
        <DropDownTable tableState={ dropDown } clickLanguageFunct={ clickLanguage } />
    </div>

  );
}