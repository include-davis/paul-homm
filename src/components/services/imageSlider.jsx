import styles from "@/styles/pages/services/services.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ImageSlider({ locale, imageData }) {
  const t = useTranslations("Services");

  const [currTab, setCurrTab] = useState(1);
  const toggleTab = (index) => {
    setCurrTab(index);
  };

  const slideCount = imageData.length;

  return (
    <div className={styles.slideContainer}>
      <div className={styles.tabContainer}>
        {imageData.map((_, idx) => (
          <button
            className={
              currTab === idx + 1
                ? `${styles.tab} ${styles.activeTab}`
                : `${styles.tab}`
            }
            onClick={() => toggleTab(idx + 1)}
            key={idx}
          >
            {t(`slide_${idx + 1}_title_${locale}`)}
          </button>
        ))}
      </div>

      <div className={styles.slideContainer}>
        {imageData.map((image, idx) => {
          const num = idx + 1;
          const bullets_array = [
            ...Array(Number(t(`num_slide_${num}_items`))).keys(),
          ];

          return (
            <div
              className={
                currTab === num
                  ? `${styles.activeSlide}`
                  : `${styles.inactiveSlide}`
              }
              key={idx}
            >
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={image.src}
                  width={478}
                  height={345}
                  alt={image.alt}
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
                  {bullets_array.map((_, i) => {
                    return (
                      <li key={i}>
                        {t(`slide_${num}_items_${locale}.${i + 1}`)}
                      </li>
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
