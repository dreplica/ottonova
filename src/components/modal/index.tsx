import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { iModal } from "../../types/props";

function CustomModal({ onClose, isOpen, children, header, ...rest }: iModal) {
  return (
    <Modal
      motionPreset="slideInBottom"
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      {...rest}
    >
      <ModalOverlay />
      <ModalContent
        pb={{ base: "0", md: "4" }}
        w={{ base: "100%", md: "5xl" }}
        h={{ base: "90%" , sm:"60%"}}
      >
        <ModalHeader w="full">{header ?? "Option"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody w="full" height="full">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;

export const d = () => <div></div>