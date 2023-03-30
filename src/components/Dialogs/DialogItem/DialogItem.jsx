import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.scss";

const DialogItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={s.dialog_item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
