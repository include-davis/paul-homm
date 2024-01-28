import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";
import Link from "next/link";


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
    <h1>{t('title')}</h1>
    <p>{t('description')}</p>
    <Link href='/' locale='hi' prefetch={false}>Hindi</Link>
    <br/>
    <Link href='/' locale='en' prefetch={false}>English</Link>
    </>
  );
}
