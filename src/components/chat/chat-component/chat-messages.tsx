import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import { AUTHOR } from "../../../types/enums";
import { AppContext, Message } from "../../../context/app-state";

function ChatMessages() {
  const { state, Socketio, setState, setOnline, online } = React.useContext(AppContext);

  //get sockets message from API
  //but first get cached messages from localStorage in useEffect

  React.useEffect(() => {
    // updateOnline()
    console.log('rerendered')
    listenForMessage()
    return disconnect;
  }, []);

  const disconnect = () => {
    Socketio?.off('message');
  };

  const updateOnline = () => {
      console.log(Socketio)
      Socketio?.on('connect', ()=>{
          console.log("hello connecting")
          setOnline(true)
      })
  }

  const listenForMessage = () => {
    Socketio?.on("message", (message: Message) => {
      setState(message.author, message.message)
    });
  };

  return (
    <VStack
      w="full"
      h="80%"
      display="flex"
      flexDirection="column-reverse"
      spacing="3"
      overflow="auto"
      p={{ base: "3", md: "10" }}
      pb="5"
      mt="0"
    >
      {state.length &&
        state.map((message, index) => (
          <Text
            key={index}
            alignSelf={
              message.author !== AUTHOR.CLIENT ? "flex-start" : "flex-end"
            }
            p="3"
            maxW="70%"
            bg={message.author !== AUTHOR.CLIENT ? "transparent" : "#0094B6"}
            color={message.author !== AUTHOR.CLIENT ? "inherit" : "white"}
            border={message.author !== AUTHOR.CLIENT ? "1px solid #0094B6" : ""}
            rounded="lg"
            className="messages"
          >
            {message.message}
          </Text>
        ))}
    </VStack>
  );
}

export default ChatMessages;
