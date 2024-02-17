/* add and import styles */
/* view and test it out by importing it to the respective page */
import styles from "@/styles/pages/get-involved/cards.module.scss";
import Image from "next/image";

export default function Card() {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionHeading}>Get Involved</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardImg1}>
              <Image />
              <p className={styles.cardText}>Physicians & Residents</p>
            </div>

            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg2}>
              <Image />
              <p className={styles.cardText}>Undergrad. Patient Advocates</p>
            </div>

            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg3}>
              <Image />
              <p className={styles.cardText}>Health Professional Students</p>
            </div>

            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
