import { Card } from "../../types/entities"
import { Skull, Swords } from 'lucide-react';

export const ToolCard = (props: Card) => {
    return (
        <section className={`w-20 ${!props.equiped ? 'shadow-sm' : 'border border-slate-300'} ${!props.active && 'opacity-50 shadow-none border-none'} flex-grow flex-shrink-0 bg-slate-50 h-32 flex flex-col items-center justify-between rounded-md p-2`}>
            <aside className="flex flex-row w-full justify-around">
                <p className='text-slate-700 text-sm font-semibold'>2+</p>
                <p className='text-slate-700 text-sm font-semibold'>?</p>
                <p className='text-slate-700 text-sm font-semibold'>7</p>
            </aside>
            <Swords size={32} color="#005550" />
            <p className='text-slate-800 text-xs text-center'>{props.description}</p>
        </section>
    )
}

export const MobCard = () => {
    return (
    <section className='w-20 shadow-sm flex-grow flex-shrink-0 bg-slate-50 h-32 flex flex-col items-center justify-between rounded-md p-2'>
            <aside className="flex flex-row w-full justify-around">
                <p className='text-cyan-500 text-sm font-semibold'>10</p>
                <p className='text-cyan-500 text-sm font-semibold'>2</p>
            </aside>
            <Skull size={32} color="#06b6d4" />
            <p className='text-cyan-500 text-xs text-center'>Meepo</p>
        </section>
    )
}