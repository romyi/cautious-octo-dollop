import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'wouter';
import { useWebSocket } from '../api'
import { setName } from '../store/userSlice';
import { CardInHand } from './components/CardInHand';

export function Entrance({sender}: {sender: Function}) {
  const dispatch = useDispatch();
  const name = useRef<string>();
  const [, setLocation] = useLocation()
  const enter = () => {
    dispatch(setName(name.current as string));
    sender({ type: 'connect', name: name.current as string })
    setLocation("/game")
  }
  return (
    <>
      <input onChange={(e) => name.current = e.target.value}></input>
      <button disabled={name.current === ''} onClick={enter}>Play</button>
      <CardInHand name='cool item' deck='treasures' figure='a' id='1' tier={10} description='coool item to enhance your fighting exprerience' />
    </>
  )
}
