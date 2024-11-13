import styles from "@/styles/components/committees/committeeDescription.module.scss";
import { IoArrowBack, IoChevronBack } from "react-icons/io5";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CommitteeDescription({ name, locale }) {
  const t = useTranslations("Committees");
  const g = useTranslations("General");

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonClass}>
        <Link href="/committees" className={styles.linkStyle}>
          <button className={styles.button}>
            <IoArrowBack className={styles.desktop_arrow} />
            <IoChevronBack className={styles.mobile_arrow} />
            <p>{g(`back_to_committees_${locale}`)}</p>
          </button>
        </Link>
      </div>
      <div className={styles.content}>
        <h1>{t(`${name}.committee_name_${locale}`)}</h1>
        <h2>{t(`${name}.committee_description_${locale}`)}</h2>
      </div>
    </div>
  );
}
