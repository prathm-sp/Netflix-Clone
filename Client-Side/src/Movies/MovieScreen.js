import React, { useState, useEffect } from "react";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "../Header/Nav";
import axios from "../axios";
import { Link } from "react-router-dom";

function HomeScreen(props) {
  const [show, handleShow] = useState();
  console.log("App Started");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        return null;
      });
    };
  }, []);

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
      <div
        className={`nav ${show && "nav_black"}`}
        style={
          props?.position
            ? { position: `${props?.position}` }
            : { position: "fixed" }
        }
      >
        <Link to="/">
          {" "}
          <img
            className="nav_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix Logo"
          />
        </Link>
        <Link to="/login">
          {/* <img
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Netflix Logo"
        /> */}
          <button className="loginScreen_button">Sign In</button>
        </Link>
      </div>
      <Banner Data={movies} />
      {movies?.map?.((item) => (
        <Row title={item?.CategoryName} Data={item?.Movies} isLarge />
      ))}
    </div>
  );
}

export default HomeScreen;
