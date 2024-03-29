import React, { useState, useContext } from 'react';
import styles from "@/styles/components/dropDown/imageSliderDropdown.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`@/messages/${locale}.json`)).default
      }
    };
}

export default function imageSliderDropDown({ services, setImage, currService, setService }) {
    const [dropDown, setDropDown] = useState(false)

    function toggleDropDown() {
        setDropDown(!dropDown);
    }
    const clickService = (service, index) => { // Changes service
        setService(service);
        setImage(index)
        toggleDropDown();
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.selected}>{currService}</div>
            <button onClick={ toggleDropDown } className={styles.arrow}>
                { dropDown ? <IoIosArrowUp/>: <IoIosArrowDown/>}
            </button>
        </div>
        <div className={`${styles.table} ${dropDown? styles.active : null}`}>
            {services.map((service, index) => (
                <div key = {index} className={styles.option}>
                    <div className={styles.divider} alt="Divider"></div>
                    <option className={styles.option_text} onClick={() => clickService(service, index)}>
                        {service}
                    </option>
                </div>
            ))}
        </div>
    </div>

  );
}