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
  return (
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardImg} style={{backgroundImage: `url(${t('imgSrc')})`}}>
            <p className={styles.cardText}>{t("cardText")}</p>
          </div>
          <button className={styles.detailsButton}>Details</button>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
      </div>
  );
}
