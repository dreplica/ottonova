import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

interface iProps {
  name: string;
}

function Userlist({ name }: iProps) {
  //get active chatter from context
  const nameChars = name.substring(0, 2);
  const active = name && true;
  return (
    <HStack
      shadow="md"
      w="full"
      p="8"
      bg={active ? "#292F4C" : "white"}
      display="flex"
      justifyContent="flex-start"
      alignContent="center"
    >
      <Box
        rounded="full"
        w="100px"
        h="100px"
        bg="teal.400"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text>{nameChars}</Text>
      </Box>
      <Text>{name}</Text>
    </HStack>
  );
}

export default React.memo(Userlist);
