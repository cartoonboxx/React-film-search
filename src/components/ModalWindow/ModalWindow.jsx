import React from "react";
import style from "./ModalWindow.module.css";

const ModalWindow = ({ changeFunction, item }) => {
  return (
    <div
      className={style.surfaceModal}
      onClick={(event) => {
        event.stopPropagation();
        changeFunction(false);
      }}
    >
      <div className={style.modal}>
        <img src={item.poster.url} />
        <div className={style.info}>
          <h1>{item.name}</h1>
          <p>Описание</p>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
