import { useState } from 'react';
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'
import styles from "@/styles/pages/about/carousel.module.scss";

// data is passed in as an array of strings as of now
// data = ['frame1', 'frame2', frame3', ...]
export default function PracticeCarouselExample({ data }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const n = data.length
    const subIndex = () => {
      setActiveIndex((activeIndex + n - 1) % n)
    }

    const addIndex = () => {
      setActiveIndex((activeIndex + 1) % n)
    }

    return (
      <div className={styles.main_container}>
        <div className={styles.window_container}>
          <button className={styles.arrow} onClick={subIndex}>
            <RxArrowLeft/>
          </button>
          <div className={styles.viewport}>
            <div 
              className={styles.content_belt}
              style={{transform: `translateX(calc(${-activeIndex} * 100%))`}}
              >
              { data.map((frame, index) => {
                  return (
                    <div key={index} className={styles.frame}>
                      <img src={frame} unoptimized={true}></img>
                    </div>
                  )
                }) 
              }
            </div>
          </div>
          <button className={styles.arrow} onClick={addIndex}>
            <RxArrowRight/>
          </button>
          <div></div>
        </div>
        <div className={styles.dots}>
          { data.map((frame, index) => {
              return (
                <div 
                  key={index} 
                  className={`${styles.dot} ${activeIndex === index ? styles.active: null}`}
                  onClick={() => setActiveIndex(index)}
                ></div>
              )
            }) 
          }
        </div>
      </div>
    );
  }