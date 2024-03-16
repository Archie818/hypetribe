import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="">
      <Head>
        <title>Hypetribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Image
        src="/assets/intro.png"
        layout="responsive"
        width={1920}
        height={1080}
        quality={100}
        alt="Intro"
      />
    </div>
  );
}
