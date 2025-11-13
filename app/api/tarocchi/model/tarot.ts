export type Tarot = {
    id: number,
    numero: number,
    nome: string
    dritto: number,
    significato: {
        dritto: string,
        rovesciato: string
    }
    messaggio: string,
    img: string
}