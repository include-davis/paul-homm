import React, { useState, useEffect } from 'react';
import styles from "@/styles/components/homepageGallery/homepageGallery.module.scss";



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
  
  return (
    <div className={styles.container}>
      <div key={activeImg} className={styles.frameContainer}>
        {prevFrame}
        {currFrame}
      </div>
      <h1>Howdy</h1>
    </div>
  );
}