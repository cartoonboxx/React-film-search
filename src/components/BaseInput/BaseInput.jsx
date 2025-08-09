import React from "react";
import style from "./BaseInput.module.css";

const BaseInput = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.modelValue}
      onInput={props.setValue}
      className={style.input}
    />
  );
};

export default BaseInput;
