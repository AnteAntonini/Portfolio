"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const projTitles = ["portfolio", "blog"];
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(false);

  const handleHover = (e, project) => {
    setHoveredProject(project);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.container} dropFromTopAnimation`}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <p className={styles.projectSubtitle}>
        Some of the projects are from work and some are on my own time.
      </p>
      <div className={styles.projects}>
        <div className={styles.projectsLeft}>
          {hoveredProject && (
            <Image
              src={`/images/${hoveredProject}.png`}
              fill
              sizes="100%"
              alt="Project image screenshot"
              className={
                isHovered
                  ? `${styles.projectsImageActive} fadeInAnimationShort`
                  : styles.projectsImageInactive
              }
            />
          )}
        </div>
        <div className={styles.projectsRight}>
          <ul className={styles.cards}>
            {projTitles.map((title, index) => (
              <li
                key={index}
                className="dropFromTopAnimation"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Link href="/">
                  <div
                    className={styles.projectsRow}
                    onMouseEnter={(e) => handleHover(e, title)}
                    onMouseLeave={(e) => handleMouseLeave(e)}
                  >
                    <div className={styles.projectsSelectedWrapper}>
                      <h4 className={styles.projectsSelected}>→</h4>
                    </div>
                    <h4 className={styles.projectsTitle}>{title}</h4>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
