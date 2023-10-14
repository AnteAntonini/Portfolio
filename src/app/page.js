import Stars from "@/components/Stars/Stars";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Stars />
      <h1 className={`${styles.introText} fadeInAnimation`}>
        Nice to meet you! <br />
        I'm <span className={styles.introName}>Ante </span>
        <span className={styles.introName}>Antonini</span> <br />
        <span>Frontend Developer.</span>
      </h1>
    </div>
  );
}
