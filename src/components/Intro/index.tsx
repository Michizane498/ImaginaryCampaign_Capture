"use client";

import styles from "./page.module.css";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
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
        toggleActions: "play none none reverse",
      },
    });

    timeline
    .fromTo(
      backgroundImage.current,
      { clipPath: "inset(15%)" },
      { clipPath: "inset(0%)" }
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
          capture
        </h1>
      </div>
    </div>
  );
}
