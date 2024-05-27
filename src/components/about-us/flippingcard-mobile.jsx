import React from "react";
import { useTranslations } from "next-intl";
import styles from "@/styles/components/about-us/flippingcard-mobile.module.scss";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default function FlippingCardMobile({ props, dimensions }) {
  const t = useTranslations(`Flipping Cards.${props}`);
  const [height, width] = dimensions;
  return (
    <div className={styles.flipping_card}>
      <p>{t("content")}</p>
      <div
        className={styles.image_container}
        style={{ height: height, width: width }}
      >
        <Image
          src={t("image")}
          alt={t("alt")}
          style={{ objectFit: "cover" }}
          fill={true}
        />
      </div>
    </div>
  );
}
