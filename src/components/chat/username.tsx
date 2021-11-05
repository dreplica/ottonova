import React from 'react'
import {  BiDotsHorizontalRounded } from "react-icons/all";
import {VStack, HStack, Text, Input, Button} from "@chakra-ui/react";

interface iProps{
    user: string,
    getusername(user: string):void,
    startChat(e: React.MouseEvent<HTMLButtonElement>):void
}

function ChatStart({user, getusername, startChat}: iProps) {
    return (
        <VStack spacing={4} position="relative" w="full">
        <HStack w="100%" mx="-10" mb="20" justifyContent="space-between">
          <Text fontSize="lg" fontWeight="bold">
            Ottonova Bot
          </Text>
          <Button as={BiDotsHorizontalRounded} variant="ghost"></Button>
        </HStack>
        <Text>Hi, Please input your username below!</Text>
        <Input
          value={user}
          textAlign="center"
          p="3"
          onChange={(e) => getusername(e.target.value)}
          placeholder="Enter username"
        />
        <Button 
        bg="#be69cb"
        // opacity="0.3"
        variant="outline"
        type="button"
        w="full"
        p="5"
        color="#fff"
        onClick={startChat}
        >Start Chat</Button>
      </VStack>
    )
}

export default ChatStart