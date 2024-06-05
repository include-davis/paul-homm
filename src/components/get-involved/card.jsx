/* add and import styles */
/* view and test it out by importing it to the respective page */
import { useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/get-involved/cards.module.scss";
import PopupCard from "./popupCard";

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
        <Link
          href={t(`${card}.sign_up_link`)}
          target="_blank"
          className={styles.links}
        >
          <button className={styles.signUpButton}>{t("sign_up_text")}</button>
        </Link>
      </div>
      {popup && <PopupCard card={card} onClose={togglePopup} />}
    </div>
  );
}
