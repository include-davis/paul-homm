import React from "react";
import styles from "@/styles/components/about-us/flippingCard.module.scss";
import Image from "next/image";

export default function FlippingCard({ title, content, image, alt, dims }) {
  const [width, height] = dims;
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.FlipCard} style={{ width: width, height: height }}>
        <div className={styles.CardInner}>
          <div className={styles.CardFront}>
            <div className={styles.image_container}>
              <Image src={image} alt={alt} objectFit="cover" fill={true} />
            </div>
          </div>
          <div className={styles.FlipBack}>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
FlippingCard;
