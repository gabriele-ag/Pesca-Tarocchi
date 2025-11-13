'use client'

import { useState } from "react"
import { useTarot } from "../component/useTarot"

import styles from "./CSS/stesaatre.module.css"

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
        <section>
            <div className={styles.container}>
                <h1 className={styles.title}>Stesa a tre carte</h1>
                <p className={styles.descrizione}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus ipsa officia saepe tempora unde qui, quibusdam, cumque vitae natus, quidem odio eius repellendus eligendi doloribus quae. Facere, cupiditate dolorum!</p>
                <button className={styles.button} onClick={pescaCarta} disabled={limiteCarte}>{carte.length === 3 ? 'Tutte le carte pescate' : 'Pesca carta'}</button>

                {carte.length > 0 && (
                    <div className={styles.boxCarte}>
                        {carte.map((curCard, index) => (
                            <div key={index}>
                                <h2 className={styles.nomeCarta}>{curCard.nome}</h2>
                                <p className={styles.messaggioCarta}>{curCard.messaggio}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}