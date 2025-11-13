'use client'

import { useState, useEffect } from "react"
import { useTarot } from "../component/useTarot"

import styles from "./CSS/cartadelgiorno.module.css"
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
        <section>
            
            <div className={styles.container}>
                    <h1 className={styles.title}>Questa è la carta del giorno</h1>
                    <p className={styles.descrizione}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, placeat ratione.</p>
                    <button className={styles.button} onClick={pescaCarta} disabled={cartaGiornaliera}>{cartaGiornaliera ? "Carta già pescata per oggi" : "Pesca una carta"}</button>
                <div className={styles.boxCartaDelGiorno}>
                    {carta && (
                        <div className={styles.carta}>
                            <h2 className={styles.nomeCarta}>{carta.nome}</h2>
                            <p className={styles.significatoCarta}>{carta.significatoScelto}</p>
                            <p className={styles.messaggioCarta}>{carta.messaggio}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}