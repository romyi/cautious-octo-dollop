import { usePlayers } from "../../api/queries";

export const PlayersInfo = () => {
    const { data: playersData } = usePlayers();
    return (
        <div>
        {playersData?.players.map((player: any) => {
            return (
                <div key={player.id}>
                    <h2>{player.name}</h2>
                </div>
            )
        })}
        </div>
    )
}