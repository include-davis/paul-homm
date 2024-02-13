import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MdPhone, MdLocationOn } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";

import styles from "@/styles/pages/home/home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default function Home() {
  const t = useTranslations('Index');
  return (
    <div>
      {/* Red "Our Mission" Section */}
      <div className={styles.mission}>
        <div>
            <h1>Our Mission</h1>
            <p>
                Paul Hom Asian Clinic is a 501C(3) non-profit organization committed to serving underserved and uninsured Asian populations in a linguistically and culturally sensitive manner.<br/>
                At Paul Hom we provide free primary care to the medically underserved, quality community medicine for our local community and interpretation services for the underserved Asian community.<br/>
                Our success is a result of the collaborative effort of all our health professional and undergraduate staff working to provide such important services.
            </p>
        </div>
        <Image
            src="/happy-doctors.png"
            width={592}
            height={384}
            alt={"Happy doctors"}
            style={{borderRadius: '8px'}}
        />
      </div>

      {/* White Section with Info cards */}
      <div className={styles.info}>
        {/* Visit us card with contact Info */}
        <div className={styles.visit_card}>
            <h1>Visit Us!</h1>
            <p>Leave us a voicemail with your name and phone number, and we'll call you back to book an appointment.</p>
            <div className={styles.visit}>
                <div className={styles.contact}>
                    <div className={styles.row_icons}>
                        <div className={styles.circle_frame}><MdPhone/></div>
                        <p>(916) 736-3966</p>
                    </div>
                    <div className={styles.row_icons}>
                        <div className={styles.circle_frame}><BiSolidMessage/></div>
                        <p>Message</p>
                    </div>
                    
                </div>
                <div className={styles.row_icons}>
                    <div className={styles.circle_frame}><MdLocationOn/></div>
                    <p>6341 Folsom Blvd Sacramento, CA 95819</p>
                </div>
            </div>
            
        </div>
        <div className={styles.dates}>
            {/* Important Closure Dates */}
            <div className={styles.closure_card}>
                <h1>Closure Dates</h1>
                <ul>
                    <li>Feb. 10, 2024</li>
                    <li>Mar. 30, 2024</li>
                    <li>May 25, 2024</li>
                    <li>Jul. 6, 2024</li>
                    <li>Aug 31, 2024</li>
                </ul>
            </div>
            {/* Upcoming Events Section */}
            <div className={styles.events_card}>
                <h1>Upcoming Events</h1>
                <div className={styles.events}>
                    <ul>
                        <li>Jan. 7, 2023</li>
                        <li>Jan. 8, 2023</li>
                        <li>Jan. 14, 2023</li>
                        <li>Jan. 15, 2023</li>
                        <li>Jan. 29, 2023</li>
                    </ul>
                    <ul>
                        <li>Musculoskeletal Clinic</li>
                        <li>VN Cares Cancer Screening</li>
                        <li>Psychiatry Clinic</li>
                        <li>Hepatitis Vaccination</li>
                        <li>Dermatology Clinic</li>
                    </ul>
                    <Image
                        src="/events-img.png"
                        width={408}
                        height={264}
                        alt={"People holding posters"}
                        style={{borderRadius: '8px'}}
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
