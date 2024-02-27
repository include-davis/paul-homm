import React from 'react';
import FlippingCard from '@/components/about-us/FlippingCard';
//import FlippingCard from '@/src/components/about-us/FlippingCard';
export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}
export default function About({ messages }) {
    const t = useTranslations('Flipping Cards');
    const array = [1, 2, 3, 4, 5];
    //const flippingCards = array.map((index) => (
    //<FlippingCard key={index} content={t(`Card${index}.content`)} />
    //));
    const flippingCards = array.map((index) => (
        <FlippingCard key={index} content={t(`Card${index}.content`)} />
    ));
    return (
        <div>
            {flippingCards}
        </div>
    );
}

/*export default function FlippingCard({ content, image, title, alt }) {
    const t = useTranslations('Flipping Cards');
    const array = [1, 2, 3, 4, 5];
    return (
        <>
            {array.map((index) => (
                <FlippingCard key={index} content={messages[`Card${index}`].content} />
            ))}
        </>
    );
}
*/
About;