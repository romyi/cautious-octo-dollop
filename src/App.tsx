import { Route } from 'wouter';
import './App.css'
import { Entrance, Game } from './pages';
import { queryClient } from './main';

const ws = new WebSocket('ws://localhost:8000');
        ws.onopen = () => console.log('connected');
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const queryKey = data.entity;
            console.log(queryKey);
            if (typeof queryKey === 'string') {
              queryClient.invalidateQueries([queryKey])  
            } else {
              for (let key of queryKey) {
                queryClient.invalidateQueries(key);
              }
            }
        }
        

function App() {
  // const send = useWebSocket();
  return (
    <div>
      <Route path='/'><Entrance sender={(event: any) => ws.send(JSON.stringify(event))} /></Route>
      <Route path='/game'><Game sender={(event: any) => ws.send(JSON.stringify(event))} /></Route>
    </div>
  )
}

export default App
