import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ParentComponent from "./features/q4";
import ChatContainer from "./features/q1";
import BoundedContainer from "./features/q2";
import Multistepform from "./features/q3";
import LikeBtutton from "./features/q3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ParentComponent /> */}
      {/* <ChatContainer /> */}
      {/* <BoundedContainer /> */}
      {/* <Multistepform /> */}
      <LikeBtutton />
    </>
  );
}

export default App;
