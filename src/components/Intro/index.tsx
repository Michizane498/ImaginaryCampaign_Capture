"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
export default function index() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image
          alt="Background image"
          fill={true}
          src={"/reddarkbackground.jpg"}
        />
      </div>
      <div className={styles.introContainer}>
        <div data-scroll data-scroll-speed="0.3" className={styles.introImage}>
          <Image alt="Background image" fill={true} src={"/aura.jpg"} />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">Smooth Scroll</h1>
      </div>
    </div>
  );
}
