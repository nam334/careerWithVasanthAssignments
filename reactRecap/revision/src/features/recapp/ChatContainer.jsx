import React, { useEffect, useRef, useState } from "react";
import { generateMessage } from "./utils/genericMessage";
import MessageItem from "./components/MessageItem";

const ChatContainer = () => {
  const messageRef = useRef([]);
  const bottomRef = useRef();
  const [allMessages, setAllMessages] = useState([]);
  useEffect(() => {
    let timer = "";
    timer = setInterval(() => {
      messageRef.current.push(generateMessage());
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    let timeout = "";
    timeout = setInterval(() => {
      if (messageRef.current.length > 0) {
        const copyMessages = [...messageRef.current];
        setAllMessages((allMessages) => [...allMessages, ...copyMessages]);
        messageRef.current = [];
      }
    }, 2000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages]);

  return (
    <div
      style={{
        height: "200px",
        width: "500px",
        border: "1px solid black",
        overflowY: "scroll",
      }}
    >
      {allMessages?.map((allMessage) => (
        <MessageItem msg={allMessage} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatContainer;
