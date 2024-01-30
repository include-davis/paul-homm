import { useTranslations } from 'next-intl';
import React from 'react';
import styles from '@/styles/getInvolved/popupCard';
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}
<div>
  <h1>Physcians and Residents</h1>
  <p>Health professional students are exposed to a variety of clinical responsibilities, such as interviewing patients, conducting physical exams, and performing laboratory procedures (blood draw, pap smears, vaccination, etc.). In addition, students also learn more about working with the underserved Asian population.
    To volunteer at our clinic, please sign up on the Inter-clinic Google Doc.
    Dress code: business-casual with white coat and badge
  </p>
</div>

export default function PopupCard() {
  const t = useTranslations('Index');
  return (
    <div> pop up yay
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>

  );
}