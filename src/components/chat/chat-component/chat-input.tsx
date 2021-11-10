import React from "react";
import { FaPaperPlane } from "react-icons/all";
import { HStack, Button, Textarea } from "@chakra-ui/react";
import { AppContext } from "../../../context/app-state";

function ChatInput() {
  const [input, setInput] = React.useState("");
  const {setState, Socketio, online} = React.useContext(AppContext)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value);
  }

  const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setState('Client', input)
      Socketio?.emit("message", {
          author: 'Client', 
          message: input,
      })
      setInput("")
  }

  return (
    <HStack
      as="form"
      rounded="xl"
      alignSelf="flex-end"
      p="4"
      w="full"
      h="20%"
      bg="#F4F7FC"
    >
      <Textarea
        resize="none"
        flex="4"
        border="0"
        h="full"
        py="2"
        placeholder="Enter message here"
        onChange={handleChange}
        disabled={!online}
      />
      <Button
        borderRadius="full"
        bg="#38b2ac"
        alignSelf="flex-end"
        w="50px"
        h="50px"
        disabled={!online}
        onClick={handleSubmit}
        // isLoading={}
        type="submit"
      >
        <FaPaperPlane width="100%" fill="#fff" />
      </Button>
    </HStack>
  );
}

export default ChatInput;
