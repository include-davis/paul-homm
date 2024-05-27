import styles from "@/styles/pages/services/services.module.scss";
import { useTranslations } from "next-intl";
import ImageSlider from "@/components/services/imageSlider.jsx";
import ImageSliderMobile from "@/components/services/imageSliderMobile.jsx";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default function Services() {
  const t = useTranslations("Services");
  return (
    <PageLayout>
      <div className={styles.mainContainer}>
        <div className={styles.servicesContainer}>
          <div>
            <h1 className={styles.pageHeading}>{t("heading")}</h1>
          </div>

          <div className={styles.boxContainer}>
            <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>
              <h2> {t("topServices.service1.heading")}</h2>
              <p>{t("topServices.service1.desc")}</p>
            </div>

            <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>
              <h2>{t("topServices.service2.heading")}</h2>
              <p>{t("topServices.service2.desc")}</p>
            </div>
          </div>
        </div>

        <div className={styles.desktop}>
          <ImageSlider />
        </div>
        <div className={styles.mobile}>
          <ImageSliderMobile />
        </div>

        <div className={styles.servicesContainer}>
          <div
            className={`${styles.boxContainer} ${styles.bottomBoxContainer}`}
          >
            <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
              <h2>{t("bottomServices.service1.heading")}</h2>
              <ul className={styles.desc}>
                <li>{t("bottomServices.service1.list.item1")}</li>
                <li>{t("bottomServices.service1.list.item2")}</li>
                <li>{t("bottomServices.service1.list.item3")}</li>
              </ul>
            </div>

            <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
              <h2>{t("bottomServices.service2.heading")}</h2>
              <ul className={`${styles.desc} ${styles.translatorsList}`}>
                <li>{t("bottomServices.service2.list.item1")}</li>
                <li>{t("bottomServices.service2.list.item2")}</li>
                <li>{t("bottomServices.service2.list.item3")}</li>
                <li>{t("bottomServices.service2.list.item4")}</li>
                <li>{t("bottomServices.service2.list.item5")}</li>
                <li>{t("bottomServices.service2.list.item6")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
