import React from "react";
import { io, Socket } from "socket.io-client";
import { AppState, Command, Message } from "../types/props";

export const AppContext = React.createContext<AppState>({
  state: [],
  username: "",
  command: {type:"", data:null},
  online: false,
  Socketio: null,
  setState: (arg) => {},
  setOnline: (arg) => {},
  setUsername: (arg) => {},
});

function AppStateContext<T extends { children: React.ReactChild }>({
  children,
}: T) {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [username, setUsername] = React.useState("");
  const [online, setOnline] = React.useState<boolean>(false);
  const [Socketio, setSocket] = React.useState<Socket | null>(null);
  const [command, setCommand] = React.useState<Command>({type:"", data: null});

  const updateOnline = React.useCallback((arg) => {
    setOnline(arg);
  }, []);

  const updateUsername = React.useCallback((arg) => {
    setUsername(arg);
  }, []);

  const updateCommand = React.useCallback((arg) => {
    setCommand(arg);
  }, []);

  const updateMessage = React.useCallback((author, message) => {
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
    socket.on("connect", () => {
      updateOnline(true);
    });
    socket.on("command", ({command})=>{
      updateCommand(command)
    })
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <AppContext.Provider
      value={{
        online,
        Socketio,
        username,
        command,
        state: messages,
        setState: updateMessage,
        setOnline: updateOnline,
        setUsername: updateUsername,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppStateContext;
