import React from 'react';
import FlippingCardMobile from "@/components/about-us/flippingcard-mobile"
import styles from'@/styles/pages/about/about.module.scss'


export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`@/messages/${locale}.json`)).default
      }
    };
}

const data = ["card1", "card2","card3","card4","card5"]

export default function About()
{
    return(
        <div className={styles.flipping_cards}>
                {data.map((card, index) => (
                    <div key={index}> 
                        <FlippingCardMobile props = {card}/>
                    </div>
                ))}
            </div>
    )
}

About;