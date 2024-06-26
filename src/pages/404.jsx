import PageLayout from "@/components/layout";
import { useTranslations } from "next-intl";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default function Custom404() {
  const t = useTranslations("404page");

  return (
    <PageLayout>
      <div>
        <h1>{t("PageNotFound")}</h1>
      </div>
    </PageLayout>
  );
}
