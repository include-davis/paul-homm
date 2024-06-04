import styles from "@/styles/components/committees/committeeDescription.module.scss";
import { IoArrowBack, IoChevronBack } from "react-icons/io5";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

/* add and import styles */
/* view and test it out by importing it to the respective page */
export default function CommitteeDescription({ props }) {
  const l = useTranslations("Committees");
  const t = useTranslations(`Committees.cards.${props}`);
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonClass}>
        <Link href="/committees" className={styles.linkStyle}>
          <button className={styles.button}>
            <IoArrowBack className={styles.desktop_arrow} />
            <IoChevronBack className={styles.mobile_arrow} />
            {l("back_to_committees")}
          </button>
        </Link>
      </div>
      <div className={styles.content}>
        <h1>{t("name")}</h1>
        <h2>{t("description")}</h2>
      </div>
    </div>
  );
}
