import React from "react";
import Card from "@/components/getInvolved/card";
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

export default function GetInvolved() {
  // const t = useTranslations("Example");

  return (
    <div>
      <div>
        {cardProps.map((cardProp, index) => (
          <div key={index}>
            <Card cardProps={cardProp} />
          </div>
        ))}
      </div>
    </div>
  );
}
GetInvolved;
