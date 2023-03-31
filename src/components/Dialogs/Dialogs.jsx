import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.scss";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogPage;
  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message key={m.id} message={m.message} />;
  });

  let addMessage = () => {
    props.sendMessage();
  };

  let onChangeMessageHandler = (e) => {
    let message = e.target.value;
    props.updateNewMessage(message);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.wrapper}>
      <div className={s.dialog}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          onChange={onChangeMessageHandler}
          value={state.newMessageText}
          name=""
          id=""
          placeholder="Enter your message"
          cols="30"
          rows="5"
        ></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};
export default Dialogs;
