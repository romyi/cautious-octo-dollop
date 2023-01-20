import React from "react";
import { useSelector } from "react-redux";
import { useMe } from "../api/queries";
import { RootState, store } from "../store";
import { Decks } from "./templates/Decks";
import { Hand } from "./templates/Hand";
import { Meta } from "./templates/Meta";
import { PlayersInfo } from "./templates/PlayersInfo";
import { useLocation } from 'wouter';

export const Game = ({sender}: {sender: Function}) => {
    const name = useSelector((store: RootState) => store.user.name);
    const { data: userData } = useMe(name);
    const [,setLocation] = useLocation();
    return (
        <>
            <div onClick={() => setLocation('/pres')} className='bg-slate-700 w-4 h-4' />
            <Meta sender={sender} />
            <PlayersInfo />
            <Decks />
            <Hand userData={userData} />
        </>
    )
}