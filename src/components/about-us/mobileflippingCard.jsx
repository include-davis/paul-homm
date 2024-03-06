import React from 'react';
import { useTranslations } from 'next-intl';
import styles from "@/styles/components/about-us/mobileflippingCard.module.scss";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";


export default function FlippingCard({ title, content, image, alt }) {
    return (
        <div>
            <div className={styles.scroll}>
                <h1>{title}</h1>
                <button className={styles.button}>
                    <FaAngleLeft className={styles.button_svg} />
                    <FaAngleRight className={styles.button_svg} />
                </button>
            </div>
            <div className={styles.card}>
                <p>{content}</p>
                <img src={image} alt={alt} />
            </div>
        </div>
    );
}

