import styles from "@/styles/components/committees/committeeDescription.module.scss"
import { IoArrowBack, IoChevronBack } from "react-icons/io5";
import React from "react";
import { useTranslations } from "next-intl";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

/* add and import styles */
/* view and test it out by importing it to the respective page */
export default function CommitteeDescription({ props }) {
  const t = useTranslations(`Committees.CommitteeDescriptionComponent.${props}`);
  return (
    <div className = {styles.wrapper}>
      <div className = {styles.buttonClass}>
        <a href="/committees" className = {styles.linkStyle}>
          <button className = {styles.button}>
            <IoArrowBack className={styles.desktop_arrow}/> 
            <IoChevronBack className={styles.mobile_arrow}/>
            Back to committees</button> 
          </a>
      </div>
      <div className = {styles.content}>
        <h1>{t('title')}</h1>
        <h2>{t('desc')}</h2>
      </div>
    </div>
  );
} 