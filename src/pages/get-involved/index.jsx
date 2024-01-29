import React from "react";
//import styles
// import styles from "";

export default function GetInvolved() {
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
    </div> // must return parent element
  );
}
GetInvolved;
