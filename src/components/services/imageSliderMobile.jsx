import styles from "@/styles/components/services/imageSliderMobile.module.scss"
import Image from "next/image";
import { useState } from "react";
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'

import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}
// Calculations
const framesShown = 5
const g = '8px'
const totalGap = `calc(${framesShown - 1} * ${g})` // 4 * g
const contentSpace = `calc(100% - ${totalGap})` // space we can work with is W - 4g
const x = `calc(${contentSpace} / 3.8)` // x = (W - 4g) / 3.8
const shiftAmount = `calc(${x} * 0.6 + ${g})` 

function ImageSliderMobileFrame(props) {
  const { selfIndex, activeIndex, data } = props
  const dist = Math.abs(selfIndex - activeIndex)

  function getSizeClass(dist) {
    switch(dist) {
      case 0:
        return styles.primary
      case 1:
        return styles.secondary
      default:
        return styles.tertiary
    }
  }

  return (
      <div className={`${styles.frame} ${getSizeClass(dist)}`}>
        <h1 className={styles.frame_content}>{data}</h1>
      </div>
    )
}

export default function ImageSliderMobile({ data }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const n = data.length

    const dataFront = data.slice(0, 2)
    const dataBack = data.slice(-2)
    const processedData = dataBack.concat(data).concat(dataFront)
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
          <div className={styles.viewport_container}>
            <div className={styles.viewport}>
              <div 
                className={styles.content_belt}
                style={{transform: `translateX(calc(${-(activeIndex)} * ${shiftAmount}))`}}
                >
                { processedData.map((frame, index) => {
                    return (
                      <ImageSliderMobileFrame 
                        key={index} 
                        selfIndex={index - 2} 
                        activeIndex={activeIndex}
                        data={frame}
                      />
                    )
                  }) 
                }
              </div>
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