import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, URL, isLarge }) {
  const [movies, setMovies] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(URL);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [URL]);

  const opt = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie.name);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "dark")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => {
              handleClick(movie);
            }}
            className={`row_poster ${isLarge && "row_poster_large"}`}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opt} />}
    </div>
  );
}

export default Row;
