import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Header from "./components/Header";
import BrowserWindow from "./components/BrowserWindow";
import ToolTray from "./components/ToolTray";
import { useState } from "react";
import { ColorModeProvider } from "./components/ui/color-mode";

export default function App() {
  const [selectedFramework, setSelectedFramework] = useState("chakra");

  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <Header onFrameworkChange={setSelectedFramework} />
        <BrowserWindow framework={selectedFramework} />
        <ToolTray />
      </ColorModeProvider>
    </ChakraProvider>
  )
};