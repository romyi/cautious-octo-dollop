import React from "react";
import { useSelector } from "react-redux";
import { useDecks, useGame, useHand, useMe, usePlayers } from "../api/queries";
import { RootState, store } from "../store";

export const Game = ({sender}: {sender: Function}) => {
    const name = useSelector((store: RootState) => store.user.name);
    const { data: playersData } = usePlayers();
    const { data: gameData } = useGame();
    const { data: decksData } = useDecks();
    const { data: userData } = useMe(name);
    const { data: handData } = useHand(userData?.id as string);
    const start = () => {
        sender({type: 'start_match'})
    }
    return (
        <>
            <h2>{gameData?.title}</h2>
            <button onClick={start}>start</button>
            {playersData?.players.map((player: any) => {
                return (
                    <div key={player.id}>
                        <h2>{player.name}</h2>
                    </div>
                )
            })}
            {/* <div>
                {decksData && decksData.doors && Array.from({length: decksData?.doors}, (_, index) => {
                    return <div>door</div>
                })}
            </div> */}
            <div>
                {handData && handData.cards && handData.cards.map(
                    (card) => {
                        return (
                            <div style={{
                                backgroundColor: card.deck === 'door'
                                ? 'pink' : 'black'
                            }} key={card.id}>
                                <p>{card.id}</p>
                            </div>
                        )
                    }
                )}
            </div>
        </>
    )
}