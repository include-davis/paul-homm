import React, { useState } from "react";
import YoutubeEmbed from "@/components/about-us/YoutubeEmbed";
//import YouTube from "react-youtube";
import styles from "@/styles/pages/about/about.module.scss";
import Carousel from "@/components/about-us/carousel";
import FlippingCard from "@/components/about-us/flippingCard";
import { useTranslations } from "next-intl";
import Image from "next/image";

import FlippingCardMobile from "@/components/about-us/flippingcard-mobile";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

const data = ["Card1", "Card2", "Card3", "Card4", "Card5"];
const dimensions = [
  ["220px", "168px"],
  ["226px", "199px"],
  ["186px", "289px"],
  ["195px", "291px"],
  ["212px", "291px"],
];
export default function About() {
  const t = useTranslations("About");
  const flip = useTranslations("Flipping Cards");
  const carouselData = [
    "/images/aboutUs/frame1.png",
    "/images/aboutUs/frame2.png",
    "/images/aboutUs/frame3.png",
    "/images/aboutUs/frame4.png",
    "/images/aboutUs/frame5.png",
    "/images/aboutUs/frame6.png",
    "/images/aboutUs/frame7.png" /* Add more frames as needed */,
  ];
  const cards = ["1", "2", "3", "4", "5"];
  const dims = [
    ["432px", "506px"],
    ["427px", "507px"],
    ["701px", "483px"],
    ["701px", "483px"],
    ["701px", "507px"],
  ];

  /* Mobile Flipping Cards */
  const [activeIndex, setActiveIndex] = useState(0);
  const n = data.length;
  const subIndex = () => {
    setActiveIndex((activeIndex + n - 1) % n);
  };

  const addIndex = () => {
    setActiveIndex((activeIndex + 1) % n);
  };

  /* Mobile Flipping Cards */

  const ucdClinics = [];
  const sisterClinics = [];
  for (let i = 1; i <= t("ucDavisClinics.count"); i++) {
    ucdClinics.push(
      <li key={i}>
        <a href={t(`ucDavisClinics.clinic${i}.link`)} target="__blank">
          {t(`ucDavisClinics.clinic${i}.name`)}
        </a>
      </li>
    );
  }
  for (let i = 1; i <= t("sisterClinics.count"); i++) {
    sisterClinics.push(
      <li key={i}>
        <a href={t(`sisterClinics.clinic${i}.link`)} target="__blank">
          {t(`sisterClinics.clinic${i}.name`)}
        </a>
      </li>
    );
  }

  const getFlippingCard = (num) => {
    return (
      <FlippingCard
        title={flip(`Card${num}.title`)}
        content={flip(`Card${num}.content`)}
        image={flip(`Card${num}.image`)}
        alt={flip(`Card${num}.alt`)}
        dims={dims[num - 1]}
      />
    );
  };

  return (
    <PageLayout>
      <div className={styles.wrapperClass}>
        <h1>{t("title")}</h1>
        <h2>{t("subtitle")}</h2>
        <Carousel data={carouselData} />
        <div className={`${styles.main_container} ${styles.mobile}`}>
          <div className={styles.window_container}>
            <button className={styles.arrow} onClick={subIndex}>
              <IoIosArrowBack />
            </button>

            <div className={styles.viewport}>
              <div
                className={styles.content_belt}
                style={{
                  transform: `translateX(calc(${-activeIndex} * 100%))`,
                }}
              >
                <div className={styles.flipping_cards}>
                  {data.map((card, index) => (
                    <div key={index} className={styles.frame}>
                      <h1 className={styles.frame_content}>
                        {flip(`${card}.title`)}
                      </h1>
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
              <div
                className={styles.content_belt}
                style={{
                  transform: `translateX(calc(${-activeIndex} * 100%))`,
                }}
              >
                <div className={styles.flipping_cards}>
                  {data.map((card, index) => (
                    <div key={index} className={styles.frame}>
                      <FlippingCardMobile
                        props={card}
                        dimensions={dimensions[index]}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.cardsDiv} ${styles.desktop}`}>
          {cards.map((elem, index) => (
            <div
              className={`${styles.cardContainer} ${index % 2 !== 0 ? styles.altPath : styles.path} ${index === 0 ? styles.topPath : ""}`}
              key={index}
            >
              {getFlippingCard(cards[elem - 1])}
              {index !== cards.length - 1 && ( // Render SVG for all but the last card
                <Image
                  className={styles.svg}
                  src={flip(`Card${elem}.svg`)}
                  alt="Dotted path leading to proceeding image"
                  fill={true}
                />
              )}
            </div>
          ))}
        </div>
        <p>{t("description")}</p>
        <YoutubeEmbed embedId="UUguG3tATJE" />
        <div className={styles.listClass}>
          <div className={styles.defaultClass}>
            <h3>{t("ucDavisClinics.title")}</h3>
            <ul>{ucdClinics}</ul>
          </div>
          <div className={styles.defaultClass}>
            <h3>{t("sisterClinics.title")}</h3>
            <ul>{sisterClinics}</ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
About;
