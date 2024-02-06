import styles from "@/styles/pages/services/services.module.scss";
import ImageSlider from '@/components/services/imageSlider.jsx';

export default function Services() {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.ourServicesContainer}>

                <div className={styles.heading}> Our Services </div>


                <div className={styles.servicesBoxes}>

                    <div className={styles.service}>
                        <h3> Primary Care Services </h3>
                        <p> Every Saturday </p>
                    </div>

                    <div className={styles.service}>
                        <h3> Cancer Screenings </h3>
                        <p> First Sunday monthly </p>
                    </div>

                </div>
            </div>


            <ImageSlider> </ImageSlider>
        </div>

    )
}

