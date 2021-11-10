import React from "react";
import { Box } from "@chakra-ui/react";
import ChatComponent from "../../components/chat/chat-component";

function ChatWidget() {
  return (
    <Box h="full" w="full" position="relative">
      <ChatComponent />
    </Box>
  );
}

export default ChatWidget;
