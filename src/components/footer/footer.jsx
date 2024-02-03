import styles from "@/styles/components/footer/footer.module.scss";

import {useTranslations} from 'next-intl';
import Image from "next/image";
import Link from "next/link";

import React, { Component } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineMailOutline, MdFacebook } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.body}>
            {/* nav buttons */}
            <ul className={styles.pages}>
                <li>
                    <Link className={styles.link} href="/">HOME</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">ABOUT US</Link>
                </li>
                <li>
                    <Link className={styles.link}  href="/">SERVICES</Link>
                </li>
                <li>
                    <Link className={styles.link}  href="/">COMMITEES</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/">GET INVOLVED</Link>
                </li>
            </ul>
        
            {/* contacts */}
            <div className={styles.contact}> 
                <h3>CONTACT US</h3>
                <div className={styles.icons}>
                    <a href="https://includedavis.com" target="_blank" className={styles.circle_frame_facebook}>
                        <MdFacebook/> 
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
                <p>6341 Folsom Blvd <br/>
                    Sacramento, CA 95819</p>
            </div>

            {/* thank you message */}
            <div className={styles.sponsor}>
                <p>THANK YOU TO OUR SPONSORS <br/>
                    FOR THEIR GENEROUS SUPPORT</p>
                <Image
                    src="/credit-union.png"
                    width={280}
                    height={100}
                    alt={"Safe Credit Union Logo"}
                    // style={styles.picture}
                />
            </div>
        </div>

        {/* Subfooter: Include developer message */}
        <div className={styles.subfooter}>Designed & Developed with 🤍 by #include @ Davis</div>

    </footer>
    
  );
}