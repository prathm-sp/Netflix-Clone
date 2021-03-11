import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner({ Data }) {
  const [movies, setMovies] = useState([]);
  console.log(Data);
  // Math.floor(Math.random() * Data?.length - 1)
  useEffect(() => {
    async function fetchData() {
      setMovies(
        Data?.[Math.floor(Math.random() * 8)]?.Movies[
          Math.floor(Math.random() * 19)
        ]
      );
      console.log(movies);
    }
    fetchData();
  }, [Data]);
  console.log(movies);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
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
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
