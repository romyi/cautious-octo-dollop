import { Route } from 'wouter';
import './App.css'
import { Entrance, Game, GamePresentation } from './pages';
import { queryClient } from './main';
import { store } from './store';
import { actionsUser } from './store/userSlice';

const ws = new WebSocket('ws://localhost:8000');
ws.onopen = () => console.log('connected');
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const queryKey = data.entity;
    const script: string = data.script;
    console.log('from ws server: ', queryKey, script);
    if (script) {
      //@ts-ignore
      store.dispatch(actionsUser[script]());
      //@ts-ignore
      console.log(actionsUser[script]);
    }
    if (typeof queryKey === 'string') {
      queryClient.invalidateQueries([queryKey])  
    } else {
      for (let key of queryKey) {
        queryClient.invalidateQueries(key);
      }
    }
}
        

function App() {
  return (
    <div>
      <Route path='/'><Entrance sender={(event: any) => ws.send(JSON.stringify(event))} /></Route>
      <Route path='/game'><Game sender={(event: any) => ws.send(JSON.stringify(event))} /></Route>
      <Route path="/pres"><GamePresentation /></Route>
    </div>
  )
}

export default App
