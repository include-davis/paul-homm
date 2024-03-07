import React from 'react';
import { useTranslations } from 'next-intl';
import styles from "@/styles/components/about-us/mobileflippingCard.module.scss";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


export default function FlippingCard({ title, content, image, alt }) {
    return (
        <div>
            <div className={styles.scroll}>
                <h1>{title}</h1>
                <button className={styles.button}>
                    <FaChevronLeft className={styles.button_svg} />
                    <FaChevronRight className={styles.button_svg} />
                </button>
            </div>
            <div className={styles.card}>
                <p>{content}</p>
                <img src={image} alt={alt} />
            </div>
        </div>
    );
}

