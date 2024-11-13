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
  const messages = {};
  let sisterClinics = [];
  let ucdClinics = [];
  let aboutUsImages = {};

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/general`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.General = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching general data: ${e.message}`);
    messages.General = (await import(`@/messages/general.json`)).default;
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/about-us`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.AboutUs = res.body;
      sisterClinics = res.body[`sister_clinics_${locale}`];
      ucdClinics = res.body[`ucd_clinics_${locale}`];
      aboutUsImages = res.body.page_media;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching about-us data: ${e.message}`);
    messages.AboutUs = (await import(`@/messages/about-us.json`)).default;
    sisterClinics = messages.AboutUs[`sister_clinics_${locale}`];
    ucdClinics = messages.AboutUs[`ucd_clinics_${locale}`];
    aboutUsImages = messages.AboutUs.page_media;
  }

  return {
    props: {
      messages: messages,
      locale,
      sisterClinics,
      ucdClinics,
      aboutUsImages,
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

export default function About({
  locale,
  sisterClinics,
  ucdClinics,
  aboutUsImages,
}) {
  const t = useTranslations("AboutUs");

  const historyImages = aboutUsImages.history_section;

  /* Mobile Flipping Cards */
  const [activeIndex, setActiveIndex] = useState(0);
  const n = historyImages.length;
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
        <h1>{t(`page_title_${locale}`)}</h1>
        <h2>{t(`page_subtitle_${locale}`)}</h2>
        <Carousel data={aboutUsImages.gallery_section} />
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
                  {historyImages.map((_, idx) => (
                    <div key={idx} className={styles.frame}>
                      <h1 className={styles.frame_content}>
                        {t(`history_card_${idx + 1}_title_${locale}`)}
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
                  {historyImages.map((image, idx) => (
                    <div key={idx} className={styles.frame}>
                      <FlippingCardMobile
                        props={[
                          t(`history_card_${idx + 1}_text_${locale}`),
                          image.alt,
                        ]}
                        dimensions={mobileDims[idx]}
                        imgsrc={image.src}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.cardsDiv} ${styles.desktop}`}>
          {historyImages.map((image, idx) => {
            return (
              <div
                className={`${styles.cardContainer} ${idx % 2 !== 0 ? styles.altPath : styles.path} ${idx === 0 ? styles.topPath : ""}`}
                key={idx}
              >
                <FlippingCard
                  title={t(`history_card_${idx + 1}_title_${locale}`)}
                  content={t(`history_card_${idx + 1}_text_${locale}`)}
                  image={image.src}
                  alt={image.alt}
                  dims={desktopDims[idx]}
                />
                {idx !== historyImages.length - 1 && ( // Render SVG for all but the last card
                  <Image
                    className={styles.svg}
                    src={`/images/aboutUs/vector${idx + 1}.svg`}
                    alt="Dotted path leading to proceeding image"
                    width={svgDims[idx][0]}
                    height={svgDims[idx][1]}
                  />
                )}
              </div>
            );
          })}
        </div>
        <p>{t(`commitment_statement_${locale}`)}</p>
        <YoutubeEmbed link={t("aboutus_youtube_video")} />
        <div className={styles.listClass}>
          <div className={styles.defaultClass}>
            <h3>{t(`ucd_clinics_text_${locale}`)}</h3>
            <ul>
              {ucdClinics.map((clinic, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={clinic.link}
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
            <h3>{t(`sister_clinics_text_${locale}`)}</h3>
            <ul>
              {sisterClinics.map((clinic, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={clinic.link}
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
