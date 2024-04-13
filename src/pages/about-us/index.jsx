import React, { useState, useEffect, useRef } from 'react';
import YoutubeEmbed from "@/components/about-us/YoutubeEmbed";
//import YouTube from "react-youtube";
import styles from "@/styles/pages/about/about.module.scss";
import Carousel from "@/components/about-us/carousel";
import FlippingCard from '@/components/about-us/flippingCard';
import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}

//import styles 
export default function About() {
    const carouselData = ["/images/aboutUs/frame1.png", '/images/aboutUs/frame2.png', '/images/aboutUs/frame3.png', '/images/aboutUs/frame4.png', '/images/aboutUs/frame5.png', '/images/aboutUs/frame6.png', '/images/aboutUs/frame7.png'/* Add more frames as needed */];
    const cards = ["1", "2", "3", "4", "5"];
    const dims = [
        ["354px", "430px"],
        ["339px", "455px"],
        ["634px, 382px"],
        ["624px", "405px"],
        ["586px", "426px"]
    ]
    const t = useTranslations('Flipping Cards');

    const getFlippingCard = (num) => {
        return (
            <FlippingCard
                title={t(`Card${num}.title`)}
                content={t(`Card${num}.content`)}
                image={t(`Card${num}.image`)}
                alt={t(`Card${num}.alt`)}
                dims={dims[num - 1]}
            />
        )
    }
    return (
        <div className={styles.wrapperClass}>
            <h1>The Legacy of Paul Hom</h1>
            <h2>We are the oldest Asian clinic in the United States.</h2>
            <Carousel data={carouselData} />

            {/* <div>{getFlippingCard(cards[0])}</div>
            <div>{getFlippingCard(cards[1])}</div>
            <div>{getFlippingCard(cards[2])}</div>
            <div>{getFlippingCard(cards[3])}</div>
            <div>{getFlippingCard(cards[4])}</div> */}



            <p>Dr. Paul Hom had an untiring commitment to the clinic and to its purpose in serving patients of all ages in the Asian community who lack adequate healthcare due to cultural, linguistic, or economic barriers. Healthcare continues to be provided at no charge to all patients. </p>
            <YoutubeEmbed embedId="UUguG3tATJE" />
            <div className={styles.listClass}>
                <div className={styles.defaultClass}>
                    <h3>UC Davis Student-Run Clinics</h3>
                    <ul>
                        <li>Bayanihan</li>
                        <li>Clinica Tepati</li>
                        <li> Imani clinic</li>
                        <li> Joan Viteri Memorial Clinic</li>
                        <li> Shifa Clinic</li>
                        <li> Willow Clinic</li>
                    </ul>
                </div>
                <div className={styles.defaultClass}>
                    <h3>Our Sister Clinics</h3>
                    <ul>
                        <li>VN Cares</li>
                        <li>HLUB</li>
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
//             title={t(`${card}.title`)}
//             content={t(`${card}.content`)}
//             image={t(`${card}.image`)}
//             alt={t(`${card}.alt`)}
//         />
//     ));

//     return (
//         <div>
//             {flippingCards}
//         </div>
//     );
// }
// About;