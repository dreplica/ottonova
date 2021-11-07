import React from "react";
import { FaPaperPlane } from "react-icons/all";
import { HStack, Button, Textarea } from "@chakra-ui/react";

function ChatInput() {
  const [] = React.useState();
  return (
    <HStack
      rounded="xl"
      alignSelf="flex-end"
      p="4"
      w="full"
      h="20%"
      bg="#F4F7FC"
    >
      <Textarea resize="none" flex="4" border="0" h="full" py="2" placeholder="Enter message here"/>
      <Button borderRadius="full" bg="#38b2ac" alignSelf="flex-end" w="50px" h="50px">
      <FaPaperPlane width="100%" fill="#fff"/>
      </Button>
    </HStack>
  );
}

export default ChatInput;
