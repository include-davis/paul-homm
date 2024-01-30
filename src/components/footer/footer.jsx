import React, { Component } from "react";
import styles from "@/styles/components/footer/footer.module.scss";
import {useTranslations} from 'next-intl';

import Image from "next/image";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.body}>
            {/* nav buttons */}
            <div className={styles.text}>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    <li>COMMITEES</li>
                    <li>GET INVOLVED</li>
                </ul>
                
            </div>
        
            {/* contacts */}
            <div className={styles.text}> 
                <h3>CONTACT US</h3>
                <TiSocialFacebookCircular size={63} className={styles.icons}/>
                <AiOutlineInstagram size={63} className={styles.icons}/>
                <LuPhone size={63} className={styles.icons}/>
                <MdOutlineMailOutline size={63} className={styles.icons}/>
                <p>6341 Folsom Blvd <br/>
                    Sacramento, CA 95819</p>
            </div>

            {/* thank you message */}
            <div className={styles.text}>
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