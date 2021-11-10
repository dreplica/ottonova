import {
  Box,
  Button,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { login, Register } from "../../auth/register";

function RegisterUser() {
  const toast = useToast();
  const { replace, push } = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [type, setType] = React.useState("login");
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    if (token) {
      replace("/");
    }
  }, []);

  const handleSubmit = (
    e: React.FormEventHandler<HTMLDivElement> &
      React.FormEventHandler<HTMLFormElement>
  ) => {
    (e as unknown as React.FormEvent<HTMLFormElement>).preventDefault();
    setLoading(true);
    localStorage.removeItem("token");
    if (type !== "login") {
      Register(username, password)
        .then((res) => {
          setLoading(false);
          replace("/");
        })
        .catch((err) => {
          setLoading(false);
          toast({
            description: err.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        });
      return;
    }
    login(username, password)
      .then((res) => {
        setLoading(false);
        push("/");
     })
      .catch((err) => {
        setLoading(false);
        toast({
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      });
    return;
  };

  const toggleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setType(type === "login" ? "register" : "login");
  };
  return (
    <Box
      w={{ base: "full", sm: "md" }}
      p="5"
      as="form"
      onSubmit={
        handleSubmit as unknown as React.FormEventHandler<HTMLDivElement> &
          React.FormEventHandler<HTMLFormElement>
      }
      height="fit-content"
      position={{ base: "relative", sm: "absolute" }}
      top="0"
      left="0"
      right="0"
      bottom="0"
      m={["", "auto"]}
      border={{ base: "0", sm: "1px solid teal" }}
      borderRadius={{ base: "none", sm: "20px" }}
    >
      <FormControl id="username">
        <FormLabel>Username</FormLabel>
        <Input
          type="username"
          value={username}
          isRequired
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <FormHelperText>Please provide password.</FormHelperText>
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          isRequired
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <FormHelperText>Please provide password.</FormHelperText>
      </FormControl>
      <Button isLoading={loading} type="submit" p="2" my="20px" variant="solid" w="full">
        {type === "login" ? "Login" : "Register"}
      </Button>
      <Box textAlign="center">
        {type === "login" ? (
          <Text>
            No Account?{" "}
            <Link color="teal" onClick={toggleLink}>
              Register
            </Link>
          </Text>
        ) : (
          <Link color="teal" textAlign="center" onClick={toggleLink}>
            Login
          </Link>
        )}
      </Box>
    </Box>
  );
}

export default RegisterUser;
