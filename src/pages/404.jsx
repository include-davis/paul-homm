import PageLayout from "@/components/layout";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/pages/error-page/error-page.module.scss";

export async function getStaticProps({ locale }) {
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
      return {
        props: {
          messages: { General: res.body },
          locale,
        },
      };
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching general data: ${e.message}`);
    return {
      props: {
        messages: {
          General: (await import(`@/messages/general.json`)).default,
        },
        locale,
      },
    };
  }
}

export default function Custom404({ locale }) {
  const t = useTranslations("General");

  return (
    <PageLayout>
      <div className={styles.container}>
        <h1>{t(`page_not_found_${locale}`)}</h1>
        <Link href="/">
          {t(`back_to_home_${locale}`)} <HiOutlineExternalLink />
        </Link>
      </div>
    </PageLayout>
  );
}
