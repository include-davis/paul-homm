import styles from "@/styles/components/header/header.module.scss";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'
import LangDropDown from "../dropDown/dropDown";

export default function Header() {
    const [activeLinks, setActiveLinks] = useState([false, false, false, false, false]);

    const toggleActive = (index) => {
        setActiveLinks(activeLinks.map((value, i) => i === index));
    }

    const links = [
        { href: '/', text: 'HOME' },
        { href: '/about-us', text: 'ABOUT US' },
        { href: '/services', text: 'SERVICES' },
        { href: '/committees', text: 'COMMITEES' },
        { href: '/get-involved', text: 'GET INVOLVED' }
    ];

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <a href = '/'>
                    <Image
                        src="/images/header/paul_hom_logo.png"
                        width={110}
                        height={110}
                        alt="Paul Hom logo"
                        href = '/'
                    />
                </a>
                <div className={styles.title_text}>
                    <h1>Paul Hom Asian Clinic</h1>
                    <h2>A Student-Run Clinic at UC Davis</h2>
                </div>

                <div className={styles.language_dropdown}>
                    <LangDropDown/>
                </div>
            </div>
            <div className={styles.pages}>
                {links.map((link, index) => (
                    <li key = {index} className = {`${styles.page_link} ${activeLinks[index]? styles.active : null}`}>
                        <Link 
                         
                            href={`${link.href}`} 
                            onClick={() => toggleActive(index)}
                        >
                            {link.text}
                        </Link>
                     </li>
                )
            )}
            </div>
        </header>
    );
}