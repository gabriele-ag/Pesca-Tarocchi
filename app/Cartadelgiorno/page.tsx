'use client'

import { useState } from "react"
import { useTarot } from "../component/useTarot"

import styles from "./CSS/cartadelgiorno.module.css"

export default function CartaDelGiorno() {

    const {tarots} = useTarot()

    const [carta, setCarta] = useState<typeof tarots[0] | null>(null)

    const pescaCarta = () => {
        const cartaCasuale = Math.floor(Math.random() * tarots.length)
        setCarta(tarots[cartaCasuale])
    }

    return (
        <>
            <h1>Questa è la carta del giorno</h1>
            <button className={styles.button} onClick={pescaCarta} disabled={!!carta}>Pesca una carta</button>
            {carta && (
                <div>
                    <h2>{carta.nome}</h2>
                    <p>{carta.messaggio}</p>
                </div>
            )}
        </>
    )
}