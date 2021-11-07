import React from "react";
import { VStack, HStack, Divider, Box, Text } from "@chakra-ui/react";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";

function ChatComponent() {
  return (
    <VStack
      position="absolute"
      h={{ base: "100%", md: "80%" }}
      w={{ base: "100%", md: "70%" }}
      spacing="5"
      bg="white"
      top="0"
      left="0"
      right="0"
      bottom="0"
      margin="auto"
      p={{ base: "2", md: "10" }}
    >
      <HStack
        h="10%"
        w="full"
        pl="10"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        bg="white"
      >
        <Box
          rounded="full"
          w="70px"
          h="70px"
          bg="teal.400"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="nowrap"
        >
          <Text>{"DR"}</Text>
        </Box>
        <Text>{"Dreplica"}</Text>
      </HStack>
      <Divider />
      <VStack
        justifyContent="flex-end"
        w="full"
        h="85%"
        p="10"
        pt="0"
        mt="0"
        spacing="2"
      >
        <ChatMessages />
        <ChatInput />
      </VStack>
    </VStack>
  );
}

export default ChatComponent;
