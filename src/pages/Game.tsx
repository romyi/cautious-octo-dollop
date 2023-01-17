import React from "react";
import { useDecks, useGame, usePlayers } from "../api/queries";

export const Game = () => {
    const { data: playersData } = usePlayers();
    const { data: gameData } = useGame();
    const { data: decksData } = useDecks();
    return (
        <>
            <h2>{gameData?.title}</h2>
            {playersData?.players.map((player: any) => {
                return (
                    <div key={player.id}>
                        <h2>{player.name}</h2>
                    </div>
                )
            })}
            <div>
                {decksData && decksData.doors && Array.from({length: decksData?.doors}, (_, index) => {
                    return <div>door</div>
                })}
            </div>
        </>
    )
}