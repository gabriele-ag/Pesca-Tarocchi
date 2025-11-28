
'use client';

import { Tarot } from "../api/tarocchi/model/tarot";

import { useState, useEffect } from "react";

interface ApiResponse {
    data: Tarot[],
    count: number
}

export function useTarot() {

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL

    const [tarots, setTarots] = useState<Tarot[]>([]);
    
    async function fetchTarot(): Promise<Tarot[]> {
        try {
            const response = await fetch(`${apiUrl}/tarots`);
            if (!response.ok) {
                throw new Error('Errore nel recupero dei tarocchi');
            }
            
            const results: ApiResponse = await response.json()
            setTarots(results.data)
            console.log(results.data)
            return results.data
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