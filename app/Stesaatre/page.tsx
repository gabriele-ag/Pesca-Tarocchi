'use client'

import { useState } from "react"
import { useTarot } from "../component/useTarot"

//CSS
import styles from "./CSS/stesaatre.module.css"
import "animate.css"

export default function StesaATre() {

    const { tarots } = useTarot()

    const [carte, setCarta] = useState<Array<(typeof tarots)[number]>>([])

    const pescaCarta = () => {
        const cartaCasuale = Math.floor(Math.random() * tarots.length)
        const cartaPescata = tarots[cartaCasuale]
        if (carte.some(curCard => curCard.nome === cartaPescata.nome)) {
                pescaCarta()
            } else {
                setCarta([...carte, cartaPescata])
            }
    }

    const limiteCarte = carte.length >= 3
    

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>Stesa a tre carte</h1>
                <div className={styles.containerText}>
                    <p className={styles.descrizione}>Passato, presente e futuro si intrecciano. Questa stesa ti aiuta a comprendere le radici delle tue esperienze, la realtà che stai vivendo e le possibilità che si aprono davanti a te.</p>
                    <button className={styles.button} onClick={pescaCarta} disabled={limiteCarte}>{carte.length === 3 ? 'Tutte le carte pescate' : 'Pesca carta'}</button>
                </div>

                {carte.length > 0 && (
                    <div className={styles.boxCarte}>
                        {carte.map((curCard, index) => (
                            <div className={`${styles.carta} animate__animated animate__fadeInDown`} key={index}>
                                <img className={styles.img} src={curCard.img} alt={curCard.nome} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}