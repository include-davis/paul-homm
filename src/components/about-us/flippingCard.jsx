import React from 'react';
import { useTranslations } from 'next-intl';
import styles from "@/styles/components/about-us/flippingCard.module.scss";

export default function FlippingCard({ title, content, image, alt }) {
    return (

        <div className={styles.FlipCard}>
            <h1>{title}</h1>
            <div className={styles.CardInner}>
                <div className={styles.CardFront}>
                    <img src={image} alt={alt} />
                </div>

            </div>
            <div className={styles.FlipBack}>
                <p>{content}</p>
            </div>
        </div>

    );
}


/*import { useTranslations } from 'next-intl';
import React from 'react';
import styles from "@/styles/components/aboutus/flippingCard.module.scss";
return (
    <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.FlipCard}>
            <div className={styles.CardInner}></div>
            <div className={styles.CardFront}>
                <img src={image} alt={alt} />
            </div>
            <div className={styles.FlipBack}>
                <p>{content}</p>
            </div>
        </div>
    </div>
);
*/
