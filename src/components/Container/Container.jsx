import React from "react";
import s from "./Container.module.scss";

const Container = (props) => {
  return <div className={s.main}>{props.children}</div>;
};

export default Container;
