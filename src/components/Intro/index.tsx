"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
export default function index() {
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
        <div className={styles.introImage}>
          <Image
            alt="Background image"
            fill={true}
            src={"/aura.jpg"}
          />
        </div>
        <h1>Smooth Scroll</h1>
      </div>
    </div>
  );
}
