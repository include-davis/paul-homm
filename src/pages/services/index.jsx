import styles from "@/styles/pages/services/services.module.scss";
import ImageSlider from '@/components/services/imageSlider.jsx';

export default function Services() {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.servicesContainer}>
                <div className={styles.heading}> Our Services </div>

                <div className={styles.boxesContainer}>

                    <div className={styles.serviceBox}>
                        <h3> Primary Care Services </h3>
                        <p> Every Saturday </p>
                    </div>

                    <div className={styles.serviceBox}>
                        <h3> Cancer Screenings </h3>
                        <p> First Sunday monthly </p>
                    </div>

                </div>
            </div>


            <div>
                <ImageSlider> </ImageSlider>
            </div>

            <div className={styles.servicesContainer}>
                <div className={styles.boxesContainer}>
                    <div className={styles.serviceBox}>
                        <h3>Referrals</h3>
                        <ul>
                            <li>Surgery with SPIRIT program</li>
                            <li>UCDMC</li>
                            <li>Primary Care Clinic</li>
                        </ul>
                    </div>

                    <div className={styles.serviceBox}>
                        <h3>Transltors</h3>
                        <ul>
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

