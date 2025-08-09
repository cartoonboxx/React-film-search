import React from "react";
import style from "./SearchForm.module.css";
import { BaseForm } from "../index";

const SearchForm = (props) => {
  return (
    <div className={style.container}>
      <BaseForm submitHandler={props.submitHandler} children={props.children} />
    </div>
  );
};

export default SearchForm;
