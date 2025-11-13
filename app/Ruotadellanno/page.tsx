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
            <section>
            <div className={styles.container}>
                <h1 className={styles.title}>Ruota dell'anno</h1>
                <p className={styles.descrizione}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus ipsa officia saepe tempora unde qui, quibusdam, cumque vitae natus, quidem odio eius repellendus eligendi doloribus quae. Facere, cupiditate dolorum!</p>
                <button className={styles.button} onClick={pescaCarta} disabled={limiteCarte}>{limiteCarte ? 'Tutte le carte pescate' : 'Pesca carta'}</button>

                {carte.length > 0 && (
                    <div className={styles.boxCarte}>
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