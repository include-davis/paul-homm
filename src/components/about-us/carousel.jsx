import { useState, useRef } from "react";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import styles from "@/styles/pages/about/carousel.module.scss";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

// data is passed in as an array of strings as of now
// data = ['frame1', 'frame2', frame3', ...]
export default function PracticeCarouselExample({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const startXRef = useRef(0);
  const endXRef = useRef(0);
  const n = data.length;
  const subIndex = () => {
    setActiveIndex((activeIndex + n - 1) % n);
  };

  const addIndex = () => {
    setActiveIndex((activeIndex + 1) % n);
  };
  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50; // Minimum distance to be considered a swipe
    if (startXRef.current - endXRef.current > threshold) {
      addIndex();
    } else if (endXRef.current - startXRef.current > threshold) {
      subIndex();
    }
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.window_container}>
        <button className={styles.arrow} onClick={subIndex}>
          <RxArrowLeft />
        </button>
        <div className={styles.viewport}>
          <div
            className={styles.content_belt}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {data.map((frame, index) => (
              <div key={index} className={styles.frame}>
                <Image src={frame} alt={`frame ${index}`} fill={true} />
              </div>
            ))}
          </div>
        </div>
        <button className={styles.arrow} onClick={addIndex}>
          <RxArrowRight />
        </button>
        <div></div>
      </div>
      <div className={styles.dots}>
        {data.map((frame, index) => {
          return (
            <div
              key={index}
              className={`${styles.dot} ${activeIndex === index ? styles.active : null}`}
              onClick={() => setActiveIndex(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
