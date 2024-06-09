import { useTranslations, useFormatter } from "next-intl";
import HomepageGallery from "@/components/homepage/homepageGallery";
import Image from "next/image";
import { MdPhone, MdLocationOn } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";

import styles from "@/styles/pages/home/home.module.scss";
import PageLayout from "@/components/layout";

export async function getStaticProps({ locale }) {
  let messages = {};
  let closureDates = [];
  let upcomingEvents = [];

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/header`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();
    if (res.status === 200) {
      messages.Header = res.body;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Fetching header data: ${e.message}`);
  }

  try {
    const res = await (
      await fetch(`${process.env.NEXT_APP_BASE_URL}/api/home`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: locale,
        }),
      })
    ).json();

    if (res.status === 200) {
      const body = res.body;
      messages.Index = body.text;
      closureDates = body.closure_dates;
      upcomingEvents = body.upcoming_events;
    } else {
      throw new Error(res.error);
    }
  } catch (e) {
    console.log(`Fetching homepage data: ${e.message}`);
    // TODO: IMPLEMENT A BETTER FALLBACK
    messages = (await import(`@/messages/${locale}.json`)).default;
  }

  return {
    props: {
      messages: messages,
      closureDates,
      upcomingEvents,
    },
  };
}

export default function Home({ closureDates, upcomingEvents }) {
  const t = useTranslations("Index");
  const format = useFormatter();

  const formatDate = (d) => {
    const formatted = format.dateTime(d, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formatted;
  };

  const formattedDates = closureDates.map((dateString) => {
    return formatDate(new Date(dateString));
  });
  // 5 upcoming dates rendered at most
  formattedDates.sort();
  formattedDates.length = formattedDates.length > 5 ? 5 : formattedDates.length;

  const formattedEvents = upcomingEvents.map((eventObj) => {
    return {
      event: eventObj.event,
      date: formatDate(new Date(eventObj.date)),
    };
  });
  const cmpDate = (a, b) => {
    const d1 = new Date(a.date).getTime();
    const d2 = new Date(b.date).getTime();
    if (d1 > d2) {
      return 1;
    } else if (d1 < d2) {
      return -1;
    } else {
      return 0;
    }
  };
  formattedEvents.sort(cmpDate);
  formattedEvents.length =
    formattedEvents.length > 5 ? 5 : formattedEvents.length;

  return (
    <PageLayout>
      <div className={styles.container}>
        <HomepageGallery
          overlay_title={t("image_gallery_overlay_text.title")}
          overlay_description={t("image_gallery_overlay_text.description")}
        />
        {/* Red "Our Mission" Section */}
        <div className={styles.mission}>
          <div className={styles.mission_text}>
            <h1>{t("mission.our_mission_text")}</h1>
            <p>{t("mission.text")}</p>
          </div>
          <div className={styles.doctors_image}>
            <Image
              src={"/images/home-page/happy-doctors.png"}
              style={{ objectFit: "fill" }}
              fill={true}
              priority={true}
              sizes="(max-width: 1048px) 100vw, 50vw"
              alt={"Happy doctors"}
            />
          </div>
        </div>

        {/* White Section with Info cards */}
        <div className={styles.info}>
          {/* Visit us card with contact Info */}
          <div className={styles.visit_card}>
            <h1>{t("visit_us.visit_us_text")}</h1>
            <p>{t("visit_us.contact_instruction")}</p>
            <div className={styles.visit}>
              <div className={styles.contact}>
                <div className={styles.row_icons}>
                  <div className={styles.circle_frame}>
                    <MdPhone />
                  </div>
                  <p>{t("visit_us.phone")}</p>
                </div>
                <div className={styles.row_icons}>
                  <div className={styles.circle_frame}>
                    <BiSolidMessage />
                  </div>
                  <p>{t("visit_us.message")}</p>
                </div>
              </div>
              <div className={styles.address}>
                <div className={styles.row_icons}>
                  <div className={styles.circle_frame}>
                    <MdLocationOn />
                  </div>
                  <p>{t("visit_us.address")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dates}>
            {/* Important Closure Dates */}
            <div className={styles.closure_card}>
              <h1>{t("closure_dates_text")}</h1>
              <ul>
                {formattedDates.map((date, index) => {
                  return <li key={index}>{date}</li>;
                })}
              </ul>
            </div>
            {/* Upcoming Events Section */}
            <div className={styles.events_card}>
              <div className={styles.events_image_mobile}>
                <Image
                  src={"/images/home-page/events-img.png"}
                  style={{ objectFit: "fill" }}
                  fill={true}
                  sizes="(max-width: 1048px) 100vw, 50vw"
                  alt={"People holding posters"}
                />
              </div>
              <h1>{t("upcoming_events_text")}</h1>
              <div className={styles.events}>
                <div className={styles.date_container}>
                  <ul>
                    {formattedEvents.map((event, index) => (
                      <li key={index}>{event.date}</li>
                    ))}
                  </ul>
                  <ul>
                    {formattedEvents.map((event, index) => (
                      <li key={index}>{event.event}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.events_image}>
                  <Image
                    src={"/images/home-page/events-img.png"}
                    style={{ objectFit: "fill" }}
                    fill={true}
                    sizes="(max-width: 1048px) 100vw, 50vw"
                    alt={"People holding posters"}
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
