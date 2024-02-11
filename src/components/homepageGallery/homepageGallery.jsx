import React, { useState, useEffect } from 'react';
import styles from "@/styles/components/homepageGallery/homepageGallery.module.scss";



export default function HomepageGallery() { 
  const [activeImg, setActiveImg] = useState(0);
  let curr = [<img  src='/homepageGallery/HomepageGalleryImage1.jpg' alt="Divider" className={styles.frame+' '+styles.curr}/>, <img  src='/homepageGallery/HomepageGalleryImage2.png' alt="Divider" className={styles.frame+' '+styles.curr}/>, <img  src='/homepageGallery/HomepageGalleryImage3.png' alt="Divider" className={styles.frame+' '+styles.curr}/>, <img  src='/homepageGallery/HomepageGalleryImage4.png' alt="Divider" className={styles.frame+' '+styles.curr}/>]
  let next = [<img  src='/homepageGallery/HomepageGalleryImage1.jpg' alt="Divider" className={styles.frame+' '+styles.next}/>, <img  src='/homepageGallery/HomepageGalleryImage2.png' alt="Divider" className={styles.frame+' '+styles.next}/>, <img  src='/homepageGallery/HomepageGalleryImage3.png' alt="Divider" className={styles.frame+' '+styles.next}/>, <img  src='/homepageGallery/HomepageGalleryImage4.png' alt="Divider" className={styles.frame+' '+styles.next}/>]
  

  function go_nextFrame() {
    if (activeImg!=3) {
      setActiveImg(activeImg+1);
      }
    else {
      setActiveImg(0);
      }
  }

  useEffect(() => {
    const autoPlay = setInterval(() => { go_nextFrame(); }, 4000);
    return () => {
      clearInterval(autoPlay);
    };
  }, [activeImg]);

  let currFrame = curr[activeImg];
  let nextFrame;
  if (activeImg!=3) {
    nextFrame = next[activeImg+1];
    }
  else {
    nextFrame = next[0];
    }
  
  return (
    <div className={styles.container}>
      <div key={activeImg} className={styles.frameContainer}>
        {currFrame}
        {nextFrame}
      </div>
      <h1>Howdy</h1>
    </div>
  );
}