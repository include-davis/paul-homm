import styles from "@/styles/pages/services/services.module.scss";
import ImageSlider from '@/components/services/imageSlider.jsx';
import ImageSliderMobile from "@/components/services/imageSliderMobile.jsx";

const services = ["Specialty Clinics", "Hepatitis", "Health Education and Preventative Measures", "Vaccines"];
const images = ["/images/services/healthEdu.png", "/images/services/hepatitis.png", "/images/services/specialtyClinics.png", "/images/services/vaccines.png"]

export default function Services() {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.servicesContainer}>
                <div>
                    <h1 className={styles.pageHeading}>Our Services</h1>
                </div>

                <div className={styles.boxContainer}>

                    <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>

                        <h2> Primary Care Services </h2>
                        <p> Every Saturday </p>

                    </div>

                    <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>

                        <h2> Cancer Screenings </h2>
                        <p> First Sunday monthly </p>

                    </div>

                </div>
            </div>

            <div>
                <ImageSliderMobile images={images} services={services} />
            </div>

            <div className={styles.servicesContainer}>
                <div className={`${styles.boxContainer} ${styles.bottomBoxContainer}`}>
                    <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
                        <h2>Referrals</h2>
                        <ul className={styles.desc}>
                            <li>Surgery with SPIRIT program</li>
                            <li>UCDMC</li>
                            <li>Primary Care Clinic</li>
                        </ul>
                    </div>

                    <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
                        <h2>Translators</h2>
                        <ul className={`${styles.desc} ${styles.translatorsList}`}>
                            <li>Cantonese</li>
                            <li>Mandarin</li>
                            <li>Korean</li>
                            <li>Taishanese</li>
                            <li>Vietnamese</li>
                            <li>Hmong</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
