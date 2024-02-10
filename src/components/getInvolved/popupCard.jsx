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
  const t = useTranslations('Index');
  const { title, content } = props;
  //return (
  //<div> pop up yay
  //<h1>{t('title')}</h1>
  //<p>{t('description')}</p>
  //</div>

  //);
  return (
    <div className={styles.container}>
      <div className={styles.content}
    </div>
  )
}