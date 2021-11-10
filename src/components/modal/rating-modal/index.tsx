import React from "react";
import { HStack, Text, Button } from "@chakra-ui/react";
import CustomModal from "..";
import { AppContext } from "../../../context/app-state";
import { iProps } from "../../../types/props";

function RateModel({ isOpen, onClose }: iProps) {
    const {command} = React.useContext(AppContext)

    React.useEffect(() =>{
        return ()=>{}
    }, [command.data])

    const processRate = () =>{
        onClose()
    }
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      header="Rate your experience!"
    >
      <HStack
        justifyContent="space-evenly"
        alignItems="center"
        w="full"
        h="full"
      >
        <Button
          h="auto"
          as="button"
          variant="ghost"
          fontSize={{ base: "4rem", sm: "10rem" }}
          onClick={processRate}
          display="flex"
          flexDir="column"
          data-rate={command?.data?.[0]}
        >
          😉
          <Text fontSize="2rem">Great</Text>
        </Button>
        <Button
          h="auto"
          as="button"
          variant="ghost"
          fontSize={{ base: "4rem", sm: "10rem" }}
          onClick={processRate}
          display="flex"
          flexDir="column"
          data-rate={command?.data?.[1]}
        >
          😓
          <Text fontSize="2rem">Sad</Text>
        </Button>
      </HStack>
    </CustomModal>
  );
}

export default RateModel;
