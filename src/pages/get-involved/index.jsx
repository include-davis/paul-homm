import React from "react";
import Card from "@/components/getInvolved/card";
import styles from "@/styles/pages/get-involved/cards.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

const cardProps = ["Card1", "Card2", "Card3"];
const images = [
  "/images/get-involved/physiciansAndResidents.png",
  "/images/get-involved/undergrad.png", // doesn't work when these two are included?
  "/images/get-involved/clinics.png",
];
export default function GetInvolved() {
  // const t = useTranslations("Example");

  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.sectionHeading}>Get Involved</h1>
      <div>
        {cardProps.map((cardProp, index) => (
          <div key={index}>
            <Card cardProps={cardProp} imgSrc={images[index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
GetInvolved;
