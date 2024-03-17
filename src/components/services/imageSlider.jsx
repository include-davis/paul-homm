import styles from "@/styles/pages/services/services.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";


export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}



export default function ImageSlider() {
  const [currTab, setCurrTab] = useState(1);

  const toggleTab = (index) => {
    setCurrTab(index);
  }

  const slideOneText = ["Musculoskeletal Clinic (MSK)", "Dermatology", "Cardiopulmonary Clinic", "Liver Clinic"];

  const t = useTranslations('Services');

  return (
    <div className={styles.slideContainer}>

      <div className={styles.tabContainer}>
        <button className={currTab === 1 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(1)}>
          {t('tabs.tab1')}
        </button>
        <button className={currTab === 2 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(2)}>
          {t('tabs.tab2')}
        </button>
        <button className={currTab === 3 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab} ${styles.tabExcep}`} onClick={() => toggleTab(3)}>
          {t('tabs.tab3')}
        </button>
        <button className={currTab === 4 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(4)}>
          {t('tabs.tab4')}
        </button>
      </div>

      <div className={styles.slideContainer}>

        <div className={currTab === 1 ? `${styles.activeSlide}` : `${styles.inactiveSlide}`}>
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/images/services/specialtyClinics.png" width={478} height={345} alt="Clinic staff" />
          </div>

          <div className={styles.arrContainer}>
            <MdKeyboardArrowRight className={styles.arr} onClick={() => toggleTab(2)} />
          </div>

          <div className={styles.slideText}>
            <ul>
              <li>{t('slides.slide1.list.item1')}</li>
              <li>{t('slides.slide1.list.item2')}</li>
              <li>{t('slides.slide1.list.item3')}</li>
              <li>{t('slides.slide1.list.item4')}</li>
            </ul>
          </div>
        </div>

        <div className={currTab === 2 ? `${styles.activeSlide}` : `${styles.inactiveSlide}`}>
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/images/services/hepatitis.png" width={478} height={345} alt="Woman being vaccinated" />
          </div>

          <div className={styles.arrContainer}>
            <MdKeyboardArrowRight className={styles.arr} onClick={() => toggleTab(3)} />
          </div>

          <div className={`${styles.slideText}`}>
            <ul>
              <li>{t('slides.slide2.list.item1')}</li>
              <li>{t('slides.slide2.list.item2')}</li>
              <li>{t('slides.slide2.list.item3')}</li>
              <li>{t('slides.slide2.list.item4')}</li>
              <li>{t('slides.slide2.list.item5')}</li>
            </ul>
          </div>
        </div>

        <div className={currTab === 3 ? `${styles.activeSlide}` : `${styles.inactiveSlide}`}>
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/images/services/healthEdu.png" width={478} height={345} alt="Clinic students" />
          </div>

          <div className={styles.arrContainer}>
            <MdKeyboardArrowRight className={styles.arr} onClick={() => toggleTab(4)} />
          </div>

          <div className={styles.slideText}>
            <ul>
              <li>{t('slides.slide3.list.item1')}</li>
              <li>{t('slides.slide3.list.item2')}</li>
              <li>{t('slides.slide3.list.item3')}</li>
            </ul>
          </div>
        </div>

        <div className={currTab === 4 ? `${styles.activeSlide}` : `${styles.inactiveSlide}`}>
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/images/services/vaccines.png" width={478} height={345} alt="Woman receiving vaccine" />
          </div>

          <div className={styles.arrContainer}>
            <MdKeyboardArrowRight className={styles.arr} onClick={() => toggleTab(1)} />
          </div>

          <div className={styles.slideText}>
            <ul>
              <li>{t('slides.slide4.list.item1')}</li>
              <li>{t('slides.slide4.list.item2')}</li>
              <li>{t('slides.slide4.list.item3')}</li>
            </ul>
          </div>

        </div>
      </div>
    </div >
  );
}
