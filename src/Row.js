import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, URL, isLarge }) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(URL);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [URL]);
  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLarge && "row_poster_large"}`}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
