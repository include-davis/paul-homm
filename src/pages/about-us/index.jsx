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
  let history_cards = [];
  let sister_clinics = [];
  let ucd_clinics = [];
  let headerMessages = {};

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
    headerMessages = res.body;
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

    const body = res.body;
    messages = { About: body.text, Header: headerMessages };
    history_cards = body.history_cards;
    sister_clinics = body.sister_clinics;
    ucd_clinics = body.ucd_clinics;
  } catch (e) {
    console.log(`Fetching about-us data: ${e.message}`);
    // TODO: IMPLEMENT A BETTER FALLBACK
    messages = (await import(`@/messages/${locale}.json`)).default;
  }
  return {
    props: {
      messages: messages,
      history_cards,
      sister_clinics,
      ucd_clinics,
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

const svgDims = [
  [375, 162],
  [455, 40],
  [454, 41],
  [322, 110],
];

export default function About({ history_cards, ucd_clinics, sister_clinics }) {
  const t = useTranslations("About");

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
                  {Object.entries(history_cards).length !== 0
                    ? data.map((card, index) => {
                        const details = history_cards.find(
                          (card) => card.card_number === index + 1
                        );
                        return (
                          <div key={index} className={styles.frame}>
                            <h1 className={styles.frame_content}>
                              {details.title}
                            </h1>
                          </div>
                        );
                      })
                    : data.map((card, index) => {
                        return (
                          <div key={index} className={styles.frame}>
                            <h1 className={styles.frame_content}>
                              {t(`Flipping_Cards.${card}.title`)}
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
                  {Object.entries(history_cards).length !== 0
                    ? history_cards.map((card, index) => (
                        <div key={index} className={styles.frame}>
                          <FlippingCardMobile
                            props={card}
                            dimensions={dimensions[index]}
                            imgsrc={cardImages[index]}
                          />
                        </div>
                      ))
                    : data.map((card, index) => {
                        const description = t(`Flipping_Cards.${card}.content`);
                        const image_description = t(
                          `Flipping_Cards.${card}.alt`
                        );
                        return (
                          <div key={index} className={styles.frame}>
                            <FlippingCardMobile
                              props={(description, image_description)}
                              dimensions={dimensions[index]}
                              imgsrc={t(`Flipping_Cards.${card}.image`)}
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
          {Object.entries(history_cards).length !== 0
            ? data.map((elem, index) => {
                const details = history_cards.find(
                  (card) => card.card_number === index + 1
                );
                return (
                  <div
                    className={`${styles.cardContainer} ${index % 2 !== 0 ? styles.altPath : styles.path} ${index === 0 ? styles.topPath : ""}`}
                    key={index}
                  >
                    <FlippingCard
                      title={details.title}
                      content={details.description}
                      image={cardImages[index]}
                      alt={details.image_description}
                      dims={dims[index]}
                    />
                    {index !== data.length - 1 && ( // Render SVG for all but the last card
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
              })
            : data.map((elem, index) => {
                return (
                  <div
                    className={`${styles.cardContainer} ${index % 2 !== 0 ? styles.altPath : styles.path} ${index === 0 ? styles.topPath : ""}`}
                    key={index}
                  >
                    <FlippingCard
                      title={t(`Flipping_Cards.${elem}.title`)}
                      content={t(`Flipping_Cards.${elem}.content`)}
                      image={t(`Flipping_Cards.${elem}.image`)}
                      alt={t(`Flipping_Cards.${elem}.alt`)}
                      dims={dims[index]}
                    />
                    {index !== data.length - 1 && ( // Render SVG for all but the last card
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
              {ucd_clinics.map((clinic, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={clinic.website_link}
                      target="__blank"
                      className={styles.link}
                    >
                      {clinic.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.defaultClass}>
            <h3>{t("sister_clinics.clinic_category_title")}</h3>
            <ul>
              {sister_clinics.map((clinic, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={clinic.website_link}
                      target="__blank"
                      className={styles.link}
                    >
                      {clinic.name}
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
