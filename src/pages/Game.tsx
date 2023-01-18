import React from "react";
import { useSelector } from "react-redux";
import { useMe } from "../api/queries";
import { RootState, store } from "../store";
import { Decks } from "./templates/Decks";
import { Hand } from "./templates/Hand";
import { Meta } from "./templates/Meta";
import { PlayersInfo } from "./templates/PlayersInfo";

export const Game = ({sender}: {sender: Function}) => {
    const name = useSelector((store: RootState) => store.user.name);
    const { data: userData } = useMe(name);
    return (
        <>
            <Meta sender={sender} />
            <PlayersInfo />
            <Decks />
            <Hand userData={userData} />
        </>
    )
}