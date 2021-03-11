import React, { useState, useEffect } from "react";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "../Navbar/Nav";
import axios from "../axios";

function HomeScreen(props) {
  const [movies, setMovies] = useState();
  useEffect(() => {
    axios
      .get("/Movie/getHomePageMovies")
      .then((res) => {
        console.log(res);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div style={{ background: "#111" }}>
      <Nav />
      <Banner Data={movies} />
      {movies?.map?.((item) => (
        <Row title={item?.CategoryName} Data={item?.Movies} isLarge />
      ))}
    </div>
  );
}

export default HomeScreen;
