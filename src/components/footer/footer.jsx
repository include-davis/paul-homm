import styles from "@/styles/components/footer/footer.module.scss";

import {useTranslations} from 'next-intl';
import Image from "next/image";
import Link from "next/link";

import React, { Component } from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.body}>
            {/* nav buttons */}
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
        
            {/* contacts */}
            <div className={styles.contact}> 
                <h3>CONTACT US</h3>
                <div className={styles.circle_frame}>
                    <Image
                        src="/ellipse.svg"
                        width={63}
                        height={63}
                        alt={"Icon background"}
                    />
                    <Image
                        src="/ellipse.svg"
                        width={63}
                        height={63}
                        alt={"Icon background"}
                    />
                    <Image
                        src="/ellipse.svg"
                        width={63}
                        height={63}
                        alt={"Icon background"}
                    />
                    <Image
                        src="/ellipse.svg"
                        width={63}
                        height={63}
                        alt={"Icon background"}
                    />
                </div>
                <div className={styles.icons}>
                    <TiSocialFacebookCircular size={60}/>
                    <AiOutlineInstagram size={63}/>
                    <LuPhone size={63}/>
                    <MdOutlineMailOutline size={63}/>
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