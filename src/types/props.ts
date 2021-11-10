import { Socket } from "socket.io-client";

export interface ComponentProps {
    element: HTMLElement
}


export interface Message {
    author: string;
    message: string;
  }
  
  export interface Command {
    type: string;
    data: any;
  }
  
  export interface iProps {
    isOpen: boolean;
    onClose(): void;
  }
  export interface AppState {
    state: Message[];
    username: string;
    command: Command
    online: boolean;
    Socketio: Socket | null;
    setState(prop: string, val: any): void;
    setOnline(prop: boolean): void;
    setUsername(prop: string): void;
  }
  
export interface iModal {
    onClose(): void;
    isOpen: boolean;
    children: JSX.Element;
    header?:string;
    [rest:string]: any
  }

export interface PopOver {
    Body?: JSX.IntrinsicElements;
    children(...props: any): React.ReactChild;
    isOpen: boolean;
    onClose(): void;
  }
  