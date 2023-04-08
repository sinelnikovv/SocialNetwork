import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.scss";
import Message from "./Message/Message";
import MessageForm from "../forms/MessagewForm";

const Dialogs = (props) => {
  let state = props.dialogPage;
  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message key={m.id} message={m.message} />;
  });

  const onSubmit = (values) => {
    props.sendMessage(values.newMessage);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.dialog}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <MessageForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default Dialogs;
