'use client'

import { useState } from "react"
import { useTarot } from "../component/useTarot"

// CSS
import styles from "./CSS/ruotadellanno.module.css"
import "animate.css"


export default function RuotaDellanno() {
        const { tarots } = useTarot()

        
        const [carte, setCarta] = useState<Array<(typeof tarots)[number]>>([])

        const mesi = [
            "Gennaio", "Febbraio", "Marzo", "Aprile",
            "Maggio", "Giugno", "Luglio", "Agosto",
            "Settembre", "Ottobre", "Novembre", "Dicembre"
        ]

    
        const pescaCarta = () => {
            
            const nuoveCarte: Array<(typeof tarots)[number]> = []

            while (nuoveCarte.length < 13) {
                const cartaCasuale = Math.floor(Math.random() * tarots.length)
                const cartaPescata = tarots[cartaCasuale]

                if (!nuoveCarte.some(curCard => curCard.nome === cartaPescata.nome)) {
                nuoveCarte.push(cartaPescata)
                }
            }

            nuoveCarte.forEach((curCarta, i) => {
                setTimeout(() => {
                    setCarta(prev => [...prev, curCarta])
                }, i * 400)
            })
        }
    
        const limiteCarte = carte.length >= 13

    return (
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Ruota dell'anno</h1>
                    <div className={styles.containerText}>
                        <p className={styles.descrizione}>Un viaggio attraverso le stagioni della tua vita. La Ruota dell’Anno rivela i cicli di trasformazione, i momenti di crescita e le tappe fondamentali che scandiscono il tuo percorso interiore.</p>
                    </div>
                    <button className={styles.button} onClick={pescaCarta} disabled={limiteCarte}>{limiteCarte ? 'Tutte le carte pescate' : 'Pesca carta'}</button>

                    {carte.length > 0 && (
                        <div className={`${styles.boxCarte} ${styles.container}`}>
                            {carte.map((curCard, index) => (      
                                    <div key={index}>
                                        <h4 className={styles.mese}>{index === 12 ? "Centrale" : mesi[index]}</h4>                                 
                                        <div 
                                        className={`${styles.carta} ${index === 12 ? styles.centrale : ""} animate__animated animate__fadeInDown`}>
                                            <img className={styles.img} src={curCard.img} alt={curCard.nome} />                                                              
                                        </div>
                                    </div>   
                            ))}
                        </div>
                    )}
                </div>
        </section>   
    )
}