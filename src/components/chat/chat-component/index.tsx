import React from "react";
import { useHistory } from "react-router";
import {
  VStack,
  HStack,
  Divider,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Button,
  useToast,
} from "@chakra-ui/react";

import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import { AppContext } from "../../../context/app-state";
import PopOver from "../../popover";
import MapModal from "../../modal/map-modal";
import RateModel from "../../modal/rating-modal";
import CompleteModal from "../../modal/complete-modal";
import ScheduleModal from "../../modal/schedule-modal";

function ChatComponent() {
  const toast = useToast();
  const { replace } = useHistory();
  const [openMenu, setMenuState] = React.useState(false);
  const [openMapModal, setMapModal] = React.useState(false);
  const [openCompleteModal, setCompleteModal] = React.useState(false);
  const [openAppointmentModal, setAppointmentModal] = React.useState(false);
  const [openRateModal, setRateModal] = React.useState(false);
  const [visited, setVisited] = React.useState<string[]>([]);
  const { command, online, Socketio } = React.useContext(AppContext);

  const toggleMenuOption = () => {
    setMenuState(!openMenu);
  };

  const toggleOptions = () => {
    emitCommand();
    toggleMenuOption();
  };

  const toggleMapModal = () => {
    setVisited([...visited, "map"]);
    setMapModal(!openMapModal);
  };

  const toggleAppointmentModal = () => {
    setVisited([...visited, "date"]);
    setAppointmentModal(!openAppointmentModal);
  };

  const toggleCompleteModal = () => {
    setVisited([...visited, "complete"]);
    setCompleteModal(!openCompleteModal);
  };
  const toggleRateModal = () => {
    setVisited([...visited, "rate"]);
    setRateModal(!openRateModal);
  };

  const emitCommand = () => {
    Socketio?.emit("command", {
      author: "client",
    });
  };

  const Logout = () => {
    localStorage.removeItem("token");
    replace("/signup");
  };

  React.useEffect(() => {
    switch (command.type) {
      case "date":
        if (visited.includes("date")) break;
        toggleAppointmentModal();
        break;
      case "map":
        if (visited.includes("map")) break;
        toggleMapModal();
        break;
      case "complete":
        if (visited.includes("complete")) break;
        toggleCompleteModal();
        break;
      case "rate":
        if (visited.includes("rate")) break;
        toggleRateModal();
        break;
      default:
        {
          visited.length &&
            toast({
              description: `You already accesed ${command?.type} option`,
              status: "warning",
            });
        }
        break;
    }
  }, [command?.type]);

  return (
    <>
      <VStack
        position="absolute"
        h={{ base: "100%", md: "80%" }}
        w={{ base: "100%", md: "70%" }}
        spacing="5"
        bg="white"
        top="0"
        left="0"
        right="0"
        bottom="0"
        margin="auto"
        p={{ base: "2", md: "10" }}
      >
        <HStack
          h="10%"
          w="full"
          pl="10"
          display="flex"
          justifyContent="space-bewteen"
          alignItems="flex-start"
          bg="white"
        >
          <PopOver isOpen={openMenu} onClose={toggleMenuOption}>
            {(arg) => (
              <UnorderedList listStyleType="none">
                <ListItem>
                  <Button w="full" variant="none" onClick={toggleOptions}>
                    Random Commmand
                  </Button>
                </ListItem>
                <ListItem>
                  <Button w="full" variant="none" onClick={Logout}>
                    Logout{" "}
                  </Button>
                </ListItem>
              </UnorderedList>
            )}
          </PopOver>
          <Box
            rounded="full"
            w="70px"
            h="70px"
            bg="teal.400"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="nowrap"
          >
            <Text fontSize="1.2rem">OB</Text>
          </Box>
          <Box>
            <Text fontSize="1.2rem" fontWeight="bold">
              Ottonova Bot
            </Text>
            <Text fontSize="0.9rem">{online ? "online" : "offline"}</Text>
          </Box>
        </HStack>
        <Divider />
        <VStack
          justifyContent="flex-end"
          w="full"
          h="85%"
          p="10"
          pt="0"
          mt="0"
          spacing="2"
        >
          <ChatMessages />
          <ChatInput />
        </VStack>
      </VStack>
      <MapModal isOpen={openMapModal} onClose={toggleMapModal} />
      <CompleteModal isOpen={openCompleteModal} onClose={toggleCompleteModal} />
      <ScheduleModal
        isOpen={openAppointmentModal}
        onClose={toggleAppointmentModal}
      />
      <RateModel isOpen={openRateModal} onClose={toggleRateModal} />
    </>
  );
}

export default ChatComponent;
