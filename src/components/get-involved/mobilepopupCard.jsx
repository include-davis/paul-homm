/* add and import styles */
/* view and test it out by importing it to the respective page */
import { useTranslations } from 'next-intl';
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from '@/styles/components/get-involved/mobilepopupCard.module.scss';
import GetInvolved from '@/pages/get-involved';

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
      <div className={styles.layout}>
        <h2>{t('title')}</h2>
        {showFirstContent ? (
          <div>
            <p>{t('content')}</p>
          </div>
        ) : (
          <div>
            <p>{t('content2')}</p>
          </div>
        )}
      </div>
      {/* Button with styling */}
      <button className={styles.button} onClick={toggleContent}>
        {showFirstContent ? ('1/2') : ('2/2')}
      </button>
    </div>
  );
}

/*
  title={t(`${card}.title`)}
  //   // content={t(`${card}.content`)}
  //   // content2={t(`${card}.content2`)}
/*      </div>
    </div>
    <div className={styles.container}>
      <button className={styles.button}>
        <p>Close</p><IoIosCloseCircleOutline className={styles.button_svg} />
      </button>
      <div className={styles.layout}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}
*/