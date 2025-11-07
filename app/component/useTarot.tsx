
'use client';

import { Tarot } from "../api/tarocchi/model/tarot";

import { useState, useEffect } from "react";

export function useTarot() {

    const [tarots, setTarots] = useState<Tarot[]>([]);
    
    async function fetchTarot(): Promise<Tarot[]> {
        try {
            const response = await fetch('/api/tarocchi');
            if (!response.ok) {
                throw new Error('Errore nel recupero dei tarocchi');
            }
            
            const data: Tarot[] = await response.json()
            setTarots(data)
            return data
        } catch (error) {
            console.error('Errore nel recupero dei tarocchi:', error)
            return [];
        }        
        
    }

    useEffect(() => {
        fetchTarot();
    }, []); 


    return { fetchTarot, tarots, setTarots }
}