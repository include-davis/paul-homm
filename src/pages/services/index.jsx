import styles from "@/styles/pages/services/services.module.scss";
import ImageSlider from '@/components/services/imageSlider.jsx';

export default function Services() {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.servicesContainer}>
                <div>
                    <h1 className={styles.pageHeading}>Our Services</h1>
                </div>

                <div className={styles.boxContainer}>

                    <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>

                        <h3 className={styles.boxHeadingTop}> Primary Care Services </h3>
                        <p> Every Saturday </p>

                    </div>

                    <div className={`${styles.serviceBox} ${styles.topServiceBox}`}>

                        <h3 className={styles.boxHeadingTop}> Cancer Screenings </h3>
                        <p> First Sunday monthly </p>

                    </div>

                </div>
            </div>

            <div>
                <ImageSlider> </ImageSlider>
            </div>

            <div className={styles.servicesContainer}>
                <div className={styles.boxContainer}>
                    <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
                        <h2 className={styles.boxHeadingBottom}>Referrals</h2>
                        <ul className={styles.desc}>
                            <li>Surgery with SPIRIT program</li>
                            <li>UCDMC</li>
                            <li>Primary Care Clinic</li>
                        </ul>
                    </div>

                    <div className={`${styles.serviceBox} ${styles.bottomServiceBox}`}>
                        <h2 className={styles.boxHeadingBottom}>Translators</h2>
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
