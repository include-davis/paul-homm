import styles from "@/styles/pages/services/services.module.scss";
import { useTranslations } from "next-intl";
import ImageSlider from "@/components/services/imageSlider.jsx";
import ImageSliderMobile from "@/components/services/imageSliderMobile.jsx";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  let messages = {};
  let headerMessages = {};

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/header`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();
    headerMessages = res.body;
  } catch (e) {
    console.log(`Fetching header data: ${e.message}`);
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();

    messages = { Services: res.body, Header: headerMessages };
  } catch (e) {
    console.log(`Fetching services data: ${e.message}`);
    // TODO: IMPLEMENT A BETTER FALLBACK
    messages = (await import(`@/messages/${locale}.json`)).default;
  }

  return {
    props: {
      messages: messages,
      // messages: (await import(`@/messages/${locale}.json`)).default,
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
            <h1 className={styles.pageHeading}>{t("page_title")}</h1>
          </div>

          <div className={styles.boxContainer}>
            <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>
              <h2> {t("regular_services.service1.title")}</h2>
              <p>{t("regular_services.service1.description")}</p>
            </div>

            <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>
              <h2>{t("regular_services.service2.title")}</h2>
              <p>{t("regular_services.service2.description")}</p>
            </div>
          </div>
        </div>

        {/* <div className={styles.desktop}>
          <ImageSlider />
        </div>
        <div className={styles.mobile}>
          <ImageSliderMobile />
        </div> */}

        <div className={styles.servicesContainer}>
          <div
            className={`${styles.boxContainer} ${styles.bottomBoxContainer}`}
          >
            <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
              <h2>{t("referrals_title_text")}</h2>
              <ul className={styles.desc}>
                <li>{t("referrals.item1")}</li>
                <li>{t("referrals.item2")}</li>
                <li>{t("referrals.item3")}</li>
              </ul>
            </div>

            <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
              <h2>{t("translators_title_text")}</h2>
              <ul className={`${styles.desc} ${styles.translatorsList}`}>
                <li>{t("translators.item1")}</li>
                <li>{t("translators.item2")}</li>
                <li>{t("translators.item3")}</li>
                <li>{t("translators.item4")}</li>
                <li>{t("translators.item5")}</li>
                <li>{t("translators.item6")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
