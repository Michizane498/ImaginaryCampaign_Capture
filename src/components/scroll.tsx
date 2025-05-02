"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function Scroll({ children }: { children: React.ReactNode }) {
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

  return <main data-scroll-container>{children}</main>;
}