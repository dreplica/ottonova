import React from "react";
import { io, Socket } from "socket.io-client";

export interface Message {
  author: string;
  message: string;
}

export interface AppState {
  state: Message[];
  online: boolean;
  Socketio: Socket | null
  setState(prop: string, val: any): void;
  setOnline(prop: boolean): void;
}

export const AppContext = React.createContext<AppState>({
  state: [],
  online: false,
  Socketio: null,
  setState: (arg) => {},
  setOnline: (arg) => {},
});

function AppStateContext<T extends { children: React.ReactChild }>({
  children,
}: T) {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [online, setOnline] = React.useState<boolean>(false);
  const [Socketio, setSocket] = React.useState<Socket | null>(null);

  const updateOnline = React.useCallback((arg) => {
    setOnline(arg);
  }, []);

  const updateMessage = React.useCallback((author, message) => {
    console.log(messages);
    setMessages([
      ...messages,
      {
        author,
        message,
      },
    ]);
  }, []);

  React.useEffect(() => {
        const socket = io(process.env.REACT_APP_SOCKET_URL as string);
        socket.on('connect', ()=>{
            console.log("hello connecting")
            
            updateOnline(true)
        })
        setSocket(socket)
        return () => {
            console.log("closing")
            socket.disconnect()
            socket.close()
        }
  },[]);
  return (
    <AppContext.Provider
      value={{
        online,
        Socketio,
        state: messages,
        setState: updateMessage,
        setOnline: updateOnline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppStateContext;
