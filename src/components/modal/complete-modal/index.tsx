import React from "react";
import { HStack, Text, Button } from "@chakra-ui/react";
import CustomModal from "..";
import RateModel from "../rating-modal";

interface iMap {
  isOpen: boolean;
  onClose(): void;
}

function CompleteModal({ isOpen, onClose }: iMap) {
  const [openRateModal, setRateModal] = React.useState(false);

  const toggleRateModal = () => {
    setRateModal(!openRateModal);
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} size="xl" header="End Chat">
      <>
        {/* <Text fontSize="2rem">End Chat</Text> */}
        <HStack
          justifyContent="space-evenly"
          alignItems="center"
          w="full"
          h="full"
        >
          <Button as="button" fontSize="2rem" onClick={toggleRateModal}>
            Yes
          </Button>
          <Button as="button" fontSize="2rem" onClick={onClose}>
            No
          </Button>
        </HStack>
        <RateModel
          isOpen={openRateModal}
          onClose={toggleRateModal}
          closeCompleteModal={onClose}
        />
      </>
    </CustomModal>
  );
}

export default CompleteModal;
