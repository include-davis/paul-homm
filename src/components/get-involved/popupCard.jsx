import { React, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from "@/styles/components/get-involved/popupCard.module.scss";
import { useTranslations } from "next-intl";

function splitContent(text) {
  let splitIndex = text.lastIndexOf(" ", Math.floor(text.length / 2));
  if (splitIndex === -1) {
    splitIndex = Math.floor(text.length / 2);
  }

  const part1 = text.slice(0, splitIndex).trim();
  const part2 = text.slice(splitIndex).trim();

  return [part1, part2];
}

export default function PopupCard({ card, onClose, locale }) {
  const t = useTranslations("GetInvolved");

  const [showFullContent, setShowFullContent] = useState(true);
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClose}>
        {t(`close_text_${locale}`)}
        <IoIosCloseCircleOutline className={styles.button_svg} />
      </button>
      <div className={styles.layout}>
        <h1>{t(`card_${card}_title_${locale}`)}</h1>
        {showFullContent ? (
          <div>
            <p className={styles.content}>
              {t(`card_${card}_details_${locale}`)}
            </p>
            <p className={styles.contentMobile}>
              {splitContent(t(`card_${card}_details_${locale}`))[0]}
            </p>
          </div>
        ) : (
          <p className={styles.contentMobile}>
            {splitContent(t(`card_${card}_details_${locale}`))[1]}
          </p>
        )}

        {/* Button with styling */}
        <button className={styles.paginationButton} onClick={toggleContent}>
          {showFullContent ? (
            <>
              <MdKeyboardArrowLeft className={styles.invisible_icon} />
              1/2
              <MdKeyboardArrowRight />
            </>
          ) : (
            <>
              <MdKeyboardArrowLeft />
              2/2
              <MdKeyboardArrowRight className={styles.invisible_icon} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
