import React, { useState, useContext } from 'react';
import styles from "@/styles/components/dropDown/dropDown.module.scss";
import { LanguageContext } from "../../pages/index";



function DropDownTable({ tableState, clickLanguageFunct }) {
    let dropdownlist = ["English", "Chinese", "Korean", "Viet", "Hmong", "Spanish"];
    if (tableState==false) {
        dropdownlist=[];
    }
    return (
        <div>
            {dropdownlist.map((arr) => {
                return <button onClick={() => clickLanguageFunct(arr)}>{arr}</button>
            })}
        </div>
    )

}

export default function LangDropDown() {
    const [dropDown, setDropDown] = useState(false)
    const {language, setLanguage} = useContext(LanguageContext)

    function toggleDropDown() {
        setDropDown(prevState => !prevState)
    }

    
    function clickLanguage(lang_code) {
        setLanguage(lang_code)
    }


  return (
    <div className={styles.container}>
        <button>{ language }</button>
        <button onClick={ toggleDropDown }>v</button>
        <DropDownTable tableState={ dropDown } clickLanguageFunct={ clickLanguage } />
    </div>

  );
}