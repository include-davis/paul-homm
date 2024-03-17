/* add and import styles */
/* view and test it out by importing it to the respective page */
import styles from "@/styles/components/get-involved/cards.module.scss";
import { useTranslations } from "next-intl";
import PopupCard from "./popupCard";
import { useState } from "react";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default function Card({ cardProps }) {
  const t = useTranslations('GetInvolved.CardComponent');
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  }

  return (
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardImg} style={{backgroundImage: `url(${t(`${cardProps}.imgSrc`)})`}}>
            <p className={styles.cardText}>{t(`${cardProps}.titleShort`)}</p>
          </div>
          <button className={styles.detailsButton} onClick={togglePopup}>{t('details')}</button>
          <button className={styles.signUpButton}>{t('signUp')}</button>
        </div>
        {popup && <PopupCard card={cardProps} onClose={togglePopup}/>}
      </div>
  );
}
