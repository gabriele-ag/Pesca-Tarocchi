'use client'

import { useState, useEffect } from "react"
import { useTarot } from "../component/useTarot"

import styles from "./CSS/cartadelgiorno.module.css"

export default function CartaDelGiorno() {

    const {tarots} = useTarot()

    const [carta, setCarta] = useState<typeof tarots[0] | null>(null)
    const [data, setData] = useState<string | null>(null)

    useEffect(() => {
        const salvaCarta = localStorage.getItem("carta")
        const salvaData = localStorage.getItem("data")

        const dataOdierna = new Date().toLocaleDateString()
        if (salvaCarta && salvaData === dataOdierna) {
            setData(salvaData)
            setCarta(JSON.parse(salvaCarta))
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
        const dataDiOggi = new Date().toLocaleDateString()

        setCarta(cartaPescata)
        setData(dataDiOggi)

        localStorage.setItem("carta", JSON.stringify(cartaPescata))
        localStorage.setItem("data", dataDiOggi)
    }

    const oggi = new Date().toLocaleDateString()
    const cartaGiornaliera = (carta && data === oggi) ?? false



    return (
        <>
            <h1>Questa è la carta del giorno</h1>
            <button className={styles.button} onClick={pescaCarta} disabled={cartaGiornaliera}>{cartaGiornaliera ? "Carta già pescata per oggi" : "Pesca una carta"}</button>
            {carta && (
                <div>
                    <h2>{carta.nome}</h2>
                    <p>{carta.messaggio}</p>
                </div>
            )}
        </>
    )
}