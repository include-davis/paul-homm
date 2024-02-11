import React, { useState } from 'react';
import styles from "@/styles/components/homepageGallery/homepageGallery.module.scss";



export default function HomepageGallery() { 
  const [activeImg, setActiveImg] = useState(0);
  let images = [<img  src='/homepageGallery/HomepageGalleryImage1.jpg' alt="Divider"/>, <img  src='/homepageGallery/HomepageGalleryImage2.png' alt="Divider"/>, <img  src='/homepageGallery/HomepageGalleryImage3.png' alt="Divider"/>, <img  src='/homepageGallery/HomepageGalleryImage4.png' alt="Divider"/>]
  
  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [3000]);
  return (
    <div className={styles.container}>
      <h1>Howdy</h1>
    </div>
  );
}