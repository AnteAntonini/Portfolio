import styles from "./projects.module.css";

const Projects = () => {
  const proj = [1, 2, 3, 4];

  const stylesMap = {
    1: { backgroundColor: "#52b2cf" },
    2: { backgroundColor: "#e5a36f" },
    3: { backgroundColor: "#9cadce" },
    4: { backgroundColor: "#d4afb9" },
  };
  return (
    <div className={styles.container}>
      <ul className={styles.cards}>
        {proj.map((num) => (
          <li
            className={styles.card}
            key={`card${num}`}
            style={stylesMap[num]}
            id={`card${num}`}
          >
            <div className={styles.cardBody}>
              <h2>Card {num}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
