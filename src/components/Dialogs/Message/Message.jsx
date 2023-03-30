import React from "react";
import s from "./Message.module.scss";

const Message = (props) => {
  return <div className={s.messages_item}>{props.message}</div>;
};

export default Message;
