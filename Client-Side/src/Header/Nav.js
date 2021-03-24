import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
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
  return (
    <div
      className={`nav ${show && "nav_black"}`}
      style={{ position: "absolute" }}
    >
      <Link to="/">
        {" "}
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
          style={{ position: "absolute" }}
        />
      </Link>
      <Link to="login">
        {/* <img
    className="nav_avatar"
    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
    alt="Netflix Logo"
  /> */}
        <button className="loginScreen_button" style={{ position: "absolute" }}>
          Sign In
        </button>
      </Link>
    </div>
  );
}

export default Nav;
