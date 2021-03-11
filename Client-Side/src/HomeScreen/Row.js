import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Link } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, Data, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      setMovies(Data);
      return 1;
    }
    fetchData();
  }, [Data]);

  const opt = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {};
  return (
    <div className="netflix_row">
      <h1>{title}</h1>
      <Link to="/MovieDetails">
        <div className="row_posters">
          {movies?.map((movie) => (
            <img
              key={movie.id}
              onClick={() => {
                handleClick(movie);
              }}
              className={`row_poster ${isLarge && "row_poster_large"}`}
              src={`${baseURL}${
                isLarge ? movie.poster_path : movie.poster_path
              }`}
              style={{ cursor: "pointer" }}
              alt={movie.name}
            />
          ))}
        </div>
      </Link>
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opt} />} */}
    </div>
  );
}

export default Row;
