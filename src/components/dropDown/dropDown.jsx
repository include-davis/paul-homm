import React, { useState, useContext, useEffect, useRef } from 'react';
import styles from "@/styles/components/dropDown/dropDown.module.scss";
import { LanguageContext } from "../../pages/index";



function DropDownTable({ tableState, clickLanguageFunct }) {
    let dropdownlist = ["English", "Chinese", "Korean", "Viet", "Hmong", "Spanish"];
    if (tableState==false) {
        dropdownlist=[];
    }
    return (
        <ul className={styles.table}>
            {dropdownlist.map((arr) => {
                return <button onClick={() => clickLanguageFunct(arr)} className={styles.options}>{arr}</button>
            })}
        </ul>
    )

}

export default function LangDropDown() {
    const [dropDown, setDropDown] = useState(false)
    const {language, setLanguage} = useContext(LanguageContext)
    let dropDownRef = useRef()

    function toggleDropDown() {
        setDropDown(prevState => !prevState)
    }

    
    function clickLanguage(lang_code) {
        setLanguage(lang_code)
    }

    useEffect(() => {
        let handler = (e) => {
            if (!(dropDownRef.current.contains(e.target))) {
                setDropDown(false)
            }
        }

        document.addEventListener("mousedown", handler)
    })

  return (
    <div className={styles.container} ref={dropDownRef}>
        <div className={styles.header}>
            <button>{ language }</button>
            <button onClick={ toggleDropDown }>v</button>
        </div>
        <DropDownTable tableState={ dropDown } clickLanguageFunct={ clickLanguage } />
    </div>

  );
}