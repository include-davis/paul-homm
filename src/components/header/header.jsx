import styles from "@/styles/components/header/header.module.scss";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'

export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`@/messages/${locale}.json`)).default
      }
    };
}

export default function Header() {
    const [activeLinks, setActiveLinks] = useState([false, false, false, false, false]);

    const toggleActive = (index) => {
        setActiveLinks(activeLinks.map((value, i) => i === index));
    }

    const links = [
        { href: '/', text: 'pages.page1' },
        { href: '/about-us', text: 'pages.page2' },
        { href: '/services', text: 'pages.page3' },
        { href: '/committees', text: 'pages.page4' },
        { href: '/get-involved', text: 'pages.page5' }
    ];

    const t = useTranslations(`Header`)

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
                    <h1>{t('title.clinic_name')}</h1>
                    <h2>{t('title.subtitle')}</h2>
                </div>

                <div className={styles.language_dropdown}>
                    {/* placeholder div for language dropdown*/}
                </div>
            </div>
            <div className={styles.pages}>
                {links.map((link, index) => (
                    <li key = {index} className = {`${styles.page_link} ${activeLinks[index]? styles.active : null}`}>
                        <Link 
                         
                            href={`${link.href}`} 
                            onClick={() => toggleActive(index)}
                        >
                            {t(link.text)}
                        </Link>
                     </li>
                )
            )}
            </div>
        </header>
    );
}