import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({locale}) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
    Home yay
    </>
  );
}
