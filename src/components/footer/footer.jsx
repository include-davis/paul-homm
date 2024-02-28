import styles from "@/styles/components/footer/footer.module.scss";

import {useTranslations} from 'next-intl';
import Image from "next/image";
import Link from "next/link";

import React, { Component } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineMailOutline, MdFacebook } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

const pages = [
    {page: 'pages.page1', route: "/"},
    {page: 'pages.page2', route: "/about-us"},
    {page: 'pages.page3', route: "/services"},
    {page: 'pages.page4', route: "/committees"},
    {page: 'pages.page5', route: "/get-involved"}
];

export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`@/messages/${locale}.json`)).default
      }
    };
  }

export default function Footer() {

  const t = useTranslations('Footer');

  // Function creates a page link list element from the parameters
  function createPageLink(page, route, index) {
    return <li> <Link className={styles.link} href={route} key={index}>{t(page)}</Link> </li>
  }

  return (
    <footer className={styles.footer}>
        <div className={styles.body}>
            {/* nav buttons: mapped links to each page */}
            <ul className={styles.pages}>
                {pages.map((item, index) => {
                    return createPageLink(item.page, item.route, index)
                })}
            </ul>
        
            {/* contacts */}
            <div className={styles.contact}> 
                <p>{t('contact.message')}</p>
                <div className={styles.icons}>
                    <a href="https://www.facebook.com/paulhomasianclinicatucdavis" target="_blank" className={styles.circle_frame}>
                        <MdFacebook className={styles.facebook}/> 
                    </a>
                    <a href="https://www.instagram.com/paulhomasianclinic/?hl=en" target="_blank" className={styles.circle_frame}>
                        <AiOutlineInstagram/>
                    </a>
                    <a href="tel: 916-736-3966" target="_blank" className={styles.circle_frame}>
                        <HiOutlinePhone/>
                    </a>
                    <a href="mailto: clinic@vncares.org" className={styles.circle_frame}>
                        <MdOutlineMailOutline/>
                    </a>
                </div>
                <p>{t('contact.address_pt1')}<br/>{t('contact.address_pt2')}</p>
            </div>

            {/* thank you message */}
            <div className={styles.sponsor}>
                <p>{t('sponsor_pt1')}<br/>{t('sponsor_pt2')}</p>
                <div className={styles.sponsor_image}>
                    <Image
                        src="/credit-union.png"
                        alt={"Safe Credit Union Logo"}
                        style={{ objectFit: "fill" }}
                        fill={true}
                    />
                </div>
            </div>
        </div>

        {/* Subfooter: Include developer message */}
        <div className={styles.subfooter}>{t('include')}</div>

    </footer>
    
  );
}