import React from "react";
import styles from "@/styles/pages/get-involved/get-involved.module.scss";
import { useTranslations } from "next-intl";
import Card from "@/components/get-involved/card";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  let messages = {};

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
    if (res.status === 200) {
      messages.Header = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Fetching header data: ${e.message}`);
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/get-involved`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();
    if (res.status === 200) {
      messages.GetInvolved = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Fetching get-involved data: ${e.message}`);
    // TODO: IMPLEMENT A BETTER FALLBACK
    messages = (await import(`@/messages/${locale}.json`)).default;
  }

  return {
    props: {
      messages: messages,
    },
  };
}

const cardProps = [
  { card: "card1", imgSrc: "/images/get-involved/physiciansAndResidents.png" },
  { card: "card2", imgSrc: "/images/get-involved/undergrad.png" },
  { card: "card3", imgSrc: "/images/get-involved/clinics.png" },
];
export default function GetInvolved() {
  const t = useTranslations("GetInvolved");

  return (
    <PageLayout>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionHeading}>{t("page_title")}</h1>
        <div className={styles.cardContainer}>
          {cardProps.map((cardProp, index) => (
            <Card key={index} cardProps={cardProp} />
          ))}
        </div>

        <div className={styles.donateBoxContainer}>
          <h3 className={styles.donateHeading}>{t("donate_today_text")}</h3>
          <p className={styles.donateText}>{t("donation_instruction")}</p>
          <div className={styles.centeredText}>
            <p className={styles.address}>{t("address")}</p>
            <p className={styles.donateText}>{t("thank_you_text")}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

GetInvolved;
