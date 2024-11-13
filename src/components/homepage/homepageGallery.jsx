import React, { useState, useEffect } from "react";
import styles from "@/styles/components/homepage/homepageGallery.module.scss";
import { FaCircle } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";

export default function HomepageGallery({
  images,
  overlay_title,
  overlay_description,
}) {
  const [activeImg, setActiveImg] = useState(0); // activeImg can hold values 0-7 indicating which image from the lists below to use at each render

  // for each image, hold a version of the image with different css stylings corresponding to possible roles it can take on each rerender, whether it is the previously shown image in the gallery or the currently shown image in the gallery
  let prev = [];
  let curr = [];
  let prevR = []; // images in these 2 "R" lists will have stylings necessary to animate the backwards/Reverse sliding (necessary for when the left arrow in the mobile ver. is tapped)
  let currR = [];
  for (const element of images) {
    prev.push(
      <Image
        src={element.src}
        alt={element.alt}
        className={styles.frame + " " + styles.prev}
        fill={true}
      />
    );
    curr.push(
      <Image
        src={element.src}
        alt={element.alt}
        className={styles.frame + " " + styles.curr}
        fill={true}
      />
    );
    prevR.push(
      <Image
        src={element.src}
        alt={element.alt}
        className={styles.frameR + " " + styles.prevR}
        fill={true}
      />
    );
    currR.push(
      <Image
        src={element}
        alt="Current Gallery Image"
        className={styles.frameR + " " + styles.curr}
        fill={true}
      />
    );
  }

  function go_nextFrame() {
    if (activeImg % 4 !== 3) {
      setActiveImg((activeImg % 4) + 1);
    } else {
      setActiveImg(0);
    }
  }

  function select_Prev() {
    if (activeImg % 4 !== 0) {
      setActiveImg(activeImg - 1 + 8);
    } else {
      setActiveImg(3 + 8);
    }
  }

  useEffect(() => {
    const autoPlay = setInterval(() => {
      go_nextFrame();
    }, 7000);
    return () => {
      clearInterval(autoPlay);
    };
  });

  let currFrame;
  let prevFrame;

  if (activeImg >= 4) {
    currFrame = currR[activeImg % 4];
    if (activeImg % 4 === 3) {
      prevFrame = prevR[0];
    } else {
      prevFrame = prevR[(activeImg % 4) + 1];
    }
  } else if (activeImg !== 0) {
    currFrame = curr[activeImg];
    prevFrame = prev[activeImg - 1];
  } else {
    currFrame = curr[activeImg];
    prevFrame = prev[3];
  }

  let navDots = [];
  for (let i = 0; i < 4; i++) {
    if (i % 4 === activeImg % 4) {
      navDots.push(
        <FaCircle className={styles.selected + " " + styles.circle} />
      );
    } else {
      navDots.push(<FaCircle className={styles.circle} />);
    }
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.blur}>
            <h2 className={styles.title}>{overlay_title}</h2>
            <p className={styles.description}>{overlay_description}</p>
          </div>
        </div>
        <div key={activeImg} className={styles.frameContainer}>
          <div className={styles.left_blur}>
            <FaArrowCircleLeft
              className={styles.arrow}
              onClick={() => {
                select_Prev();
              }}
              alt="Left Arrow"
            />
          </div>
          {prevFrame}
          {currFrame}
          <div className={styles.right_blur}>
            <FaArrowCircleRight
              className={styles.arrow}
              onClick={() => {
                go_nextFrame();
              }}
              alt="Right Arrow"
            />
          </div>
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
