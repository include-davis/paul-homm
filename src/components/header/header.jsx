import styles from "@/styles/components/header/header.module.scss";
import {useTranslations} from 'next-intl';
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <div className={styles.logo}>
                    {/*ADD LOGO HERE*/ }
                </div>

                <div className={styles.title_text}>
                    <h1>Paul Hom Asian Clinic</h1>
                    <h2>A Student-Run Clinic at UC Davis</h2>
                </div>
            
            </div>

            {/*GET THIS CHECKED*/ }
            <ul className={styles.pages}>
                <li className={router.asPath === '/' ? styles.currentPage : ''}>
                    <Link href="/">HOME</Link>
                </li>
                <li className={router.asPath === '/about' ? styles.currentPage : ''}>
                    <Link href="/about">ABOUT US</Link>
                </li>
                <li className={router.asPath === '/services' ? styles.currentPage : ''}>
                    <Link href="/services">SERVICES</Link>
                </li>
                <li className={router.asPath === '/committees' ? styles.currentPage : ''}>
                    <Link href="/committees">COMMITEES</Link>
                </li>
                <li className={router.asPath === '/get-involved' ? styles.currentPage : ''}>
                    <Link href="/get-involved">GET INVOLVED</Link>
                </li>
            </ul>
        </header>
    );
}
