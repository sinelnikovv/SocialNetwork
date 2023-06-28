import React, { useState } from "react";
import {
  useGetAllDialogsQuery,
  useGetFriendDialogQuery,
  useGetNewMessagesQuery,
  useSendMessageMutation,
  useStartChatingRefreshMutation,
} from "../../api/apiSlice";

const Dialogs = () => {
  const getAllDialogs = useGetAllDialogsQuery();
  const getNewMessages = useGetNewMessagesQuery();

  

  const [messageText, setMessageText] = useState();
  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  const userId = 29400;// hardcoded id

  const [send] = useSendMessageMutation();
  const sendHandler=()=>{
    let body = messageText
    send(userId, body);
  }

  // let dialogsElements = state.dialogs.map((d) => {
  //   return <DialogItem name={d.name} key={d.id} id={d.id} />;
  // });

  // let messagesElements = state.messages.map((m) => {
  //   return <Message key={m.id} message={m.message} />;
  // });

  // const onSubmit = (values) => {
  //   props.sendMessage(values.newMessage);
  // };

  return (
    <>
      <div>
        <div>message</div>

        <div><input type="text" value={messageText} onChange={handleChange} /></div>

        <div><button onClick={sendHandler}>send</button></div>
        
        <div></div>
      </div>



    </>

    // <div >
    //   <div >{dialogsElements}</div>
    //   <div >
    //     {messagesElements}
    //     <Input onSubmit={onSubmit} />
    //   </div>
    // </div>
  );
};
export default Dialogs;

//dialogitem

// import React from "react";
// import { NavLink } from "react-router-dom";
// import s from "./DialogItem.module.scss";

// const DialogItem = (props) => {
//   let path = "/messages/" + props.id;
//   return (
//     <div className={s.dialog_item}>
//       <NavLink to={path}>{props.name}</NavLink>
//     </div>
//   );
// };

// export default DialogItem;

//message

// import React from "react";
// import s from "./Message.module.scss";

// const Message = (props) => {
//   return <div className={s.messages_item}>{props.message}</div>;
// };

// export default Message;
