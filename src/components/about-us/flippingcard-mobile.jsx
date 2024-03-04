import React from 'react';
import { useTranslations } from "next-intl";
import styles from "@/styles/components/about-us/flippingcard-mobile.module.scss";
import Image from 'next/image'

export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`@/messages/${locale}.json`)).default
      }
    };
}

export default function FlippingCardMobile({props}) {
    const t = useTranslations(`FlippingCards.${props}`)
    return (
        <div className={styles.flipping_card}>
            <h3>{t('title')}</h3>
            <div className={styles.image_container}>
                <Image
                    src={t('image')}
                    alt={t('alt')}
                    width={360}
                    height={360}
                />
            </div>
        </div>
    )
}