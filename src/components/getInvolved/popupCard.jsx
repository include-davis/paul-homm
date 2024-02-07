import { useTranslations } from 'next-intl';
import React from 'react';
import styles from "@/styles/getInvolved/popupCard";
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function PopupCard() {
  const t = useTranslations('Index');
  return (
    <div> pop up yay
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>

  );
  return <div className={styles.container}>
    <div className={styles.beigecontainer1}>
      <div className={styles.heading_text}>
        <h1>Physcians and Residents</h1>
        <p>Physicians and residents are a valuable component to our clinic because they serve as teachers and mentors to health professional students and undergrad patient advocates. They help facilitate the clinical process, such as guiding medical students in making a correct diagnosis, writing prescriptions for our patients, and providing medical services and advice. Any physician and resident, primary care and specialty alike, is welcomed and appreciated in our clinic!
          If you are interested in volunteering as a preceptor please contact our physician scheduling team at phac.physician.scheduler@gmail.com</p>
      </div>
    </div>
    <div className={styles.beigecontainer2}>
      <div className={styles.heading_text2}>
        <h1>Health Professional Students </h1>
        <p>Health professional students are exposed to a variety of clinical responsibilities, such as interviewing patients, conducting physical exams, and performing laboratory procedures (blood draw, pap smears, vaccination, etc.). In addition, students also learn more about working with the underserved Asian population.
          To volunteer at our clinic, please sign up on the Inter-clinic Google Doc.
          Dress code: business-casual with white coat and badge</p>
      </div>
    </div>
    <div className={styles.beigecontainer3}>
      <div className={styles.heading_text3}>
        <h1>Undergraduate Patient Advocates</h1>
        <p>The term Patient Advocate aptly describes an undergraduate volunteer at the Paul Hom Asian Clinic. Patient Advocates mainly act as interpreters for predominantly Cantonese, Mandarin, and Vietnamese patients who visit the clinic. They also have a variety of responsibilities such as in taking vital signs, assisting in the dispensing of medications, and assisting medical students with patient care. They continue to play an important role as patient educators and interpreters for our clinic. In addition, they have the opportunity to learn more about providing social services to the underserved.
          Our Fall 2023 undergraduate application is currently open!! If you have any additional questions, please contact  phacugco-d@ucdavis.edu</p>
      </div>
    </div>
  </div>
}