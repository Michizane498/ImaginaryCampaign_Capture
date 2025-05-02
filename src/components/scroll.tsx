"use client";

import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <main data-scroll-container>{children}</main>;
}
