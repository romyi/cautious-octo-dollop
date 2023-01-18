import { useHand } from "../../api/queries";

export const Hand = ({userData}: {userData: any}) => {
    const { data: handData } = useHand(userData?.id as string);
    return (
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
    )
}