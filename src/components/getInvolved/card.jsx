/* add and import styles */
/* view and test it out by importing it to the respective page */
import styles from "@/styles/pages/get-involved/cards.module.scss";
import Image from "next/image";
// import AbImage from "/next.svg";
export default function Card() {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionHeading}>Get Involved</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Image
              src="/physiciansAndResidents.png"
              width={150}
              height={250}
              objectFit="contain"
              alt="Girl Getting Her Blood Drawn"
            />
            <p className={styles.cardText}>Physicians & Residents</p>
            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
          <div className={styles.card}>
            <Image
              src="/undergrad.png"
              width={150}
              height={400}
              objectFit="cover"
              alt="Group Of Residents"
            />
            <p className={styles.cardText}>Undergrad. Patient Advocates</p>
            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <Image
                src="/specialtyClinics.png"
                width={300}
                height={400}
                objectFit="cover"
                alt="Group of Residents"
              />
            </div>

            <p className={styles.cardText}>Health Professional Students</p>
            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
