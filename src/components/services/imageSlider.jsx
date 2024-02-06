import styles from "@/styles/pages/services/services.module.scss";
import Image from "next/image";

//import sc from "./public/specialtyClinics.png";

// trying to add images 
// make sure to make the shape of the boxes 
////<Image src="/specialtyClinics.png" width={100} height={50} alt="image of clinic staff" />

/* add and import styles */
/* view and test it out by importing it to the respective page */

/* images go in public folder */
export default function ImageSlider() {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.navigation}>
        <button className={styles.tab}>
          Specialty Clinics
        </button>
        <button className={styles.tab}>
          Hepatitis
        </button>
        <button className={styles.tab}>
          Health Education & Preventative Measures
        </button>
        <button className={styles.tab}>
          Vaccines
        </button>
      </div>

      <div className={styles.slidersContainer}>
        <div className={styles.slider}>
          <div>
            <Image className={styles.image} src="/specialtyClinics.png" width={500} height={300} alt="Clinic staff" />
          </div>
          <div className={styles.sliderText}>
            <ul>
              <li>Musculoskeletal Clinic (MSK)</li>
              <li>Dermatology</li>
              <li>Cardiopulmonary Clinic</li>
              <li>Liver Clinic</li>
            </ul>
          </div>
        </div>

        <div className={styles.slider}>
          <div>
            <Image className={styles.image} src="/hepatitis.png" width={500} height={300} alt="Woman being vaccinated" />
          </div>

          <div className={styles.sliderText}>
            <ul>
              <li>Liver cancer is often tied to Hepatitis B</li>
              <li>Transmission: blood, sex. mother-to-child; late diagnosis common</li>
              <li>Asians more vulnerable, higher infection rates, mortality</li>
              <li>Screening, vaccination, tratments available</li>
              <li>Free vaccines</li>
            </ul>
          </div>

        </div>

        <div className={styles.slider}>
          <div>
            <Image className={styles.image} src="/healthEdu.png" width={500} height={300} alt="Clinic students" />
          </div>

          <div className={styles.sliderText}>
            <ul>
              <li>Hypertension Workshops</li>
              <li>Nutrition Counseling</li>
              <li>Health Fair</li>
            </ul>
          </div>
        </div>

        <div className={styles.slider}>
          <div>
            <Image className={styles.image} src="/vaccines.png" width={500} height={300} alt="Woman receiving vaccine" />
          </div>

          <div className={styles.sliderText}>
            <ul>
              <li>Hepatitis</li>
              <li>Annual flu-shots</li>
              <li>Health Fair</li>
            </ul>
          </div>

        </div>
      </div>
    </div >

  );
}
