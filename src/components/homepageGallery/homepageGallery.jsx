import React, { useState, useEffect } from 'react';
import styles from "@/styles/components/homepageGallery/homepageGallery.module.scss";
import { FaCircle } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";



export default function HomepageGallery() { 
  const [activeImg, setActiveImg] = useState(0);
  let imgPaths = ['/homepageGallery/HomepageGalleryImage1.jpg', '/homepageGallery/HomepageGalleryImage2.png', '/homepageGallery/HomepageGalleryImage3.png', '/homepageGallery/HomepageGalleryImage4.png']
  let prev = []
  let curr = []
  let select = []
  for (const element of imgPaths) {
    prev.push(<img  src={element} alt="Previous Gallery Image" className={styles.frame+' '+styles.prev}/>)
    curr.push(<img  src={element} alt="Current Gallery Image" className={styles.frame+' '+styles.curr}/>)
    select.push(<img  src={element} alt="Current Gallery Image" className={styles.selectedFrame}/>)
  }

  function go_nextFrame() {
    if (activeImg%4!=3) {
      setActiveImg(activeImg%4+1);
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

  let currFrame;
  let prevFrame;
  let selectedFrame;
  if (activeImg>=4) {
    selectedFrame = select[activeImg%4];
  }
  else if (activeImg!=0) {
    currFrame = curr[activeImg%4];
    prevFrame = prev[activeImg-1];
    }
  else {
    currFrame = curr[activeImg%4];
    prevFrame = prev[3];
    }
  
  let navDots = []
  for (let i = 4; i < 8; i++) {
    if (i%4==activeImg%4) {
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
          {selectedFrame}
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