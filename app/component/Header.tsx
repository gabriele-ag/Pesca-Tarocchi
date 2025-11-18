"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BurgerMenu from "./burgerMenu";
import styles from "./CSS/header.module.css"

export default function Header() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <header className={`${styles.header} ${scroll ? styles.scrolled : ""}`}>
        <div className={styles.headerFlex}>
            <div>
                <i className={`fa-solid fa-moon ${styles.logo}`}></i>
            </div>
            <nav className={styles.nav}>
                <Link className={styles.linkNav} href={"/"}>Home</Link>
                <Link className={styles.linkNav} href={"/Cartadelgiorno"}>Carta del giorno</Link>
                <Link className={styles.linkNav} href={"/Ruotadellanno"}>Ruota dell'anno</Link>
                <Link className={styles.linkNav} href={"/Stesaatre"}>Stesa a tre carte</Link>
            </nav>
            <BurgerMenu/>
        </div>
</header>

  )
}