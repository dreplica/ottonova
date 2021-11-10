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
import { RiArrowDropDownLine } from "react-icons/ri";
import { PopOver as iPop } from "../../types/props";

function PopOver({ Body, children, isOpen, onClose }: iPop) {
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
