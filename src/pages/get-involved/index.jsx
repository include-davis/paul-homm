import React from "react";
import { useTranslations } from "next-intl";
import Card from "@/components/getInvolved/card";
import PopupCard from "@/components/getInvolved/popupCard";

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
// I tried rendering this

const cardPopup = ["Card1", "Card2", "Card3"];
export default function GetInvolved() {
    const t = useTranslations("GetInvolved");

    return (
        <div className={styles.sectionContainer}>
            <PopupCard title="Physicians and Residents" content="Physicians and residents are a valuable component to our clinic because they serve as teachers and mentors to health professional students and undergrad patient advocates. They help facilitate the clinical process, such as guiding medical students in making a correct diagnosis, writing prescriptions for our patients, and providing medical services and advice. Any physician and resident, primary care and specialty alike, is welcomed and appreciated in our clinic! If you are interested in volunteering as a preceptor please contact our physician scheduling team at phac.physician.scheduler@gmail.com"></PopupCard>
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
