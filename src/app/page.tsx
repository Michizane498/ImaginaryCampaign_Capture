"use client";

import { useEffect } from "react";
import styles from './page.module.css'

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={styles.main}>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
    </main>
  );
}
