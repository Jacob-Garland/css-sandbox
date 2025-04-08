import Header from "./components/Header";
import BrowserWindow from "./components/BrowserWindow";
import ToolTray from "./components/ToolTray";
import { ColorModeProvider } from "./components/ui/color-mode";

export default function App() {
  return (
    <ColorModeProvider>
      <Header />
      <BrowserWindow />
      <ToolTray />
    </ColorModeProvider>
  )
};