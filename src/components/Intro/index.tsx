"use client";

import React, { useLayoutEffect, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
export default function index() {
  const backgroundImage = useRef<HTMLDivElement>(null);
  const introImage = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "+=500px",
        scrub: true,
        markers: true,
        toggleActions: "play none none reverse",
      },
    });

    timeline
    .fromTo(
      backgroundImage.current,
      { clipPath: "inset(15%)" }, // start state
      { clipPath: "inset(0%)" }   // end state
    )
      .to(introImage.current, { height: "120px" }, 0);

  }, []);

  return (
    <div className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image
          alt="Background image"
          fill={true}
          src={"/back6.jpg"}
        />
      </div>
      <div className={styles.introContainer}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image alt="Background image" fill={true} src={"/back7.jpg"} />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          Smooth Scroll
        </h1>
      </div>
    </div>
  );
}
