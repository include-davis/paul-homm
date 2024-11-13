import React from "react";
import { useTranslations } from "next-intl";
import styles from "@/styles/components/committees/committee.module.scss";
import Image from "next/image";
import Link from "next/link";

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: (await import(`@/messages/${locale}.json`)).default,
//     },
//   };
// }

export default function CommitteeCard({ name, locale }) {
  const t = useTranslations("Committees");
  return (
    <Link href={`/committees/${name}`}>
      <div className={styles.committee_card}>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src={t(`${name}.committee_image.src`)}
            alt={t(`${name}.committee_image.alt`)}
            style={{ objectFit: "fill" }}
            fill={true}
          />
          <div className={styles.gradient}></div>
        </div>
        <h3>{t(`${name}.committee_name_${locale}`)}</h3>
      </div>
    </Link>
  );
}
