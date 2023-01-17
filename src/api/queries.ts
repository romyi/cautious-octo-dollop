import axios from "axios"
import { useQuery } from "react-query"

const fetchPlayers = (): Promise<{players: Array<{id: string, name: string}>}> => {
    return axios.get("http://localhost:3000/players")
    .then((response) => response.data);
}

export const usePlayers = () => useQuery(['players'], fetchPlayers )

const fetchGame = (): Promise<{title: string}> => {
    return axios.get("http://localhost:3000/game")
    .then((response) => response.data);
}

export const useGame = () => useQuery(['game'], fetchGame);

const fetchDecks = (): Promise<{treas: number, doors: number, stash: number}> => {
    return axios.get("http://localhost:3000/deck")
    .then((response) => response.data)
}

export const useDecks = () => useQuery(['decks'], fetchDecks)