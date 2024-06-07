import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "@/styles/pages/about/about.module.scss";

import YoutubeEmbed from "@/components/about-us/YoutubeEmbed";
import Carousel from "@/components/about-us/carousel";
import FlippingCard from "@/components/about-us/flippingCard";
import FlippingCardMobile from "@/components/about-us/flippingcard-mobile";

import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  let messages = {};

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/header`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();

    if (res.status === 200) {
      messages.Header = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Fetching header data: ${e.message}`);
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/about-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();

    if (res.status === 200) {
      messages.About = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Fetching about-us data: ${e.message}`);
    // TODO: IMPLEMENT A BETTER FALLBACK
    messages = (await import(`@/messages/${locale}.json`)).default;
  }
  return {
    props: {
      messages: messages,
    },
  };
}

const mobileDims = [
  ["220px", "168px"],
  ["226px", "199px"],
  ["186px", "289px"],
  ["195px", "291px"],
  ["212px", "291px"],
];
const desktopDims = [
  ["432px", "506px"],
  ["427px", "507px"],
  ["701px", "483px"],
  ["701px", "483px"],
  ["701px", "507px"],
];
const svgDims = [
  [375, 162],
  [455, 40],
  [454, 41],
  [322, 110],
];
const carouselData = [
  "/images/aboutUs/frame1.png",
  "/images/aboutUs/frame2.png",
  "/images/aboutUs/frame3.png",
  "/images/aboutUs/frame4.png",
  "/images/aboutUs/frame5.png",
  "/images/aboutUs/frame6.png",
  "/images/aboutUs/frame7.png",
];
const cardImages = [
  "/images/about-us-timeline/1971image.png",
  "/images/about-us-timeline/creatingateam.png",
  "/images/about-us-timeline/earlyoperations.png",
  "/images/about-us-timeline/continuingthelegacy.png",
  "/images/about-us-timeline/Today.png",
];
export default function About() {
  const t = useTranslations("About");

  const cardNums = [...Array(Number(t("history_cards.card_count"))).keys()];
  const sisterClinicsNums = [
    ...Array(Number(t("sister_clinics.clinic_count"))).keys(),
  ];
  const ucdClinicsNums = [
    ...Array(Number(t("ucd_clinics.clinic_count"))).keys(),
  ];

  /* Mobile Flipping Cards */
  const [activeIndex, setActiveIndex] = useState(0);
  const n = cardNums.length;
  const subIndex = () => {
    setActiveIndex((activeIndex + n - 1) % n);
  };

  const addIndex = () => {
    setActiveIndex((activeIndex + 1) % n);
  };
  /* Mobile Flipping Cards */

  return (
    <PageLayout>
      <div className={styles.wrapperClass}>
        <h1>{t("page_title_and_subtitle.title")}</h1>
        <h2>{t("page_title_and_subtitle.description")}</h2>
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
                  {cardNums.map((_, index) => {
                    const num = index + 1;
                    return (
                      <div key={index} className={styles.frame}>
                        <h1 className={styles.frame_content}>
                          {t(`history_cards.card${num}.title`)}
                        </h1>
                      </div>
                    );
                  })}
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
                  {cardNums.map((_, index) => {
                    const num = index + 1;
                    return (
                      <div key={index} className={styles.frame}>
                        <FlippingCardMobile
                          props={[
                            t(`history_cards.card${num}.description`),
                            t(`history_cards.card${num}.image_description`),
                          ]}
                          dimensions={mobileDims[index]}
                          imgsrc={cardImages[index]}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.cardsDiv} ${styles.desktop}`}>
          {cardNums.map((_, index) => {
            const num = index + 1;
            return (
              <div
                className={`${styles.cardContainer} ${index % 2 !== 0 ? styles.altPath : styles.path} ${index === 0 ? styles.topPath : ""}`}
                key={index}
              >
                <FlippingCard
                  title={t(`history_cards.card${num}.title`)}
                  content={t(`history_cards.card${num}.description`)}
                  image={cardImages[index]}
                  alt={t(`history_cards.card${num}.image_description`)}
                  dims={desktopDims[index]}
                />
                {index !== cardNums.length - 1 && ( // Render SVG for all but the last card
                  <Image
                    className={styles.svg}
                    src={`/images/aboutUs/vector${index + 1}.svg`}
                    alt="Dotted path leading to proceeding image"
                    width={svgDims[index][0]}
                    height={svgDims[index][1]}
                  />
                )}
              </div>
            );
          })}
        </div>
        <p>{t("commitment_statement")}</p>
        <YoutubeEmbed embedId="UUguG3tATJE" />
        <div className={styles.listClass}>
          <div className={styles.defaultClass}>
            <h3>{t("ucd_clinics.clinic_category_title")}</h3>
            <ul>
              {ucdClinicsNums.map((_, index) => {
                const num = index + 1;
                return (
                  <li key={index}>
                    <Link
                      href={t(`ucd_clinics.clinic${num}.website_link`)}
                      target="__blank"
                      className={styles.link}
                    >
                      {t(`ucd_clinics.clinic${num}.name`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.defaultClass}>
            <h3>{t("sister_clinics.clinic_category_title")}</h3>
            <ul>
              {sisterClinicsNums.map((_, index) => {
                const num = index + 1;
                return (
                  <li key={index}>
                    <Link
                      href={t(`sister_clinics.clinic${num}.website_link`)}
                      target="__blank"
                      className={styles.link}
                    >
                      {t(`sister_clinics.clinic${num}.name`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
About;
