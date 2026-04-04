import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import MainContainer from "./features/recapp/MainContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ParentComponent /> */}
      {/* <ChatContainer /> */}
      {/* <BoundedContainer /> */}
      {/* <Multistepform /> */}
      {/* <LikeBtutton /> */}
      {/* <ChatContainer /> */}
      <MainContainer />
    </>
  );
}

export default App;
