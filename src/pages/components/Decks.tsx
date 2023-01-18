import { useDecks } from "../../api/queries";

export const Decks = () => {
    const { data: decksData } = useDecks();
    return (
        <div>
            {decksData && decksData.doors && Array.from({length: decksData?.doors}, (_, index) => {
                return <div>door</div>
            })}
        </div>
    )
}