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
  let messages = {};

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/header`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();
    messages.Header = res.body;
  } catch (e) {
    console.log(`Fetching header data: ${e.message}`);
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/committees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();

    messages.Committees = res.body;
  } catch (e) {
    console.log(`Fetching committees data: ${e.message}`);
    // TODO: IMPLEMENT A BETTER FALLBACK
    messages = (await import(`@/messages/${locale}.json`)).default;
  }

  return {
    props: {
      committeeNames,
      messages: messages,
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
