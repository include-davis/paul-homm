import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function Custom404() {
  const t = useTranslations('404page');

  return (
    <div>
      <h1>{t('PageNotFound')}</h1>
    </div>
  );
}
