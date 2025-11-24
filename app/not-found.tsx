'use client'

import Link from "next/link"
import { useRouter } from "next/router"

import './globals.css'

export default function NotFound() {



    return (
        <div className="notfound-box">
            <h1 className="notfound-title">404 | Pagina non trovata</h1>
            <h2 className="notfound-title2">Ti sei perso?</h2>
        </div>
    )
}