import React, { useState } from "react";
import styles from "@/styles/components/dropDown/imageSliderDropdown.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function ImageSliderDropDown({
  services,
  setImage,
  currService,
  setService,
}) {
  const [dropDown, setDropDown] = useState(false);

  function toggleDropDown() {
    setDropDown(!dropDown);
  }
  const clickService = (service, index) => {
    // Changes service
    setService(service);
    setImage(index);
    toggleDropDown();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.selected}>{currService}</div>
        <button onClick={toggleDropDown} className={styles.arrow}>
          {dropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      <div className={`${styles.table} ${dropDown ? styles.active : null}`}>
        {services.map((service, index) => (
          <div key={index} className={styles.option}>
            {index !== 0 && (
              <div className={styles.divider} alt="Divider"></div>
            )}
            <div
              className={styles.option_text}
              onClick={() => clickService(service, index)}
            >
              {service}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
