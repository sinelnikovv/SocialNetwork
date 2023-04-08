import React from "react";
import s from "./FormsControls.module.scss";

export const Element = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl}>
      <div className={s.inputContainer}>
        <props.elementType
          className={hasError && s.error}
          {...input}
          {...props}
        />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
