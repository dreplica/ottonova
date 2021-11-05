import React from 'react'
import {
    RiSendPlaneFill,
    BiDotsHorizontalRounded,
    FaUserCircle,
  } from "react-icons/all";
  import {
    VStack,
    HStack,
    Divider,
    Box,
    Text,
    Input,
    Button,
    Textarea,
  } from "@chakra-ui/react";
import UserList from '../chat-list/user-list';
import ChatMessages from './chat-messages';
import ChatInput from './chat-input';

function ChatComponent() {
    return (
        <VStack>
            <UserList name={'dreplica'}/>
            <Divider />
            <VStack>
                <ChatMessages  />
                <ChatInput />
            </VStack>
        </VStack>
    )
}

export default ChatComponent
