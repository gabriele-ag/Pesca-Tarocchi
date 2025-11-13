'use client'

import { useState, useEffect } from "react"
import { useTarot } from "../component/useTarot"

import styles from "./CSS/cartadelgiorno.module.css"
import 'animate.css'
import { Tarot } from "../api/tarocchi/model/tarot"

type CartaEstratta = Tarot & {
  significatoScelto: string
}

export default function CartaDelGiorno() {

    const { tarots } = useTarot()

    const [carta, setCarta] = useState<CartaEstratta | null>(null)
    const [data, setData] = useState<string | null>(null)

    useEffect(() => {
        const salvaCarta = localStorage.getItem("carta")
        const salvaData = localStorage.getItem("data")

        const dataOdierna = new Date().toLocaleDateString()
        if (salvaCarta && salvaData === dataOdierna) {
            setData(salvaData)
            setCarta(JSON.parse(salvaCarta) as CartaEstratta)
        } else {
            localStorage.removeItem("carta")
            localStorage.removeItem("data")
            setData(null)
            setCarta(null)
        }

    }, [])


    const pescaCarta = () => {
        const cartaCasuale = Math.floor(Math.random() * tarots.length)
        const cartaPescata = tarots[cartaCasuale]

        const orientamento = Math.random() < 0.5
        const dataDiOggi = new Date().toLocaleDateString()

        if (orientamento === true) {
            const cartaDritta: CartaEstratta = {
                ...cartaPescata,
                significatoScelto: cartaPescata.significato.dritto
            }
            setCarta(cartaDritta)
            setData(dataDiOggi)
            
            localStorage.setItem("carta", JSON.stringify(cartaDritta))
            localStorage.setItem("data", dataDiOggi)

        } else {
            const cartaRovesciata: CartaEstratta = {
                ...cartaPescata,
                significatoScelto: cartaPescata.significato.rovesciato
            }
            setCarta(cartaRovesciata)
            setData(dataDiOggi)
            localStorage.setItem("carta", JSON.stringify(cartaRovesciata))
            localStorage.setItem("data", dataDiOggi)
        }
    }

    const oggi = new Date().toLocaleDateString()
    const cartaGiornaliera = (carta && data === oggi) ?? false



    return (
        <section className={styles.section}>
            
            <div className={styles.container}>
                    <h1 className={styles.title}>Carta del giorno</h1>
                    <div className={styles.containerText}>
                        <p className={styles.descrizione}>Un messaggio quotidiano che illumina il tuo cammino. La carta estratta oggi ti offre una guida simbolica, un invito a riflettere e a trovare ispirazione nelle energie che ti accompagnano.</p>
                    </div>
                    <button className={styles.button} onClick={pescaCarta} disabled={cartaGiornaliera}>{cartaGiornaliera ? "Carta già pescata per oggi" : "Pesca una carta"}</button>
                <div className={styles.boxCartaDelGiorno}>
                    {carta && (
                        <>
                            <div className={`${styles.carta} animate_animated animate_bounce`}>
                                <img className={styles.img} src={carta.img} alt={carta.nome} />
                            </div>
                            <div>
                                <h4 className={styles.titleSignificato}>Significato</h4>
                                <p className={styles.significatoCarta}>{carta.significatoScelto}</p>
                                <h4 className={styles.titleMessaggio}>Messaggio del giorno</h4>
                                <p className={styles.messaggioCarta}>{carta.messaggio}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}