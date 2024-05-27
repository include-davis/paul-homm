import PageLayout from "@/components/layout";
import React from "react";
//import styles

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default function About() {
  return (
    <PageLayout>
      <>about yay</>
    </PageLayout>
  );
}

About;
