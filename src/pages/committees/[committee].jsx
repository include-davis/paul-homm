import CommitteeDescription from "@/components/committees/committeeDesription";
import { useTranslations } from "next-intl";
import React from "react";

const data = [
    'coveredcalifornia',
    'cardiopulmonary',
    'patientassistance',
    'dermatology',
    'diabetes',
    'hlub',
    'hepatitis',
    'ophthalmology',
    'womenshealth',
    'neurology'
  ]

export async function getStaticPaths(){
    const committees = data;
    const paths = committees.map((committee) => ({
        params: { committee }
    }));
    return { paths, fallback: false};
};

export async function getStaticProps({ params, locale }) {
    const committeeNames = params.committee;
    return {
      props: {
        committeeNames,
        messages: (await import(`@/messages/${locale}.json`)).default
      },
    };
}

export default function CommitteePage({ committeeNames }){
    return(
        <div>
            <CommitteeDescription props={committeeNames}/>
        </div>
    )
};
