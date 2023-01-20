import { useSelector } from "react-redux"
import { RootState, store } from "../store"
import { setName } from "../store/userSlice"
import { Card } from "../types/entities"
import { HeroPlank } from "./components/HeroPlank"
import { StashedCard, DoorJacket, LootJacket } from "./components/StashedCard"
import { MobCard, ToolCard } from "./components/ToolCard"

const toolProps: Card = {
    name: 'cool item',
    active: true,
    deck: 'treasures',
    id: '1',
    tier: 10,
    description: 'Monkey King Bar',
    equiped: false
}

export const GamePresentation = () => {
    const name = useSelector((store: RootState) => store.user.name);
    return (
        <div className="w-screen max-h-screen flex flex-col-reverse p-2 gap-4 align-center">
            <div className="flex justify-between w-1/4 m-auto">
                <p className="font-light text-sm">turn 4</p>
                <p className="font-light text-sm">4:34</p>
                <p className="font-light text-sm">oioi matemate</p>
                <p className="font-light text-sm">skirmish</p>
            </div>
            <div className="flex items-end">
                <div className='w-3/12 p-2 flex flex-col-reverse items-end gap-2'>
                    <HeroPlank />
                    <HeroPlank />
                    <HeroPlank />
                    <HeroPlank />
                    <p>{name}</p>
                </div>
                <main className='m-auto w-6/12 h-screen flex flex-col-reverse items-center gap-20 p-2'>
                    <section>
                        <div
                        onClick={() => {
                            store.dispatch(setName('au'));
                        }}
                        className="w-8/12 flex justify-center gap-1 m-auto">
                            <ToolCard {...toolProps} active={false} />
                            <ToolCard {...toolProps} />
                            <ToolCard {...toolProps} active={false} />
                            <MobCard />
                            <ToolCard {...toolProps} />
                            <ToolCard {...toolProps} />
                        </div>
                    </section>
                    <aside><p className={`font-light text-xs`}>Pick a card from the doors deck</p></aside>
                    <div>
                        <div className="w-8/12 flex justify-center gap-1 m-auto">
                            <LootJacket />
                            <DoorJacket />
                            <StashedCard />
                        </div>
                    </div>
                </main>
                <div className='w-3/12 p-2 flex flex-col-reverse'>
                    <ToolCard {...toolProps} equiped />
                    <ToolCard {...toolProps} equiped active={false} />
                </div>
            </div>
        </div>
    )
}