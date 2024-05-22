import React,{ useState, useEffect, useRef } from 'react';
import YouTube from "react-youtube";
import styles from "@/styles/pages/about/about.module.scss";
//import styles 
export default function About()
{
    return(
        <div className={styles.wrapperClass}>
            <h1>The Legacy of Paul Hom</h1>
            <h2>We are the oldest Asian clinic in the United States.</h2> 
            <p>Dr. Paul Hom had an untiring commitment to the clinic and to its purpose in serving patients of all ages in the Asian community who lack adequate healthcare due to cultural, linguistic, or economic barriers. Healthcare continues to be provided at no charge to all patients. </p>
            <div className={styles.listClass}>
                <div className = {styles.defaultClass}>
                <h3>UC Davis Student-Run Clinics</h3>
                <ul>
                    <li>Bayanihan</li>
                    <li>Clinica Tepati</li>
                    <li> Imani clinic</li>
                    <li> Joan Viteri Memorial Clinic</li>
                    <li> Shifa Clinic</li>
                    <li> Willow Clinic</li>
                </ul>
                </div>
                <div className = {styles.defaultClass}>
                <h3>Our Sister Clinics</h3>
                <ul>
                    <li>VN Care</li>
                    <li>HLUB</li>
                </ul>
                </div>
            </div>
        </div>
    )
    
}

About;