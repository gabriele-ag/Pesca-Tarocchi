'use client'

import { useState } from "react"
import { useTarot } from "../component/useTarot"

import styles from "./CSS/ruotadellanno.module.css"



export default function RuotaDelGiorno() {
    const { tarots } = useTarot()
    
        const [carte, setCarta] = useState<Array<(typeof tarots)[number]>>([])
    
        const pescaCarta = () => {
            const cartaCasuale = Math.floor(Math.random() * tarots.length)
            const cartaPescata = tarots[cartaCasuale]
            setCarta([...carte, cartaPescata])
        }
    
        const limiteCarte = carte.length >= 13
        const centro = Math.floor(carte.length / 3)

    return (
            <section>
            <div className={styles.container}>
                <h1 className={styles.title}>Stesa a tre carte</h1>
                <p className={styles.descrizione}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus ipsa officia saepe tempora unde qui, quibusdam, cumque vitae natus, quidem odio eius repellendus eligendi doloribus quae. Facere, cupiditate dolorum!</p>
                <button className={styles.button} onClick={pescaCarta} disabled={limiteCarte}>{carte.length === 13 ? 'Tutte le carte pescate' : 'Pesca carta'}</button>

                {carte.length > 0 && (
                    <div className={styles.boxCarte}>
                        {carte.map((curCard, index) => (
                            <div key={index}
                            className={`$${styles.carta} ${index === centro ? styles.centrale : ""}`}>                                
                                    <h2 className={styles.nomeCarta}>{curCard.nome}</h2>                               
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>   
    )
}