import React from "react";
import styles from "./skills.module.css";
import Image from "next/image";
import { technologies } from "@/constants/technologies";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillTitle}>Skills</h2>
      <div className={styles.skillList}>
        {technologies.map((technology, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
            className={styles.skills}
          >
            <div className={styles.skill}>
              <Image
                className={styles.mobileIcons}
                src={`${technology.icon}.svg`}
                width={100}
                height={100}
                alt="software technology"
              />
              <span className={styles.skillName}>{technology.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
