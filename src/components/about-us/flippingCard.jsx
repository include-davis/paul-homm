import { useTranslations } from 'next-intl';
import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from '@/styles/components/about_us/flippingCard.module.scss';
export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}

export default function PopupCard({ content, image, title }) {
    const t = useTranslations('Flipping Cards');
    return (
        <div className="container">
            <div className='FlipCard'>
                <div className="CardInner"></div>
                <div className='CardFront'>
                    <img src={image} alt="Card Image" />
                </div>
                <div className="FlipBack">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}