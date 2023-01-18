import { useGame } from "../../api/queries";

export const Meta = ({sender}: {sender: Function}) => {
    const { data: gameData } = useGame();
    const start = () => {
        sender({type: 'start_match'})
    }
    return (
        <header>
            <p>{gameData?.title}</p>
            <button onClick={start}>start</button>
        </header>
    )
}