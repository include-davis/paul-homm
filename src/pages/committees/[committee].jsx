import CommitteeDescription from "@/components/committees/committeeDesription";
import React from "react";
import PageLayout from "@/components/layout";

export async function getStaticPaths({ locales }) {
  let committees = [];

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/committees`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      committees = res.body.committee_links;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching committees data: ${e.message}`);
    committees = (await import(`@/messages/committees.json`)).default
      .committee_links;
  }

  const paths = locales.flatMap((locale) =>
    committees.map((committee) => ({
      params: { committee },
      locale,
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const committeeName = params.committee;
  const messages = {};

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/general`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.General = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching general data: ${e.message}`);
    messages.General = (await import("@/messages/committees.json")).default;
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/committees`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.Committees = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching committees data: ${e.message}`);
    messages.Committees = (await import(`@/messages/committees.json`)).default;
  }

  return {
    props: {
      messages: messages,
      locale,
      committeeName,
    },
  };
}

export default function CommitteePage({ committeeName, locale }) {
  return (
    <PageLayout>
      <CommitteeDescription name={committeeName} locale={locale} />
    </PageLayout>
  );
}
