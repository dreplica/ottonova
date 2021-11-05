import React, { ChangeEvent } from "react";
import { IoMdOptions, BiDotsHorizontalRounded } from "react-icons/all";
import { Box, VStack, HStack, Text, Input, Icon } from "@chakra-ui/react";
import { ComponentProps } from "../../types/props";
import ChatStart from "../../components/chat/username";
import ChatComponent from "../../components/chat/chat-component";
import ChatList from "../../components/chat/chat-list";
import ChatProfile from "../../components/chat/chat-profile";
    //   color: text-header ->#1b0423

function ChatWidget() {
  const [user, setUser] = React.useState('dreplica');
  const [message, setMessage] = React.useState("");
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    //   window.addEventListener('click', removeElementFromDom)
    //   return ()=>{
    //       window.removeEventListener('click', removeElementFromDom)
    //   }
  },[])


   const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>{
     setMessage(e.target.value)
   }

    const startChat = (event: React.MouseEvent<HTMLButtonElement>):void => {

    }
  //React.useEffect(() => {}) //for socket io
  return (

    <Box>
      <HStack>
        <ChatList />
        <ChatComponent />
        <ChatProfile />
      </HStack>
    </Box>
  );
}

export default ChatWidget;
