import React from "react";
import Card from "@/components/getInvolved/card";
import { useTranslations } from "next-intl";
import Image from "next/image";

const cardProps = [
  "Physicians & Residents",
  "Undergrad. Patient Advocates",
  "Health Professional Students",
];

export default function GetInvolved() {
  const t = useTranslations("Example");

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
