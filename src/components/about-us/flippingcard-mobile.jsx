import React from "react";
import styles from "@/styles/components/about-us/flippingcard-mobile.module.scss";
import Image from "next/image";

export default function FlippingCardMobile({ props, dimensions, imgsrc }) {
  const [description, image_description] = props;
  console.log(description);
  const [height, width] = dimensions;
  return (
    <div className={styles.flipping_card}>
      <p>{description}</p>
      <div
        className={styles.image_container}
        style={{ height: height, width: width }}
      >
        <Image
          src={imgsrc}
          alt={image_description}
          style={{ objectFit: "cover" }}
          fill={true}
        />
      </div>
    </div>
  );
}
