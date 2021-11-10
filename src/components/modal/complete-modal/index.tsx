import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import CustomModal from "..";
import { AppContext } from "../../../context/app-state";
import { iProps } from "../../../types/props";

function CompleteModal({ isOpen, onClose }: iProps) {
  const { command } = React.useContext(AppContext);
  React.useEffect(() => {
    return () => {};
  }, [command.data]);
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} size="xl" header="End Chat">
      <>
        <HStack
          justifyContent="space-evenly"
          alignItems="center"
          w="full"
          h="full"
        >
          <Button
            as="button"
            fontSize="2rem"
            onClick={onClose}
            data-complete={command?.data?.[0]}
          >
            Yes
          </Button>
          <Button
            as="button"
            fontSize="2rem"
            onClick={onClose}
            data-complete={command?.data?.[1]}
          >
            No
          </Button>
        </HStack>
      </>
    </CustomModal>
  );
}

export default CompleteModal;
