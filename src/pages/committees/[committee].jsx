import CommitteeDescription from "@/components/committees/committeeDesription";
import React from "react";
import PageLayout from "@/components/layout";

const data = [
  "covered-california",
  "cardiopulmonary",
  "patient-assistance-program",
  "dermatology",
  "diabetes",
  "hlub",
  "hepatitis",
  "ophthalmology",
  "womens-health",
  "neurology",
];

export async function getStaticPaths() {
  const committees = data;
  const paths = committees.map((committee) => ({
    params: { committee },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const committeeNames = params.committee;
  return {
    props: {
      committeeNames,
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default function CommitteePage({ committeeNames }) {
  return (
    <PageLayout>
      <CommitteeDescription props={committeeNames} />
    </PageLayout>
  );
}
