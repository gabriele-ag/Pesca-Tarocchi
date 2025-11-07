
import { Tarot } from "../api/tarocchi/model/tarot";

export function useTarot() {

    async function fetchTarot(): Promise<Tarot[]> {
        try {
            const response = await fetch('/api/tarocchi');
            if (!response.ok) {
                throw new Error('Errore nel recupero dei tarocchi');
            }

            const data: Tarot[] = await response.json()
            return data
        } catch (error) {
            console.error('Errore nel recupero dei tarocchi:', error)
            return [];
        }        
        
    }

    return { fetchTarot }
}