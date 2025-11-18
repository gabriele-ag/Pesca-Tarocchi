'use client'

import Link from "next/link"
import styles from "./CSS/burgermenu.module.css"
import { useState } from "react"

type Link = {
    title: string,
    url: string
}

export default function BurgerMenu() {

    const [open, setOpen] = useState(false)

    const linkNav: Link[] = [
        {
            url: "/",
            title: "Home"
        },
        {
            url: "/Cartadelgiorno",
            title: "Carta del giorno"
        },
        {
            url: "/Ruotadellanno",
            title: "Ruota dell'anno"
        },
        {
            url: "/Stesaatre",
            title: "Stesa a tre carte"
        }
    ]


    return (
        <>
            <div className={styles.buttonBurger}>
                <button 
                onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-bars buttonMenu"></i>
                </button>
            </div>

            <nav className={`${styles.burgerMenu} ${open ? styles.open : ""}`}>
                    <ul>
                        {linkNav.map((curLink, index) => (
                            <li className={styles.boxLinks} key={index}>
                                <Link className={styles.links} href={curLink.url}>{curLink.title}</Link>
                            </li>
                        ))}
                    </ul>
            </nav>                         
        </>
        
    )
}