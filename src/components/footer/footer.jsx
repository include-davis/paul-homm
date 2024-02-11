import styles from "@/styles/components/footer/footer.module.scss";

import {useTranslations} from 'next-intl';
import Image from "next/image";
import Link from "next/link";

import React, { Component } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineMailOutline, MdFacebook } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

export default function Footer() {

  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
        <div className={styles.body}>
            {/* nav buttons */}
            <ul className={styles.pages}>
                <li>
                    <Link className={styles.link} href="/">{t('pages.page1')}</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">{t('pages.page2')}</Link>
                </li>
                <li>
                    <Link className={styles.link}  href="/">{t('pages.page3')}</Link>
                </li>
                <li>
                    <Link className={styles.link}  href="/">{t('pages.page4')}</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">{t('pages.page5')}</Link>
                </li>
            </ul>
        
            {/* contacts */}
            <div className={styles.contact}> 
                <p>{t('contact.message')}</p>
                <div className={styles.icons}>
                    <a href="https://includedavis.com" target="_blank" className={styles.circle_frame}>
                        <MdFacebook className={styles.facebook}/> 
                    </a>
                    <a href="https://includedavis.com" target="_blank" className={styles.circle_frame}>
                        <AiOutlineInstagram/>
                    </a>
                    <a href="https://includedavis.com" target="_blank" className={styles.circle_frame}>
                        <HiOutlinePhone/>
                    </a>
                    <a href="https://includedavis.com" target="_blank" className={styles.circle_frame}>
                        <MdOutlineMailOutline/>
                    </a>
                </div>
                <p>{t('contact.address_pt1')}<br/>{t('contact.address_pt2')}</p>
            </div>

            {/* thank you message */}
            <div className={styles.sponsor}>
                <p>{t('sponsor_pt1')}<br/>{t('sponsor_pt2')}</p>
                <div>
                    <Image
                        src="/credit-union.png"
                        width={280}
                        height={100}
                        alt={"Safe Credit Union Logo"}
                        style={{borderRadius: '12px'}}
                    />
                </div>
            </div>
        </div>

        {/* Subfooter: Include developer message */}
        <div className={styles.subfooter}>Designed & Developed with 🤍 by #include @ Davis</div>

    </footer>
    
  );
}