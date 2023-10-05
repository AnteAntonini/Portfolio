import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

const Projects = () => {
  const proj = [1, 2];

  return (
    <div className={styles.container}>
      <h2 className={styles.projectTitle}>Projects</h2>
      <p className={styles.projectSubtitle}>
        Some of the projects are from work and some are on my own time.
      </p>
      <ul className={styles.cards}>
        {proj.map((num) => (
          <li className={styles.card} key={`card${num}`} id={`card${num}`}>
            <div className={styles.cardBody}>
              <Link
                href="https://my-blog-zeta-virid.vercel.app/"
                target="_blank"
              >
                <Image
                  fill
                  src={"/images/blog.png"}
                  alt="Picture of blog project"
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
