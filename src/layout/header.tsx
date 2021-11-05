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
    <Box>
      <VStack>
        <HStack>
          <Box>
            <Text>AD</Text>
          </Box>
          <RiArrowDropDownLine />
        </HStack>
        {children}
      </VStack>
    </Box>
  );
}

export default Header;
