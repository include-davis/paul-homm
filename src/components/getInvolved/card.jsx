/* add and import styles */
/* view and test it out by importing it to the respective page */
import styles from "@/styles/pages/get-involved/cards.module.scss";
import Image from "next/image";
import AbImage from "/next.svg";
export default function Card() {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionHeading}>Get Involved</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Image
              src="/public/physiciansAndResidents.png"
              width={300}
              height={400}
              objectFit="cover"
              alt="Physicians And Residents"
            />
            <AbImage></AbImage>
            <p className={styles.cardText}>Physicians & Residents</p>
            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
          <div className={styles.card}>
            <Image
              src="/public/undergrad.png"
              width={300}
              height={400}
              objectFit="cover"
              alt="Undergrad"
            />
            <p className={styles.cardText}>Undergrad. Patient Advocates</p>
            <button className={styles.detailsButton}>Details</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <Image
                src="/public/specialtyClinincs.png"
                width={300}
                height={400}
                objectFit="cover"
                alt="Specialty Clinics"
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
