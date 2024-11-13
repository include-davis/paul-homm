/* add and import styles */
/* view and test it out by importing it to the respective page */
import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from "@/styles/components/get-involved/cards.module.scss";
import PopupCard from "./popupCard";

export default function Card({ cardNum, cardImg, locale }) {
  const t = useTranslations("GetInvolved");
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <div
          className={styles.cardImg}
          style={{ backgroundImage: `url(${cardImg.src})` }}
        >
          <p className={styles.cardText}>
            {t(`card_${cardNum}_title_${locale}`)}
          </p>
        </div>
        <button className={styles.detailsButton} onClick={togglePopup}>
          {t(`details_text_${locale}`)}
        </button>
        <a
          href={t(`card_${cardNum}_signup_link`)}
          target="_blank"
          className={styles.links}
        >
          <button className={styles.signUpButton}>
            {t(`sign_up_text_${locale}`)}
          </button>
        </a>
      </div>
      {popup && (
        <PopupCard card={cardNum} onClose={togglePopup} locale={locale} />
      )}
    </div>
  );
}
