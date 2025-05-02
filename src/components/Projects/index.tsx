'use client'

import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

export default function ProjectsGallery() {
  const imageContainerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "Brutalist",
      src: "/Brutalism.jpg",
    },
    {
      title: "Glassmorphism",
      src: "/Glass.jpg",
    },
    {
      title: "Mesh Gradient",
      src: "/MeshGradient.jpg",
    },
    {
      title: "3D Timelines",
      src: "/3dtimelines.jpg",
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTrigger = ScrollTrigger.create({
      trigger: imageContainerRef.current,
      pin: true,
      start: "top top",
      end: "+=100%",
    });

    return () => {
      scrollTrigger.kill(); // Cleanup
    };
  }, []);

  return (
    <div className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainerRef} className={styles.imageContainer}>
          <Image
            src={projects[selectedProject].src}
            fill
            alt={projects[selectedProject].title}
            priority={selectedProject === 0}
            className={styles.projectImage}
          />
        </div>
        <div className={styles.column}>
          <p>
            Whether using a smartphone or a professional camera, the art lies in
            framing a story within a single image.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            While editing software can enhance colors, adjust exposure, and
            remove flaws, the best photos start with strong fundamentals—sharp
            focus, balanced composition, and thoughtful lighting.
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            onMouseOver={() => setSelectedProject(index)}
            className={`${styles.projectEl} ${
              selectedProject === index ? styles.active : ""
            }`}
          >
            <p>{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
