import styles from "@/styles/components/footer/footer.module.scss";

import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineMailOutline, MdFacebook } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

const pages = [
  { page: "home", route: "/" },
  { page: "about_us", route: "/about-us" },
  { page: "services", route: "/services" },
  { page: "committees", route: "/committees" },
  { page: "get_involved", route: "/get-involved" },
];

export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = useTranslations("General");

  // Function creates a page link list element from the parameters
  function createPageLink(page, route, index) {
    return (
      <li key={index}>
        {" "}
        <Link className={styles.link} href={route}>
          {t(`${page}_${locale}`)}
        </Link>{" "}
      </li>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        {/* nav buttons: mapped links to each page */}
        <ul className={styles.pages}>
          {pages.map((item, index) => {
            return createPageLink(item.page, item.route, index);
          })}
        </ul>

        {/* contacts */}
        <div className={styles.contact}>
          <p className={styles.contact_us}>{t(`contact_us_${locale}`)}</p>
          <div className={styles.icons}>
            <a
              href="https://www.facebook.com/paulhomasianclinicatucdavis"
              target="_blank"
              className={styles.circle_frame}
            >
              <MdFacebook className={styles.facebook} />
            </a>
            <a
              href="https://www.instagram.com/paulhomasianclinic/?hl=en"
              target="_blank"
              className={styles.circle_frame}
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="tel: 916-736-3966"
              target="_blank"
              className={styles.circle_frame}
            >
              <HiOutlinePhone />
            </a>
            <a
              href="mailto: clinic@vncares.org"
              className={styles.circle_frame}
            >
              <MdOutlineMailOutline />
            </a>
          </div>
          <p className={styles.address}>{t(`address_${locale}`)}</p>
        </div>

        {/* thank you message */}
        <div className={styles.sponsor}>
          <p>{t(`thank_you_sponsors_text_${locale}`)}</p>
          <div className={styles.sponsor_image}>
            <Image
              src="/images/footer/credit-union.png"
              alt={"Safe Credit Union Logo"}
              style={{ objectFit: "fill" }}
              sizes={"(max-width: 1280): 100vw"}
              fill={true}
            />
          </div>
        </div>
      </div>
      {/* Subfooter: Include developer message */}
      <div className={styles.subfooter}>
        Designed & Developed with 🤍 by #include @ Davis
      </div>
    </footer>
  );
}
