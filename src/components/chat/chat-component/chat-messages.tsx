import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import { AUTHOR } from "../../../types/enums";

function ChatMessages() {
  const [messages, setMessage] = React.useState([
    { author: "client", message: "hello" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
    { author: "client", message: "hello" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
    { author: "client", message: "hello" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
  ]);
  //get sockets message from API
  //but first get cached messages from localStorage in useEffect

  return (
    <VStack display="flex" justifyContent="flex-end">
      {messages.map((message, index) => (
        <Text
          key={index}
          alignSelf={
            message.author === AUTHOR.CLIENT ? "flex-start" : "flex-end"
          }
        >
          {message.message}
        </Text>
      ))}
    </VStack>
  );
}

export default ChatMessages;
