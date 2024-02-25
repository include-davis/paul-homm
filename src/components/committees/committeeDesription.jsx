import styles from "@/styles/components/committees/committeeDescription.module.scss"
import { IoArrowBack } from "react-icons/io5";
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
  const t = useTranslations(`Example.propsComponent.${props}`);
  const { title, desc } = props;
  return (
    <div className = {styles.wrapper}>
      <div className = {styles.buttonClass}>
        <a href="/committees" className = {styles.linkStyle}>
          <button className = {styles.button}><IoArrowBack /><p>Back to committees</p></button> 
          </a>
      </div>
      <div className = {styles.content}>
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
    </div>
  );
} 