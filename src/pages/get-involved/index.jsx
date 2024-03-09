import React from "react";
import { useTranslations } from "next-intl";
import PopupCard from "@/components/get-involved/mobilepopupCard";
// import PopupCard from "@/components/get-involved/popupCard";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
// I tried rendering this

const cardPopup = ["Card1", "Card2", "Card3"];
export default function GetInvolved() {
  const t = useTranslations("GetInvolved");
  // const cards = ["Card1"];

  return (
    <div>
      {cardPopup.map((card, index) => (
        <PopupCard
          key={index}
          card={card}
        />))}
      <PopupCard title="helu" content="helu again" content2="bye" />
    </div>
  );
}
GetInvolved;
