import { useTranslations } from 'next-intl';
import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from '@/styles/components/getInvolved/popupCard.module.scss';
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function PopupCard({ props }) {
  const t = useTranslations('Popup Card');
  const { title, content } = props;
  return (
    <div className={styles.container}>
      <button className={styles.button}>Close</button>
      <div className={styles.buttonClass}><IoIosCloseCircleOutline />
      </div>
      <div className={styles.layout}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}