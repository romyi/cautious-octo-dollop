import { Skull, Eye, Coins, Swords } from "lucide-react"

export const StashedCard = () => {
    return (
        <section className='w-20 flex-grow flex-shrink-0 shadow-md bg-slate-700 h-32 flex flex-col items-center justify-center rounded-md p-2'>
            <h2 className="text-slate-50 font-bold">4</h2>
            <h2 className='text-cyan-400 font-bold'>8</h2>
        </section>
    )
}

export const DoorJacket = () => {
    return (
        <section className='w-20 flex-grow flex-shrink-0  shadow-md bg-cyan-500 h-32 flex gap-2 flex-col items-center justify-center rounded-md p-2'>
            <Skull size={28} color={'#3F3F3F'} />
            <Eye size={28} color={'#3F3F3F'} />
        </section>
    )
}

export const LootJacket = () => {
    return (
        <section className='w-20 flex-grow flex-shrink-0  shadow-md bg-cyan-800 h-32 flex gap-2 flex-col items-center justify-center rounded-md p-2'>
            <Coins size={28} color={'#FFFFFF'} />
            <Swords size={28} color={'#FFFFFF'} />
        </section>
    )
}