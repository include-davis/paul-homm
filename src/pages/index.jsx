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
  
  const dates = ["date1", "date2", "date3", "date4", "date5"]
  const events = ["event1", "event2", "event3", "event4", "event5"]
  
  return (
    <div>
      {/* Red "Our Mission" Section */}
      <div className={styles.mission}>
        <div>
            <h1>{t('mission.title')}</h1>
            <p>{t('mission.p1')}</p>
            <p>{t('mission.p2')}</p>
            <p>{t('mission.p3')}</p>
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
            <h1>{t('cards.visit.title')}</h1>
            <p>{t('cards.visit.description')}</p>
            <div className={styles.visit}>
                <div className={styles.contact}>
                    <div className={styles.row_icons}>
                        <div className={styles.circle_frame}><MdPhone/></div>
                        <p>{t('cards.visit.contact.phone')}</p>
                    </div>
                    <div className={styles.row_icons}>
                        <div className={styles.circle_frame}><BiSolidMessage/></div>
                        <p>{t('cards.visit.contact.msg')}</p>
                    </div>
                    
                </div>
                <div className={styles.address}>
                    <div className={styles.row_icons}>
                        <div className={styles.circle_frame}><MdLocationOn/></div>
                        <p>{t('cards.visit.contact.address')}</p>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div className={styles.dates}>
            {/* Important Closure Dates */}
            <div className={styles.closure_card}>
                <h1>{t('cards.closure.title')}</h1>
                <ul>
                    {dates.map((item) => {
                        return <li>{t('cards.closure.' + item)}</li>
                    })}
                </ul>
            </div>
            {/* Upcoming Events Section */}
            <div className={styles.events_card}>
                <h1>{t('cards.events.title')}</h1>
                <div className={styles.events}>
                    <ul>
                        {dates.map((item) => (
                            <li>{t('cards.events.' + item)}</li>
                        ))}
                    </ul>
                    <ul>
                        {events.map((item) => (
                            <li>{t('cards.events.' + item)}</li>
                        ))}
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
