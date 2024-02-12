import React, { useState, useEffect } from 'react';
import styles from "@/styles/components/homepageGallery/homepageGallery.module.scss";
import { FaCircle } from "react-icons/fa";



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

  useEffect(() => {
    const autoPlay = setInterval(() => { go_nextFrame(); }, 4000);
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
    <div className={styles.container}>
      <div className={styles.textContainer}><div className={styles.blur}></div></div>
      <div key={activeImg} className={styles.frameContainer}>
        {prevFrame}
        {currFrame}
      </div>
      <div className={styles.nav}>
        {navDots[0]}
        {navDots[1]}
        {navDots[2]}
        {navDots[3]}
      </div>
      <h1>Howdy</h1>
    </div>
  );
}