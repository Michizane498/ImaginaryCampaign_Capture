"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from "../components/Intro";
import Description from "../components/Description";
import Projects from "../components/Projects";
import LocomotiveScroll from "locomotive-scroll";


export default function Home() {
  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll({
        // Add any other options you need
      });
    })();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);
  return (
    <main className={styles.main}>
      <Intro />
      <Description/>
      <Projects/>
    </main>
  );
}
