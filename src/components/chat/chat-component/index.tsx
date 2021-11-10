import React from "react";
import {
  VStack,
  HStack,
  Divider,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import { AppContext } from "../../../context/app-state";
import PopOver from "../../popover";
import MapModal from "../../modal/map-modal";
import RateModel from "../../modal/rating-modal";
import CompleteModal from "../../modal/complete-modal";
import ScheduleModal from "../../modal/schedule-modal";
import { useHistory } from "react-router";

function ChatComponent() {
  const { replace } = useHistory();
  const [openMenu, setMenuState] = React.useState(false);
  const [openMapModal, setMapModal] = React.useState(false);
  const [openCompleteModal, setCompleteModal] = React.useState(false);
  const [openAppointmentModal, setAppointmentModal] = React.useState(false);
  const { state, online } = React.useContext(AppContext);

  const toggleMenuOption = () => {
    setMenuState(!openMenu);
  };

  const toggleMapModal = () => {
    setMapModal(!openMapModal);
  };

  const toggleAppointmentModal = () => {
    setAppointmentModal(!openAppointmentModal);
  };

  const toggleCompleteModal = () => {
    setCompleteModal(!openCompleteModal);
  };

  const Logout = () => {
    localStorage.removeItem('token');
    replace("/signup");
  };

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
                  <Button w="full" variant="none" onClick={toggleMapModal}>
                    View Location
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    w="full"
                    variant="none"
                    onClick={toggleAppointmentModal}
                  >
                    Schedule Appointment
                  </Button>
                </ListItem>
                <ListItem>
                  <Button w="full" variant="none" onClick={toggleCompleteModal}>
                    End Chat
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
    </>
  );
}

export default ChatComponent;
