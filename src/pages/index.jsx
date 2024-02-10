import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
      <div>
        <h2>Our Misson</h2>
        <p>
            Paul Hom Asian Clinic is a 501C(3) non-profit organization committed to serving underserved and uninsured Asian populations in a linguistically and culturally sensitive manner.<br/>
            At Paul Hom we provide free primary care to the medically underserved, quality community medicine for our local community and interpretation services for the underserved Asian community.<br/>
            Our success is a result of the collaborative effort of all our health professional and undergraduate staff working to provide such important services.
        </p>
        <Image
            src="/happy-doctors.png"
            width={593}
            height={383}
            alt={"Happy doctors"}
            // style={styles.picture}
        />
      </div>
      <div>
        <div>
            <h2>Visit Us!</h2>
            <p>Leave us a voicemail with your name and phone number, and we'll call you back to book an appointment.</p>
            <p>(916) 736-3966</p>
            <p>Message</p>
            <p>6341 Folsom Blvd Sacramento, CA 95819</p>
        </div>
        <div>
            <h2>Closure Dates</h2>
            <ul>
                <li>Feb. 10, 2024</li>
                <li>Mar. 30, 2024</li>
                <li>May 25, 2024</li>
                <li>Jul. 6, 2024</li>
                <li>Aug 31, 2024</li>
            </ul>
        </div>
        <div>
            <h2>Upcoming Events</h2>
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
                width={411}
                height={263}
                alt={"People holding posters"}
                // style={styles.picture}
            />
        </div>
      </div>
    </div>
  );
}
