/* add and import styles */
/* view and test it out by importing it to the respective page */
import styles from "@/styles/pages/get-involved/cards.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default function Card({ cardProps }) {
  const t = useTranslations(`Get_Involved.${cardProps}`);
  const css = `styles.${t("selector")}`;
  return (
    <div>
      <div className={styles.sectionContainer}>
        {/* MOVED TO index.jsx <h1 className={styles.sectionHeading}>Get Involved</h1>*/}
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={css}>
              <Image />
              <p className={styles.cardText}>{t("cardText")}</p>
            </div>
            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
          {/* duplicate cards */}
          {/*
          <div className={styles.card}>
            <div className={`styles.${t("selector")}`}>
              <Image />
              <p className={styles.cardText}>Undergrad. Patient Advocates</p>
            </div>
            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg3}>
              <Image />
              <p className={styles.cardText}>Health Professional Students</p>
            </div>
            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
