import React,{ useState, useEffect, useRef } from 'react';
import YoutubeEmbed from "@/components/about-us/YoutubeEmbed";
//import YouTube from "react-youtube";
import styles from "@/styles/pages/about/about.module.scss";
import Carousel from "@/components/about-us/carousel";

//import styles 
export default function About()
{
    const carouselData = ["/images/aboutUs/frame1.png", '/images/aboutUs/frame2.png', '/images/aboutUs/frame3.png', '/images/aboutUs/frame4.png', '/images/aboutUs/frame5.png', '/images/aboutUs/frame6.png', '/images/aboutUs/frame7.png'/* Add more frames as needed */];
    return(
        <div className={styles.wrapperClass}>
            <h1>The Legacy of Paul Hom</h1>
            <h2>We are the oldest Asian clinic in the United States.</h2> 
            <Carousel data={carouselData} />
            <p>Dr. Paul Hom had an untiring commitment to the clinic and to its purpose in serving patients of all ages in the Asian community who lack adequate healthcare due to cultural, linguistic, or economic barriers. Healthcare continues to be provided at no charge to all patients. </p>
            <YoutubeEmbed embedId="UUguG3tATJE" />
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
                    <li>VN Cares</li>
                    <li>HLUB</li>
                </ul>
                </div>
            </div>
        </div>
    )
    
}

About;