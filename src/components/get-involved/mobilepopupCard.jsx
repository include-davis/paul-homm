/* add and import styles */
/* view and test it out by importing it to the respective page */
import { useTranslations } from 'next-intl';
import React from 'react';
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from '@/styles/components/get-involved/mobilepopupCard.module.scss';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function PopupCard({ title, content }) {
  const t = useTranslations('Popup Card');
  const MultiContentCard = () => {
    const [showFirstContent, setShowFirstContent] = useState(true);
    const toggleContent = () => {
      setShowFirstContent(!showFirstContent);
    };
  }
  return (
    <div className={styles.multicontentcard}>
      <h2>{title}</h2>
      <div className={styles.layout}>
        {showFirstContent ? (
          <div>
            <p>{content}</p>
          </div>
        ) : (
          <div>
            <p>{content2}</p>
          </div>
        )}
      </div>
      <button onClick={toggleContent}>
        {showFirstContent ? content : content2}
      </button>
    </div>
  );
};
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