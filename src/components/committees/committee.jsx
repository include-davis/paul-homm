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

export default function CommitteeCard({ props }) {
    const t = useTranslations(`Committees.CommitteeCards.${props}`)
    return (
        <Link href={t('path')}>
            <div className={styles.committee_card}>
                <div className={styles.image_container}>
                    <Image
                        src={t('image')}
                        alt={t('name')}
                        style={{ objectFit: "fill" }}
                        fill={true}
                        priority={true}
                    />
                </div>
                <h3>{t('name')}</h3>
            </div>
        </Link>
    )
}
