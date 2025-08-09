import React, { useState } from "react";
import {
  FilmContainer,
  BaseButton,
  BaseInput,
  BaseForm,
  SearchForm,
  ModalWindow,
} from "./components/index";
import "./styles/App.module.css";
import { TOKEN } from "./globals";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");

  function getFilms(event) {
    event.preventDefault();
    axios
      .get(
        `https://api.kinopoisk.dev/v1.4/movie/search?query=${query}&limit=20`,
        {
          headers: {
            "X-API-KEY": TOKEN,
          },
        },
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }
  return (
    <div className="App">
      <SearchForm submitHandler={getFilms}>
        <BaseInput
          placeholder="Введите название"
          modelValue={query}
          setValue={(event) => setQuery(event.target.value)}
        ></BaseInput>
        <BaseButton>Найти фильм</BaseButton>
      </SearchForm>
      {data.total ? (
        <FilmContainer data={data}></FilmContainer>
      ) : (
        <h1>Введите запрос и найдите нужный фильм!</h1>
      )}
    </div>
  );
}

export default App;
