import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ParentComponent from "./features/q4";
import ChatContainer from "./features/q1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ParentComponent /> */}
      <ChatContainer />
    </>
  );
}

export default App;
