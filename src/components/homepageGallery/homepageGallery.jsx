import React, { useState, useEffect } from 'react';
import styles from "@/styles/components/homepageGallery/homepageGallery.module.scss";
import { FaCircle } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";



export default function HomepageGallery() { 
  const [activeImg, setActiveImg] = useState(0);
  let prev = [<img  src='/homepageGallery/HomepageGalleryImage1.jpg' alt="Divider" className={styles.frame+' '+styles.prev}/>, <img  src='/homepageGallery/HomepageGalleryImage2.png' alt="Divider" className={styles.frame+' '+styles.prev}/>, <img  src='/homepageGallery/HomepageGalleryImage3.png' alt="Divider" className={styles.frame+' '+styles.prev}/>, <img  src='/homepageGallery/HomepageGalleryImage4.png' alt="Divider" className={styles.frame+' '+styles.prev}/>]
  let curr = [<img  src='/homepageGallery/HomepageGalleryImage1.jpg' alt="Divider" className={styles.frame+' '+styles.curr}/>, <img  src='/homepageGallery/HomepageGalleryImage2.png' alt="Divider" className={styles.frame+' '+styles.curr}/>, <img  src='/homepageGallery/HomepageGalleryImage3.png' alt="Divider" className={styles.frame+' '+styles.curr}/>, <img  src='/homepageGallery/HomepageGalleryImage4.png' alt="Divider" className={styles.frame+' '+styles.curr}/>]
  

  function go_nextFrame() {
    if (activeImg!=3) {
      setActiveImg(activeImg+1);
      }
    else {
      setActiveImg(0);
      }
  }

  function select_Frame(index) {
    setActiveImg(index);
  }

  function select_Prev() {
    if (activeImg!=0) {
      setActiveImg(activeImg-1);
      }
    else {
      setActiveImg(3);
      }
  }


  useEffect(() => {
    const autoPlay = setInterval(() => { go_nextFrame(); }, 7000);
    return () => {
      clearInterval(autoPlay);
    };
  }, [activeImg]);

  let currFrame = curr[activeImg];
  let prevFrame;
  if (activeImg!=0) {
    prevFrame = prev[activeImg-1];
    }
  else {
    prevFrame = prev[3];
    }
  
  let navDots = []
  for (let i = 0; i < 4; i++) {
    if (i==activeImg) {
      navDots.push(<button className={styles.navBttn} onClick={()=>{select_Frame(i)}}><FaCircle className={styles.selected+' '+styles.circle}/></button>)
      }
    else {
      navDots.push(<button className={styles.navBttn} onClick={()=>{select_Frame(i)}}><FaCircle className={styles.circle}/></button>)
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