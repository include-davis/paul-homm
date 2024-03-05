import styles from "@/styles/components/services/imageSliderMobile.module.scss"

import Image from "next/image";
import { useState } from "react";
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'
import { useTranslations } from 'next-intl';
import DropDown from "@/components/dropDown/imageSliderDropdown.jsx"

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}

// Calculates division of space based on number of frames shown
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

// Acutal image slider component
export default function ImageSliderMobile({ images, services }) {
    const t = useTranslations("Services");

    const [activeIndex, setActiveIndex] = useState(0)
    const [service, setService] = useState(services[0]);
    const n = images.length

    // Process images from array, concatenating from and back secondary images
    const imagesFront = images.slice(0, 1)
    const imagesBack = images.slice(-1)
    const processedImages = imagesBack.concat(images).concat(imagesFront)
    
    // Move left and right through images and change dropdown title
    const changeService = (index) => {
        setActiveIndex(index)
        setService(services[index])
    }
    const subIndex = () => {
      const left = (activeIndex + n - 1) % n
      changeService(left)
    }
    const addIndex = () => {
      const right = (activeIndex + 1) % n
      changeService(right)
    }


    // For dropdown
    return (
        <div className={styles.main_container}>
            {/* Dropdown */}
            <div className={styles.dropdown}>
                <DropDown services={services} setImage={setActiveIndex} currService={service} setService={setService}/>
            </div>

            {/* Image Carousel */}
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
            
            {/* Dots below slider */}
            <div className={styles.dots}>
                { images.map((frame, index) => {
                    return (
                        <div 
                        key={index} 
                        className={`${styles.dot} ${activeIndex === index ? styles.active : null}`}
                        onClick={() => changeService(index)} // Set dropdown and image index
                        ></div>
                    )
                    }) 
                }
            </div>
            
            {/* Text under corresponding image */}
            {/* <ul className={styles.info}>
                { serviceOptions.map((item, index) => (
                    <li key={index}>{t(item)}</li>
                ))}
            </ul> */}
        </div>
    );
  }