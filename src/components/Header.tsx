"use client";

import { useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
import styles from "./Header.module.css";

export default function Header() {
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>[GYM NAME]</div>
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#classes">Classes</a>
          <a href="#trainers">Trainers</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <button className={`button-primary ${styles.cta}`} onClick={openModal}>
          Book Your Free Trial
        </button>
      </div>
    </header>
  );
}
