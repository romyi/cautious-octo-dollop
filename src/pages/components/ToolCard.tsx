import { Card } from "../../types/entities"
import { Swords } from 'lucide-react';

export const ToolCard = (props: Card) => {
    return (
        <section className='w-24 shadow-sm bg-slate-50 h-32 flex flex-col items-center justify-between rounded-md p-2'>
            <aside className="flex flex-row justify-between w-full">
                <p className='text-slate-700 text-sm font-semibold'>2</p>
                <p className='text-slate-700 text-sm font-semibold'>?</p>
                <p className='text-slate-700 text-sm font-semibold'>7</p>
            </aside>
            <Swords size={32} color="#005550" />
            <p className='text-slate-700 text-xs font-semibold'>{props.description}</p>
        </section>
    )
}