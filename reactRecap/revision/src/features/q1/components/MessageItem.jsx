import React from "react";

const MessageItem = ({ message }) => {
  return (
    <>
      <div className="message">
        <span className="time">{message.timeStamp}</span>
        <span className="text">{message.text}</span>
      </div>
    </>
  );
};

export default MessageItem;
