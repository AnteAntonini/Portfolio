"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? `${styles.scrolled}` : ""}`}>
      <Link href={"/"} className={styles.navbarTitle}>
        Ante Antonini
      </Link>
      <div className={styles.navbarMenuLinks}>
        <Link href={"/skills"}>Skills</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/about"}>About</Link>
      </div>
      <div
        className={`${styles.hamburger} ${show && styles.active}`}
        onClick={() => setShow(!show)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul
        className={`${
          show ? styles.mobileNavigation : styles.hideMobileNavigation
        }`}
        onClick={() => setShow(!show)}
      >
        <li>
          <Link href={"/skills"}>Skills</Link>
        </li>

        <li>
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"/"}>Blog</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
