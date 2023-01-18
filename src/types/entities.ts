export type Player = {
    name: string
    score: number
    strength: number
    doors: number
    treasures: number
}

export type Card = {
    id: string
    name: string
    tier: number
    description: string
    deck: 'treasures' | 'doors'
    figure: string
}