import { Inter } from "next/font/google";
import { useTranslations, useFormatter, useLocale } from 'next-intl';
import { useEffect, useState } from "react";
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
    const format = useFormatter();
    const locale = useLocale();
 
    const [dates, setDates] = useState([]);
    const [events, setEvents] = useState([]);    
    
    useEffect(() => {
        getClosures();
        getEvents();
    }, [])

    const getClosures = async () => {
        try{

            const res = await fetch('/api/closures', {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                }
            })

            const data = await res.json();
            const resDates = data.data;
            const formattedDates = resDates.map((dateString)=>{
                const now = new Date();
                const date = new Date(now.getTimezoneOffset() > 420 ?  `${dateString.date}T00:00:00-08:00` : `${dateString.date}T00:00:00-07:00` );
                const formattedDate = format.dateTime(date, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                return formattedDate;
            })
            // 5 upcoming dates rendered at most
            formattedDates.sort();
            formattedDates.length = formattedDates.length > 5 ? 5 : formattedDates.length;
            setDates(formattedDates);
        }
        catch(e){
            console.log('error:', e);
        }
    }

    const getEvents = async () => {
        try{
            const res = await fetch('/api/events', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    locale: locale,
                })
            })

            const data = await res.json();
            const resEvents = data.data;
            const formattedEvents = resEvents.map((event)=>{
                const now = new Date();
                const date = new Date(now.getTimezoneOffset() > 420 ?  `${event.event_date}T00:00:00-08:00` : `${event.event_date}T00:00:00-07:00` );
                const formattedDate = format.dateTime(date, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                })
                return { 
                    title: event.event_title,
                    date: formattedDate
                };
            })

            const cmpDate = (a,b) => {
                const d1 = new Date(a.date).getTime();
                const d2 = new Date(b.date).getTime();

                if(d1 > d2){
                    return 1;
                } else if (d1 < d2){
                    return -1;
                } else{
                    return 0;
                }
            }
            formattedEvents.sort(cmpDate);
            formattedEvents.length = formattedEvents.length > 5 ? 5 : formattedEvents.length;
            setEvents(formattedEvents);
        }
        catch(e){
            console.log(e);
        }
    }

    // const dates = ["date1", "date2", "date3", "date4", "date5"]
    // const events = ["event1", "event2", "event3", "event4", "event5"]

    return (
        <div>
            {/* Red "Our Mission" Section */}
            <div className={styles.mission}>
                <div>
                    <h1>{t('mission.title')}</h1>
                    <p>{t('mission.paragraph1')}</p>
                    <p>{t('mission.paragraph2')}</p>
                    <p>{t('mission.paragraph3')}</p>
                </div>
                <div className={styles.doctors_image}>
                    <Image
                        src={t('mission.image')}
                        style={{ objectFit: "fill" }}
                        fill={true}
                        alt={"Happy doctors"}
                    />
                </div>

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
                                <div className={styles.circle_frame}><MdPhone /></div>
                                <p>{t('cards.visit.contact.phone')}</p>
                            </div>
                            <div className={styles.row_icons}>
                                <div className={styles.circle_frame}><BiSolidMessage /></div>
                                <p>{t('cards.visit.contact.msg')}</p>
                            </div>

                        </div>
                        <div className={styles.address}>
                            <div className={styles.row_icons}>
                                <div className={styles.circle_frame}><MdLocationOn /></div>
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
                            {dates.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                    {/* Upcoming Events Section */}
                    <div className={styles.events_card}>
                        <h1>{t('cards.events.title')}</h1>
                        <div className={styles.events}>
                            <ul>
                                {events.map((item, index) => (
                                    <li key={index}>{item.date}</li>
                                ))}
                            </ul>
                            <ul>
                                {events.map((item, index) => (
                                    <li key={index}>{item.title}</li>
                                ))}
                            </ul>
                            <div className={styles.events_image}>
                                <Image
                                    src={t('cards.events.image')}
                                    style={{ objectFit: "fill" }}
                                    fill={true}
                                    alt={"People holding posters"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
