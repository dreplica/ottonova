import React, { ChangeEvent } from "react";
import { VStack, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import UserList from "./user-list";

//to persist a chat with a user append the name on url/dreplica

const users = [
  { name: "Ottonova Bot" },
  { name: "Ottonova Bot" },
  { name: "Ottonova Bot" },
  { name: "Ottonova Bot" },
];

function ChatProfile() {
  const [input, setInput] = React.useState("");
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //use debouncer to fetch API
    setInput(event.target.value);
  };

  const users = React.useMemo((): { name: string }[] => {
    //check chache before
    return users;
  }, [input]);

  return (
    <VStack w="full" p="5">
      <Input
        value={input}
        onChange={inputHandler}
        placeholder="Search for user"
        variant='none'
        rounded="sm"
        size="full"
        mb="3"
      />
      <VStack spacing="4" p="5">
        {/* if route path is username = focus user */}
        {users.map((user) => (
          <UserList name={user.name} />
        ))}
      </VStack>
    </VStack>
  );
}

export default ChatProfile;
