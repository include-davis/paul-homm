import styles from "@/styles/components/header/header.module.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import LangDropDown from "../dropDown/dropDown";

export default function Header() {
  const t = useTranslations("Header");
  // use state for links
  const [activeLinks, setActiveLinks] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const toggleActiveLink = (index) => {
    setActiveLinks(activeLinks.map((value, i) => i === index));
  };

  //use state for hamburger menu
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  const toggleAll = (index) => {
    toggleActiveLink(index);
    toggleActive();
  };

  const links = [
    { href: "/", text: "home" },
    { href: "/about-us", text: "about_us" },
    { href: "/services", text: "services" },
    { href: "/committees", text: "committees" },
    { href: "/get-involved", text: "get_involved" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">
          <Image
            src="/images/header/paul_hom_logo.png"
            width={110}
            height={110}
            alt="Paul Hom logo"
            href="/"
          />
        </Link>
        <div className={styles.title_text}>
          <h1>{t("clinic_name")}</h1>
          <h2>{t("clinic_description")}</h2>
        </div>

        <div className={styles.language_dropdown}>
          <LangDropDown />
        </div>
      </div>

      <div className={`${styles.pages} ${active ? styles.active : null}`}>
        {links.map((link, index) => (
          <li
            key={index}
            className={`${styles.page_link} ${activeLinks[index] ? styles.active : null}`}
          >
            <div className={styles.link_wrapper}>
              <Link href={`${link.href}`} onClick={() => toggleAll(index)}>
                <p className={styles.link_text}>{t(link.text)}</p>
              </Link>
            </div>
          </li>
        ))}
      </div>

      <button className={styles.hamburger_menu} onClick={toggleActive}>
        {active ? <RxCross1 /> : <IoMenuOutline />}
      </button>
    </header>
  );
}
