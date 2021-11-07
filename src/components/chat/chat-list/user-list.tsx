import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

interface iProps {
  name: string;
}

function Userlist({ name }: iProps) {
  //get active chatter from context
  const nameChars = name.substring(0, 2).toLocaleUpperCase();
  const active = name && true;
  return (
    <HStack
      shadow="md"
      w="full"
      p="8"
      _hover={{cursor: 'pointer', bg: 'gray.100'}}
      // bg={active ? "#292F4C" : "white"}
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      rounded="lg"
      boxShadow="xl"
      bg="white"
    >
      <Box
        rounded="full"
        minW="70px"
        h="70px"
        bg="teal.400"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="nowrap"
      >
        <Text>{nameChars}</Text>
      </Box>
      <Text>{name}</Text>
    </HStack>
  );
}

export default React.memo(Userlist);
