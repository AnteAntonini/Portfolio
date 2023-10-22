"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const navbarMenuLinks = ["Skills", "Projects", "About"];

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
      <Link
        href={"/"}
        className={styles.navbarTitle}
        onClick={() => setShow(!show)}
      >
        Ante Antonini
      </Link>
      <div className={styles.navbarMenuLinks}>
        {navbarMenuLinks.map((link, index) => (
          <Link key={index} href={`/${link.toLowerCase()}`}>
            {link}
          </Link>
        ))}
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
        {navbarMenuLinks.map((link, index) => (
          <li key={index}>
            <Link href={`/${link.toLowerCase()}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
