import { useRef } from 'react';
import { useLocation } from 'wouter';
import { useWebSocket } from '../api'

export function Entrance({sender}: {sender: Function}) {
  const name = useRef<string>();
  const [, setLocation] = useLocation()
  const enter = () => {
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
