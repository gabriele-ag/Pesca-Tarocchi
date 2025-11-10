'use client'

import { useState } from "react"
import { useTarot } from "../component/useTarot"

export default function StesaATre() {

    const { tarots } = useTarot()

    const [carte, setCarta] = useState<Array<(typeof tarots)[number]>>([])

    const pescaCarta = () => {
        if (carte.length >= 3) return 
        const cartaCasuale = Math.floor(Math.random() * tarots.length)
        const cartaPescata = tarots[cartaCasuale]
        setCarta([...carte, cartaPescata])
    }

    const limiteCarte = carte.length >= 3
    


    return (
        <>
        <div>
            <h1>Pesca 3 carte</h1>
            <button onClick={pescaCarta} disabled={limiteCarte}>Pesca</button>

            {carte.length > 0 && (
                <div>
                    {carte.map((curCard, index) => (
                        <div key={index}>
                            <h2>{curCard.nome}</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    )
}