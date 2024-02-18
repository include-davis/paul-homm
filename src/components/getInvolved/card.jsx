/* add and import styles */
/* view and test it out by importing it to the respective page */
import styles from "@/styles/pages/get-involved/cards.module.scss";
//import styles from "@/styles/pages/get-involved/index.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default function Card({ cardProps, imgSrc }) {
  const t = useTranslations(`Get_Involved.${cardProps}`);
  return (
    <div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          {/* each card has an image and text (the overlay) */}
          <div className={styles.cardImg}>
            <Image src={imgSrc} alt={cardProps} width={368} height={328} />
          </div>
          <div className={styles.cardText}>
            <p>{t("cardText")}</p>
          </div>
          <button className={styles.detailsButton}>Details</button>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
