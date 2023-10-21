"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio (this app)",
      key: "portfolio",
      url: "/",
    },
    {
      title: "Blog",
      key: "blog",
      url: "https://my-blog-zeta-virid.vercel.app/",
    },
    {
      title: "City Hotel",
      key: "city-hotel",
      url: "https://www.city-hotel.hr/",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(false);

  const handleHover = (e, project) => {
    console.log("project", project);
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
            {projects.map((project, index) => (
              <li
                key={project.key}
                className="dropFromTopAnimation"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Link href={project.url}>
                  <div
                    className={styles.projectsRow}
                    onMouseEnter={(e) => handleHover(e, project.key)}
                    onMouseLeave={(e) => handleMouseLeave(e)}
                  >
                    <div className={styles.projectsSelectedWrapper}>
                      <h4 className={styles.projectsSelected}>→</h4>
                    </div>
                    <h4 className={styles.projectsTitle}>{project.title}</h4>
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
