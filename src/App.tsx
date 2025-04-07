import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Header from "./components/Header";
import BrowserWindow from "./components/BrowserWindow";
import ToolTray from "./components/ToolTray";
import { useState } from "react";

export default function App() {
  const [selectedFramework, setSelectedFramework] = useState("chakra");

  return (
    <ChakraProvider value={defaultSystem}>
      <Header onFrameworkChange={setSelectedFramework} />
      <BrowserWindow framework={selectedFramework} />
      <ToolTray />
    </ChakraProvider>
  )
};