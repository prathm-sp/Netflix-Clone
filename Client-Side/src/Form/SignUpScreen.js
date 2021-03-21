import React from "react";
import "./SignUpScreen.css";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
function SignUpScreen() {
  console.log("App Started");
  return (
    <div className="loginScreen">
      <Nav />
      <div className="loginScreen_gradient" />
      <div className="loginScreen_body">
        <div className="loginScreen_input">
          <div className="main_register">
            <form className="registerForm">
              <input type="text" placeholder="Enter Email Address" />
              <input type="password" placeholder="Enter Password" />
              <button>Login</button>

              <Link to="/">New Here? Register</Link>
            </form>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default SignUpScreen;
