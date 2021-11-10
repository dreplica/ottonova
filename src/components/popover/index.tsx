import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdArrowDropDown, MdOutlineArrowDropDown } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

interface PopOver {
  Body?: JSX.IntrinsicElements;
  children(...props: any): React.ReactChild;
  isOpen: boolean;
  onClose(): void;
}

function PopOver({ Body, children, isOpen, onClose }: PopOver) {
  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom-end">
      <PopoverTrigger>
        <Button
          as={RiArrowDropDownLine}
          variant="ghost"
          height="20px"
          onClick={onClose}
        ></Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>
          <Text>Options</Text>
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>{children(isOpen)}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOver;
