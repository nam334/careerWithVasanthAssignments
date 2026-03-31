import React, { useEffect, useRef, useState } from "react";
import MessageItem from "./components/MessageItem";
import { genericMessage } from "./utils/genericMessage";

const ChatContainer = () => {
  const [messageList, setMessageList] = useState([]);
  const messageBuffer = useRef([]);

  useEffect(() => {
    //this use effect stores messages in buffer

    let timeout = "";

    timeout = setInterval(() => {
      let fetchedMessage = genericMessage();
      messageBuffer.current.push(fetchedMessage);
    }, 2000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  useEffect(() => {
    //this use effect is used to clear the buffer nd store messages in state

    let timer = "";
    timer = setInterval(() => {
      const copymessages = [...messageBuffer.current];
      setMessageList((messageList) => [...messageList, ...copymessages]);
      messageBuffer.current = [];
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="message-list">
      {messageList?.map((messageList) => (
        <MessageItem message={messageList} />
      ))}
    </div>
  );
};

export default ChatContainer;
