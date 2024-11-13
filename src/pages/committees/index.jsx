import React from "react";
import styles from "@/styles/pages/committees/committees.module.scss";
import { useTranslations } from "next-intl";
import CommitteeCard from "@/components/committees/committee";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  const messages = {};
  let committeeLinks = [];

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
    messages.General = (await import("@/messages/committees.json")).default;
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/committees`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.Committees = res.body;
      committeeLinks = res.body.committee_links;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching committees data: ${e.message}`);
    messages.Committees = (await import(`@/messages/committees.json`)).default;
    committeeLinks = messages.Committees.committee_links;
  }

  return {
    props: {
      messages: messages,
      locale,
      committeeLinks,
    },
  };
}

export default function Committees({ locale, committeeLinks }) {
  const g = useTranslations("General");

  return (
    <PageLayout>
      <div className={styles.committees_page}>
        <h1>{g(`title_text_${locale}`)}</h1>
        <div className={styles.committees_cards}>
          {committeeLinks.map((link, index) => (
            <div key={index}>
              <CommitteeCard name={link} locale={locale} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
