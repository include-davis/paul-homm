import React from "react";
import styles from "@/styles/pages/get-involved/get-involved.module.scss";
import { useTranslations } from "next-intl";
import Card from "@/components/get-involved/card";

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}

const cardProps = ["Card1", "Card2", "Card3"];
export default function GetInvolved() {
    const t = useTranslations("GetInvolved");

    return (
        <div className={styles.sectionContainer}>                
            <h1 className={styles.sectionHeading}>{t('pageTitle')}</h1>
            <div className={styles.cardContainer}>
                {cardProps.map((cardProp, index) => (
                    <Card key={index} cardProps={cardProp} />
                ))}
            </div>

            <div className={styles.donateBoxContainer}>
                <h3 className={styles.donateHeading}>{t('donateHeading')}</h3>
                <p className={styles.donateText}>{t('donateText')}</p>
                <div className={styles.centeredText}>
                    <p className={styles.address}>{t('address')}</p>
                    <p className={styles.donateText}>{t('donateText2')}</p>
                </div>
            </div>
        </div>
    );
}

GetInvolved;