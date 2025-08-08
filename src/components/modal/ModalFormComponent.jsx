import React from "react";
import style from "./ModalFormComponent.module.css";
import MyButton from "../UI/button/MyButton";

const ModalFormComponent = (props) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  console.log(props);
  return (
    <div
      className={style.modalSurf}
      onClick={(event) => {
        event.stopPropagation();
        props.updateModalVisible();
      }}
    >
      <div
        className={style.modal}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h1>Добавление поста</h1>
        <label htmlFor={"title"}>Название поста</label>
        <input
          type="text"
          id={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor={"body"}>Описание поста</label>
        <input
          type="text"
          id={"body"}
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <MyButton
          onClick={(event) => {
            event.stopPropagation();
            props.createNewPost(title, body);
          }}
        >
          Создать
        </MyButton>
      </div>
    </div>
  );
};

export default ModalFormComponent;
