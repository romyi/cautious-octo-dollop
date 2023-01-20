export type Player = {
    name: string
    score: number
    strength: number
    doors: number
    treasures: number
}

export type Card = {
    id: string
    equiped: boolean
    active: boolean
    name: string
    tier: number
    description: string
    deck: 'treasures' | 'doors'
}