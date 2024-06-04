import styles from "@/styles/pages/services/services.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ImageSlider() {
  const t = useTranslations("Services.services_slides");

  const [currTab, setCurrTab] = useState(1);
  const toggleTab = (index) => {
    setCurrTab(index);
  };

  const imageData = [
    ["/images/services/specialtyClinics.png", "Clinic staff"],
    ["/images/services/hepatitis.png", "Woman being vaccinated"],
    ["/images/services/healthEdu.png", "Clinic students"],
    ["/images/services/vaccines.png", "Woman being vaccinated"],
  ];

  const slideCount = Number(t("slide_count"));
  const slideNum = [...Array(slideCount).keys()];

  return (
    <div className={styles.slideContainer}>
      <div className={styles.tabContainer}>
        {slideNum.map((_, index) => {
          const num = index + 1;
          return (
            <button
              className={
                currTab === num
                  ? `${styles.tab} ${styles.activeTab}`
                  : `${styles.tab}`
              }
              onClick={() => toggleTab(num)}
              key={index}
            >
              {t(`slide${num}.title`)}
            </button>
          );
        })}
      </div>

      <div className={styles.slideContainer}>
        {slideNum.map((_, index) => {
          const num = index + 1;
          const bulletNum = [
            ...Array(Number(t(`slide${num}.count_of_bullet_points`))).keys(),
          ];
          return (
            <div
              className={
                currTab === num
                  ? `${styles.activeSlide}`
                  : `${styles.inactiveSlide}`
              }
              key={index}
            >
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={imageData[index][0]}
                  width={478}
                  height={345}
                  alt={imageData[index][1]}
                />
              </div>

              <div className={styles.arrContainer}>
                <MdKeyboardArrowRight
                  className={styles.arr}
                  onClick={() =>
                    toggleTab(num < 4 ? num + 1 : (num % slideCount) + 1)
                  }
                />
              </div>

              <div className={styles.slideText}>
                <ul>
                  {bulletNum.map((_, i) => {
                    return (
                      <li key={i}>{t(`slide${num}.list.item${i + 1}`)}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
