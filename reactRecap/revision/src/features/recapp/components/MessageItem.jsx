import React from "react";

const MessageItem = React.memo(({ msg }) => {
  return <div>{msg?.text}</div>;
});

export default MessageItem;
