import styles from "@/styles/components/services/imageSliderMobile.module.scss";

import Image from "next/image";
import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useTranslations } from "next-intl";
import DropDown from "@/components/dropDown/imageSliderDropdown.jsx";

// Calculates division of space based on number of frames shown
function calcDividor(numFramesShown, primary, scaleDiff) {
  let sum = primary;
  let temp = sum;
  for (let i = 1; i < numFramesShown; i++) {
    temp -= scaleDiff;
    sum += temp;
  }
  return sum;
}

// Calculations
const framesShown = 3;
const scaleDiff = 0.2; // This is how much I want to scale secondary images compared to first
const dividor = calcDividor(framesShown, 1, scaleDiff); // Calculates factor by which I divide total width to get avg frame size

const g = "8px";
const totalGap = `calc(${framesShown - 1} * ${g})`; // 2 * g
const contentSpace = `calc(100% - ${totalGap})`; // space we can work with is W - 2g
const x = `calc(${contentSpace} / ${dividor})`; // x = (W - 2g) / 2.6
const shiftAmount = `calc(${x} * 0.74 + ${g})`; // amount that slider shifts when service changes

function ImageSliderMobileFrame(props) {
  const { selfIndex, activeIndex, image } = props;
  const dist = Math.abs(selfIndex - activeIndex);

  function getSizeClass(dist) {
    switch (dist) {
      case 0:
        return styles.primary;
      default:
        return styles.secondary;
    }
  }

  return (
    <div className={`${styles.frame} ${getSizeClass(dist)}`}>
      <Image
        src={image}
        style={{ objectFit: "fill" }}
        fill={true}
        alt="Insert alt"
        sizes={"(max-width: 1048px) 100vw"}
        priority={
          image === "healthEdu.png" || image === "vaccines.png"
            ? "true"
            : "false"
        } // check for LCP elements
      />
    </div>
  );
}

// Acutal image slider component
export default function ImageSliderMobile() {
  const t = useTranslations("Services.services_slides");

  const slideCount = Number(t("slide_count"));
  const slideNum = [...Array(slideCount).keys()];

  // Images and services
  const services = slideNum.map((_, index) => {
    const num = index + 1;
    return t(`slides.slide${num}.title`);
  });

  const images = [
    "/images/services/specialtyClinics.png",
    "/images/services/hepatitis.png",
    "/images/services/healthEdu.png",
    "/images/services/vaccines.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [service, setService] = useState(services[0]);

  // Process images from array, concatenating from and back secondary images
  const n = images.length;
  const imagesFront = images.slice(0, 1);
  const imagesBack = images.slice(-1);
  const processedImages = imagesBack.concat(images).concat(imagesFront);

  // Move left and right through images AND change dropdown title
  const changeService = (index) => {
    setActiveIndex(index);
    setService(services[index]);
  };
  const subIndex = () => {
    // Move left
    const left = (activeIndex + n - 1) % n;
    changeService(left);
  };
  const addIndex = () => {
    // Move right
    const right = (activeIndex + 1) % n;
    changeService(right);
  };

  // Keep track of bullets below images
  const bulletCount = parseInt(
    t(`slides.slide${services.indexOf(service) + 1}.count_of_bullet_points`)
  );
  const bullets = [...Array(bulletCount).keys()];

  return (
    <div className={styles.main_container}>
      {/* Dropdown */}
      <div className={styles.dropdown_twolines}>
        <DropDown
          services={services}
          setImage={setActiveIndex}
          currService={service}
          setService={setService}
        />
      </div>

      {/* Image Carousel */}
      <div className={styles.window_container}>
        {/* Button to go left */}
        <button className={styles.arrow} onClick={subIndex}>
          <MdArrowBackIos />
        </button>

        {/* Image Slider */}
        <div className={styles.viewport_container}>
          <div className={styles.viewport}>
            {/* Embeds processed images each into ImageSliderMobileFrame */}
            <div
              className={styles.content_belt}
              style={{
                transform: `translateX(calc(${-activeIndex} * ${shiftAmount}))`,
              }}
            >
              {processedImages.map((frame, index) => {
                return (
                  <ImageSliderMobileFrame
                    key={index}
                    selfIndex={index - 1}
                    activeIndex={activeIndex}
                    image={frame}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Button to go right */}
        <button className={styles.arrow} onClick={addIndex}>
          <MdArrowForwardIos />
        </button>
      </div>

      {/* Dots below slider */}
      <div className={styles.dots}>
        {images.map((frame, index) => {
          return (
            <div
              key={index}
              className={`${styles.dot} ${activeIndex === index ? styles.active : null}`}
              onClick={() => changeService(index)} // Set dropdown and image index
            ></div>
          );
        })}
      </div>

      {/* Text under corresponding image */}
      <div className={styles.info}>
        <ul className={styles.info_items}>
          {bullets.map((bullet, index) => {
            return (
              <li className={styles.info_item} key={index}>
                {t(
                  `slides.slide${services.indexOf(service) + 1}.list.item${bullet + 1}`
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
