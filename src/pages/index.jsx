import { useTranslations } from "next-intl";
import HomepageGallery from "@/components/homepage/homepageGallery";
import Image from "next/image";
import { MdPhone, MdLocationOn } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";

import styles from "@/styles/pages/home/home.module.scss";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  const messages = {};
  let closureDates = [];
  let upcomingEvents = [];
  let homepageImages = {};

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/general`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.General = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching general data: ${e.message}`);
    messages.General = (await import(`@/messages/general.json`)).default;
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/home`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (res.ok) {
      messages.Index = res.body;
      closureDates = res.body.closure_dates;
      upcomingEvents = res.body.upcoming_events;
      homepageImages = res.body.page_media;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Error fetching homepage data: ${e.message}`);
    messages.Index = (await import(`@/messages/home.json`)).default;
    closureDates = messages.Index.closure_dates;
    upcomingEvents = messages.Index.upcoming_events;
    homepageImages = messages.Index.page_media;
  }

  return {
    props: {
      messages: messages,
      locale,
      closureDates,
      upcomingEvents,
      homepageImages,
    },
  };
}

export default function Home({
  locale,
  closureDates,
  upcomingEvents,
  homepageImages,
}) {
  const t = useTranslations("Index");
  const g = useTranslations("General");

  return (
    <PageLayout>
      <div className={styles.container}>
        <HomepageGallery
          images={homepageImages.gallery_section}
          overlay_title={t(`image_gallery_overlay_title_${locale}`)}
          overlay_description={t(`image_gallery_overlay_description_${locale}`)}
        />
        {/* Red "Our Mission" Section */}
        <div className={styles.mission}>
          <div className={styles.mission_text}>
            <h1>{t(`our_mission_title_${locale}`)}</h1>
            <p>{t(`our_mission_text_${locale}`)}</p>
          </div>
          <div className={styles.doctors_image}>
            <Image
              src={homepageImages.mission_section.src}
              style={{ objectFit: "fill" }}
              fill={true}
              sizes="(max-width: 1048px) 100vw, 50vw"
              alt={homepageImages.mission_section.alt}
            />
          </div>
        </div>

        {/* White Section with Info cards */}
        <div className={styles.info}>
          {/* Visit us card with contact Info */}
          <div className={styles.visit_card}>
            <h1>{t(`visit_us_text_${locale}`)}</h1>
            <p>{t(`contact_instruction_${locale}`)}</p>
            <div className={styles.visit}>
              <div className={styles.contact}>
                <div className={styles.row_icons}>
                  <div className={styles.circle_frame}>
                    <MdPhone />
                  </div>
                  <p>{g(`phone_number`)}</p>
                </div>
                <div className={styles.row_icons}>
                  <div className={styles.circle_frame}>
                    <BiSolidMessage />
                  </div>
                  <p>{t(`message_${locale}`)}</p>
                </div>
              </div>
              <div className={styles.address}>
                <div className={styles.row_icons}>
                  <div className={styles.circle_frame}>
                    <MdLocationOn />
                  </div>
                  <p>{g(`address_${locale}`)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dates}>
            {/* Important Closure Dates */}
            <div className={styles.closure_card}>
              <h1>{t(`closure_dates_text_${locale}`)}</h1>
              <ul>
                {closureDates.map((date, index) => {
                  return <li key={index}>{date}</li>;
                })}
              </ul>
            </div>
            {/* Upcoming Events Section */}
            <div className={styles.events_card}>
              <h1>{t(`upcoming_events_text_${locale}`)}</h1>
              <div className={styles.events_container}>
                <div className={styles.events}>
                  <ul>
                    {upcomingEvents.map((event, index) => (
                      <li key={index}>{event.date}</li>
                    ))}
                  </ul>
                  <ul>
                    {upcomingEvents.map((event, index) => (
                      <li key={index}>{event.name}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.events_image}>
                  <Image
                    src={homepageImages.upcoming_events_section.src}
                    style={{ objectFit: "fill" }}
                    fill={true}
                    sizes="(max-width: 1048px) 100vw, 50vw"
                    alt={homepageImages.upcoming_events_section.src}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
