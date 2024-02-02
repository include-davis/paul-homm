import styles from "@/styles/components/header/header.module.scss";
import {useTranslations} from 'next-intl';
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div title={styles.title}>
                
            </div>

            <ul className={styles.pages}>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/">ABOUT US</Link>
                </li>
                <li>
                    <Link href="/">SERVICES</Link>
                </li>
                <li>
                    <Link href="/">COMMITEES</Link>
                </li>
                <li>
                    <Link href="/">GET INVOLVED</Link>
                </li>
            </ul>
        </header>
    );
}
