import React, { useState, useEffect, useRef } from 'react';
import YoutubeEmbed from "@/components/about-us/YoutubeEmbed";
//import YouTube from "react-youtube";
import styles from "@/styles/pages/about/about.module.scss";
import Carousel from "@/components/about-us/carousel";
import FlippingCard from '@/components/about-us/flippingCard';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}

/* TODO
- map the correct svgs to each element
- fix positioning for svgs
- carousel
*/

export default function About() {
    const t = useTranslations("About");
    const svg = useTranslations("Flipping Cards");
    const carouselData = ["/images/aboutUs/frame1.png", '/images/aboutUs/frame2.png', '/images/aboutUs/frame3.png', '/images/aboutUs/frame4.png', '/images/aboutUs/frame5.png', '/images/aboutUs/frame6.png', '/images/aboutUs/frame7.png'/* Add more frames as needed */];
    const cards = ["1", "2", "3", "4", "5"];
    const dims = [
        ["432px", "506px"],
        ["427px", "507px"],
        ["701px", "483px"],
        ["701px", "483px"],
        ["701px", "507px"]
    ]

    const ucdClinics = [];
    const sisterClinics = [];
    for (let i = 1; i <= t('ucDavisClinics.count'); i++) {
        ucdClinics.push(<li key={i}>
            <a href={t(`ucDavisClinics.clinic${i}.link`)} target="__blank">{t(`ucDavisClinics.clinic${i}.name`)}</a>
        </li>);
    }
    for (let i = 1; i <= t('sisterClinics.count'); i++) {
        sisterClinics.push(<li key={i}>
            <a href={t(`sisterClinics.clinic${i}.link`)} target="__blank">{t(`sisterClinics.clinic${i}.name`)}</a>
        </li>);
    }


    const getFlippingCard = (num) => {
        const x = useTranslations('Flipping Cards');
        return (
            <FlippingCard
                title={x(`Card${num}.title`)}
                content={x(`Card${num}.content`)}
                image={x(`Card${num}.image`)}
                alt={x(`Card${num}.alt`)}
                dims={dims[num - 1]}
            />
        )
    }
    return (
        <div className={styles.wrapperClass}>
            <h1>{t('title')}</h1>
            <h2>{t('subtitle')}</h2>
            {/* <Carousel data={carouselData} /> */}
            <div className={styles.cardsDiv}>
                {cards.map((elem, index) => <div className={`${styles.cardContainer} ${index % 2 !== 0 ? styles.altPath : styles.path} ${index == 0 ? styles.topPath : ''}`} >{getFlippingCard(cards[elem - 1])}
                    {index !== cards.length - 1 && ( // Render SVG for all but the last card
                        <img
                            src={svg(`Card${elem}.svg`)}
                            alt='Dotted path leading to proceeding image'

                        />
                    )}

                </div>)}
            </div>
            <p>{t('description')}</p>
            <YoutubeEmbed embedId="UUguG3tATJE" />
            <div className={styles.listClass}>
                <div className={styles.defaultClass}>
                    <h3>{t('ucDavisClinics.title')}</h3>
                    <ul>
                        {ucdClinics}
                    </ul>
                </div>
                <div className={styles.defaultClass}>
                    <h3>{t('sisterClinics.title')}</h3>
                    <ul>
                        {sisterClinics}
                    </ul>
                </div>
            </div>
        </div>
    )

} About;

// export default function About() {
//     const t = useTranslations('Flipping Cards');
//     // const cards = ["Card1", "Card2", "Card3", "Card4", "Card5"];
//     const cards = ["Card1"];
//     const flippingCards = cards.map((card, index) => (
//         <FlippingCard
//             key={index}
//             title={t(`${ card }.title`)}
//             content={t(`${ card }.content`)}
//             image={t(`${ card }.image`)}
//             alt={t(`${ card }.alt`)}
//         />
//     ));

//     return (
//         <div>
//             {flippingCards}
//         </div>
//     );
// }
// About;