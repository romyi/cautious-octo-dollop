import { useEffect, useRef } from "react";
import { useQueryClient } from "react-query"

type ConnectEvent = {
    type: 'connect',
    name: string
}

type PickEvent = {
    type: 'pick'
}

type WebSocketEvent = ConnectEvent | PickEvent


// taken from here: https://tkdodo.eu/blog/using-web-sockets-with-react-query
// but found not so convenient as constant rerenders with subsequent connection close
// moved towards global ws object being passed through props for now
export const useWebSocket = () => {
    const client = useQueryClient();
    const ws = useRef<WebSocket>();
    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8000');
        ws.current.onopen = () => console.log('connected');
        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data);
            const queryKey = [...data.entity, data.id].filter(Boolean)
            client.invalidateQueries(['players'])  
        }
        return () => {
            ws.current?.close()
        }
    }, []);

    return (event: WebSocketEvent) => {
        ws.current?.send(JSON.stringify(event));
    }
}