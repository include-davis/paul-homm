/* add and import styles */
/* view and test it out by importing it to the respective page */
import styles from "@/styles/components/get-involved/cards.module.scss";
import { useTranslations } from "next-intl";
import PopupCard from "./popupCard";
import { useState } from "react";

export default function Card({ cardProps }) {
  const { card, imgSrc } = cardProps;
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
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <p className={styles.cardText}>{t(`${card}.title_short`)}</p>
        </div>
        <button className={styles.detailsButton} onClick={togglePopup}>
          {t("details_text")}
        </button>
        <button className={styles.signUpButton}>{t("sign_up_text")}</button>
      </div>
      {popup && <PopupCard card={card} onClose={togglePopup} />}
    </div>
  );
}
