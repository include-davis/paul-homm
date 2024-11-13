import styles from "@/styles/pages/services/services.module.scss";
import { useTranslations } from "next-intl";
import ImageSlider from "@/components/services/imageSlider.jsx";
import ImageSliderMobile from "@/components/services/imageSliderMobile.jsx";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  let messages = {};
  let referrals = [];
  let translators = [];
  let servicesImages = {};

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/general`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.General = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching general data: ${e.message}`);
    messages.General = (await import("@/messages/general.json")).default;
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/services`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.Services = res.body;
      referrals = res.body[`referrals_${locale}`];
      translators = res.body[`translators_${locale}`];
      servicesImages = res.body.page_media;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching services data: ${e.message}`);
    messages.Services = (await import(`@/messages/services.json`)).default;
    referrals = messages.Services[`referrals_${locale}`];
    translators = messages.Services[`translators_${locale}`];
    servicesImages = messages.Services.page_media;
  }

  return {
    props: {
      messages: messages,
      locale,
      referrals,
      translators,
      servicesImages,
    },
  };
}

export default function Services({
  locale,
  referrals,
  translators,
  servicesImages,
}) {
  const t = useTranslations("Services");
  const g = useTranslations("General");

  return (
    <PageLayout>
      <div className={styles.mainContainer}>
        <div className={styles.servicesContainer}>
          <div>
            <h1 className={styles.pageHeading}>{g(`services_${locale}`)}</h1>
          </div>

          <div className={styles.boxContainer}>
            <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>
              <h2>{t(`regular_service_1_name_${locale}`)}</h2>
              <p>{t(`regular_service_1_frequency_${locale}`)}</p>
            </div>

            <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>
              <h2>{t(`regular_service_2_name_${locale}`)}</h2>
              <p>{t(`regular_service_2_frequency_${locale}`)}</p>
            </div>
          </div>
        </div>

        <div className={styles.desktop}>
          <ImageSlider
            locale={locale}
            imageData={servicesImages.slides_section}
          />
        </div>
        <div className={styles.mobile}>
          <ImageSliderMobile
            locale={locale}
            imageData={servicesImages.slides_section}
          />
        </div>

        <div className={styles.servicesContainer}>
          <div
            className={`${styles.boxContainer} ${styles.bottomBoxContainer}`}
          >
            <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
              <h2>{t(`referrals_title_text_${locale}`)}</h2>
              <ul className={styles.desc}>
                {referrals.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
              <h2>{t(`translators_title_text_${locale}`)}</h2>
              <ul className={`${styles.desc} ${styles.translatorsList}`}>
                {translators.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
