import React from "react";
import { FilmItem } from "../index";
import style from "./FilmContainer.module.css";

const FilmContainer = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.films}>
        {data.docs.map((item) => {
          return <FilmItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default FilmContainer;
