/* add and import styles */
/* view and test it out by importing it to the respective page */
import styles from "@/styles/pages/get-involved/donate.module.scss";
import Image from "next/image";

export default function Donate() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.donateBox}>
        <h3 className={styles.donateHeading}>Donate Today!</h3>
        <p className={styles.startSubtext1}>
          Paul Hom Asian Clinic is a 501(c)(3) organization. If you would like
          to support our clinic, donations can be mailed to:
        </p>
        <div className={styles.centeredSubtext}>
          <div className={styles.centeredText}>
            <p className={styles.centeredText1}>Paul Home Asian Clinic</p>
            <p className={styles.centeredText2}>6341 Folsom Blvd</p>
            <p className={styles.centeredText3}>Sacramento, CA 95819</p>
            <p className={styles.centeredText4}>
              We thank you for your generoristy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
