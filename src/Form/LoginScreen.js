import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import "./LoginScreen.css";
function Login() {
  return (
    <div className="loginScreen">
      <Nav />
      <div className="loginScreen_gradient" />
      <div className="loginScreen_body">
        <h1>Unlimited films,TV programmers and more.</h1>
        <h2>Watch anywhere. Cancel at any time</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="loginScreen_input">
          <form>
            <input type="email" placeholder="Email Address" />
            <button className="loginScreen_getStarted">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
