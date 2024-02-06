import styles from "@/styles/pages/services/services.module.scss";
import Image from "next/image";
import { useState } from "react";

//import sc from "./public/specialtyClinics.png";

// trying to add images 
// make sure to make the shape of the boxes 
////<Image src="/specialtyClinics.png" width={100} height={50} alt="image of clinic staff" />

/* add and import styles */
/* view and test it out by importing it to the respective page */

/* images go in public folder */

/*
Used this video to make the tab component! 
  https://www.youtube.com/watch?v=WkREeDy2WQ4&ab_channel=TheWebSchool. 

Used this to figure out the class naming convention to use for multiple classes 
  https://stackoverflow.com/questions/65912413/how-to-add-multiple-classnames-to-nextjs-elements 
*/


export default function ImageSlider() {
  const [currTab, setCurrTab] = useState(1);

  const toggleTab = (index) => {
    // I already checked if index works and it does. This is not the problem.
    setCurrTab(index);
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.navigation}>
        <button className={currTab === 1 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(1)}>
          Specialty Clinics
        </button>
        <button className={currTab === 2 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(2)}>
          Hepatitis
        </button>
        <button className={currTab === 3 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(3)}>
          Health Education & Preventative Measures
        </button>
        <button className={currTab === 4 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(4)}>
          Vaccines
        </button>
      </div>

      <div className={styles.slideContainer}>
        <div className={currTab === 1 ? `${styles.activeSlide}` : `${styles.inactiveSlide}`}>
          <div>
            <Image className={styles.image} src="/specialtyClinics.png" width={500} height={300} alt="Clinic staff" />
          </div>
          <div>
            <ul>
              <li>Musculoskeletal Clinic (MSK)</li>
              <li>Dermatology</li>
              <li>Cardiopulmonary Clinic</li>
              <li>Liver Clinic</li>
            </ul>
          </div>
        </div>

        <div className={currTab === 2 ? `${styles.activeSlide}` : `${styles.inactiveSlide}`}>
          <div>
            <Image className={styles.image} src="/hepatitis.png" width={500} height={300} alt="Woman being vaccinated" />
          </div>

          <div>
            <ul>
              <li>Liver cancer is often tied to Hepatitis B</li>
              <li>Transmission: blood, sex, mother-to-child; late diagnosis common</li>
              <li>Asians more vulnerable, higher infection rates, mortality</li>
              <li>Screening, vaccination, tratments available</li>
              <li>Free vaccines</li>
            </ul>
          </div>

        </div>

        <div className={currTab === 3 ? `${styles.activeSlide}` : `${styles.inactiveSlide}`}>
          <div>
            <Image className={styles.image} src="/healthEdu.png" width={500} height={300} alt="Clinic students" />
          </div>

          <div>
            <ul>
              <li>Hypertension Workshops</li>
              <li>Nutrition Counseling</li>
              <li>Health Fair</li>
            </ul>
          </div>
        </div>

        <div className={currTab === 4 ? `${styles.activeSlide}` : `${styles.inactiveSlide}`}>
          <div>
            <Image className={styles.image} src="/vaccines.png" width={500} height={300} alt="Woman receiving vaccine" />
          </div>

          <div>
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
