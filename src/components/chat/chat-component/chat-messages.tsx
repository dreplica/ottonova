import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import { AUTHOR } from "../../../types/enums";

function ChatMessages() {
    const [messages, setMessage] = React.useState([
    { author: "client", message: "help" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
    { author: "client", message: "hello" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
    { author: "client", message: "help" },
    { author: "ottonova bot", message: "Hi, your message kjhjhjhgjhjvhbh hjkbbjhbjbbhjbkkbjb was hello!" },
    { author: "client", message: "hello" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
    { author: "client", message: "help" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
    { author: "client", message: "hello" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
  ]);
  //get sockets message from API
  //but first get cached messages from localStorage in useEffect

  return (
    <VStack
      w="full"
      h="80%"
      display="flex"
      flexDirection="column-reverse"
      spacing="3"
      overflow="auto"
      p={{base:"3",md:"10"}}
      pb="5"
      mt="0"
    >
      {messages.map((message, index) => (
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
        >
          {message.message}
        </Text>
      ))}
    </VStack>
  );
}

export default ChatMessages;
