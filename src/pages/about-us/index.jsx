import React from 'react';
import FlippingCardMobile from "@/components/about-us/flippingcard-mobile"
import styles from'@/styles/pages/about/about.module.scss'
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";


export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`@/messages/${locale}.json`)).default
      }
    };
}

const data = ["card1", "card2","card3","card4","card5"]
const dimensions = [
    ["220px", "168px"],
    ["226px", "199px"],
    ["186px", "289px"],
    ["195px", "291px"],
    ["212px", "291px"]
]

export default function About()
{
    const [activeIndex, setActiveIndex] = useState(0)
    const n = data.length
    const subIndex = () => {
      setActiveIndex((activeIndex + n - 1) % n)
    }

    const addIndex = () => {
      setActiveIndex((activeIndex + 1) % n)
    }

    const t = useTranslations(`FlippingCards`)

    return(
        <div className={styles.main_container}>
            <div className={styles.window_container}>
                <button className={styles.arrow} onClick={subIndex}>
                    <IoIosArrowBack/>
                </button>

                <div className={styles.viewport}> 
                    <div className={styles.content_belt}
                    style={{transform: `translateX(calc(${-activeIndex} * 100%))`}}>
                        <div className={styles.flipping_cards}>
                            {data.map((card, index) => (
                                <div key={index} className={styles.frame}> 
                                    <h1 className={styles.frame_content}>{t(`${card}.title`)}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button className={styles.arrow} onClick={addIndex}>
                    <IoIosArrowForward />
                </button>
            </div>

            <div className={styles.cards_container}>
                <div className={styles.viewport}> 
                    <div className={styles.content_belt}
                    style={{transform: `translateX(calc(${-activeIndex} * 100%))`}}>
                        <div className={styles.flipping_cards}>
                            {data.map((card, index) => (
                                <div key={index} className={styles.frame}> 
                                    <FlippingCardMobile props = {card} dimensions =
                                    {dimensions[index]} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
                
            
        </div>
        
    )
}

About;