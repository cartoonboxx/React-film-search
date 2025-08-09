import React, { useEffect, useState } from "react";
import style from "./FilmItem.module.css";
import { ModalWindow } from "../index";

const FilmItem = ({ item }) => {
  const [showModalBool, setShowModal] = useState(false);

  useEffect(() => {
    console.log(showModalBool);
  }, [showModalBool]);
  return (
    <>
      {showModalBool ? (
        <ModalWindow changeFunction={setShowModal} item={item} />
      ) : (
        ""
      )}
      <div className={style.film} onClick={() => setShowModal(true)}>
        <img src={item.poster.url} alt="" />
        <h2>{item.name}</h2>
      </div>
    </>
  );
};

export default FilmItem;
