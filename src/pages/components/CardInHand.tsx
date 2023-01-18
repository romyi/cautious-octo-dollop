import { Card } from "../../types/entities"

export const CardInHand = (props: Card) => {
    return (
        <section className='w-24 h-36 shadow-md flex-col rounded-md p-2'>
            <h3 className='text-xl font-medium text-slate-800'>{props.tier}</h3>
            <h4 className='text-sm text-slate-800'>{props.name}</h4>
            <img src="https://www.svgrepo.com/show/490953/box.svg"/>
            <p className='text-xs text-slate-700'>{props.description}</p>
        </section>
    )
}