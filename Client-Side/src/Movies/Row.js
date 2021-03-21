import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
import ReactPlayer from "react-player/lazy";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Link, useHistory } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, Data, isLarge }) {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [trailerUrlKey, setTrailerUrlKey] = useState();
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

  const handleClick = (movie) => {
    console.log(movie?.id);
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=de88566cf29ef654e21394ab0906ad7e&language=en-US`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     setTrailerUrlKey(
    //       res.data.results[2]?.key ||
    //         res.data.results[1]?.key ||
    //         res.data.results[0]?.key
    //     );
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
    history.push("/movieDetails");
  };
  console.log(trailerUrlKey);
  return (
    <div className="netflix_row">
      <h1>{title}</h1>
      {/* <Link to="/MovieDetails"> */}
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => {
              handleClick(movie);
            }}
            className={`row_poster ${isLarge && "row_poster_large"}`}
            src={`${baseURL}${isLarge ? movie.poster_path : movie.poster_path}`}
            style={{ cursor: "pointer" }}
            alt={movie.name}
          />
        ))}
      </div>
      {/* </Link> */}
      {trailerUrlKey ? (
        <div className="youtubePlayer">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              style={{
                marginBottom: "11px",
                alignSelf: "flex-end",
                marginRight: "0",
              }}
              className="banner_button"
              onClick={() => {
                setTrailerUrlKey();
              }}
            >
              X
            </button>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailerUrlKey}`}
              controls={true}
              playing={true}
              width="50vw"
              height="48vh"
            />
            {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opt} />} */}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Row;
