import React, { useState, useContext } from 'react';
import styles from "@/styles/components/dropDown/dropDown.module.scss";
import { LanguageContext } from "../../pages/index";



function DropDownTable({ tableState, clickLanguageFunct }) {
    let dropdownlist = ["English", "Chinese", "Korean", "Viet", "Hmong", "Spanish"];
    let table;
    if (tableState==true) {
        table = <ul className={styles.table}>
            <div className={styles.enOption}><button onClick={() => clickLanguageFunct("English")} className={styles.options}>{"English"}</button></div>
            <div className={styles.cnOption}><button onClick={() => clickLanguageFunct("Chinese")} className={styles.options}>{"Chinese"}</button></div>
            <div className={styles.koOption}><button onClick={() => clickLanguageFunct("Korean")} className={styles.options}>{"Korean"}</button></div>
            <div className={styles.vnOption}><button onClick={() => clickLanguageFunct("Viet")} className={styles.options}>{"Viet"}</button></div>
            <div className={styles.hmOption}><button onClick={() => clickLanguageFunct("Hmong")} className={styles.options}>{"Hmong"}</button></div>
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
        if (dropDown==false) {
            setDropDown(prevState => !prevState)
        }
        else {
            setTimeout(() => {
                setDropDown(prevState => !prevState)
            }, 400)
        }
    }

    
    function clickLanguage(lang_code) {

        setLanguage(lang_code)
        setDropDown(prevState => !prevState)

    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <button>{ language }</button>
            {arrow}
        </div>
        <DropDownTable tableState={ dropDown } clickLanguageFunct={ clickLanguage } />
    </div>

  );
}