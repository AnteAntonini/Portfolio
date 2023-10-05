import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About me</h1>
      <div>
        <p>
          Hi, I am Ante Antonini, a software engineer working at Combis.
          Currently based in Metković, Croatia.
        </p>
        <p>
          My main points of interest are on the frontend, specializing in
          React.js.
        </p>
        <p>
          My skillset includes engineering complex UI-s, TypeScript, as well as
          unit testing.
        </p>
        <p>
          What truly excites me about this field is its ever-evolving nature.
          I'm a staunch advocate for lifelong learning and make it a point to
          stay abreast of the latest industry trends, best practices, and
          emerging technologies. This commitment to continuous improvement fuels
          my aspiration to become a better developer with each passing day.
        </p>
        <p>
          Outside of programming, I enjoy reading and working out. I am
          immensely interested in mental and physical performance which I relate
          to my overall productivity and health. Constantly learning, being
          useful and creative are the principles I live by.
        </p>
        <p>
          You can find me on{" "}
          <a href="/https://github.com/AnteAntonini" target="_blank">
            GitHub
          </a>
          ,
          <a
            href="https://hr.linkedin.com/in/ante-antonini-493a1617a"
            target="_blank"
          >
            {" "}
            LinkedIn
          </a>
          , and
          <a href="https://www.instagram.com/ante_antonini/" target="_blank">
            {" "}
            Instagram
          </a>
        </p>
        <p>
          Contact me at:{" "}
          <a href="mailto:anteantonini1@gmail.com">anteantonini1@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default About;
