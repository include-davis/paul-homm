import React from 'react';
import { useTranslations } from 'next-intl';
import FlippingCard from '@/components/about-us/FlippingCard';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}

export default function About() {
    const t = useTranslations('Flipping Cards');
    // const cards = ["Card1", "Card2", "Card3", "Card4", "Card5"];
    const cards = ["Card1"];
    const flippingCards = cards.map((card, index) => (
        <FlippingCard
            key={index}
            title={t(`${card}.title`)}
            content={t(`${card}.content`)}
            image={t(`${card}.image`)}
            alt={t(`${card}.alt`)}
        />
    ));

    return (
        <div>
            {flippingCards}
        </div>
    );
}
About;