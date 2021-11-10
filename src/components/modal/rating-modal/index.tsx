import React from "react";
import { HStack, Text, Button } from "@chakra-ui/react";
import CustomModal from "..";
import { AppContext } from "../../../context/app-state";

interface iMap {
  isOpen: boolean;
  onClose(): void;
  closeCompleteModal(): void;
}

function RateModel({ isOpen, onClose, closeCompleteModal }: iMap) {
    const {Socketio} = React.useContext(AppContext)

    React.useEffect(() =>{
        return ()=>{}
    }, [])

    const processRate = () =>{
        // Socketio?.emit("command")
        onClose()
        closeCompleteModal()
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
        >
          😓
          <Text fontSize="2rem">Sad</Text>
        </Button>
      </HStack>
    </CustomModal>
  );
}

export default RateModel;
