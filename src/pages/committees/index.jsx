import React from "react";
import styles from "@/styles/pages/committees/committees.module.scss";
import { useTranslations } from "next-intl";
import CommitteeCard from "@/components/committees/committee";
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
    messages.Header = res.body;
  } catch (e) {
    console.log(`Fetching header data: ${e.message}`);
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/committees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();

    messages.Committees = res.body;
  } catch (e) {
    console.log(`Fetching committees data: ${e.message}`);
    // TODO: IMPLEMENT A BETTER FALLBACK
    messages = (await import(`@/messages/${locale}.json`)).default;
  }

  return {
    props: {
      messages: messages,
    },
  };
}

export default function Committees() {
  const t = useTranslations(`Committees`);

  const data = [...Array(Number(t("count_of_committees"))).keys()];

  return (
    <PageLayout>
      <div className={styles.committees_page}>
        <h1>{t("title_text")}</h1>
        <div className={styles.committees_cards}>
          {data.map((_, index) => {
            const committee = t(`committee_names.item${index + 1}`);
            return (
              <div key={index}>
                <CommitteeCard props={committee} />
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
