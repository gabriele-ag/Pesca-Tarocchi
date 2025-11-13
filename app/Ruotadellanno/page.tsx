'use client'

import { useState } from "react"
import { useTarot } from "../component/useTarot"

// CSS
import styles from "./CSS/ruotadellanno.module.css"
import "animate.css"


export default function RuotaDelGiorno() {
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
    
        const limiteCarte = carte.length >= 13
        const centro = Math.floor(carte.length / 3)

    return (
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Ruota dell'anno</h1>
                    <div className={styles.containerText}>
                        <p className={styles.descrizione}>Un viaggio attraverso le stagioni della tua vita. La Ruota dell’Anno rivela i cicli di trasformazione, i momenti di crescita e le tappe fondamentali che scandiscono il tuo percorso interiore.</p>
                        <h3 className={styles.title2}>Come riconoscere la carta centrale?</h3>
                        <p className={styles.descrizione}>La carta centrale sarà segnata da un alone attorna ad essa e non preoccuparti se lo vedrai spostarsi, tu continua a pescare, fino alla fine.</p>
                    </div>
                    <button className={styles.button} onClick={pescaCarta} disabled={limiteCarte}>{limiteCarte ? 'Tutte le carte pescate' : 'Pesca carta'}</button>

                    {carte.length > 0 && (
                        <div className={`${styles.boxCarte} ${styles.container}`}>
                            {carte.map((curCard, index) => (
                                <div key={index}
                                className={`${styles.carta} ${index === centro ? styles.centrale : ""} animate__animated animate__fadeInDown`}>
                                    <img className={styles.img} src={curCard.img} alt={curCard.nome} />                                                              
                                </div>
                            ))}
                        </div>
                    )}
                </div>
        </section>   
    )
}