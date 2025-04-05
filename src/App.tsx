import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./context/AppContextProvider";
import Header from "./components/Header";

function App() {

  return (
    <ChakraProvider>
      <AppContextProvider>
        <Header />
      </AppContextProvider>
    </ChakraProvider>
  )
}

export default App
