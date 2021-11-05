import React from "react";
import Router from "./routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  ); 
}

export default App;
