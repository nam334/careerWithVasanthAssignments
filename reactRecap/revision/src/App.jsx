import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import MainComponent from "./features/infiniteScroll";
const node = {
  type: "div",
  props: { className: "box" },
  children: [{ type: "button", props: { text: "Click me" } }],
};

function App() {
  return (
    <>
      {/* <ParentComponent /> */}
      {/* <ChatContainer /> */}
      {/* <BoundedContainer /> */}
      {/* <Multistepform /> */}
      {/* <LikeBtutton /> */}
      {/* <ChatContainer /> */}
      {/* <MainContainer node={node} /> */}
      {/* <Autocomplete /> */}
      <MainComponent />
    </>
  );
}

export default App;
