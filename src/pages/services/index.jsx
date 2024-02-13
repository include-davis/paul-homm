import styles from "@/styles/pages/services/services.module.scss";
import ImageSlider from '@/components/services/imageSlider.jsx';

export default function Services() {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.servicesContainer}>
                <div className={styles.heading}>
                    <h1> Our Services </h1>
                </div>

                <div className={styles.boxesContainer}>

                    <div className={styles.topServiceBox}>
                        <h2> Primary Care Services </h2>
                        <p> Every Saturday </p>
                    </div>

                    <div className={styles.topServiceBox}>
                        <h2> Cancer Screenings </h2>
                        <p> First Sunday monthly </p>
                    </div>

                </div>
            </div>


            <div>
                <ImageSlider> </ImageSlider>
            </div>

            <div className={styles.servicesContainer}>
                <div className={styles.boxesContainer}>
                    <div className={styles.bottomServiceBox}>
                        <h2>Referrals</h2>
                        <ul>
                            <li>Surgery with SPIRIT program</li>
                            <li>UCDMC</li>
                            <li>Primary Care Clinic</li>
                        </ul>
                    </div>

                    <div className={styles.bottomServiceBox}>
                        <h2>Translators</h2>
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

