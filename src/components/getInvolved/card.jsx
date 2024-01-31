/* add and import styles */
/* view and test it out by importing it to the respective page */
import styles from "@/styles/pages/get-involved/cards.module.scss";

export default function Card() {
  return (
    <div>
      <h1 className={styles.sectionHeading}>Get Involved</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <p className={styles.cardText}>Physicians & Residents</p>
          <button className={styles.detailsButton}>Details</button>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
        <div className={styles.card}>
          <p className={styles.cardText}>Undergrad. Patient Advocates</p>
          <button className={styles.detailsButton}>Details</button>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
        <div className={styles.card}>
          <p className={styles.cardText}>Health Professional Students</p>
          <button className={styles.detailsButton}>Details</button>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
