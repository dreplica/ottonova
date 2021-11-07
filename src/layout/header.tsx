import React from "react";
import { RiArrowDropDownLine} from 'react-icons/all'
import {
  Box,
  VStack,
  HStack,
  Stack,
  Text,
  Input,
  Icon,
} from "@chakra-ui/react";

interface iProps{
    children: React.ReactChild
}

function Header({children}: iProps) {
  return (
      <VStack w="full" h="full" >
        {/* <HStack h="10%" w="full" borderBottom="1px solid whitesmoke" bg="white">
          <Box>
            <Text>AD</Text>
          </Box>
          <RiArrowDropDownLine />
        </HStack> */}
        {children}
      </VStack>
  );
}

export default Header;
