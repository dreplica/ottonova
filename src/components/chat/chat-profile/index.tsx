import React, { ChangeEvent } from "react";
import { Box, VStack, HStack, Text, Divider } from "@chakra-ui/react";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
} from "react-icons/all";

function ChatProfile() {
  //get the chatters name from context
  const name = "Ottonova Bot";
  const nameChars = name.substring(0, 2);

  return (
    <VStack flex="1" p="3">
      <Box
        rounded="full"
        w="200px"
        style={{ aspectRatio: "1/1" }}
        bg="teal.400"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="4rem" textTransform="uppercase">
          {nameChars}
        </Text>
      </Box>
      <Text>{name}</Text>
      <Text>Munich, Germany</Text>
      <HStack display="flex" justifyContent="space-evenly">
        <RiFacebookCircleLine />
        <RiTwitterLine />
        <RiInstagramLine />
      </HStack>
      <Divider my="2" />
      <VStack>
        <HStack justifyContent="flex-end">
          <Text textAlign="right" mr="4">
            Phone:
          </Text>
          <Text>remember to put number here</Text>
        </HStack>
        <HStack display="flex" justifyContent="flex-end">
          <Text textAlign="right" mr="4">
            E-mail:
          </Text>
          <Text>remember to put email here</Text>
        </HStack>
      </VStack>
      <Divider my="2" />
    </VStack>
  );
}

export default ChatProfile;
