import React, { Component } from "react";
import styles from "@/styles/components/footer/footer.module.scss";
import {useTranslations} from 'next-intl';

import Image from "next/image";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";


export default function Footer() {
  return (
    <footer>
        {/* nav buttons */}
        <div>
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>SERVICES</p>
            <p>COMMITEES</p>
            <p>GET INVOLVED</p>
            
        </div>
        
        {/* contacts */}
        <div> 
            <h3>CONTACT US</h3>
            <RiFacebookCircleLine size={63}/>
            <FaInstagram size={63}/>
            <LuPhone size={63}/>
            <MdOutlineMailOutline size={63}/>
            <p>6341 Folsom Blvd Sacramento, CA 95819</p>
        </div>

        {/* thank you message */}
        <div>
            <p>THANK YOU TO OUR SPONSORS FOR THEIR GENEROUS SUPPORT</p>
            <Image
                src="/credit-union.png"
                width={333}
                height={119}
                alt={"Safe Credit Union Logo"}
                // style={styles.picture}
            />
        </div>
        
        {/* Include developer message */}
        <footer>Designed & Developed with 🤍 by #include @ Davis</footer>

    </footer>
    
  );
}