import styles from "@/styles/components/services/imageSliderMobile.module.scss"
import Image from "next/image";
import { useState } from "react";
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'

import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}

export default function imageSliderMobile({ data }) {

    const [activeIndex, setActiveIndex] = useState(0)
    const n = data.length
    const subIndex = () => {
      setActiveIndex((activeIndex + n - 1) % n)
    }

    const addIndex = () => {
      setActiveIndex((activeIndex + 1) % n)
    }

    return (
    <div className={styles.main_container}>
        <div className={styles.window_container}>
            <button className={styles.arrow} onClick={subIndex}>
                <RxArrowLeft/>
            </button>
            <div className={styles.viewport}>
                <div 
                className={styles.content_belt}
                style={{transform: `translateX(calc(${-activeIndex} * 100%))`}}
                >
                    { data.map((frame, index) => {
                        return (
                            <div key={index} className={styles.frame}>
                                <h1 className={styles.frame_content}>{frame}</h1>
                            </div>
                        )}) 
                    }
                    
                </div>
            </div>
            <button className={styles.arrow} onClick={addIndex}>
                <RxArrowRight/>
            </button>
        </div>
        <div className={styles.dots}>
            { data.map((frame, index) => {
                return (
                <div 
                    key={index} 
                    className={`${styles.dot} ${activeIndex === index ? styles.active: null}`}
                    onClick={() => setActiveIndex(index)}
                ></div>
                )
            }) 
            }
        </div>
    </div>
    );
}
