import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'wouter';
import { setName } from '../store/userSlice';

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
    </>
  )
}
