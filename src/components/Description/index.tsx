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
    gsap.from(text.current, {
        scrollTrigger:{
            trigger:text.current,
            start: '0px bottom',
            end:'bottom+=400px bottom',
            scrub: true,
            markers:true
        },
        left:"-200px",
        opacity:0,
    })
  }, []);

  return <p ref={text}>{children}</p>;
}
