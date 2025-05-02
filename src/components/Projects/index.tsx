import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function index() {
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
  return (
    <div className={styles.projects}>
      <div className={styles.projectDescription}>
        <div className={styles.imageContainer}>
          <Image src={projects[selectedProject].src} fill={true} alt="image" />
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
        {projects.map((project, index) => {
          return (
            <div className={styles.projectEl} key={`p_${index}`}>
              <p>{project.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
