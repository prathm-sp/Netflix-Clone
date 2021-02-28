import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Link } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, URL, isLarge, setMovieDetails }) {
  const [movies, setMovies] = useState([]);
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
    // if (trailerUrl) {
    //   setTrailerUrl("");
    // } else {
    //   movieTrailer(movie?.name || "")
    //     .then(async (url) => {
    //       console.log(url);
    //       var urlParams = await new URLSearchParams(new URL(url).search);
    //       console.log("Yes");
    //       console.log(urlParams);
    //       console.log(urlParams.get("v"));
    //       setTrailerUrl(urlParams.get("v"));
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    axios
      .get(
        "/movie/63174?api_key=de88566cf29ef654e21394ab0906ad7e&language=en-US"
      )
      .then((res) => {
        setMovieDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(trailerUrl);
  console.log("App Started");
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
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opt} />}
    </div>
  );
}

export default Row;
