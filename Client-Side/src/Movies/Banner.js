import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import "./Banner.css";

function Banner({ Data }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrlKey, setTrailerUrlKey] = useState();
  console.log(Data);
  // Math.floor(Math.random() * Data?.length - 1)
  useEffect(() => {
    async function fetchData() {
      setMovies(Data?.[6]?.Movies[Math.floor(Math.random() * 19)]);
      console.log(movies);
    }
    fetchData();
  }, [Data]);
  console.log(movies);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handleBannerClick = () => {
    console.log(movies);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movies?.id}/videos?api_key=de88566cf29ef654e21394ab0906ad7e&language=en-US`
      )
      .then((res) => {
        console.log(res);
        setTrailerUrlKey(
          res.data.results[2]?.key ||
            res.data.results[1]?.key ||
            res.data.results[0]?.key
        );
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movies?.title || movies?.name || movies?.original_name}
          </h1>
          <div className="banner_buttons">
            {trailerUrlKey ? (
              <button
                className="banner_button"
                onClick={() => {
                  setTrailerUrlKey();
                }}
              >
                Close
              </button>
            ) : (
              <button className="banner_button" onClick={handleBannerClick}>
                Play
              </button>
            )}

            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movies?.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
      {trailerUrlKey ? (
        <div className="youtubePlayer">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerUrlKey}`}
            controls={true}
            playing={true}
            width="50vw"
            height="48vh"
          />
          {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opt} />} */}
        </div>
      ) : null}{" "}
    </>
  );
}

export default Banner;
