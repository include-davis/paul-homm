import {React, useState} from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from '@/styles/components/get-involved/popupCard.module.scss';
import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function PopupCard({ card, onClose }) {
  const t = useTranslations(`GetInvolved.CardComponent.${card}`)

  const [showFullContent, setShowFullContent] = useState(true);
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClose}>
        Close<IoIosCloseCircleOutline className={styles.button_svg} />
      </button>
      <div className={styles.layout}>
        <h1>{t('title')}</h1>
        {showFullContent ? (
          <div>
            <p className={styles.content}>{`${t('content1')} ${t('content2')}`}</p>
            <p className={styles.contentMobile}>{t('content1')}</p>
          </div>
          ) : (
            <p className={styles.contentMobile}>{t('content2')}</p>
          )}

        {/* Button with styling */}
        <button className={styles.paginationButton} onClick={toggleContent}>
          {showFullContent ? (
            <> 1/2 <MdKeyboardArrowRight/></>
          ) : (
            <> <MdKeyboardArrowLeft/>2/2 </>
          )}
        </button>
      </div>
    </div>
  )
}