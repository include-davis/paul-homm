/* add and import styles */
/* view and test it out by importing it to the respective page */
import { useTranslations } from 'next-intl';
import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from '@/styles/components/get-involved/mobilepopupCard.module.scss';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function PopupCard({ card }) {
  console.log(card);
  const t = useTranslations(`GetInvolved.PopupCard.${card}`);
  const [showFirstContent, setShowFirstContent] = useState(true);
  const toggleContent = () => {
    setShowFirstContent(!showFirstContent);
  };

  return (
    <div className={styles.multicontentcard}>
      <button className={styles.button1}>
        <p>Close</p><IoIosCloseCircleOutline className={styles.button_svg} />
      </button>
      <div className={styles.layout}>
        <h2>{t('title')}</h2>
        <div>
          {showFirstContent ? (
            <p>{t('content')}</p>
          ) : (
            <p>{t('content2')}</p>
          )}
          {/* Button with styling */}
          <button className={styles.button} onClick={toggleContent}>
            {showFirstContent ? (
              <>1/2 <MdKeyboardArrowRight /></>
            ) : (
              <> <MdKeyboardArrowLeft />2/2 </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}