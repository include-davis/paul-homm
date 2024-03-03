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
  return (
    <div> Footer yay</div>

  );
}