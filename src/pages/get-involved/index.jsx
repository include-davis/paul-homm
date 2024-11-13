import React from "react";
import styles from "@/styles/pages/get-involved/get-involved.module.scss";
import { useTranslations } from "next-intl";
import Card from "@/components/get-involved/card";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  const messages = {};
  let getInvolvedImages = {};

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
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/get-involved`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.GetInvolved = res.body;
      getInvolvedImages = res.body.page_media;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching get-involved data: ${e.message}`);
    messages.GetInvolved = (
      await import(`@/messages/get-involved.json`)
    ).default;
    getInvolvedImages = messages.GetInvolved.page_media;
  }

  return {
    props: {
      messages: messages,
      locale,
      getInvolvedImages,
    },
  };
}

export default function GetInvolved({ locale, getInvolvedImages }) {
  const t = useTranslations("GetInvolved");
  const g = useTranslations("General");

  return (
    <PageLayout>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionHeading}>{g(`get_involved_${locale}`)}</h1>
        <div className={styles.cardContainer}>
          {getInvolvedImages.cards_section.map((image, index) => (
            <Card
              key={index}
              cardNum={index + 1}
              cardImg={image}
              locale={locale}
            />
          ))}
        </div>

        <div className={styles.donateBoxContainer}>
          <h3 className={styles.donateHeading}>
            {t(`donate_today_text_${locale}`)}
          </h3>
          <p className={styles.donateText}>
            {t(`donation_instructions_${locale}`)}
          </p>
          <div className={styles.centeredText}>
            <p className={styles.address}>{g(`address_${locale}`)}</p>
            <p className={styles.donateText}>{t(`thank_you_text_${locale}`)}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

GetInvolved;
