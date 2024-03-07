import React from "react";
import { useTranslations } from "next-intl";
import PopupCard from "@/components/get-involved/mobilepopupCard";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
// I tried rendering this

//const cardProps = ["Card1", "Card2", "Card3"];
export default function PopupCard() {
  const t = useTranslations("PopupCard");
  const cards = ["Card1"];
  const popupCard = cards.map((card, index) => (
    <PopupCard
      key={index}
      title={t(`${card}.title`)}
      content={t(`${card}.content`)}
      content2={t(`${card}.content2`)}
    />
  ));
  return (
    <div>
      {PopupCard}
    </div>
  );
}
PopupCard;
