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

function calcDividor(numFramesShown, primary, scaleDiff) {
    let sum = primary;
    let temp = sum;
    for(let i = 1; i < numFramesShown; i++) {
        temp -= scaleDiff;
        sum += temp;
    }
    return sum;
}

// Calculations
const framesShown = 3
const scaleDiff = 0.2;
const dividor = calcDividor(framesShown, 1, scaleDiff);

const g = '8px'
const totalGap = `calc(${framesShown - 1} * ${g})` // 2 * g
const contentSpace = `calc(100% - ${totalGap})` // space we can work with is W - 2g
const x = `calc(${contentSpace} / ${dividor})` // x = (W - 2g) / 2.6
const shiftAmount = `calc(${x} * 0.74 + ${g})` 

function ImageSliderMobileFrame(props) {
  const { selfIndex, activeIndex, image } = props
  const dist = Math.abs(selfIndex - activeIndex)

  function getSizeClass(dist) {
    switch(dist) {
      case 0:
        return styles.primary
      default:
        return styles.secondary
    //   default:
    //     return styles.tertiary
    }
  }

  return (
      <div className={`${styles.frame} ${getSizeClass(dist)}`}>
        <Image src={image}
            // className={styles.imageContainer}
            style={{ objectFit: "fill" }}
            fill={true}
            alt="Insert alt"
        />
      </div>
    )
}

export default function ImageSliderMobile({ images }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const n = images.length

    const imagesFront = images.slice(0, 2)
    const imagesBack = images.slice(-2)
    const processedImages = imagesBack.concat(images).concat(imagesFront)
    const subIndex = () => {
      setActiveIndex((activeIndex + n - 1) % n)
    }

    const addIndex = () => {
      setActiveIndex((activeIndex + 1) % n)
    }

    return (
      <div className={styles.main_container}>
        <div className={styles.window_container}>
          
          {/* Button to go left */}
          <button className={styles.arrow} onClick={subIndex}>
            <RxArrowLeft/>
          </button>
          
          {/* Image Slider */}
          <div className={styles.viewport_container}>
            <div className={styles.viewport}>
              <div 
                className={styles.content_belt}
                style={{transform: `translateX(calc(${-(activeIndex)} * ${shiftAmount}))`}}
                >
                { processedImages.map((frame, index) => {
                    return (
                      <ImageSliderMobileFrame 
                        key={index} 
                        selfIndex={index - 1} 
                        activeIndex={activeIndex}
                        image={frame}
                      />
                    )
                  }) 
                }
              </div>
            </div>
          </div>
          
          {/* Button to go right */}
          <button className={styles.arrow} onClick={addIndex}>
            <RxArrowRight/>
          </button>
           
        </div>
        
        <div className={styles.dots}>
          { images.map((frame, index) => {
              return (
                <div 
                  key={index} 
                  className={`${styles.dot} ${activeIndex === index ? styles.active : null}`}
                  onClick={() => setActiveIndex(index)}
                ></div>
              )
            }) 
          }
        </div>
      </div>
    );
  }