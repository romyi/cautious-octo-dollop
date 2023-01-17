import axios from "axios"
import { QueryKey, useQuery } from "react-query"

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

const fetchHand = ({ queryKey }: { queryKey: QueryKey }): Promise<{cards: Array<{id: string, deck: string}>}> => {
    const [, id] = queryKey;
    return axios.get("http://localhost:3000/hand", { params: {id: id }})
    .then((response) => response.data)
}

const fetchDecks = (): Promise<{treas: number, doors: number, stash: number}> => {
    return axios.get('http://localhost:3000/deck')
    .then((response) => response.data);
}

export const useDecks = () => useQuery(['decks'], fetchDecks)

export const useHand = (id: string) => useQuery(['hand', id], fetchHand, {enabled: id !== ''});

const fetchMe = ({ queryKey }: { queryKey: QueryKey }): Promise<{id: string}> => {
    const [, name] = queryKey
    console.log(name);
    return axios.get('http://localhost:3000/me', {params: {name: name}})
    .then((response) => response.data);
}

export const useMe = (name: string) => useQuery(['me', name], fetchMe, {enabled: name !== ''});