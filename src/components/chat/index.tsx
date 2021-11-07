import React, { ChangeEvent } from "react";
import {
  RiSendPlaneFill,
  BiDotsHorizontalRounded,
  FaUserCircle,
} from "react-icons/all";
import {
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

interface iProps {
  message: string;
  handleMessage(e: ChangeEvent<HTMLTextAreaElement>): void;
}

function ChatComponent({ message, handleMessage }: iProps) {
  let user = "dreplica";
  //if no message in cache then start new
  const [messages, setMessage] = React.useState([
    { author: "client", message: "hello" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
    { author: "client", message: "hello" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
    { author: "client", message: "hello" },
    { author: "ottonova bot", message: "Hi, your message was hello!" },
  ]);
  return (
    <VStack position="relative" flex="1" h="100%" zIndex="-2">
      <HStack w="100%" mx="-10" mb="20" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">
          Ottonova Bot
        </Text>
        <Button as={BiDotsHorizontalRounded} variant="ghost"></Button>
      </HStack>
      <VStack w="full" h="full">
        <VStack
          w="100%"
          mx="-10"
          mb="20"
          flexDirection="column"
          justifyContent="space-between"
        >
            {messages.map((message, index) => (
              <Text
                px="5"
                py="5"
                // bg={message.author === "client" ? "#1b0423" : ""}
                alignSelf={
                  message.author === "client" ? "flex-end" : "flex-start"
                }
              >
                {message.message}
              </Text>
            ))}
        </VStack>
        <HStack
          position="absolute"
          bottom="5"
          spacing="0"
          justifyContent="flex-start"
        >
          <Textarea
            value={message}
            flexBasis="80%"
            roundedRight="0"
            roundedLeft="5"
            borderRight="0"
            resize="none"
            maxH="50px"
            multiple={true}
            onChange={handleMessage}
            placeholder="Write message"
          />
          <Button
            bg="#be69cb"
            as={RiSendPlaneFill}
            flexBasis="20%"
            roundedRight="5"
            borderLeft="0"
            roundedLeft="0"
            onClick={() => {}}
            variant="outline"
            h="10"
            color="#fff"
          >
            
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default ChatComponent;
