import React, { useState, useEffect } from 'react';
import styles from "@/styles/components/homepage/homepageGallery.module.scss";
import { FaCircle } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function HomepageGallery() { 
  const [activeImg, setActiveImg] = useState(0); // activeImg can hold values 0-7 indicating which image from the lists below to use at each render
  let imgPaths = ['/images/homepage/HomepageGalleryImage1.jpg', '/images/homepage/HomepageGalleryImage2.png', '/images/homepage/HomepageGalleryImage3.png', '/images/homepage/HomepageGalleryImage4.png']
  // for each image, hold a version of the image with different css stylings corresponding to possible roles it can take on each rerender, whether it is the previously shown image in the gallery or the currently shown image in the gallery 
  let prev = []
  let curr = []
  let prevR = [] // images in these 2 "R" lists will have stylings necessary to animate the backwards/Reverse sliding (necessary for when the left arrow in the mobile ver. is tapped)
  let currR = []
  for (const element of imgPaths) {
    prev.push(<img  src={element} alt="Previous Gallery Image" className={styles.frame+' '+styles.prev}/>)
    curr.push(<img  src={element} alt="Current Gallery Image" className={styles.frame+' '+styles.curr}/>)
    prevR.push(<img  src={element} alt="Previous Gallery Image" className={styles.frameR+' '+styles.prevR}/>)
    currR.push(<img  src={element} alt="Current Gallery Image" className={styles.frameR+' '+styles.curr}/>)
  }

  
  function go_nextFrame() {
    if (activeImg%4!=3) {
      setActiveImg(activeImg%4+1);
      }
    else {
      setActiveImg(0);
      }
  }

  function select_Prev() {
    if (activeImg%4!=0) {
      setActiveImg(activeImg-1+8);
      }
    else {
      setActiveImg(3+8);
      }
  }


  useEffect(() => {
    const autoPlay = setInterval(() => { go_nextFrame(); }, 7000);
    return () => {
      clearInterval(autoPlay);
    };
  }, [activeImg]);

  let currFrame;
  let prevFrame;

  if (activeImg>=4) {
    currFrame = currR[activeImg%4];
    if (activeImg%4==3) {
      prevFrame = prevR[0];
    }
    else {
      prevFrame = prevR[activeImg%4+1];
    }
  }
  else if (activeImg!=0) {
    currFrame = curr[activeImg];
    prevFrame = prev[activeImg-1];
    }
  else {
    currFrame = curr[activeImg];
    prevFrame = prev[3];
    }
  
  let navDots = []
  for (let i = 0; i < 4; i++) {
    if (i%4==activeImg%4) {
      navDots.push(<FaCircle className={styles.selected+' '+styles.circle}/>)
      }
    else {
      navDots.push(<FaCircle className={styles.circle}/>)
      }
  }

  return (
    <div className={styles.gallery}>

      <div className={styles.container}>

        <div className={styles.textContainer}><div className={styles.blur}>
          <h2 div className={styles.title}>A Passion to Serve</h2>
          <p div className={styles.description}>Quality clinical services for our local community</p></div>
        </div>
        <div key={activeImg} className={styles.frameContainer}>
          <div className={styles.left_blur}><FaArrowCircleLeft className={styles.arrow} onClick={()=>{select_Prev()}} alt="Left Arrow"/></div>
          {prevFrame}
          {currFrame}
          <div className={styles.right_blur}><FaArrowCircleRight className={styles.arrow} onClick={()=>{go_nextFrame()}} alt="Right Arrow"/></div>
        </div>

      </div>

      <div className={styles.nav}>
        {navDots[0]}
        {navDots[1]}
        {navDots[2]}
        {navDots[3]}
      </div>
    
    </div>
  );
}