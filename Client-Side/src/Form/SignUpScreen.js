import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Header/Nav";
import "./SignUpScreen.css";

function SignIn() {
  return (
    <div className="main_singin">
      <div>
        <div className={`nav`} style={{ position: "absolute" }}>
          <Link to="/">
            {" "}
            <img
              className="nav_logo"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="Netflix Logo"
              style={{ position: "absolute" }}
            />
          </Link>
        </div>
        <div className="data1">
          <div className="formLogin">
            <form className="form_fields">
              <h1 style={{ fontSize: "37px" }}>Sign In</h1>
              <input type="text" placeholder="Email or phone number" />
              <input type="text" placeholder="Password" />
              <button>Sign In</button>
            </form>
            <div className="extra">
              <div>
                <input type="checkbox" id="check" />
                <label htmlFor="check" style={{ marginLeft: "6px" }}>
                  {" "}
                  Remember Me
                </label>
              </div>
              <p>Need Help?</p>
            </div>
            <button className="gPlusButton">
              <i class="fa fa-google-plus left-0" aria-hidden="true">
                {" "}
                Sign In With Google
              </i>
            </button>
            <br />
            <div>
              <span className="new">New To Netflix?</span>{" "}
              <Link className="toSignUp" to="/">
                Sign up now.
              </Link>
            </div>
            <br />
            <div className="protect">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
