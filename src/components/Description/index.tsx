import React, { useLayoutEffect, useRef } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function index() {
  const phrases = [
    "Captures a moment",
    "A simple subject into art",
    "Composition turns ordinary",
    "Photography reveals emotion",
  ];
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }: { children: React.ReactNode }) {
  const text = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(text.current, 
      { x: "-200px", opacity: 0 }, // from state
      { 
        x: "0px", opacity: 1, // to state
        scrollTrigger: {
          trigger: text.current,
          start: "top bottom", // when top of element hits bottom of viewport
          end: "bottom+=400px bottom", // when top of element hits center of viewport
          scrub: true,
          markers: true,
        }
      }
    );
  }, []);
  return <p ref={text}>{children}</p>;
}
