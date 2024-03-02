import React from 'react';
import { useTranslations } from "next-intl";
import styles from "@/styles/components/committees/committee.module.scss"
import Image from 'next/image'
import Link from 'next/link';

export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`@/messages/${locale}.json`)).default
      }
    };
}


export default function CommitteeCard({props}) {
    const t = useTranslations(`CommitteeCards.${props}`)
    return (
        <Link href={t('path')}>
            <div className={styles.committee_card}>
                <div className={styles.image_container}>
                    <Image
                            src={t('image')}
                            alt={t('name')}
                            width={306}
                            height={306}
                    />
                </div>
                <h3>{t('name')}</h3>
            </div>
        </Link>
    )
}
