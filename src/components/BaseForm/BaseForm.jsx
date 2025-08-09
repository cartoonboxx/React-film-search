import React from "react";
import style from "./BaseForm.module.css";

const BaseForm = (props) => {
  return (
    <form
      className={style.form}
      children={props.children}
      onSubmit={props.submitHandler}
    ></form>
  );
};

export default BaseForm;
