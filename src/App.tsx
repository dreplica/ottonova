import React from "react";
import Router from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import AppState from "./context/app-state";

function App() {
  return (
    <ChakraProvider>
      <AppState>
        <Router />
      </AppState>
    </ChakraProvider>
  );
}

export default App;
