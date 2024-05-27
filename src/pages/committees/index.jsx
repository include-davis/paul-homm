import React from "react";
import styles from "@/styles/pages/committees/committees.module.scss";
import { useTranslations } from "next-intl";
import CommitteeCard from "@/components/committees/committee";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

const data = [
  "committee1",
  "committee2",
  "committee3",
  "committee4",
  "committee5",
  "committee6",
  "committee7",
  "committee8",
  "committee9",
];

export default function Committees() {
  const t = useTranslations(`Committees`);
  return (
    <PageLayout>
      <div className={styles.committees_page}>
        <h1>{t("meetOurCommittees")}</h1>
        <div className={styles.committees_cards}>
          {data.map((committee, index) => (
            <div key={index}>
              <CommitteeCard props={committee} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
