import React from "react";
import Image from "next/image";
import styles from "@/styles/example.module.scss";
export default function Example() {
  return (
    <>
      {/* Place your image inside a div */}
      <div className={styles.imgContainer}>

        {/* Apply the following fill & style attributes */}
        <Image src="/credit-union.png"
          style={{ objectFit: "fill" }}
          fill={true}
          alt="Appropriate alt text here" />
      </div>
    </>
  );
}